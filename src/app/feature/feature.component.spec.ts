import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {
	let component: FeatureComponent;
	let fixture: ComponentFixture<FeatureComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FeatureComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FeatureComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show a title', () => {
		const expectedTitle = 'randomTitle';
		component.randomTitle = expectedTitle;
		expect(component.randomTitle).toBe('randomTitle');
	});
	
	
	it('should show a link', () => {
		const expectedLink = 'randomLink';
		component.randomLink = expectedLink;
		expect(component.randomLink).toBe('randomLink');
	});
	
	it('should show an image', () => {
		const expectedImage = 'randomImage';
		component.randomImage = expectedImage;
		expect(component.randomImage).toBe('randomImage');
	});	
});
