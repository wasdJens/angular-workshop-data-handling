import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Ticket } from '../types/ticket.interface';
import { TicketsService } from './tickets.service';

@Injectable()
export class TicketService {
  public testObservable$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public ticketsService: TicketsService, public http: HttpClient) {
    setInterval(() => {
      this.testObservable$.next('Hallo');
    }, 1000)
  }

  public createNewTicket(ticket: Ticket): void {
    this.ticketsService.addTicketToList(ticket);
  }

  public fetchTicket$(id: string): Observable<Ticket> {
    const sampleTicket: Ticket = {
      title: 'API Ticket',
      description: 'I was returned as an observable',
      priority: 'LOW'
    };
    // return this.http.get<Ticket>('coole-urle')
    return of(sampleTicket);
  }
}
