import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterNavComponent } from './router-nav/router-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { RealisationComponent } from './realisation/realisation.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';


// routes est de type tableau
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  },

{ path: 'bio',
  component: BioComponent
 },
{
  path: 'realisation',
  component: RealisationComponent
},
{
  path: 'contact',
  component: ContactComponent
},

{ path: '**', component: Page404Component  },

] ;

@NgModule({
  declarations: [
    AppComponent,
    RouterNavComponent,
    BioComponent,
    RealisationComponent,
    ContactComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
