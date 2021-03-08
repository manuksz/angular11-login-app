import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

/*import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";*/

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {


  ngOnInit() {}
  
  constructor(private router: Router) {}

  email = new FormControl("", [Validators.required, Validators.email]);
  firstName = new FormControl("", [
    Validators.required,
    Validators.pattern("^[A-Za-z]{1,20}$")
  ]);
  lastName = new FormControl("", [Validators.required]);
  stateName = new FormControl("", [Validators.required]);
  countryName = new FormControl("", [Validators.required]);
  mobileNumber = new FormControl("", [
    Validators.required,
    Validators.pattern("^[0-9]{10}$")
  ]);

  states = [
    { value: "s1", viewValue: "Alabama" },
    { value: "s2", viewValue: "Alaska" },
    { value: "s3", viewValue: "Arizona" },
    { value: "s4", viewValue: "Arkansas" },
    { value: "s5", viewValue: "California" }
  ];

  countries = [{ value: "c1", viewValue: "United States" }];

  printErrorMessage() {
    return "You must enter a value";
  }

  emailErrorMessage() {
    return this.email.hasError("email") ? "Not a valid email" : "";
  }

  formatLabel(value: number) {
    return value + " yrs";
  }

  @ViewChild("fileInput") fileInput: ElementRef;
  fileName = "";

  uploadProfilePicture(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileName = "";
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileName += file.name + " - ";
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileName = "";
    }
  }

    submitUser(pageName: string): void {
    alert("Click");
    this.router.navigate([`${pageName}`]);
  }

  /*
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ["Lemon"];
  allFruits: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];

  @ViewChild("fruitInput") fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = "";
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(
      fruit => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }*/
}
