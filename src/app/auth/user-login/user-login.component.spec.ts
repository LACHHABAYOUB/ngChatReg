import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { of, Observable } from 'rxjs';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['authenticate', 'user', 'get']);
    authSpy.user = of({});

    TestBed.configureTestingModule({
      declarations: [UserLoginComponent],
      imports: [FormsModule],
      providers: [{ provide: AuthService, useValue: authSpy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
