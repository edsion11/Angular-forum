import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { ScrollImgComponent } from './home/scroll-img/scroll-img.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/signUp/signUp.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
