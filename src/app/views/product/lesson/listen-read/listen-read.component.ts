import { Component, OnInit } from '@angular/core';
import {ListenReads} from './listen-read';

@Component({
  selector: 'app-listen-read',
  templateUrl: './listen-read.component.html',
  styleUrls: ['./listen-read.component.scss']
})
export class ListenReadComponent implements OnInit {

  lessons;

  constructor() { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons() {
    this.lessons = ListenReads;
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
