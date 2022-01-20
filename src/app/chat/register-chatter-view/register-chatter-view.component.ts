import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { availableChatRooms, RegistrationChatter } from '../../models/registration.model';
import { RegisterService } from '../../services/register.service';

@Component({
    selector: 'app-register-chatter-view',
    templateUrl: './register-chatter-view.component.html',
    styleUrls: ['./register-chatter-view.component.css']
})
export class RegisterChatterViewComponent implements OnInit, OnDestroy {

    chatRooms = availableChatRooms;

    registration: RegistrationChatter;
    registration$: Subscription;

    constructor(private service: RegisterService) { }

    ngOnInit() {

        this.registration$ = this.service.getRegistration().pipe(
            first(),
            map(reg => { this.registration = reg; })
        ).subscribe();
    }

    ngOnDestroy() {
        this.registration$.unsubscribe();
    }

    registerChatter() {
        this.service.updateRegistration(this.registration);
    }

}
