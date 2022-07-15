import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, Seller } from '../auction-model/auction-model';
import { AuctionServiceService } from '../auction-service/auction-service.service';
import { NgbModal, ModalDismissReasons }
  from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-add-product',
  templateUrl: './auction-add-product.component.html',
  styleUrls: ['./auction-add-product.component.css']
})
export class AuctionAddProductComponent implements OnInit {

  productForm!: FormGroup;
  sellerForm!: FormGroup;
  inValidControl = false;
  closeResult = '';
  productAdded = false;
  product: Product = {
    sellerId: 0
  };
  seller: Seller = {
    address: '',
    city: '',
    email: '',
    firstName: '',
    id: 0,
    lastName: '',
    phone: '',
    pin: 0,
    state: ''
  };
  productId = 10;
  sellerId = 1;

  constructor(
    private auctionService: AuctionServiceService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      detailedDescription: ['', [Validators.required]],
      category: ['', [Validators.required]],
      startingPrice: ['', [Validators.required]],
      bidEndDate: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  addProduct(content: any): void {
    if (this.productForm.valid && !this.productAdded) {
      this.product.productName = this.productForm.controls.productName.value
      this.product.shortDescription = this.productForm.controls.shortDescription.value;
      this.product.detailedDescription = this.productForm.get('detailedDescription')?.value;
      this.product.category = this.productForm.get('category')?.value;
      this.product.startingPrice = this.productForm.get('startingPrice')?.value;
      this.product.bidEndDate = this.productForm.get('bidEndDate')?.value;
      this.product.id = this.productId + 1;
      this.product.sellerId = this.sellerId + 1;

      this.seller.firstName = this.productForm.get('firstName')?.value;
      this.seller.lastName = this.productForm.get('lastName')?.value;
      this.seller.address = this.productForm.get('address')?.value;
      this.seller.city = this.productForm.get('city')?.value;
      this.seller.state = this.productForm.get('state')?.value;
      this.seller.pin = this.productForm.get('pin')?.value;
      this.seller.phone = this.productForm.get('phone')?.value;
      this.seller.email = this.productForm.get('email')?.value;

      const request = {
        'product': this.product,
        'seller': this.seller
      }

      this.auctionService.addProduct(request).subscribe({
        error: (err: any) => { console.error(err) },
        complete: () => {
          this.open(content);
          this.productAdded = true;
        }
      });
    }
  }

  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.router.navigate(['/']);
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
        this.router.navigate(['/']);
      });
  }

  back(): void {
    this.router.navigate(['/']);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
