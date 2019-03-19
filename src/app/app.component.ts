import { Component, EventEmitter } from '@angular/core';
import {
  TabItem,
  DialogService,
  ProductSpecDialogComponent,
  ProductSpec
} from './shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private dialogService: DialogService) {}
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
    const top = 40;
    const specs = [
      {
        id: 1,
        productId: 1,
        productImageUrl:
          'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
        name: '款式1',
        price: 19.9
      },
      {
        id: 2,
        productId: 2,
        productImageUrl:
          'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
        name: '款式2',
        price: 9.9
      },
      {
        id: 3,
        productId: 3,
        productImageUrl:
          'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
        name: '超新爆款无敌今天不买明天没有的款式3',
        price: 29.9
      }
    ];
    // 传入 Output，EventEmitter 其实就是一个 Subject
    const specSelected = new EventEmitter();
    specSelected.subscribe(ev => console.log(ev));
    this.dialogService.open(ProductSpecDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: { specs },
      outputs: { specSelected },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }
  removeDialog() {
    this.dialogService.close();
  }
}
