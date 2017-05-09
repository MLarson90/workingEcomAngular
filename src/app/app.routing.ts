import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { AboutComponent } from 'app/about/about.component';
import { MarketplaceComponent } from 'app/marketplace/marketplace.component';
import { NewProductComponent } from 'app/new-product/new-product.component';
import { ProductDetailComponent } from 'app/product-detail/product-detail.component';
import { AdminComponent } from 'app/admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  },
  {
    path: 'products/:id',
    component:ProductDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
