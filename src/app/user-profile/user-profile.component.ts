import { GenerateSearchService } from './../service/generate-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:any;
  constructor(private service:GenerateSearchService) {
    this.service.getProfileData().subscribe(profile => {
      console.log(profile)
    })
   }

  ngOnInit() {
  }

}
