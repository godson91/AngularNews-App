import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';









@NgModule({
  declarations: [],
  imports: [ CommonModule, 
    MatButtonModule, 
    MatToolbarModule, MatCardModule, 
    MatChipsModule, MatPaginatorModule,
     MatSnackBarModule, MatProgressSpinnerModule,
      MatSelectModule],
  exports: [ MatButtonModule, MatToolbarModule, MatCardModule, MatChipsModule, MatPaginatorModule, MatSnackBarModule, MatProgressSpinnerModule, MatSelectModule]

})
export class MaterialModule { }
