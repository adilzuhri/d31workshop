import { Component } from '@angular/core';

@Component({
  selector: 'app-employee', //connect selector to app component
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  title = "Favourite Colors";

  number1 = 12;
  number2 = 20;

  visible = this.ShowContent(this.number1, this.number2);
  
  IsVisible = true;
  
  color : any;

  Employee : any [] = [];
  
  constructor(){
    this.Employee = [
      {
        Name:'Ah Tan',
        Age: '21',
        Gender: 'M'
      } , {
        Name:'Ah Lim',
        Age: '22',
        Gender: 'M'
      } , {
        Name:'Ah Sim',
        Age: '23',
        Gender: 'F'
      }
    ]
  }

  ShowContent(val1: number, val2: number) : boolean {
    if (val1 < val2) {
      return true;
    } else {
      return false;
    }
  }

  OnChange (arg : any) {
    this.IsVisible = arg;
  }

  SetColor(event: any) {
    this.color = event.target.value;
  }

  GetMoreEmployee() : void {
    this.Employee = [
      {
        Name:'Ah Tan',
        Age: '21',
        Gender: 'M'
      } , {
        Name:'Ah Lim',
        Age: '22',
        Gender: 'M'
      } , {
        Name:'Ah Sim',
        Age: '23',
        Gender: 'F'
      } ,  {
        Name:'Ah Lan',
        Age: '18',
        Gender: 'M'
      } , {
        Name:'Ah Bam',
        Age: '19',
        Gender: 'M'
      } , {
        Name:'Ah Moi',
        Age: '16',
        Gender: 'F'
      }
    ]
  }

  CheckAge(Age:number) {
    let val = Age < 18 ? 'Under 18' : 'Above 18';

    switch(val) {
      case 'Under 18':
        return 'red';
      case 'Above 18':
        return 'green';   
   }
   return "";
  }

  TrackByEmployeeName (index: number, employee: any) : string { 
    return employee.Name;
  }

  GetCSS(isEven: any){
    if (isEven){
      return "color1"
    } else {
      return "color2"
    }
  }

}
