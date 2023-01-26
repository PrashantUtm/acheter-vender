import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Status } from 'src/app/enums/status';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss'],
})
export class UpdateStatusComponent implements OnInit {

  @Output() public updateStatusEvent = new EventEmitter<Status>();

  public statuses: string[];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.statuses = Object.keys(Status).filter(key => typeof Status[key] === 'number');
  }

  public selectStatus(event): void {
    this.updateStatusEvent.emit(event);
    this.modalController.dismiss();
  }

  public dismiss(): void {
    this.modalController.dismiss();
  }
}
