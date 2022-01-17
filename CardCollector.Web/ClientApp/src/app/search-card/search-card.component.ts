import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISearchDto } from '@core/models';
import { CardService } from '@core/services';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      cardName: ['',  [Validators.required]]
    });
  }
  

  public search(): void {
    if (this.searchForm.invalid) {
      return;
    }
    const request: ISearchDto = {
      'cardName' : "pikachu"
      //...this.searchForm.getRawValue()
    } 
    
    //const request: string = { ...this.searchForm.value }
    
    this.cardService.searchCard(request).subscribe(x => {
      if (x.isSuccess) {
        // display success message
      } else {
        // display error message
      }
    });
  }

}
