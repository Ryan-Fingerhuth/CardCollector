import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '@core/services';
import { ToastService } from '@core/services/toast.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  public cardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      id: [0],
      cardName: ['', [Validators.maxLength(50), Validators.required]],
      cardDescription: [''],
      originalSet: ['', [Validators.required]],
      cardYear: [new Date().getFullYear()],
      cardImageName: ['', [Validators.required]],
      image: []
    });
  }

  public onFileChange($event) {
    this.cardForm.patchValue({
      image: $event.target.files[0]
    })
  }

  public onSave(): void {
    if (this.cardForm.invalid) {
      return;
    }
    const request: any = {
      Id: this.cardForm.controls["id"].value,
      CardName: this.cardForm.controls["cardName"].value,
      CardDescription: this.cardForm.controls["cardDescription"].value,
      OriginalSet: this.cardForm.controls["originalSet"].value,
      Year: this.cardForm.controls["cardYear"].value
    };
    const imageFile = this.cardForm.controls["image"].value;
    if (!imageFile) {
      this.toastService.showDangerToast('Image not selected.');
      return;
    }
    this.cardService.createCard(imageFile, request).subscribe(x => {
      if (x.isSuccess) {
        this.toastService.showSuccessToast('Card created.');
      } else {
        this.toastService.showDangerToast('Failed to create card.');
      }
    });
  }

}
