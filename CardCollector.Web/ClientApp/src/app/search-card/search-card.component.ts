import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISearchDto, ICardDto } from '@core/models';
import { CardService } from '@core/services';
import { ToastService } from '@core/services/toast.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';

const testVals: string[] = ["test1", "test2", "test3"];

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

  public cardLookUpTest(): void {
    const request: string = { ...this.searchForm.value }
    this.cardService.cardLookUp(request).subscribe(x => {
      if (x.isSuccess){
        console.log(x.result + "");
      }
    });
  }

  get testValues() { 
    //return [];
    this.busy = true; 
    return testVals; 
  }

  get searchResults() {
    return this.results;
  }

  public search(): void {
    this.busy = true;
    if (this.searchForm.invalid) {
      return;
    }
    const request: ISearchDto = {
      ...this.searchForm.getRawValue()
    } 
    
    //const request: string = { ...this.searchForm.value }
    
    var res = this.cardService.searchCard(request);
    res.subscribe(x => {
      if (x.isSuccess) {
        // this.busy = true;
        this.toastService.showSuccessToast('Card(s) searched.');
        this.results = x.result;
        console.log(x.result + "");
      } else {
        //this.toastService.showDangerToast('Failed to find card(s).');
      }
    });
    //res.subscribe
  }

  resultFormatListValue(value: any) {            
    return value;
  } 

  inputFormatListValue(value: any)   {
    return value;
  }

}
