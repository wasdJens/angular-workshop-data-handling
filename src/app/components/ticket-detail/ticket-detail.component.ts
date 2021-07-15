import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/types/ticket.interface';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  @Input() public ticket: Ticket | undefined;

  @Input() public color: string | undefined;

  @Output() public delete: EventEmitter<Ticket> = new EventEmitter();

  ngOnInit(): void {}

  public onDelete(): void {
    this.delete.emit(this.ticket);
  }

}
