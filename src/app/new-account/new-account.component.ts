import { Component } from '@angular/core';
import { LoggingService } from '../Shared/logging.service';
import { AccountsService } from '../Shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
       private accountService: AccountsService){
        this.accountService.statusUpdated.subscribe(
          (status: string) => alert("New Status : " + status)
        );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
