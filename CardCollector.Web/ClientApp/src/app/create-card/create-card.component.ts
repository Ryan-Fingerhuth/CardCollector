import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICardDto } from '@core/models';
import { CardService } from '@core/services';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  public cardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      id: [0],
      cardName: ['', [Validators.maxLength(50), Validators.required]],
      cardDescription: ['', [Validators.required]]
    });
  }

  public onSave(): void {
    if (this.cardForm.invalid) {
      return;
    }
    const request: ICardDto = {
      ...this.cardForm.getRawValue()
    }
    this.cardService.createCard(request).subscribe(x => {
      if (x.isSuccess) {
        // display success message
      } else {
        // display error message
      }
    });
  }

}
