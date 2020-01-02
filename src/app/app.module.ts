import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ListAdsComponent } from './page/list-ads/list-ads.component';
import { AdsDetailsComponent } from './page/ads-details/ads-details.component';
import { ProfileComponent } from './page/profile/profile.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListAdsComponent,
    AdsDetailsComponent,
    ProfileComponent,
    NavigationComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
