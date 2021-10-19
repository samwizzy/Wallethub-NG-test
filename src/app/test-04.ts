/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ng-app",
  template: `
    <h2>Enter your first and last name</h2>
    <div>
      <form>
        <input type="text" name="firstname" (blur)="onBlur($event)" />
        <input type="text" name="lastname" (blur)="onBlur($event)" />

        <span *ngIf="firstname && lastname"
          >{{ firstname | lowercase }}_{{ lastname | lowercase }}_{{
            rand
          }}</span
        >
      </form>
    </div>
  `,
  styles: [],
})
export class UserNameComponent implements OnInit {
  firstname: string = "";
  lastname: string = "";
  rand: number;

  ngOnInit() {
    this.rand = this.randomNumber(1, 10);
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  onBlur(e) {
    this[e.target.name] = e.target.value;
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: UserNameComponent,
      },
    ]),
  ],
  declarations: [UserNameComponent],
})
export class UserNameModule {}
