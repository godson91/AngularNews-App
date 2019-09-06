import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcesComponent } from './sources.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [{
  path: '',
  component: SourcesComponent
}];

@NgModule({
  declarations: [SourcesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule
  ]
})
export class SourcesModule { }
