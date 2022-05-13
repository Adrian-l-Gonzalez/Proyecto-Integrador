import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { MiservicioService } from './miservicio.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './componens/about/about.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    MiservicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
