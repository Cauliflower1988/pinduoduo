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
