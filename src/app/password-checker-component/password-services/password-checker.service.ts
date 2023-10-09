import { Injectable } from "@angular/core";
import { StrengthToRule } from "../models/strength-to-rule.model";

@Injectable({
  providedIn: 'root',
})
export class PasswordCheckerService {
  isEmpty(password: string): boolean {
    return password.length === 0;
  }

  matchesPattern(password:string, regExp: RegExp) {
    return regExp.test(password);
  }

  getStrengthLvl(password: string, rules: StrengthToRule[]): number {
    const matchingStrengthLevels = rules
      .filter(rule => rule.regex.test(password))
      .map(rule => rule.strengthLvl);

    return matchingStrengthLevels.length > 0 ? Math.max(...matchingStrengthLevels) : -1;
  }
}