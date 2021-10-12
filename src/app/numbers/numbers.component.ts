import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  p_firstNum = 0;
  p_secondNum = 0;

  firstNum: number;
  secondNum: number;

  getFirstNum(value: string) {
    this.p_firstNum = parseInt(value);
    if (!isNaN(this.p_firstNum)) {
      this.firstNum = this.p_firstNum;
      console.log(this.p_firstNum);
    }
  }

  getSecNum(value: string) {
    this.p_secondNum = parseInt(value);
    if (!isNaN(this.p_secondNum)) {
      this.secondNum = this.p_secondNum;
      console.log(this.p_secondNum);
    }
  }

  ngOnInit() {}
}
