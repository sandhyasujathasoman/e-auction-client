import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuctionServiceService } from '../auction-service/auction-service.service';

import { AuctionAddProductComponent } from './auction-add-product.component';

describe('AuctionAddProductComponent', () => {
  let component: AuctionAddProductComponent;
  let fixture: ComponentFixture<AuctionAddProductComponent>;
  const mockRoute = jasmine.createSpyObj(['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AuctionAddProductComponent ],
      providers: [HttpHandler, HttpClient, AuctionServiceService, FormBuilder,
        {provide: Router , useValue: mockRoute}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
