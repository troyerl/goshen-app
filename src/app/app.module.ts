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
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }