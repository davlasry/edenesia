import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { TripMainComponent } from './trips/trip-main/trip-main.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AdminComponent } from './admin.component';
import { EditTripComponent } from './trips/edit-trip/edit-trip.component';
import { GiftCardComponent } from './gift-card/gift-card.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'trips', pathMatch: 'full' },
      { path: 'trips', component: TripMainComponent },
      { path: 'trips/:id', component: EditTripComponent },
      // { path: 'activities/:id', component: ActivityDetailsComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'gift-cards', component: GiftCardComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: '', redirectTo: '/trips', pathMatch: 'full' }
      // { path: 'signup', component: SignUpComponent },
      // { path: 'search/:string', component: SearchResultsComponent },
      // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
      // { path: '**', component: 'NotFoundComponent' }] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
