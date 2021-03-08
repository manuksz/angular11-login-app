import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { StartUpPageComponent } from "./start-up-page/start-up-page.component";
import { DetailsFormComponent } from "./details-form/details-form.component";

const routes: Routes = [
  { path: "login", component: StartUpPageComponent },
  { path: "details", component: StartUpPageComponent },
  { path: "register", component: RegistrationFormComponent },
  { path: "", component: StartUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
