import { Component, OnInit, ViewChild } from '@angular/core';
import { Dart } from '../dart/Dart';
import { DartService } from '../dart/dart.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage {

  constructor(private dartService: DartService) { }
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  actualTask: string;
  dart: any;
  darts: Dart[];
  message: string;

  onClick(name, date) {
    this.dart = new Dart(name, date, '', '', '', '', '');
    console.log('Updated user obj' + JSON.stringify(this.dart));
    this.dartService.getDayDart(this.dart)
      .subscribe((data: Dart[]) => {
        this.darts = data;
        console.log(this.darts);
      });

  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.darts.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
  onSubmit() {

    this.dartService.updateDarts(this.darts)
      .subscribe(
        data => this.message = data,
        error => console.error('success', error)
      )
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
