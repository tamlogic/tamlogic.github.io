import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-listen-read-content',
  templateUrl: './listen-read-content.component.html',
  styleUrls: ['./listen-read-content.component.scss']
})
export class ListenReadContentComponent implements OnInit {

  @Input() contents;
  constructor() { }

  ngOnInit(): void {
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
