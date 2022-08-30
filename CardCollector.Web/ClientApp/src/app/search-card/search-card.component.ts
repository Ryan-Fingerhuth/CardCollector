import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISearchDto, ICardDto } from '@core/models';
import { CardService } from '@core/services';
import { ToastService } from '@core/services/toast.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})

export class SearchCardComponent implements OnInit {
  @Input() isSelectable: boolean;
  public searchForm: FormGroup;
  public model: Observable<any>;
  public results: ICardDto[] = [];
  public selectedCards: ICardDto[] = [];

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      cardName: ['', [Validators.required]]
    });
  }

  typeAheadSearch = (text$: Observable<any>) => {
    return text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => term.length < 1 ? [] : this.cardService.cardLookUp(term)),
      catchError(error => {
        console.log('error')
        throw new Error(error)
      })
    );
  }

  public getCardImageUrl(imageGuid: string, thumbnail: boolean): string {
    return this.cardService.getImage(imageGuid, thumbnail);
  }

  get searchResults() {
    return this.results;
  }

  public search(): void {
    if (this.searchForm.invalid) {
      return;
    }
    const request: ISearchDto = {
      ...this.searchForm.getRawValue()
    }

    this.cardService.searchCard(request).subscribe(x => {
      if (x.isSuccess) {
        this.toastService.showInfoToast('Card(s) found.');
        this.results = x.result;
      } else {
        this.toastService.showDangerToast('Failed to find card(s).');
      }
    });
  }

  public onSelectCard(card: ICardDto): void {
    if (!this.isSelectable) {
      return;
    }

    if (!card) {
      return;
    }

    if (this.selectedCards.includes(card)) {
      card.selected = false;
      const index = this.selectedCards.findIndex(x => x.id === card.id);
      this.selectedCards.splice(index, 1);
    } else {
      card.selected = true;
      this.selectedCards.push(card);
    }
  }

  public getSelectedCards(): ICardDto[] {
    return this.selectedCards;
  }
}
