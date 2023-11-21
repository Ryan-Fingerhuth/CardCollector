import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit, ViewChild } from "@angular/core";
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
import { NgbCarousel, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BooleanDialogComponent } from "@shared/components/boolean-dialog/boolean-dialog.component";
import { SearchCardModalComponent } from "../search-card/search-card-modal/search-card-modal.component";

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
  };

  public setFormGroup = new FormGroup({
    setDescription: new FormControl(""),
  });

  public changeSetName: boolean = false;
  public editMode: boolean = true;

  public entireCardList: ICardDto[] = [];
  public cardRows: ICardDto[][];

  private size: SCREEN_SIZE;
  private cardsPerRow: number = 7;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  public onPrevSlide(): void {
    this.carousel.prev();
  }

  public onNextSlide(): void {
    this.carousel.next();
  }

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

    if (this.setId > 0) {
      this.cardService.getSet(this.setId).subscribe((result) => {
        if (result.isSuccess) {
          this.set = result.result;
          this.editMode = !this.set.defaultSet;
          this.entireCardList = this.set.cards;
          this.setFormGroup.patchValue({
            setDescription: this.set.setDescription,
          });
          this.assembleCardRows();
        }
      });
    } else {
      this.changeSetName = true;
    }
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
}
