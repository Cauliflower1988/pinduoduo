import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: string[];
}

@Component({
  selector: 'app-change-detection',
  template: `
    <input #newFood type="text" placeholder="输入一个新的食品" />
    <button (click)="addFood(newFood.value)">Add food</button>
    <app-child [data]="foods"></app-child>
  `,
  styles: [``]
})
export class ChangeDetectionComponent implements OnInit {
  foods = ['面包', '热狗', '汉堡'];
  constructor() {}

  ngOnInit(): void {}
  addFood(food) {
    // this.foods.push(food); // 引用没有变化，所以不会触发改变
    this.foods = [...this.foods, food]; // 返回一个新的数组导致引用发生改变触发了脏值检测
  }
}
