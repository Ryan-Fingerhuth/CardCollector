import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISearchDto } from '@core/models';
import { CardService } from '@core/services';
import { ToastService } from '@core/services/toast.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';

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

  public search(): void {
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
        this.toastService.showSuccessToast('Card(s) searched.');
        console.log(x.result + "");
      } else {
        //this.toastService.showDangerToast('Failed to find card(s).');
      }
    });
    //res.subscribe
  }

  resultFormatBandListValue(value: any) {            
    return value;
  } 

  inputFormatBandListValue(value: any)   {
    return value;
  }

}
