import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateSearchService {

  username = 'isaacg94'
  token = environment.token;
  clientSecret = environment.clientSecret;
  clientId = environment.clientId


  constructor(private http:HttpClient) { }

  getProfileData() {
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}&client_secret=${this.clientSecret}`);

  }

  updateSearch(user: string) {
    this.username = user;
  }

  getRepoData(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}&client_secret=${this.clientSecret}`);

  }
}
