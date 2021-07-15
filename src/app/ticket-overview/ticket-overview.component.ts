import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';
import { TicketService } from '../services/ticket.service';
import { TicketsService } from '../services/tickets.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ticket } from '../types/ticket.interface';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.scss'],
})
export class TicketOverviewComponent implements OnInit {
  public toggleCreate: boolean = false;

  public sampleTicketTitle$: Observable<string> = new Observable();

  constructor(
    public configService: ConfigurationService,
    public ticketsService: TicketsService,
    public ticketService: TicketService
  ) {}

  ngOnInit(): void {
    // this.ticketService.fetchTicket$('123').subscribe((ticket) => {
    //     console.log(ticket);
    // })
    // this.ticketService.testObservable$.subscribe((value) => {
    //   console.log(value);
    // })
    this.ticketService.testObservable$
      .pipe(
        // map((value) => {
        //   console.log(value);
        // })
        filter((value) => value === 'Hallo'),
        map((value) => 'Test')
      )
      .subscribe((value) => {
        console.log(value);
      });
    this.ticketService.fetchTicket$('123').pipe(
      map((ticket) => ticket.title)
    ).subscribe((title) => {
      console.log(title);
    })
    this.sampleTicketTitle$ = this.ticketService.fetchTicket$('123').pipe(
      map((ticket) => ticket.title)
    );
  }

  public onShowAllTickets(): void {
    console.log('Show All Tickets button clicked');
  }

  public onCreateTicket(): void {
    console.log('Create Ticket button clicked');
    this.toggleCreate = true;
  }

  public onSearchInput(searchTerm: any): void {
    console.log(searchTerm);
    this.ticketsService.searchTickets(searchTerm.target.value);
  }

  public onFavouriteToggle(): void {
    this.configService.enableDisableFavourite();
  }
}
