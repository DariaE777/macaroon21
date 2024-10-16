import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { AdvantageComponent } from './components/advantage/advantage.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdvantageComponent
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
