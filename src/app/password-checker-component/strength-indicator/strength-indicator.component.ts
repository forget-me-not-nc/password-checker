import { animate, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'strength-indicator',
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./strength-indicator.component.css'],
})
export class StrengthIndicatorComponent {
  @Input() backgroundColor: string;
}