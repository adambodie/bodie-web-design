import { Injectable } from '@angular/core';
import { Picture } from '../picture';
import {PICTURESOFTHEWEEK} from '../mock-pictures';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  getPictures(): Picture[] {
    return PICTURESOFTHEWEEK;
  }
}
