import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProjectComponent } from './create-project/create-project.component';
import { HistoryProjectComponent } from './history-project/history-project.component';

const routes: Routes = [
  {
    path: 'create-project', component: CreateProjectComponent
  },
  {
    path: 'history-project', component: HistoryProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProjectRoutingModule { }
