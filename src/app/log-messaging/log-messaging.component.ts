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
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
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
  emailTo: '';
  emailCC: string;
  public mailtoHref = ``;
  public contacts = [{
    checked:'',
    email:'email@email.com'
  },{
    checked:'checked',
    email:'email1@email.com'
  },{
    checked:'checked',
    email:'email2@email.com'
  }];

  updateEmailTo($event) {
    console.log($event);
    this.setMailCC();
  }
  setMailCC() {
    this.emailCC = "cc=";
    for(let i=0; i<this.contacts.length; i++){
        let contact = this.contacts[i];
        if(contact.checked){
            this.emailCC += `${contact.email}&`;
        }
    }
    //remove final &
    this.emailCC = this.emailCC.slice(0, -1);
    console.log('set emailCC to', this.emailCC);
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
        //this.setOperatorMessage();
        //this.setMailtoMessage();
    });
  }
  /*setOperatorMessage() {
    this.email.body = `At timestamp ${new Date()}, ${this.log.name} experienced the following issue:
${this.log.getStatusMessage()}.
As stated by chrome policy, this will result in this log no longer being trusted.`;

  }
  setMailtoMessage(){
    this.mailtoHref = `mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=${this.email.body}`;
  }
*/


}
