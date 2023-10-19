import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.options)
    for (let i = 0; i < this.data.length; i++) {
      if (this.data.value === item.value) {
        this.data.isSelected = true;
        console.log(this.data)
      }
    }
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

