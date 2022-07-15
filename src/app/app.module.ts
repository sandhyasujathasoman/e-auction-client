import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionDashboardComponent } from './auction-dashboard/auction-dashboard.component';
import { AuctionFooterComponent } from './auction-footer/auction-footer.component';
import { AuctionHeaderComponent } from './auction-header/auction-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuctionAddProductComponent } from './auction-add-product/auction-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuctionDashboardComponent,
    AuctionFooterComponent,
    AuctionHeaderComponent,
    AuctionAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
