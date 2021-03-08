import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  constructor(public userService: UserDetailsService) { }

  ngOnInit() {
  }

}