import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { FooterItemComponent } from './components/footer-nav/footer-item/footer-item.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CardComponentComponent } from './components/list-cards/card-component/card-component.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { EventsComponentComponent } from './components/events-component/events-component.component';
import { NewsComponentComponent } from './components/news-component/news-component.component';
import { SettingComponentComponent } from './components/setting-component/setting-component.component';
import { ProfileTabComponent } from './components/setting-component/profile-tab/profile-tab.component';
import { CheckComponentComponent } from './components/check-component/check-component.component';
import { AppIndexComponent } from './components/app-index/app-index.component';
import { AlertCardComponent } from './components/news-component/alert-card/alert-card.component';
import { HomeModalComponent } from './components/list-cards/home-modal/home-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DateModalComponent } from './components/list-cards/date-modal/date-modal.component';
import { SettingTabsComponent } from './components/setting-component/setting-tabs/setting-tabs.component';
import { CalendarComponent } from './components/events-component/calendar/calendar.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarListComponent } from './components/events-component/calendar/calendar-list/calendar-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterNavComponent,
    FooterItemComponent,
    HomeComponentComponent,
    CardComponentComponent,
    ListCardsComponent,
    EventsComponentComponent,
    NewsComponentComponent,
    SettingComponentComponent,
    ProfileTabComponent,
    CheckComponentComponent,
    AppIndexComponent,
    AlertCardComponent,
    HomeModalComponent,
    DateModalComponent,
    SettingTabsComponent,
    CalendarComponent,
    CalendarListComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ModalModule.forRoot(),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
