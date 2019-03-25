import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-amount',
  template: `
    <div class="container">
      <div class="text-align-left fill-remianing-space">数量</div>
      <div (click)="handleDecrease()" class="button">
        <img src="assets/icons/remove.png" alt="" />
      </div>
      <div class="count">{{ count }}</div>
      <div (click)="handleIncrease()" class="button">
        <img src="assets/icons/add.png" alt="" />
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 1.6rem;
      }
      .button {
        background-color: lightgray;
      }
      .button img {
        object-fit: contain;
        width: 1.5rem;
        height: 1.5rem;
      }
      .count {
        margin: 0 0.5rem;
        width: 2rem;
        text-align: center;
      }
    `
  ]
})
export class ProductAmountComponent implements OnInit {
  @Input() count = 0;
  @Output() amountChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  handleIncrease() {
    this.amountChange.emit(++this.count);
  }

  handleDecrease() {
    if (this.count === 0) {
      return;
    }
    this.amountChange.emit(--this.count);
  }
}
