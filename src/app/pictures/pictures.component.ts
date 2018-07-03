import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../pictures.service';
import {Picture} from '../../properties/picture';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.pug',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  constructor(private picturesService: PicturesService) { }
  pictures: Picture[];
  p: number = 1;
  ngOnInit() {
    this.getPictures();
  }
  getPictures(): void {
    this.pictures = this.picturesService.getPictures().slice().reverse();
  }
}
