import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ICardDto, ISet, SCREEN_SIZE } from "@core/models";
import { CardService, ToastService } from "@core/services";
import { ResizeService } from "@core/services/resize.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BooleanDialogComponent } from "@shared/components/boolean-dialog/boolean-dialog.component";
import { SearchCardModalComponent } from "../search-card/search-card-modal/search-card-modal.component";
import { createCardDto } from "@core/functions/card.functions";

@Component({
  selector: "app-card-set",
  templateUrl: "./card-set.component.html",
  styleUrls: ["./card-set.component.css"],
})
export class CardSetComponent implements OnInit {
  public setId: number;
  public set: ISet = {
    id: 0,
    setDescription: "",
    cards: [],
    defaultSet: false,
    binderLayout: "",
  };

  public setFormGroup = new FormGroup({
    setDescription: new FormControl(""),
  });

  public binderFormGroup = new FormGroup({
    binderLayoutSize: new FormControl(""),
  });

  public setDescription: string = "";
  public changeSetName: boolean = false;
  public editMode: boolean = true;

  public entireCardList: ICardDto[] = [];
  public carouselCardList: ICardDto[];
  public cardRows: ICardDto[][];

  public carouselListIds: string[] = [];
  public binderLayoutIds: string[] = [];

  private size: SCREEN_SIZE;
  private cardsPerRow: number = 7;

  public currentPageNumber: number = 1;
  public totalPageNumber: number = 1;
  public numberOfCardsPerPage: number;

  public entireBinderCards: ICardDto[] = [];
  public currentBinderPageCards: ICardDto[] = [];
  public binderLayoutWidth: string = "40rem";

