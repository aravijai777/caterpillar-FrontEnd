
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import {CreatesurveyComponent} from './views/createsurvey/createsurvey.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditSurveyComponent } from './views/edit-survey/edit-survey.component';
import { SplitComponent } from './views/split/split.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: CreatesurveyComponent },
    ]
  },
  { path: 'tables', children:
    [
      //{ path: 'table1', component: BasicTableComponent },
      { path: 'table1', component: DashboardComponent },
    ]
  },
  { path: 'modals', component: ModalsComponent},
  { path: 'editSurvey/:_id', component: EditSurveyComponent},
  {path:'split/:_id',component:SplitComponent}
 // { path: '**', component: NotFoundComponent },
//{ path: 'dashboard' ,component: DashboardComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
