import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
