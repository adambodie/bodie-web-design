import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  open = "Open"
  constructor() { }

  ngOnInit() {
  }

}
