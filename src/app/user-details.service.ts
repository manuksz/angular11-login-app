import { Injectable } from "@angular/core";

@Injectable()
export class UserDetailsService {
  userDetails: string = "";
  userPictureURL: string = "";

  sendUserDetails(userData: string) {
    this.userDetails = userData;
  }

  sendUserPicture(userURL: string) {
    this.userPictureURL = userURL;
  }
}
