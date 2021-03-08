import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserDetailsService } from "../user-details.service";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {
  register_form: FormGroup;
  isChecked: boolean = false;
  imageURL = "";
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public userService: UserDetailsService
  ) {}

  ngOnInit() {
    this.register_form = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Za-z]{1,20}$")
      ]),
      ageName: new FormControl(),
      hobbyName: new FormControl(),
      lastName: new FormControl("", [Validators.required]),
      stateName: new FormControl("", [Validators.required]),
      countryName: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]{10}$")
      ])
    });
  }

  states = [
    { value: "Alabama", viewValue: "Alabama" },
    { value: "Alaska", viewValue: "Alaska" },
    { value: "Arizona", viewValue: "Arizona" },
    { value: "Arkansas", viewValue: "Arkansas" },
    { value: "California", viewValue: "California" }
  ];

  countries = [{ value: "c1", viewValue: "United States" }];

  printErrorMessage() {
    return "You must enter a value";
  }

  emailErrorMessage() {
    return "Not a valid email";
  }

  formatLabel(value: number) {
    return value + " yrs";
  }

  @ViewChild("fileInput") fileInput: ElementRef;
  fileName = "";

  ageName = "";

  uploadProfilePicture(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileName = "";
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileName += file.name + " - ";
      });

      // read the file from system
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.imageURL = e.target.result;
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
    if (this.register_form.valid) {
      //calculate the age band of the user
      var ageBand = 0;
      if (this.register_form.controls["ageName"].value >= 45) {
        ageBand = 45;
      } else if (this.register_form.controls["ageName"].value >= 30) {
        ageBand = 30;
      } else if (this.register_form.controls["ageName"].value >= 20) {
        ageBand = 20;
      } else if (this.register_form.controls["ageName"].value >= 13) {
        ageBand = 13;
      }

      // if the form data is valid
      var userString =
        "I am <b>" +
        this.register_form.controls["firstName"].value +
        " " +
        this.register_form.controls["lastName"].value +
        " </b> and I am <b>above " +
        ageBand +
        " years</b> and you can send your emails to <b>" +
        this.register_form.controls["email"].value +
        "</b>. I lives in the state of " +
        this.register_form.controls["stateName"].value +
        ". I like to <b>" +
        this.register_form.controls["hobbyName"].value +
        "</b>";

      // if subscribed for news letters
      if (this.isChecked) {
        userString += ". And please send me the news letters ";
      }
      userString +=
        ". Please reach out to me on my phone " +
        this.register_form.controls["mobileNumber"].value;
      +".";
      this.userService.sendUserDetails(userString);
      this.userService.sendUserPicture(this.imageURL);
      this.router.navigate([`${pageName}`]);
    }
  }
}
