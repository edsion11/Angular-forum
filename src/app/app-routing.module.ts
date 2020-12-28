import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { ScrollImgComponent } from './home/scroll-img/scroll-img.component';
import { LoginComponent } from './user/login/login.component';
import {UserInfoComponent} from "./user/user-info/user-info.component";
import { SignUpComponent } from './user/signUp/signUp.component';
import {AuthGuard} from "./auth/auth.guard";
import {NotFindComponent} from "./not-find/not-find.component";
import {EditPostComponent} from "./post/edit-post/edit-post.component";


const routes: Routes = [
  { path: 'postCreate', component: PostCreateComponent },
  { path: 'home', component: ScrollImgComponent },
  { path: 'sign', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'userInfo',
    canActivate:[AuthGuard],
    component:UserInfoComponent
  },
  {
    path:'EditPost',
    canActivate:[AuthGuard],
    component:EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
