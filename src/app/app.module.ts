import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { MiservicioService } from './miservicio.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './componens/about/about.component';
import { HttpClientModule} from '@angular/common/http';
import { WorksComponent } from './components/works/works.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorksComponent,
    EducationComponent,
    SkillsComponent
  
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
