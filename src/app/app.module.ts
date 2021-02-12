import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './mateiral.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ItemTileComponent } from './products/item-tile/item-tile.component';
import { NewItemComponent } from './products/new-item/new-item.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { AuthComponent } from './auth/auth.component'
import { AlertComponent } from './shared/alert/alert.component'
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CartComponent } from './cart/cart.component';
import { SortPipe } from './pipes/sort.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ItemTileComponent,
    NewItemComponent,
    SearchPipePipe,
    AuthComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    CartComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
