import {
  Component,
  OnInit,
  Input,
  Directive,
  HostListener
} from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'app-product-spec-dialog',
  template: `
    <app-dialog>
      <div class="title">{{ title }}</div>
      <div class="content">This is a test</div>
      <div class="buttons">
        <button appCloseDialog class="confirm-button">确定</button>
      </div>
    </app-dialog>
  `,
  styles: [
    `
      .title {
        color: #000;
        font-size: 1.3rem;
        text-align: center;
      }
      .content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .buttons {
        display: flex;
      }
      .confirm-button {
        width: 100%;
        background-color: red;
        color: #fff;
        font-size: 1.3rem;
        height: 100%;
      }
    `
  ]
})
export class ProductSpecDialogComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}

@Directive({
  selector: '[appCloseDialog]'
})
export class CloseDialogDirective {
  constructor(private dialogService: DialogService) {}
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dialogService.close();
  }
}
