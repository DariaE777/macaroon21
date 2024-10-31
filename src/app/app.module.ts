import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonBackgroundDirective } from './directives/button-background.directive';
import { PricePipe } from './pipes/price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdvantageComponent,
    ProductComponent,
    ButtonBackgroundDirective,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
