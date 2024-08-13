import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyNAVComponent } from '../my-nav/my-nav.component';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'product',
            component: ProductComponent
          }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
