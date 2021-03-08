import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatChipsModule } from "@angular/material/chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { StartUpPageComponent } from "./start-up-page/start-up-page.component";

import { AppRoutingModule } from "./app-routing.module";
import { DetailsFormComponent } from './details-form/details-form.component';
import { UserDetailsService } from './user-details.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  declarations: [AppComponent, RegistrationFormComponent, StartUpPageComponent, DetailsFormComponent],
  bootstrap: [AppComponent],
  providers: [UserDetailsService]
})
export class AppModule {}
