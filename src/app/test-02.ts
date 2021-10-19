/**
 * Update the following components to meet the requirements :
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, Output, EventEmitter } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "textfield",
  template:
    '<input type="text" value="" (change)="onChange(item.value)" #item />',
})
export class TextField {
  field = "";
  @Output() sendField = new EventEmitter<any>();

  onChange = (value: string) => {
    this.sendField.emit(value);
  };
}

@Component({
  selector: "child-component",
  template: `<h2>
    Title:
    <h2><br /><textfield (sendField)="catchField.emit($event)"></textfield></h2>
  </h2>`,
})
export class ChildComponent {
  @Output() catchField = new EventEmitter<string>();
}

@Component({
  selector: "ng-app",
  template: `<div>
    <child-component (catchField)="acceptData($event)"></child-component> <br />
    Title is {{ title }}
  </div>`,
})
export class Test02Component {
  title: string = "";

  acceptData(value: string) {
    this.title = value;
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Test02Component,
      },
    ]),
  ],
  declarations: [Test02Component, ChildComponent, TextField],
})
export class Test02Module {}
