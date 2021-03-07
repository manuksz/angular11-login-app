import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { StartUpPageComponent } from "./start-up-page/start-up-page.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  declarations: [AppComponent, RegistrationFormComponent, StartUpPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
