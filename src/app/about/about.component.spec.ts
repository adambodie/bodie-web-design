import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
  
	it('should create', () => {
		expect(component).toBeTruthy();
	});
  
	it('should return open method', () => {
		const date = new Date(2018, 7, 9, 8, 30, 30, 0);
		expect(component.open(date)).toBeTruthy();
	});
	
	it('should return correct Thanksgiving date', () => {
		const year = 2018;
		expect(component.thanksgivingDate(year)).toBe(22);
	});
	
	it('should return correct Memorial Day date', () => {
		const year = 2018;
		expect(component.memorialDate(year)).toBe(28);
	});
	
	it('should return correct Labor Day date', () => {
		const year = 2018;
		expect(component.laborDate(year)).toBe(3);
	});
    
	it('should return Open', () => {
		const date = new Date(2018, 7, 9, 8, 30, 30, 0);
		expect(component.open(date)).toBe('Open - Hours from 7:00AM - 8:00PM.');
	});
   
	it('should return Closed (before hours)', () => {
		const date = new Date(2018, 5, 1, 6, 30, 30, 0);
		expect(component.open(date)).toBe('Closed');
	});
	it('should return Closed (weekend)', () => {
		const date = new Date(2018, 6, 1, 6, 30, 30, 0);
		expect(component.open(date)).toBe('Closed');
	});
	it('should return Closed for New Year\'s Day', () => {
		const date = new Date(2018, 0, 1, 8, 30, 30, 0);
		expect(component.open(date)).toBe('Closed - New Year\'s Day.');
	});

	it('should return Closed for Independence Day', () => {
		const date = new Date(2018, 6, 4, 12, 0, 0, 0);
		expect(component.open(date)).toBe('Closed - Independence Day');
	});
	
	it('should return Closed for Christmas', () => {
		const date = new Date(2018, 11, 25, 10, 0, 0, 0);
		expect(component.open(date)).toBe('Closed - Christmas');
	});

	it('should return Closed for Memorial Day', () => {
		const date = new Date(2018, 4, 28, 9, 0, 0, 0);
		expect(component.open(date)).toBe('Closed - Memorial Day');
	});
	
	it('should return Closed for Labor Day', () => {
		const date = new Date(2018, 8, 3, 13, 0, 0, 0);
		expect(component.open(date)).toBe('Closed - Labor Day');
	});

	it('should return Closed for Thanksgiving', () => {
		const date = new Date(2018, 10, 22, 14, 0, 0, 0);
		expect(component.open(date)).toBe('Closed - Thanksgiving');
	});
  
});
