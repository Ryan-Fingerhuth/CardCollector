import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { ICardDto, ISet } from '@core/models';
import { CardService } from '@core/services';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {
  public setId: number;
  public set: ISet;
  public firstRowCards: ICardDto[];
  public secondRowCards: ICardDto[];
  
  public editMode: boolean = false;

  public entireCardList: ICardDto[];

  public cardRows: ICardDto[][];

  public option = "35rem";

  constructor(public cardService: CardService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.setId) {
      this.route.paramMap.subscribe(params => {
        this.setId = +params.get('id');
      });
    }

    let cards: ICardDto[] = [];

    this.set = {
      id: 0,
      setDescription: '',
      numberOfRows: 3,
      numberOfColumns: 3,
      cards: cards
    };

    // todo implement routing, grab actual set Id.
    this.cardService.getSet(this.setId).subscribe(result => {
      if (result.isSuccess) {
        this.set = result.result;
        //this.cardList = this.set.cards;
        this.entireCardList = this.set.cards;

        this.assembleCardRows();
      }
    });
  }

  private assembleCardRows(): void {
    this.cardRows = [];
    let counter = 0;
    let cardRow = [];
    this.entireCardList.forEach(x => {
      if (counter == 5) {
        this.cardRows.push(cardRow);
        cardRow = [];
        counter = 0;
      }
      cardRow.push(x);
      counter++;
    });

    if (this.set.cards.length % 5 != 0) {
      this.cardRows.push(cardRow);
    }
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

  // not used currently. might not need it.
  // createImageFromBlob(card: ICardDto, image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     card.thumbnail = reader.result;
  //   }, false);

  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }



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
      //console.log(this.cardRows);
      // transferArrayItem(
      //   event.container.data,
      //   event.previousContainer.data,
      //   event.currentIndex + 1,
      //   event.previousIndex
      // );
    }
  }

}
