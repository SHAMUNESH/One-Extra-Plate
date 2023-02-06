import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DonateComponent } from './donate/donate.component';
//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
   // to this object, but we are redirecting this path to items path using redirectTo key.

//Routing path Imported
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home',component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'spotlight', component: SpotlightComponent },
    { path: 'services', component: ServicesComponent},
    { path: 'contact', component: ContactComponent},
    { path : 'donate', component: DonateComponent}
];

export const routes = RouterModule.forRoot(router);

//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
//export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder