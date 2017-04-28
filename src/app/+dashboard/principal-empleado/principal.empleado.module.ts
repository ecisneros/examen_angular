import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UploadModule } from '@progress/kendo-angular-upload';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {JqueryUiModule} from "../../shared/ui/jquery-ui/jquery-ui.module";

import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";

import {DashboardEmpleadoComponent} from "./principal.empleado.component";
import {GrowlModule} from "primeng/components/growl/growl";
import {LayoutModule} from "@progress/kendo-angular-layout";

@NgModule({
  imports: [
      CommonModule,
      SmartadminModule,
      ButtonsModule,
      HttpModule,
      JsonpModule,
      GridModule,
      DropDownsModule,
      DialogModule,
      UploadModule,
      FormsModule,
      ReactiveFormsModule,
      SmartadminInputModule,
      SmartadminValidationModule,
      JqueryUiModule,
      GrowlModule,
      LayoutModule

  ],
    declarations: [DashboardEmpleadoComponent],
    bootstrap: [DashboardEmpleadoComponent]
})
export class DashboardEmpleadoModule {


}
