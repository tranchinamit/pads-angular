import { ProfileComponent } from './page/profile/profile.component';
import { AdsDetailsComponent } from './page/ads-details/ads-details.component';
import { ListAdsComponent } from './page/list-ads/list-ads.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'list-ads', component: ListAdsComponent },
  { path: 'ads-details', component: AdsDetailsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
