import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { StrengthToColor } from "./models/strength-to-color.model";
import { StrengthToRule } from "./models/strength-to-rule.model";
import { PasswordCheckerService } from "./password-services/password-checker.service";

@Component({
  selector: 'password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent implements OnInit, OnChanges {

  @Input() password: string;
  @Input() strengthToColor: StrengthToColor[];
  @Input() strengthToRule: StrengthToRule[];
  @Input() defaultEmptyColor: string = 'grey';
  @Input() defaultInvalidColor: string = 'red';
  @Input() defaultInvalidRule: RegExp;
  @Input() defaultMinChars: number = 8;
  
  private currentColor: string = this.defaultEmptyColor;
  private strengthLvls: number[];
  private currentStrengthLvl: number = 0;
  private isInitialized: boolean = false;

  constructor(private passwordCheckerService: PasswordCheckerService) {}

  ngOnInit(): void {
    if(!this.isInitialized)
      this.isInitialized = true;

    if(this.defaultInvalidRule === undefined)
      this.defaultInvalidRule = RegExp(`^.{${this.defaultMinChars},}$`);

    if(this.strengthToColor.length != this.strengthToRule.length) 
      throw new Error("Inconsistency of the number of colors and rules to forces");
    else this.strengthLvls = this.strengthToRule.map(el => el.strengthLvl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isInitialized) return;

    if(this.isPasswordValid()) {
      this.currentStrengthLvl = this.passwordCheckerService.getStrengthLvl(this.password, this.strengthToRule);
      this.currentColor = this.strengthToColor.filter(el => el.strengthLvl === this.currentStrengthLvl)[0].color;
    } 
  }

  private isFieldEmpty(): boolean {
    return this.passwordCheckerService.isEmpty(this.password);
  }

  isPasswordValid(): boolean {
    return this.passwordCheckerService.isValid(this.password, this.defaultInvalidRule);
  }

  getCurrentColor(): string {
    return this.currentColor;
  }

  getCurrentStrengthLvl(): number {
    return this.currentStrengthLvl;
  }

  getStrengthLvls(): number[] {
    return this.strengthLvls;
  }

  getBackgroundColor(strength: number): string {
    if(this.isFieldEmpty()) return this.defaultEmptyColor;
    if(!this.isPasswordValid()) return this.defaultInvalidColor;
    
    return strength <= this.getCurrentStrengthLvl() ? this.getCurrentColor() : this.defaultEmptyColor;

  }
}