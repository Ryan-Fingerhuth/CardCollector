import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISet } from '@core/models';
import { CardService, ToastService } from '@core/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BooleanDialogComponent } from '@shared/components/boolean-dialog/boolean-dialog.component';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {
  public sets: ISet[] = [];

  constructor(
    private readonly cardService: CardService,
    private readonly router: Router,
    private readonly modalService: NgbModal,
    private readonly toastService: ToastService) { }

  ngOnInit(): void {
    this.cardService.getSets().subscribe(result => {
      if (result.isSuccess) {
        this.sets = result.result;
      }
    });
  }

  public onCreateSet(): void {
    this.router.navigate([`set/0`]);
  }

  public onCloneSet(setId: number): void {
    if (!setId) {
      return;
    }

    const modal = this.modalService.open(BooleanDialogComponent);
    modal.componentInstance.configureFor('Warn');
    modal.componentInstance.properties.message = 'Are you sure you want to clone this set?';
    modal.componentInstance.properties.okText = 'Clone';
    modal.result.then(outcome => {
      if (outcome) {
        this.cardService.cloneSet(setId).subscribe(result => {
          if (result.isSuccess) {
            this.ngOnInit();
            this.toastService.showSuccessToast('Set Cloned!');
          } else {
            this.toastService.showDangerToast(result.errors[0]);
          }
        });
      }
    });
  }

  public onViewSet(setId: number): void {
    this.router.navigate([`set/${setId}`]);
  }

  public onDeleteSet(setId: number): void {
    if (!setId) {
      return;
    }
    const modal = this.modalService.open(BooleanDialogComponent);
    modal.componentInstance.configureFor('Danger');
    modal.componentInstance.properties.message = 'Are you sure you want to delete this set?';
    modal.componentInstance.properties.okText = 'Delete';
    modal.result.then(outcome => {
      if (outcome) {
        this.cardService.deleteSet(setId).subscribe(result => {
          if (result.isSuccess) {
            const setIndex = this.sets.findIndex(x => x.id === setId);
            this.sets.splice(setIndex, 1);
            this.toastService.showSuccessToast('Set Deleted!');
          } else {
            this.toastService.showDangerToast(result.errors[0]);
          }
        });
      }
    });
  }
}
