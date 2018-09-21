import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ; 
import { CommonModule} from '@angular/common';
 import { AppRoutingModule }from './app-routing.module';
import { DataService } from './data.service';

 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot([
    //   {path:'' , component:HomeComponent },
    //   {path:'about' , component:AboutComponent}
    // ]),
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
