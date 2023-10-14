import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';

// @ts-ignore
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnChanges {
  @Input() product: IProduct ;
  @Input() index: number;
  oddValue: string;
  imageUrl: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      const firstImage = changes['product'].currentValue.images?.[0];
      if (firstImage && firstImage.path) {
        this.imageUrl = 'https://kupikolesa.it-trends.ru' + firstImage.path;
      } else {
        this.imageUrl = 'assets/images/default-image-url.png';
      }
    }
  }
}
