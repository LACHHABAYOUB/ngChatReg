import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { ChatModule } from './chat/chat.module';
import { RegisterChatterViewComponent } from './chat/register-chatter-view/register-chatter-view.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { AuthModule } from './auth/auth.module';

// Added imports for routing
const routes: Routes = [
    { path: 'register', component: RegisterChatterViewComponent },
    { path: 'chat', component: ChatViewComponent },
    { path: 'login', component: UserLoginComponent}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        ChatModule,
        AuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
