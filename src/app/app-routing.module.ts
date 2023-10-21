import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: "", component: MenuComponent
},
{ path: 'home', component: HomeComponent },

{ path: 'aboutus', component: AboutusComponent },

{ path: 'menu', component: MenuComponent },

{ path: 'cart', component: CartComponent },

{ path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
