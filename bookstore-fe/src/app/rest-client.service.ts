import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private readonly accessToken = new BehaviorSubject(null);

  public getAccessToken(): string {
    return this.accessToken.getValue();
  }

  setAccessToken(accessToken: string) {
    this.accessToken.next(accessToken);
  }

  constructor() { }
}
