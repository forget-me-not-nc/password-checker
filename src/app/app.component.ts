import { Component } from '@angular/core';
import { StrengthToColor } from './password-checker-component/models/strength-to-color.model';
import { myStrengthToColor, myStrengthToRule } from './configs/password-config';
import { StrengthToRule } from './password-checker-component/models/strength-to-rule.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  isPasswordShown: boolean = false;
  strengthToColor: StrengthToColor[] = myStrengthToColor;
  strengthToRule: StrengthToRule[] = myStrengthToRule;

  changePasswordVisibility() {
    this.isPasswordShown = !this.isPasswordShown;
  }
}
