import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

export interface GroupOrder {
  id: number;
  productId: number;
  startBy: string;
  avatar: string;
  startAt: Date;
  remainingNumber: number;
}

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.css']
})
export class GroupShortListComponent implements OnInit {
  @Input() groupOrders: GroupOrder[];
  @Input() row = 2;
  constructor() {}

  ngOnInit() {
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: 'zhangsan',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: 'lisi',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(2019, 2, 20, 10, 10, 10),
        remainingNumber: 1
      }
    ];
  }
}

@Component({
  selector: 'app-group-item',
  template: `
    <div class="item-container">
      <img appAvatar appAvatarSize="2rem" [src]="order.avatar" />
      <div class="username">{{ order.startBy }}</div>
      <div class="count-down">
        <div>
          还差<span class="remaining-number">{{ order.remainingNumber }}人</span
          >拼成
        </div>
        <div>剩余 {{ countDown$ | async }}</div>
      </div>
      <button type="button" class="group-button">去拼单</button>
    </div>
  `,
  styles: [
    `
      .item-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0.5rem 1rem;
      }

      .username {
        flex: 1;
        margin: 0 0.2rem;
      }
      .count-down {
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0.2rem;
      }
      .group-button {
        background-color: #e02f29;
        color: #fff;
        font-size: 1.1rem;
        padding: 0.2rem 0.6rem;
        border-radius: 5px;
      }
      .remaining-number {
        color: #e02f29;
      }
    `
  ]
})
export class GroupItemComponent implements OnInit {
  @Input() order: GroupOrder;
  countDown$: Observable<string>;
  readonly _MS_PER_SECOND = 1000;
  constructor() {}

  ngOnInit(): void {
    this.countDown$ = this.getCounDownObservable(
      new Date(),
      new Date(this.order.startAt.getTime() + 24 * 3600 * 1000)
    );
  }

  private getCounDownObservable(now: Date, future: Date): Observable<string> {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(now, future) - elapse),
      takeWhile(gap => gap >= 0),
      map(s => ({
        day: Math.floor(s / 3600 / 24),
        hour: Math.floor(s / 3600) % 24,
        minute: Math.floor(s / 60) % 60,
        second: s % 60
      })),
      map(val => `${val.hour}:${val.minute}:${val.second}`)
    );
  }

  private diffInSec = (now: Date, future: Date): number => {
    const diff = future.getTime() - now.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  };
}
