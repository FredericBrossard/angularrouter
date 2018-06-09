
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavComponent } from './router-nav.component';

describe('RouterNavComponent', () => {
  let component: RouterNavComponent;
  let fixture: ComponentFixture<RouterNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
