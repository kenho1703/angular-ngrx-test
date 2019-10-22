import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../reducers';
import { C2Component } from './c2.component';
import { C1Component } from '../c1/c1.component';
import { TodoActions } from '../actions';

describe('Login Page', () => {
  let fixture: ComponentFixture<C2Component>;
  let store: MockStore<AppState>;
  let instance: C2Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [C2Component, C1Component],
      providers: [
        provideMockStore({
        }),
      ],
    });

    fixture = TestBed.createComponent(C2Component);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(instance).toBeTruthy();
  });

  it('should dispatch a reset action on when click reset', () => {
    const action = TodoActions.reset();
    instance.onResetClicked();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a change action every second when click start button', () => {
    jasmine.clock().install();

    const action = TodoActions.change();
    instance.onStartClicked();
    jasmine.clock().tick(500);
    jasmine.clock().tick(4000);
    instance.onStopClicked();

    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(5);
    jasmine.clock().uninstall();
  });

  it('should update this.started to false when click stop button ', () => {
    instance.onStopClicked();

    expect(instance.started).toEqual(false);
  });

});
