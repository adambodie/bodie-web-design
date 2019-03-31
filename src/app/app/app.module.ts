import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ModalModule } from 'ngx-modal';
import { AppComponent } from './app.component';
import { FeatureComponent } from '../feature/feature.component';
import { PictureWeekComponent } from '../picture-week/picture-week.component';
import { ProjectsComponent } from '../projects/projects.component';
import { UpdateComponent } from '../update/update.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { PicturesComponent } from '../pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    PictureWeekComponent,
    ProjectsComponent,
    UpdateComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ModalModule,
    PerfectScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
