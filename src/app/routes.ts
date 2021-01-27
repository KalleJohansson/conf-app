import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  CreateSessionComponent
} from './events/index';

export let appRoutes: Routes;
appRoutes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];
