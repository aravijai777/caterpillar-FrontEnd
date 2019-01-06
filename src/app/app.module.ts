import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { AddSurveyService } from './services/addSurvey/add-survey.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditSurveyComponent } from './views/edit-survey/edit-survey.component';
import { SplitComponent } from './views/split/split.component';
import {AccordionModule} from 'primeng/accordion';
import {PickListModule} from 'primeng/picklist';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditSurveyComponent,
    SplitComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule, 
    ReactiveFormsModule,
    HttpClientModule,
    PickListModule,
    AccordionModule,
    StepsModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    PaginatorModule,
    CheckboxModule,
    TableModule,
    CardModule,
  ],
  providers: [AddSurveyService, MessageService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
