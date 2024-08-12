import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConactUsComponent } from './conact-us/conact-us.component';

const routes: Routes = [
{path:"home" ,component : HomeComponent },
{path:"about",component : AboutUsComponent },
{path:"contact",component : ConactUsComponent},

// It is used to set default  page on this path 
{path: "" , redirectTo :"home" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
