import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordCheckerComponent } from './password-checker-component/password-checker.component';
import { FormsModule } from '@angular/forms';
import { StrengthIndicatorComponent } from './password-checker-component/strength-indicator/strength-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordCheckerComponent,
    StrengthIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
