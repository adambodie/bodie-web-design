import { Injectable } from '@angular/core';
import { Update } from '../../properties/update';
import { UPDATES } from '../../mock-data/mock-update';

@Injectable({
  providedIn: 'root'
})

export class UpdateService {
	getUpdates(): Update[] {
		return UPDATES;
	}
}

