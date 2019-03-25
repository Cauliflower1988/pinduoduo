import { Component, OnInit } from '@angular/core';
import { NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { OrderService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  item$: Observable<object | null>;
  ngOnInit() {
    this.item$ = this.orderService.getItem();
  }
}
