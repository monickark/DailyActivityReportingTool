import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html'
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'Dart',
      url: '/menu/dart'
    },
    {
      title: 'Diary',
      url: '/menu/diary'
    },
    {
      title: 'Report',
      url: '/menu/report'
    }
  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }
 
}