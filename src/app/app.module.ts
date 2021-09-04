import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PagefiveComponent } from './pagefive/pagefive.component';
import { PagesixComponent } from './pagesix/pagesix.component';
import { PagesevenComponent } from './pageseven/pageseven.component';
import { PageeightComponent } from './pageeight/pageeight.component';
import { PagenineComponent } from './pagenine/pagenine.component';
import { PagetenComponent } from './pageten/pageten.component';
import { PageelevenComponent } from './pageeleven/pageeleven.component';
import { PagetwelveComponent } from './pagetwelve/pagetwelve.component';
import { PagethirteenComponent } from './pagethirteen/pagethirteen.component';
import { PagefourteenComponent } from './pagefourteen/pagefourteen.component';
import { PagefifteenComponent } from './pagefifteen/pagefifteen.component';
import { PagesixteenComponent } from './pagesixteen/pagesixteen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    NavbarComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagefourComponent,
    PagefiveComponent,
    PagesixComponent,
    PagesevenComponent,
    PageeightComponent,
    PagenineComponent,
    PagetenComponent,
    PageelevenComponent,
    PagetwelveComponent,
    PagethirteenComponent,
    PagefourteenComponent,
    PagefifteenComponent,
    PagesixteenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
