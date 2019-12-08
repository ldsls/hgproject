import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProjectRoutingModule } from './new-project-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HistoryProjectComponent } from './history-project/history-project.component';


@NgModule({
  declarations: [CreateProjectComponent, HistoryProjectComponent],
  imports: [
    CommonModule,
    NewProjectRoutingModule
  ]
})
export class NewProjectModule { }
