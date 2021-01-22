import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { LoginComponent } from './user/login/login.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { SignUpComponent } from './user/signUp/signUp.component';
import { AuthGuard } from './auth/auth.guard';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import {HomeComponent} from './home/home.component';
import {PostListComponent} from './post/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: PostListComponent
      },
      { path: 'sign', component: LoginComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: 'postCreate', component: PostCreateComponent },
      {
        path: 'userInfo',
        canActivate: [AuthGuard],
        component: UserInfoComponent,
      },
    ],
  },
  {
    path: 'EditPost/:key',
    canActivate: [AuthGuard],
    component: EditPostComponent,
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
