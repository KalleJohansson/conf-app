import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events/shared';
import { SimpleDialogComponent } from '../common';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display: none; }  }
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
  searchTerm = '';

  constructor(
    public auth: AuthService,
    private eventService: EventService,
    public dialog: MatDialog) {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sesssions => {
      this.dialog.open(SimpleDialogComponent, {
        width: '100%',
        data: sesssions
      });
    });
  }
}
