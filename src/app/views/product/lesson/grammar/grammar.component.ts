import { Component, OnInit } from '@angular/core';
import {Grammars} from './grammar';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {

  lessons;

  constructor() { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons() {
    this.lessons = Grammars;
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  // Mute a singular HTML5 element
  stopMe(elem) {
    elem.load();
  }

// Try to mute all video and audio elements on the page
  stopAll() {
    document.querySelectorAll(`video, audio`).forEach( elem => this.stopMe(elem));
  }
}
