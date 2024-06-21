import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCallbackOidcComponent } from './auth-callback-oidc.component';

describe('AuthCallbackOidcComponent', () => {
  let component: AuthCallbackOidcComponent;
  let fixture: ComponentFixture<AuthCallbackOidcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthCallbackOidcComponent]
    });
    fixture = TestBed.createComponent(AuthCallbackOidcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
