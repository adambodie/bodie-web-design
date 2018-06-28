import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
<<<<<<< HEAD
  it(`should have as title 'app'`, async(() => {
=======
  /*it(`should have as title 'app'`, async(() => {
>>>>>>> 78669965e0a833fc1617a0ee441744bbae60016e
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Bodie-Web-Design!');
  }));
=======
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to bodieWebDesign!');
  }));*/
>>>>>>> 78669965e0a833fc1617a0ee441744bbae60016e
});
