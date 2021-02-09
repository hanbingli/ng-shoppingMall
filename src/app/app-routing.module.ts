import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SidebarComponent } from './main/sidebar/sidebar.component'
import { NewItemComponent } from './products/new-item/new-item.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo:'items', pathMatch: 'full'  },
  { path: 'auth', component: AuthComponent },
  { path: 'items', component: SidebarComponent, 
    children: [
    ]
},
{ path: 'items/new', component: NewItemComponent },
{ path: 'cart', component: CartComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
