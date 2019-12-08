import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainFunctionRoutingModule } from './main-function-routing.module';
import { EnviromentComponent } from './enviroment/enviroment.component';
import { EnergyComponent } from './energy/energy.component';
import { DeviceComponent } from './device/device.component';
import { ResultComponent } from './result/result.component';
import { LoadComponent } from './load/load.component';


@NgModule({
  declarations: [EnviromentComponent, EnergyComponent, DeviceComponent, ResultComponent, LoadComponent],
  imports: [
    CommonModule,
    MainFunctionRoutingModule
  ]
})
export class MainFunctionModule { }
