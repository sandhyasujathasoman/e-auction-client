import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Bids, Product } from '../auction-model/auction-model';
import { AuctionServiceService } from '../auction-service/auction-service.service';

@Component({
  selector: 'app-auction-dashboard',
  templateUrl: './auction-dashboard.component.html',
  styleUrls: ['./auction-dashboard.component.css']
})
export class AuctionDashboardComponent implements OnInit {

  productList: any;
  product!: Product;
  selectedOption: string | undefined;
  isProductAvailable: boolean = false;
  bidDetails: Bids[] = [];
  active = 1;

  constructor(private auctionService: AuctionServiceService, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('title')?.focus();

    this.auctionService.fetchAllProduct().subscribe(data => {
      this.productList = data;
    });
  }

  getProduct(event: any) {
    this.auctionService.getProduct(event.target.value).subscribe(data => {
      this.product = Object.assign(data);
      this.isProductAvailable = this.product.productName ? true : false;
      this.getBids(this.product.id);
    });
  }

  getBids(productId: any) {
    this.auctionService.getBids(productId).subscribe((data: any) => {
      this.bidDetails = data['bidsPlaced'];
    });
  }

  addProduct() {
    this.router.navigate(['/add-product']);
  }

}
