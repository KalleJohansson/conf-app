import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISession } from '../events/shared';


// Testa med snackbar https://material.angular.io/components/snack-bar/overview
@Component({
  selector: 'simple-dialog',
  template: `<h1 mat-dialog-title *ngIf="data.length > 0">Matching Sessions</h1>
  <h1 mat-dialog-title *ngIf="data.length < 1">No Matching Sessions</h1>
  <div mat-dialog-content>
    <div class="list-group">
      <a class="list-group-item" *ngFor="let session of sessions" [routerLink]="['/events', session.id]">{{session.name}}</a>
    </div>
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]>Close</button>
  </div>`
})
export class SimpleDialogComponent implements OnInit {

  sessions: ISession[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ISession[]) {}

  ngOnInit() {
    this.sessions = this.data;
  }
}
