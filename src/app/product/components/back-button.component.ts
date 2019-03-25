import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  template: `
    <div
      class="back-button"
      (click)="handleBack()"
      [ngClass]="{ 'float-effect': !dark }"
    >
      <img [src]="imageUrl" />
    </div>
  `,
  styles: [
    `
      .back-button {
        position: fixed;
        left: 1rem;
        top: 1rem;
        color: #fff;
        text-align: center;
        z-index: 2000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .float-effect {
        background-color: #000;
        opacity: 0.6;
        border-radius: 1rem;
        width: 2rem;
        height: 2rem;
      }
      .back-button > img {
        object-fit: contain;
        width: 1.2rem;
        height: 1.2rem;
      }
    `
  ]
})
export class BackButtonComponent implements OnInit {
  @Input() dark = false;
  constructor(private location: Location) {}

  ngOnInit(): void {}

  handleBack() {
    this.location.back();
  }

  get imageUrl() {
    return this.dark
      ? 'assets/icons/back_dark.png'
      : 'assets/icons/back_light.png';
  }
}
