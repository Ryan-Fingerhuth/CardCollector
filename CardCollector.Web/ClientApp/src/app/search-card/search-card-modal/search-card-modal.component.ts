import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchCardComponent } from '../search-card.component';

@Component({
  selector: 'app-search-card-modal',
  templateUrl: './search-card-modal.component.html',
  styleUrls: ['./search-card-modal.component.css']
})
export class SearchCardModalComponent implements OnInit {
  @ViewChild('searchCard') searchCardComponent: SearchCardComponent;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public onAddCards(): void {
    const selectedCards = this.searchCardComponent.getSelectedCards();
    this.activeModal.close(selectedCards);
  }
}
