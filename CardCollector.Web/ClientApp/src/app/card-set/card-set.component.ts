import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICardDto, ISet, SCREEN_SIZE } from '@core/models';
import { CardService, ToastService } from '@core/services';
import { ResizeService } from '@core/services/resize.service';

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {
  public setId: number;
  public set: ISet = {
    id: 0,
    setDescription: '',
    cards: []
  };

  public setFormGroup = new FormGroup({
    setDescription: new FormControl('')
  });

  public changeSetName: boolean = false;
  public editMode: boolean = true;

  public entireCardList: ICardDto[];
  public cardRows: ICardDto[][];

  size: SCREEN_SIZE;
  cardsPerRow: number = 7;

  constructor(
    public cardService: CardService,
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private resizeService: ResizeService,
    private readonly toasterService: ToastService) {
      this.resizeService.onResize$.subscribe(x => {
        this.size = x;
        if (this.size == SCREEN_SIZE.XS) {
          this.cardsPerRow = 2;
        } else if (this.size == SCREEN_SIZE.SM) {
          this.cardsPerRow = 3;
        } else if (this.size == SCREEN_SIZE.MD) {
          this.cardsPerRow = 4;
        } else if (this.size == SCREEN_SIZE.LG) {
          this.cardsPerRow = 5;
        } else if (this.size == SCREEN_SIZE.XL) {
          this.cardsPerRow = 6;
        } else if (this.size == SCREEN_SIZE.XXL) {
          this.cardsPerRow = 7;
        }
        this.assembleCardRows();
      });
  }

  ngOnInit(): void {
    if (!this.setId) {
      this.route.paramMap.subscribe(params => {
        this.setId = +params.get('id');
      });
    }

    this.cardService.getSet(this.setId).subscribe(result => {
      if (result.isSuccess) {
        this.set = result.result;
        this.entireCardList = this.set.cards;

        this.setFormGroup = this.formBuilder.group({
          setDescription: [this.set.setDescription, [Validators.required]]
        });

        this.assembleCardRows();
      }
    });
  }

  public saveSetInformation(): void {
    if (this.setFormGroup.invalid) {
      this.toasterService.showDangerToast('Invalid Form');
    }

    this.dissembleCardRows();

    const setRequest: ISet = {
      ...this.set,
      setDescription: this.setFormGroup.controls['setDescription'].value,
      cards: this.entireCardList
    };

    this.cardService.saveCardSet(setRequest).subscribe(result => {
      if (result.isSuccess) {
        this.set.id = result.result.id;
        this.toasterService.showSuccessToast('Set has been saved!');
      }
    });
  }

  public getSetDescription(): string {
    return this.setFormGroup?.controls['setDescription']?.value ?? '';
  }

  public onChangeSetName(): void {
    this.changeSetName = !this.changeSetName;
  }

  private assembleCardRows(): void {
    this.cardRows = [];
    let counter = 0;
    let cardRow = [];
    this.entireCardList.forEach(x => {
      if (counter == this.cardsPerRow) {
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
    let allCards = [];
    this.cardRows.forEach(row => {
      row.forEach(card => {
        allCards.push(card);
      });
    });
    this.entireCardList = allCards;
  }

  public drop(event: CdkDragDrop<ICardDto[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.dissembleCardRows();
      this.assembleCardRows();
    }
  }

}
