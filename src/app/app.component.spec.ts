import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({selector: 'app-navbar', template: ''})
class NavbarStubComponent {}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

@Component({selector: 'app-projects', template: ''})
class ProjectsStubComponent {}

@Component({selector: 'app-feature', template: ''})
class FeatureStubComponent {}

@Component({selector: 'app-picture-week', template: ''})
class PictureWeekStubComponent {}


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture:   ComponentFixture<AppComponent>;
  let h2:        HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarStubComponent,
        FooterStubComponent,
        ProjectsStubComponent,
        FeatureStubComponent,
        PictureWeekStubComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2');
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
