import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuctionServiceService } from '../auction-service/auction-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuctionDashboardComponent } from './auction-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AuctionDashboardComponent', () => {
  let component: AuctionDashboardComponent;
  let fixture: ComponentFixture<AuctionDashboardComponent>;
  const mockRoute = jasmine.createSpyObj(['navigate']);
  let auctionService: AuctionServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ AuctionDashboardComponent ],
      providers: [
        AuctionServiceService,
        {provide: Router , useValue: mockRoute}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionDashboardComponent);
    auctionService = TestBed.inject(AuctionServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add product', () => {
    component.addProduct();
    expect(mockRoute.navigate).toHaveBeenCalledWith(['/add-product']);
  });

  it('should call get Bids', () => {
    const productId = '1';
    const resp = [
      {
        bidAmount: '2000',
        buyer: {
          firstName: 'buyer1',
          lastName: 'buyer1',
          phone: '9876543678',
          email: 'sometng@gmail.com'
        }
      },
      {
        bidAmount: '1500',
        buyer: {
          firstName: 'mikle',
          lastName: 'jhonson',
          phone: '9876898768',
          email: 'mike@gmail.com'
        }
      }
    ];
    spyOn(auctionService, 'getBids').and.returnValue(of(resp));
    component.getBids(productId);
    expect(auctionService.getBids).toHaveBeenCalledWith(productId);
  });

  it('should call get product', () => {
    const event = {
      target: {
        value: '1'
      }
    };
    const resp = {
      id: 1,
      productName: 'JackSS',
      shortDescription: 'jhghgj jhgh',
      detailedDescription: 'Jack and jill',
      category: 'Painting',
      startingPrice: '500',
      bidEndDate: '12-12-2022',
      sellerId: 1
    }
    
    spyOn(auctionService, 'getProduct').and.returnValue(of(resp));
    component.getProduct(event);
    expect(auctionService.getProduct).toHaveBeenCalledWith(event.target.value);
  });
});
