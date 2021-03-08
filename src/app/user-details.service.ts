import { Injectable } from "@angular/core";

@Injectable()
export class UserDetailsService {
  userDetails: string = "";

  sendUserDetails(userData: string) {
    this.userDetails = userData;
  }
}
