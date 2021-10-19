/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "ng-app",
  template: `<div>
    <h2>Loan Details</h2>
    <b>Monthly Payment:</b> {{ monthly_payment | currency }} <br />
    <b>Late Payment Fee : {{ late_payment | currency }}</b> <br />

    <form (ngSubmit)="onSubmit()">
      <input
        type="text"
        name="loan_amount"
        [(ngModel)]="loan_amount"
        (ngModelChange)="onChange()"
      />
      <br />
    </form>
  </div>`,
})
export class Test01Component {
  loan_amount: number = 1000;
  monthly_payment: number = 200;
  late_payment = 10;

  onChange() {
    if (this.loan_amount === 0 || !this.loan_amount) {
      this.late_payment = 0;
      this.monthly_payment = 0;
    } else {
      this.monthly_payment = 0.2 * this.loan_amount;
      this.late_payment = 0.5 * this.monthly_payment;
    }
  }
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Test01Component,
      },
    ]),
  ],
  declarations: [Test01Component],
})
export class Test01Module {}
