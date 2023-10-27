import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
 
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'dart',
        loadChildren: '../dart/dart.module#DartPageModule'
      },
      {
        path: 'diary',
        loadChildren: '../diary/diary.module#DiaryPageModule'
      },
      {
        path: 'report',
        loadChildren: '../report/report.module#ReportPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/diary',
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }