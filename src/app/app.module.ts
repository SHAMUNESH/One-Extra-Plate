// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component';
// import { SpotlightComponent } from './spotlight/spotlight.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AboutComponent,
//     SpotlightComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DonateComponent } from './donate/donate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
declarations: [
AppComponent,
AboutComponent,
SpotlightComponent,
ContactComponent,
HomeComponent,
ServicesComponent,
DonateComponent
],
imports: [
BrowserModule,
FormsModule,
HttpClientModule,
routes
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

