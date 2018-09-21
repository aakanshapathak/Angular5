import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


 const routes: Routes = [
    {   
        path: '',
        component:HomeComponent
    },
    {
        
            path: 'about/:id',
            component:AboutComponent
        
    },
    
];


@NgModule({
imports: [RouterModule.forRoot(routes),
BrowserModule,
CommonModule,
],
exports: [ ]
})

export class AppRoutingModule {}
