import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPartComponent } from './header-part/header-part.component';
import { FormBodyComponent } from './form-body/form-body.component';
import { PlayersComponent } from './players/players.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPartComponent,
    FormBodyComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
