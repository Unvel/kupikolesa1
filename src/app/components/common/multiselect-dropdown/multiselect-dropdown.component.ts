import {Component, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {ProductsService} from "../../../services/products-service.service";

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss'],
})
export class MultiselectDropdownComponent  {
  @Input() options: any;
  dropdownList: any = [];
  selectedItems: any = [];
  data: any ;
  filteredProducts: any;
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'value',
    textField: 'value',
    selectAllText: 'Выбрать все',
    searchPlaceholderText: 'Поиск',
    unSelectAllText: 'Снять все',
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  constructor(
    @Inject(ProductsService) private productService: ProductsService
  ) {
  }

  onItemSelect(id: number, item: any) {
    console.log(item);
    this.options[id].values.find((x: any) => x.value == item.value).isSelected = true;
    console.log(this.options)
  }
  onItemDeSelect(id: number, item: any) {
    this.options[id].values.find((x: any) => x.value == item.value).isSelected = false;
  }

  onSelectAll(id:number, items: any) {
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      this.options[id].values[i].isSelected = true;
    }
  }

  onDeSelectAll(id:number, items: any) {
    console.log(items);
    for (let i = 0; i < this.options[id].values.length; i++) {
      this.options[id].values[i].isSelected = false;
    }
  }

  fillFilteredItems() {
    for (let i = 0; i <= 3; i++) {
      for (const item of this.options[i].values) {
        if(item.isSelected) {
          this.selectedItems.push(item)
        }
      }
    }
    console.log(this.selectedItems)
    this.filteredProducts = this.productService.getFilteredProducts(this.selectedItems).subscribe((options: any) => {});
  }

}

