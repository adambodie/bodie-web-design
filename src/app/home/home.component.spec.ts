import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


@Component({selector: 'app-projects', template: ''})
class ProjectsStubComponent {}

@Component({selector: 'app-feature', template: ''})
class FeatureStubComponent {}

@Component({selector: 'app-picture-week', template: ''})
class PictureWeekStubComponent {}
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
        ProjectsStubComponent,
        FeatureStubComponent,
        PictureWeekStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
