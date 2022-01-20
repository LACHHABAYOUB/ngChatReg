import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ChatService } from '../services/chat.service';
import { RegisterService } from '../services/register.service';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        RegisterService,
        ChatService,
        AuthService
    ]
})
export class ServicesModule {}
