import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateSearchService {

  username = 'isaacg94'
  token = environment.token;
  clientSecret = environment.clientSecret;

  constructor(private http:HttpClient) { }

  getProfileData() {
    return this.http.get(`https://api.github.com/user/${this.username}?access_token=${this.token}`)
  }
}
