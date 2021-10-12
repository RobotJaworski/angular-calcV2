import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  @Input() firstNum: number;
  @Input() secondNum: number;

  constructor() {}

  ngOnInit(): void {}
  result = 0;
  computed: number;

  onAdd() {
    this.result = this.firstNum + this.secondNum;
    this.computed = this.result;
    console.log(this.result);
  }

  onSubtract() {
    this.result = this.firstNum - this.secondNum;
    this.computed = this.result;
    console.log(this.result);
  }

  onMultiply() {
    this.result = this.firstNum * this.secondNum;
    this.computed = this.result;
    console.log(this.result);
  }

  onDivide() {
    this.result = this.firstNum / this.secondNum;
    this.computed = this.result;
    console.log(this.result);
  }
}
