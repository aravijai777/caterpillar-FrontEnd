import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
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
import {RadioButtonModule} from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
// import { Observable } from 'rxjs/Rx';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { HttpModule } from '@angular/http';
import { AddSurveyService } from './services/addSurvey/add-survey.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatesurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule,
    HttpClientModule, 
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToolbarModule,
    StepsModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    SliderModule,
    CheckboxModule,
    CardModule,
    RouterModule.forRoot([
      {path:'create', component: CreatesurveyComponent},
    ])
  ],
  providers: [MessageService,AddSurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
