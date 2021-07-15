import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  public createTicketForm: FormGroup;


  constructor(public ticketService: TicketService, public configService: ConfigurationService) {
    this.createTicketForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
    });

    console.log(configService.config);
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.ticketService.createNewTicket(this.createTicketForm.value);
  }
}
