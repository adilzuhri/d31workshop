import { Component } from '@angular/core';

@Component({
  selector: 'app-employee', //connect selector to app component
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  title = "Employee page";

  number1 = 12;
  number2 = 20;

  visible = this.ShowContent(this.number1, this.number2);
  
  ShowContent(val1: number, val2: number) : boolean {
    if (val1 < val2) {
      return true;
    } else {
      return false;
    }
  }

  IsVisible = true

  OnChange (arg : any) {
    this.IsVisible = arg;
  }

  color : any;
}
