import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionAddProductComponent } from './auction-add-product/auction-add-product.component';
import { AuctionDashboardComponent } from './auction-dashboard/auction-dashboard.component';

const routes: Routes = [
  { path: '', component: AuctionDashboardComponent },
  { path: 'add-product', component: AuctionAddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
