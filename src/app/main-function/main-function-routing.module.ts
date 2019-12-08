import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceComponent } from './device/device.component';
import { EnergyComponent } from './energy/energy.component';
import { EnviromentComponent } from './enviroment/enviroment.component';
import { LoadComponent } from './load/load.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: 'device', component: DeviceComponent
  },
  {
    path: 'energy', component: EnergyComponent
  },
  {
    path: 'enviroment', component: EnviromentComponent
  },
  {
    path: 'load', component: LoadComponent
  },
  {
    path: 'result', component: ResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFunctionRoutingModule { }
