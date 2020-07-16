import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LeftBarComponent } from './left-bar/left-bar.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RightBarComponent } from './right-bar/right-bar.component';
import { ScrollImgComponent } from './home/scroll-img/scroll-img.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/signUp/signUp.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import { UMeditorModule } from 'ngx-umeditor';
import { NotFindComponent } from './not-find/not-find.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostCreateComponent,
    LeftBarComponent,
    RightBarComponent,
    ScrollImgComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    UserInfoComponent,
    NotFindComponent,
    EditPostComponent,
  ],
  imports: [
    UMeditorModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatRippleModule,
    MatIconModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    HttpClientJsonpModule,
    MatChipsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
