import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }


  registerUser(user){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register',user,{headers: headers})
      .map(res=> res.json());
  }

  authenticateUser(user){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate',user,{headers: headers})
      .map(res=> res.json());
  }


  updateUserExpenses(expense){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var username = JSON.parse(localStorage.getItem('user')).username;


    var both = {
        ex: expense,
        usr: username
      };

    return this.http.post('users/addExpense',both ,{headers: headers})
      .map(res=> res.json());
  }


  editUserExpenses(expense){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var username = JSON.parse(localStorage.getItem('user')).username;


    var both = {
        ex: expense,
        exId: expense.expenseId,
        usr: username
      };

    return this.http.post('users/editExpense',both ,{headers: headers})
      .map(res=> res.json());
  }


  deleteUserExpense(index){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var username = JSON.parse(localStorage.getItem('user')).username;

    var both = {
        index: index,
        username: username
      };


    return this.http.post('users/deleteExpense',both ,{headers: headers})
      .map(res=> res.json());

  }




  clearDatabase(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var usernameJson = {username: JSON.parse(localStorage.getItem('user')).username};

    return this.http.post('users/resetDatabase',usernameJson ,{headers: headers})
      .map(res=> res.json());

  }




  getProfile(){
    var headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile',{headers: headers})
      .map(res=> res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token= localStorage.getItem('id_token');
    this.authToken =token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken =null;
    this.user = null;
    localStorage.clear();
  }

}
