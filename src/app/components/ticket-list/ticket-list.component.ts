import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/types/ticket.interface';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  constructor(public ticketsService: TicketsService) { }

  ngOnInit(): void {
  }

  public handleDelete(ticket: Ticket): void {
    console.log(ticket);
  }
}
