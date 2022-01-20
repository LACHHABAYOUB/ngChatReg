import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { initialRegistration, RegistrationChatter } from '../models/registration.model';

@Injectable()
export class RegisterService {

    readonly LOCAL_KEY = 'chatreg';

    private registration: BehaviorSubject<RegistrationChatter>;

    private readonly registration$: Observable<RegistrationChatter>;

    constructor() {
        this.registration = new BehaviorSubject<RegistrationChatter>(initialRegistration);
        this.registration$ = this.registration.asObservable();

        const storedRegistration = JSON.parse(localStorage.getItem(this.LOCAL_KEY));
        this.registration.next(storedRegistration || {});
    }

    public updateRegistration(registration: RegistrationChatter): void {
        this.registration.next(Object.assign(registration, { isSuccess: true }));
        localStorage.setItem(this.LOCAL_KEY, JSON.stringify(registration));
    }

    public getRegistration(): Observable<RegistrationChatter> {
        return this.registration$;
    }
}
