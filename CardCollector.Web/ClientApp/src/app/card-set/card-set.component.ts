import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ICardDto, ICardSet } from '@core/models';

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {
  public cardSet: ICardSet;
  public firstRowCards: ICardDto[];
  public secondRowCards: ICardDto[];

  constructor() { }

  ngOnInit(): void {
    let cards: ICardDto[] = [];
    // [
    //   {
    //     id: 0,
    //     cardName: 'CardOne',
    //     cardDescription: 'CardOne',
    //     cardYear: 0,
    //     originalSet: '',
    //     fullImageGuid: '',
    //     thumbnailImageGuid: '',
    //     cardImage: [],
    //     cardTags: [],
    //     tags: [],
    //     rowNumber: 0,
    //     orderNumber: 0,
    //   },
    //   {
    //     id: 0,
    //     cardName: 'CardTwo',
    //     cardDescription: 'CardTwo',
    //     cardYear: 0,
    //     originalSet: '',
    //     fullImageGuid: '',
    //     thumbnailImageGuid: '',
    //     cardImage: [],
    //     cardTags: [],
    //     tags: [],
    //     rowNumber: 0,
    //     orderNumber: 1,
    //   },
    //   {
    //     id: 0,
    //     cardName: 'CardThree',
    //     cardDescription: 'CardThree',
    //     cardYear: 0,
    //     originalSet: '',
    //     fullImageGuid: '',
    //     thumbnailImageGuid: '',
    //     cardImage: [],
    //     cardTags: [],
    //     tags: [],
    //     rowNumber: 0,
    //     orderNumber: 2,
    //   },
    //   {
    //     id: 0,
    //     cardName: 'CardFour',
    //     cardDescription: 'CardFour',
    //     cardYear: 0,
    //     originalSet: '',
    //     fullImageGuid: '',
    //     thumbnailImageGuid: '',
    //     cardImage: [],
    //     cardTags: [],
    //     tags: [],
    //     rowNumber: 1,
    //     orderNumber: 0,
    //   },
    //   {
    //     id: 0,
    //     cardName: 'CardFive',
    //     cardDescription: 'CardFive',
    //     cardYear: 0,
    //     originalSet: '',
    //     fullImageGuid: '',
    //     thumbnailImageGuid: '',
    //     cardImage: [],
    //     cardTags: [],
    //     tags: [],
    //     rowNumber: 1,
    //     orderNumber: 1,
    //   },
    //   {
    //     id: 0,
    //     cardName: 'CardSix',
    //     cardDescription: 'CardSix',
    //     cardYear: 0,
    //     originalSet: '',
    //     fullImageGuid: '',
    //     thumbnailImageGuid: '',
    //     cardImage: [],
    //     cardTags: [],
    //     tags: [],
    //     rowNumber: 1,
    //     orderNumber: 2,
    //   }
    // ];

    this.cardSet = {
      id: 0,
      numberOfRows: 3,
      numberOfColumns: 3,
      cards: cards
    };

    this.firstRowCards = this.cardSet.cards.filter(x => x.rowNumber === 0);
    this.secondRowCards = this.cardSet.cards.filter(x => x.rowNumber === 1);
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
    }
  }

}
