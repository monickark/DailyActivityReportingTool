import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'menu', pathMatch: 'full' },
  // { path: 'dart', loadChildren: './dart/dart.module#DartPageModule' },
  // { path: 'diary', loadChildren: './diary/diary.module#DiaryPageModule' },
     { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  // { path: 'report', loadChildren: './report/report.module#ReportPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
