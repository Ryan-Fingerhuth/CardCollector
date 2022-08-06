import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISearchDto, ICardDto } from '@core/models';
import { CardService } from '@core/services';
import { ToastService } from '@core/services/toast.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})

export class SearchCardComponent implements OnInit {
  public searchForm: FormGroup;
  public model: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private sanitizer: DomSanitizer,
    private toastService: ToastService) { }

  busy: boolean = false;
  results: ICardDto[] = [];

  ngOnInit() {
    this.searchForm = this.fb.group({
      cardName: ['',  [Validators.required]]
    });
  }
  
  typeAheadSearch = (text$: Observable<any>) => {
    return text$.pipe(      
        debounceTime(500), 
        distinctUntilChanged(),
        switchMap( (term) => term.length < 3 ? [] : this.cardService.cardLookUp(term) ),
        catchError(error => { console.log('error')
                   throw new Error(error)})    
    );                 
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  public getCardImageUrl(imageGuid: string, thumbnail: boolean): string {
    if (imageGuid == null){
      return this.cardService.getImage('62928fea-3303-4e3e-a997-93e3ea582e3e', thumbnail);
    }
    return this.cardService.getImage(imageGuid, thumbnail);
  }

  get searchResults() {
    return this.results;
  }

  public search(): void {
    //this.busy = true;
    if (this.searchForm.invalid) {
      return;
    }
    const request: ISearchDto = {
      ...this.searchForm.getRawValue()
    } 
    
    this.cardService.searchCard(request).subscribe(x => {
      if (x.isSuccess) {
        this.busy = true;
        this.toastService.showSuccessToast('Card(s) searched.');
        this.results = x.result;
      } else {
        this.toastService.showDangerToast('Failed to find card(s).');
      }
    });
  }

  resultFormatListValue(value: any) {            
    return value;
  } 

  inputFormatListValue(value: any)   {
    return value;
  }

  // public cardLookUpTest(): void {
  //   const request: string = { ...this.searchForm.value }
  //   this.cardService.cardLookUp(request).subscribe(x => {
  //     if (x.isSuccess){
  //       console.log(x.result + "");
  //     }
  //   });
  // }

}
