import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ChatMessage } from '../../models/chat.model';
import { RegistrationChatter } from '../../models/registration.model';
import { ChatService } from '../../services/chat.service';
import { RegisterService } from '../../services/register.service';

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.component.html',
    styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {

    errorMsg = 'No Screen Name Registered. Please register a Screen Name';

    registration: RegistrationChatter;

    polling: Subscription;
    chatMessage: ChatMessage;
    chatMessages$: Observable<ChatMessage[]>;

    constructor(private registrationService: RegisterService,
        private chatService: ChatService) { }

    ngOnInit() {

        const registration$ = this.registrationService.getRegistration().pipe(
            map(reg => {
                this.registration = reg;
                this.chatMessage = reg ? { chatRoom: reg.selectedChatRoom, screenName: reg.screenName } : {};
            }));

        this.polling = registration$.pipe(switchMap(() => timer(0, 60000).pipe(
            switchMap(() =>
                this.chatMessages$ = this.chatService.getChats(this.chatMessage.chatRoom
                ))
        ))).subscribe();
    }

    ngOnDestroy() {
        this.polling.unsubscribe();

        /* tslint:disable:no-console */
        console.info('destroying app and unsubscribing to registration');
    }

    registerChatter() {
        this.chatService.createChat(this.chatMessage);
        this.chatMessage.message = '';
    }

}
