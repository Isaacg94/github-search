import { GenerateSearchService } from './../service/generate-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:any;
  repos: any;
  query: string;

  constructor(private service:GenerateSearchService) {
   
   }

   searchUser(){
     this.service.updateSearch(this.query);
     this.service.getProfileData().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    })

    this.service.getRepoData().subscribe(repo => {
      console.log(repo);
      this.repos = repo;
    })
   }

  ngOnInit() {
  }

}
