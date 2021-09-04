import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
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




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'page-one', component: CharactersComponent},
  {path: 'home', component:HomeComponent},
  {path: 'page-two', component:PagetwoComponent},
  {path: 'page-three', component:PagethreeComponent},
  {path: 'page-four', component:PagefourComponent},
  {path: 'page-five', component:PagefiveComponent},
  {path: 'page-six', component:PagesixComponent},
  {path: 'page-seven', component:PagesevenComponent},
  {path: 'page-eight', component:PageeightComponent},
  {path: 'page-nine', component:PagenineComponent},
  {path: 'page-ten', component:PagetenComponent},
  {path: 'page-eleven', component:PageelevenComponent},
  {path: 'page-twelve', component:PagetwelveComponent},
  {path: 'page-thirteen', component:PagethirteenComponent},
  {path: 'page-fourteen', component:PagefourteenComponent},
  {path: 'page-fifteen', component:PagefifteenComponent},
  {path: 'page-sixteen', component:PagesixteenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