  public responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 6,
      numScroll: 1,
    },
    {
      breakpoint: "1200px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "992px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    public cardService: CardService,
    private readonly modalService: NgbModal,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
    private readonly resizeService: ResizeService,
    private readonly toasterService: ToastService
  ) {
    this.resizeService.onResize$.subscribe((x) => {
      this.size = x;
      if (this.size === SCREEN_SIZE.XS) {
        this.cardsPerRow = 2;
      } else if (this.size === SCREEN_SIZE.SM) {
        this.cardsPerRow = 3;
      } else if (this.size === SCREEN_SIZE.MD) {
        this.cardsPerRow = 4;
      } else if (this.size === SCREEN_SIZE.LG) {
        this.cardsPerRow = 5;
      } else if (this.size === SCREEN_SIZE.XL) {
        this.cardsPerRow = 6;
      } else if (this.size === SCREEN_SIZE.XXL) {
        this.cardsPerRow = 7;
      }
      this.assembleCardRows();
    });
  }

  ngOnInit(): void {
    if (!this.setId) {
      this.activeRoute.paramMap.subscribe((params) => {
        this.setId = +params.get("id");
      });
    }

    this.setFormGroup = this.formBuilder.group({
      setDescription: ["", [Validators.required]],
    });

    this.setFormGroup.controls["setDescription"].valueChanges.subscribe(
      (value) => {
        this.setDescription = value?.trim() ?? "";
      }
    );

    this.binderFormGroup = this.formBuilder.group({
      binderLayoutSize: ["40rem", [Validators.required]],
    });

    this.binderFormGroup.controls["binderLayoutSize"].valueChanges.subscribe(
      (value) => {
        if (this.binderLayoutWidth !== value) {
          this.binderLayoutWidth = value;
          this.setNumberOfCardsPerPage();
          this.setTotalPageNumber();
          this.updateCurrentBinderPageCards();
        }
      }
    );

    if (this.setId > 0) {
      this.cardService.getSet(this.setId).subscribe((result) => {
        if (result.isSuccess) {
          this.set = result.result;
          this.editMode = !this.set.defaultSet;

          this.set.cards.forEach((item, index) => (item.index = index));

          this.entireCardList = this.set.cards;
          this.carouselCardList = this.set.cards;
          //this.entireBinderCards = this.set.cards; // TODO grab "binder" cards

          this.entireBinderCards = [];
          // placing 108 Cards into entireBinderCards
          for (let i = 0; i < 108; i++) {
            // const emptyCard = createCardDto({});
            const emptyCard = createCardDto({ uniqueId: this.getUniqueId(4) });
            this.entireBinderCards.push(emptyCard);
          }

          this.setNumberOfCardsPerPage();
          this.setTotalPageNumber();
          this.updateCurrentBinderPageCards();

          this.setFormGroup.patchValue({
            setDescription: this.set.setDescription,
          });
          this.assembleCardRows();

          // for (let i = 0; i < this.cardRows?.length ?? 0; i++) {
          //   this.carouselListIds.push(`carousel-list-${i}`);
          // }
          this.carouselListIds.push("carousel-list-0");
        }
      });
    } else {
      this.changeSetName = true;
    }
  }

  public addPage(): void {
    if (this.totalPageNumber === 20) {
      return;
    }
    this.totalPageNumber++;
    // add (NumberOfCardsPerPage) number of elements to entireBinderCards array
  }

  public removePage(): void {
    if (this.totalPageNumber <= 1) {
      return;
    }
    this.totalPageNumber--;
    if (this.currentPageNumber > this.totalPageNumber) {
      this.currentPageNumber = this.totalPageNumber;
    }
    // remove (NumberOfCardsPerPage) number of elements from entireBinderCards array
  }

  public goToNextPage(): void {
    if (this.currentPageNumber >= this.totalPageNumber) {
      return;
    }
    this.currentPageNumber++;
    this.updateCurrentBinderPageCards();
  }

  public goToPreviousPage(): void {
    if (this.currentPageNumber === 1) {
      return;
    }
    this.currentPageNumber--;
    this.updateCurrentBinderPageCards();
  }

  public goToThisPage(pageNumber: number): void {
    this.currentPageNumber = pageNumber;
    this.updateCurrentBinderPageCards();
  }

  private updateCurrentBinderPageCards(): void {
    // Example = pageNumber 1 * 9 cards per page = 9
    const startingIndex =
      (this.currentPageNumber - 1) * this.numberOfCardsPerPage;

    const endingIndex = startingIndex + this.numberOfCardsPerPage;

    const cardsOnPage = this.entireBinderCards.slice(
      startingIndex,
      endingIndex
    );

    this.currentBinderPageCards = cardsOnPage;

    // this.binderLayoutIds = [];
    // for (let i = 0; i < numberOfCardsPerPage; i++) {
    //   // const emptyCard = createCardDto({});
    //   const emptyCard = createCardDto({ uniqueId: this.getUniqueId(4) });
    //   this.currentBinderPageCards.push(emptyCard);
    //   this.binderLayoutIds.push(`cdk-drop-list-${i + 1}`);
    // }
  }

  private setNumberOfCardsPerPage(): void {
    // 30rem = 2x2
    // 40rem = 3x3
    // 50rem = 3x4
    switch (this.binderLayoutWidth) {
      case "30rem": // 2x2
        this.numberOfCardsPerPage = 4;
        break;
      case "40rem": // 3x3
        this.numberOfCardsPerPage = 9;
        break;
      case "50rem": // 3x4
        this.numberOfCardsPerPage = 12;
        break;
      default:
        this.numberOfCardsPerPage = 9;
        break;
    }
  }

  private setTotalPageNumber(): void {
    const totalPages =
      this.entireBinderCards.length / this.numberOfCardsPerPage;
    this.totalPageNumber = totalPages;
  }

  private getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1);
      stringArr.push(S4);
    }
    return stringArr.join("-");
  }

  public grabCard(rowNumber: number, columnNumber: number): ICardDto {
    const card = this.entireCardList.find(
      (x) =>
        x.pageNumber == this.currentPageNumber &&
        x.rowNumber == rowNumber &&
        x.columnNumber == columnNumber
    );
    const emptyCard = createCardDto({});
    return card ?? emptyCard;
  }

  public saveSetInformation(): void {
    if (this.setFormGroup.invalid) {
      this.toasterService.showDangerToast("Invalid Form");
    }

    this.dissembleCardRows();

    const setRequest: ISet = {
      ...this.set,
      setDescription: this.setFormGroup.controls["setDescription"].value,
      cards: this.entireCardList,
    };

    this.cardService.saveCardSet(setRequest).subscribe((result) => {
      if (result.isSuccess) {
        if (this.setId === 0) {
          this.router.navigate([`set/${result.result.id}`]);
        }
        this.setId = result.result.id;
        this.set.id = result.result.id;
        this.ngOnInit();
        this.toasterService.showSuccessToast("Set has been saved!");
      }
    });
  }

  public getSetDescription(): string {
    return this.setFormGroup?.controls["setDescription"]?.value ?? "";
  }

  public onChangeSetName(): void {
    this.changeSetName = !this.changeSetName;
  }

  public onObtainedChanged(card: ICardDto, event: any) {
    const cardIndex = this.entireCardList.findIndex((x) => x.id === card.id);
    if (cardIndex > -1) {
      this.entireCardList[cardIndex].cardObtained = event.target.checked;
    }
  }

  private assembleCardRows(): void {
    this.cardRows = [];
    let counter = 0;
    let cardRow = [];
    this.entireCardList.forEach((x) => {
      // once we have a certain number of cards per row, start a new row array.
      if (counter === this.cardsPerRow) {
        this.cardRows.push(cardRow);
        cardRow = [];
        counter = 0;
      }
      cardRow.push(x);
      counter++;
    });

    this.cardRows.push(cardRow);
  }

  private dissembleCardRows(): void {
    const allCards = [];
    if (!this.cardRows) {
      return;
    }

    this.cardRows.forEach((row) => {
      row.forEach((card) => {
        allCards.push(card);
      });
    });
    this.entireCardList = allCards;
  }

  binderDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer.id.startsWith("carousel")) {
      const carouselCard = this.carouselCardList[event.item.data.index];

      this.currentBinderPageCards[event.container.data.index] = carouselCard;
    } else {
      // This swaps the cards positionsin the list of 'currentBinderPageCards'
      this.currentBinderPageCards[event.previousContainer.data.index] =
        event.container.data.item;
      this.currentBinderPageCards[event.container.data.index] =
        event.previousContainer.data.item;
    }
  }

  public drop(event: CdkDragDrop<ICardDto[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.dissembleCardRows();
      this.assembleCardRows();
    }
  }

  public onAddCards(): void {
    const modal = this.modalService.open(SearchCardModalComponent, {
      size: "lg",
      windowClass: "modal-xxl",
    });
    modal.componentInstance.isSelectable = true;
    modal.result.then((result) => {
      if (result && result.length > 0) {
        this.entireCardList.unshift(...result);
        this.assembleCardRows();
        this.toasterService.showSuccessToast("Cards Added!");
      }
    });
  }

  public onDeleteCard(cardRow: ICardDto[], card: ICardDto): void {
    const modal = this.modalService.open(BooleanDialogComponent);
    modal.componentInstance.configureFor("Danger");
    modal.componentInstance.properties.header = "Remove Card";
    modal.componentInstance.properties.message =
      "Are you sure you want to remove this card?";
    modal.componentInstance.properties.okText = "Remove";
    modal.result.then((outcome) => {
      if (outcome) {
        const indx = cardRow.findIndex((x) => x.id === card.id);
        cardRow.splice(indx, 1);
        this.dissembleCardRows();
        this.assembleCardRows();
      }
    });
  }
}
