import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view/material.module';
import { ValidatorsComponent } from './validators.component';
import { ValidatorComponent } from './validator/validator.component';

@NgModule({
  declarations: [ValidatorsComponent, ValidatorComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule],
  exports: [ValidatorsComponent, ValidatorComponent],
})
export class ValidatorsViewModule {}
