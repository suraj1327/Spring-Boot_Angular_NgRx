import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RoomDetailsEffects } from './room-details.effects';

describe('RoomDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: RoomDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoomDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RoomDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
