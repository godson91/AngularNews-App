import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlinesComponent } from './headlines.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  }
];

@NgModule({
  declarations: [HeadlinesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule]
})
export class HeadlinesModule { }
