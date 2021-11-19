import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BioComponent } from './bio/bio.component'
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModelComponent } from './projects/ng-model/ng-model.component';
import { NotepadComponent } from './projects/notepad/notepad.component';

const routes: Routes = [
  {
    path: 'bio', component: BioComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'address-envolope', component: NgModelComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'notepad', component: NotepadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
