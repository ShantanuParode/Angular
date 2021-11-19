import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModelComponent } from './projects/ng-model/ng-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotepadComponent } from './projects/notepad/notepad.component';

//Material Section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    BooksComponent,
    LoginComponent,
    SignupComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    NgModelComponent,
    NotepadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
