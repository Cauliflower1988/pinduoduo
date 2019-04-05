import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {
  Banner,
  DialogService,
  ProductSpecDialogComponent
} from 'src/app/shared';
import { Router } from '@angular/router';
import { OrderService } from '../../services';

@Component({
  selector: 'app-product-detail-container',
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.css']
})
export class ProductDetailContainerComponent implements OnInit {
  @Input() productImages: Banner[] = [
    {
      id: 1,
      imgUrl:
        '//img12.360buyimg.com/n1/s450x450_jfs/t1/26699/3/7924/71757/5c6f9006Edab71a55/134ca0101fa57098.jpg',
      caption: '',
      link: ''
    },
    {
      id: 2,
      imgUrl:
        '//img12.360buyimg.com/n1/s450x450_jfs/t1/7364/18/15399/77922/5c6f9019Efa984fa0/e359aa77e68cb0d0.jpg',
      caption: '',
      link: ''
    },
    {
      id: 3,
      imgUrl:
        '//img12.360buyimg.com/n1/s450x450_jfs/t1/19314/3/9347/61055/5c7e1569E661f9f1b/35265fb6efe42d5e.jpg',
      caption: '',
      link: ''
    },
    {
      id: 4,
      imgUrl:
        '//img12.360buyimg.com/n1/s450x450_jfs/t1/22653/35/7780/37635/5c6f9018E1f245f65/1bf3a246dc59ea88.jpg',
      caption: '',
      link: ''
    }
  ];
  constructor(
    private dialogService: DialogService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {}

  handleDirectBuy() {}

  handleGroupBuy() {
    const top = 40;
    const specs = [
      {
        id: 1,
        product: {
          id: 1,
          title: '佑诗2018冬季新羊剪绒大衣女水貂绒领中长款羊毛颗粒皮草外套修身',
          imageUrl:
            'https://t00img.yangkeduo.com/goods/images/2018-12-03/c3af8ddf0744c071be4a6e958094545f.jpeg@750w_1l_50Q.src',
          tags: ['全场包邮', '不中退款'],
          price: 18.1,
          priceDesc: '已拼10万+件',
          buyerAvatars: [
            '/assets/avatars/avatar001.png',
            '/assets/avatars/avatar002.png'
          ]
        },
        productImageUrl:
          'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
        name: '款式1',
        price: 19.9
      },
      {
        id: 2,
        product: {
          id: 1,
          title: '佑诗2018冬季新羊剪绒大衣女水貂绒领中长款羊毛颗粒皮草外套修身',
          imageUrl:
            'https://t00img.yangkeduo.com/goods/images/2018-12-03/c3af8ddf0744c071be4a6e958094545f.jpeg@750w_1l_50Q.src',
          tags: ['全场包邮', '不中退款'],
          price: 18.1,
          priceDesc: '已拼10万+件',
          buyerAvatars: [
            '/assets/avatars/avatar001.png',
            '/assets/avatars/avatar002.png'
          ]
        },
        productImageUrl:
          'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
        name: '款式2',
        price: 9.9
      },
      {
        id: 3,
        product: {
          id: 1,
          title: '佑诗2018冬季新羊剪绒大衣女水貂绒领中长款羊毛颗粒皮草外套修身',
          imageUrl:
            'https://t00img.yangkeduo.com/goods/images/2018-12-03/c3af8ddf0744c071be4a6e958094545f.jpeg@750w_1l_50Q.src',
          tags: ['全场包邮', '不中退款'],
          price: 18.1,
          priceDesc: '已拼10万+件',
          buyerAvatars: [
            '/assets/avatars/avatar001.png',
            '/assets/avatars/avatar002.png'
          ]
        },
        productImageUrl:
          'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
        name: '超新爆款无敌今天不买明天没有的款式3',
        price: 29.9
      }
    ];
    // 传入 Output，EventEmitter 其实就是一个 Subject
    const specSelected = new EventEmitter();

    specSelected.subscribe(ev => {
      this.orderService.saveItem(ev.spec, ev.count);
      this.router.navigate([`/orders/confirm`]);
    });
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
}
