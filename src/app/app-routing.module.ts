import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { AuthGard } from './guards/auth.guard';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostIndexComponent } from './post-index/post-index.component';
import { PostUpdateComponent } from './post-update/post-update.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: DashboardOverviewComponent
  },
  {
    path: 'post',
    component: PostIndexComponent
  },
  {
    path: 'post/create',
    component: PostCreateComponent
  },
  {
    path: 'post/:id',
    component: PostUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
