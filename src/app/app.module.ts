import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostIndexComponent } from './post-index/post-index.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { PostService } from './services/post.service';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostIndexComponent,
    PostCreateComponent,
    PostUpdateComponent,
    DashboardOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
