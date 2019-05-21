import { Component, OnInit } from '@angular/core';
import { StoreService} from 'src/app/services/store.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  prodCount : number

  constructor(private storeService : StoreService) { }

  ngOnInit() {
    console.log(this.storeService.displayCategoriesCount());
    //this.prodCount = this.storeService.displayCategoriesCount();
    this.prodCount = this.storeService.displayCategoriesCount();
    
  
  }


}

