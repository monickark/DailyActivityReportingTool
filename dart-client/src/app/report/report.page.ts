import { Component, OnInit, ViewChild } from '@angular/core';
import { Dart } from '../dart/Dart';
import { DartService } from '../dart/dart.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  darts: Dart[] = [];

  constructor(private router: Router,
    public dartService: DartService) { }

  ngOnInit() {
    this.dartService.getDarts()
      .subscribe((data: Dart[]) => {
        this.darts = data;
        console.log(this.darts);
      });
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

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
