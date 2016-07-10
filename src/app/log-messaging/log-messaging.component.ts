import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';
import { Log } from '../log/log';
import { LogService } from '../log.service/log.service';
import { NotificationService } from '../notification.service/notification.service';

// material directives
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CHECKBOX_DIRECTIVES, MdCheckboxChange} from '@angular2-material/checkbox';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  selector: 'log-messaging',
  styleUrls: ['./app/log-messaging/log-messaging.component.css'],
  templateUrl: './app/log-messaging/log-messaging.component.html',
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon, MD_CHECKBOX_DIRECTIVES,MD_INPUT_DIRECTIVES],
  providers: [MdIconRegistry,
    LogService]

})
export class LogMessagingComponent implements OnInit {
  log: Log;
  emailTo: string;
  emailBody: string;
  emailSubject: string;
  canSend: boolean = true;
  public mailtoHref = ``;

  public contacts = [{
    checked: new MdCheckboxChange(),
    email:'email@email.com',
    id:0
  },{
    checked:new MdCheckboxChange(),
    email:'email1@email.com',
    id:1
  },{
    checked:new MdCheckboxChange(),
    email:'email2@email.com',
    id:2
  }];

  updateEmailTo($event, contact) {
    this.setMailCC($event, contact);
    this.setMailtoMessage();
  }
  setMailCC($event, changedContact) {
    this.emailTo='';
    let count =0;
    for(let i=0; i<this.contacts.length; i++){
        let contact = this.contacts[i];
        if(((contact.id == changedContact.id) && $event) || ((contact.id != changedContact.id) && contact.checked)){
            this.emailTo += `${contact.email},`;
            count++;
        }
    }
    this.emailTo = this.emailTo.slice(0,-1);
    this.setButtonStatus(count>0);
  }
  setButtonStatus(isEnabled){
    this.canSend = isEnabled;
  }
  constructor(
    private logService: LogService,
    private routeParams: RouteParams,
    private notificationService: NotificationService,
    private router: Router) {
  }
  goToDetail(log: Log) {
    let link = ['LogDetail', { id: log.id }];
    this.router.navigate(link);
  }
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.logService.getLog(id)
      .then(log => {
        this.log = new Log(log);
        this.setOperatorMessage();
        this.setMailtoMessage();
    });
  }
  setOperatorMessage() {
    this.emailBody = `At timestamp ${new Date()}, ${this.log.name} experienced the following issue:
${this.log.getStatusMessage()}.
As stated by chrome policy, this will result in this log no longer being trusted.`;
    this.emailSubject= encodeURIComponent(`${this.log.name}:${this.log.getStatusMessage()}.`);
  }
  setMailtoMessage(){
    this.mailtoHref = `mailto:${this.emailTo}?subject=${this.emailSubject}&body=${encodeURIComponent(this.emailBody)}`;
  }

}
