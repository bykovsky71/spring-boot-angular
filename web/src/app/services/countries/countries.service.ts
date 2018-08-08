import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from '../../../../node_modules/rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiKey = environment.apiKey;
  apiLink = 'http://apifootball.com/api/?action=get_countries&APIkey=';

  constructor(public httpClient: HttpClient) { }

  get() {
    const apiLink = this.apiLink + this.apiKey;
    console.log(apiLink);
    return this.httpClient.get(apiLink)
                     .pipe(
                          map((response:Response)=>response)
                      );
  }

}

