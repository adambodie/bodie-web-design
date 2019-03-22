import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.pug',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	date = new Date().getFullYear();
}
