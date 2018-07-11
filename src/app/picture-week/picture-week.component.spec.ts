import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureWeekComponent } from './picture-week.component';

describe('PictureWeekComponent', () => {
	let component: PictureWeekComponent;
	let fixture: ComponentFixture<PictureWeekComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ PictureWeekComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PictureWeekComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
