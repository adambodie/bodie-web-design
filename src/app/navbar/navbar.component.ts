import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  links = [
    { name: "Home", url: "/"},
    { name: "About", url: "/about"},
    { name: "Pictures", url: "/pictures"}
  ]  
}
