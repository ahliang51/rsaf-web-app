import { Component } from '@angular/core';
import { Sort } from '@angular/material';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   breakfast: number;
//   lunch: number;
//   dinner: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  search = false;

  rationData = [
    { position: 1, name: 'CFC Tham Sheng Liang', breakfast: 1, lunch: 1, dinner: 1 },
    { position: 2, name: 'CFC Rowan Lam', breakfast: 1, lunch: 1, dinner: 1 },
    { position: 3, name: 'CPL Xavier Cheah Wei Jie', breakfast: 1, lunch: 1, dinner: 0 },
    { position: 4, name: 'LCP Richard Chang', breakfast: 0, lunch: 1, dinner: 1 },
    { position: 5, name: 'LCP Jerome To', breakfast: 1, lunch: 1, dinner: 1 },
    { position: 6, name: 'LCP Vince Si', breakfast: 1, lunch: 1, dinner: 0 },
    { position: 7, name: 'LCP Felix Goh', breakfast: 1, lunch: 1, dinner: 1 },
    { position: 8, name: 'LCP Tyler Choo', breakfast: 1, lunch: 1, dinner: 1 },
    { position: 9, name: 'PTE Russell Zhang', breakfast: 0, lunch: 1, dinner: 1 },
    { position: 10, name: 'PTE Willard Fu', breakfast: 1, lunch: 0, dinner: 1 },
    { position: '', name: 'Total', breakfast: 8, lunch: 9, dinner: 7 },
  ];

  displayedColumns: string[] = ['position', 'name', 'breakfast', 'lunch', 'dinner'];
  dataSource = this.rationData;

  constructor() {
  }

  onSearch() {
    this.search = true;
  }
}


