import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  public isUserLogin: boolean = false;
  public authToken: string = '';

  constructor() { }

  login(){
    this.isUserLogin = true;
    this.generateToken();
  }

  logout(){
    this.isUserLogin = false;
  }

  private generateToken(){
    this.authToken = 'jwtTokenMock';
  }


}
