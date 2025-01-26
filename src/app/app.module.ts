import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IntegratedpageComponent } from './pages/integratedpage/integratedpage.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoriesComponentComponent } from './components/stories-component/stories-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponentComponent } from './pages/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntegratedpageComponent,
    StoriesComponentComponent,
    ModalComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
