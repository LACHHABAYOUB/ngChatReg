import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';


describe('AuthService', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async(() => TestBed.configureTestingModule({
    providers: [AuthService],
    imports: [HttpClientTestingModule]
  })));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

});
