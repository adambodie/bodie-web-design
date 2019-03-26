import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../services/update.service';
import { Update } from '../../properties/update';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.pug',
	styleUrls: ['./update.component.scss'],
	providers: [UpdateService]
})
export class UpdateComponent implements OnInit {
	constructor(private updateService: UpdateService) { }
	updates: Update[];
	
	ngOnInit() {
		this.getUpdates();
	}
	  
	getUpdates(): void {
		this.updates = this.updateService.getUpdates();
	}
}
