import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-start-up-page",
  templateUrl: "./start-up-page.component.html",
  styleUrls: ["./start-up-page.component.css"]
})
export class StartUpPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  registerUser(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
