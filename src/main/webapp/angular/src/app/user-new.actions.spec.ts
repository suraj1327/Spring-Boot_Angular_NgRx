import * as UserNewActions from './user-new.actions';

describe('UserNew', () => {
  it('should create an instance', () => {
    expect(new UserNewActions.LoadUserNews()).toBeTruthy();
  });
});
