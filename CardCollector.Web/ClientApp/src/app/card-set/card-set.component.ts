import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ICardDto, ISet } from '@core/models';
import { CardService } from '@core/services';

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {
  public set: ISet;
  public firstRowCards: ICardDto[];
  public secondRowCards: ICardDto[];

  constructor(
    public cardService: CardService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let cards: ICardDto[] = [];

    this.set = {
      id: 0,
      setDescription: '',
      numberOfRows: 3,
      numberOfColumns: 3,
      cards: cards
    };

    // todo implement routing, grab actual set Id.
    this.cardService.getSet(7).subscribe(result => {
      if (result.isSuccess) {
        this.set.id = result.result.id,
        this.set.setDescription = result.result.setDescription;
        this.set.cards = result.result.cards;
      }
    });

    this.firstRowCards = this.set.cards.filter(x => x.rowNumber === 0);
    this.secondRowCards = this.set.cards.filter(x => x.rowNumber === 1);
  }

  // not used currently. might not need it.
  createImageFromBlob(card: ICardDto, image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      card.thumbnail = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
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
