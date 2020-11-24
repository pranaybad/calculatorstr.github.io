import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  public num1:number;
  public num2:number;
  public result:number;

  // export class AppComponent {
  //   title = 'calculator';
  // }
  

  addition(){
    this.result = this.num1 + this.num2;
  }
 
  Subtract(){
    this.result = this.num1 - this.num2; 
  }

  Multiplication(){
    this.result = this.num1 * this.num2; 
  }

  Division(){
    this.result = (this.num1)/(this.num2) ;
  }
}

