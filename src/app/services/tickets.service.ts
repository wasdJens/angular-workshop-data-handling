import { Injectable } from '@angular/core';
import { Ticket } from '../types/ticket.interface';

@Injectable()
export class TicketsService {
  public tickets: Ticket[] = [];
  public ticketsCopy: Ticket[] = [];

  constructor() {
    const samples: Ticket[] = [
      {
        title: 'Test 123',
        description: 'Hallo Welt',
        priority: 'URGENT!!!'
      },
      {
        title: 'Noch ein Test',
        description: 'Hallo Welt',
        priority: 'LOW PRIO'
      }
    ]
    this.tickets.push(...samples);
  }

  public addTicketToList(ticket: Ticket): void {
    this.tickets.push(ticket);
    this.ticketsCopy.push(ticket);
  }

  public searchTickets(searchTerm: string): void {
    // TODO: Fix!
    // if (searchTerm === '') {
    //   this.tickets = this.ticketsCopy;
    // }
    this.tickets = this.tickets.filter((ticket) => ticket.title === searchTerm);
  }
}
