import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ToolbarModule} from 'primeng/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SplitButtonModule} from 'primeng/splitbutton';
import { RouterModule, Routes, Router ,ActivatedRoute } from '@angular/router';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import {StepsModule} from 'primeng/steps';
import { MessageService } from '../../node_modules/primeng/api';
import {ToastModule} from 'primeng/toast';
import { trigger, state, style, transition } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatesurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToolbarModule,
    StepsModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    RouterModule.forRoot([
      {path:'create', component: CreatesurveyComponent},
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }