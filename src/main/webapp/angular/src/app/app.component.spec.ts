import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from '../app/app.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from'@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { of, pipe} from 'rxjs';
import {delay} from 'rxjs/operators';

describe('AppComponent', () => {
  beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[RouterTestingModule,
          ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot([]),
        EffectsModule.forRoot([]),
        ],
        declarations:[AppComponent],
        providers:[AppService]
      }).compileComponents();
     
  }))

  it("should start the counter",async(()=>{
    const fixture =TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.startCounter();
    const result =fixture.debugElement.nativeElement;
    expect(result.querySelector('#result').textContent).toContain('1');

  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app=fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
   // expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to App');
  }));

  it('should call service method and return user details as []',(fakeAsync(()=>{
  
   let fixture =TestBed.createComponent(AppComponent);
   let component =fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(AppService);
    let stub =spyOn(userService,'fetchListOfUsers').and.callFake(()=>{
    return of([]).pipe(delay(300));
   
    });
    component.fetchListOfUsersBehavior();
    expect(component.users).toEqual([]);

 })))
});
