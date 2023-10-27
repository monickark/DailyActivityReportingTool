import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DartPage } from './dart.page';

const routes: Routes = [
  {
    path: '',
    component: DartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DartPage]
})
export class DartPageModule {}
