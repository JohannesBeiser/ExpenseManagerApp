import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{
      this.user= profile.user;

      },
    err => {
      console.log(err);
      return false;
    });
  }


  public clearDatabaseData(){

    var r = confirm("Are you sure you want to reset your Database? This will delete all of the entries forever !!!");
    if (r == true) {
      this.authService.clearDatabase().subscribe(data =>{
        if(data.success){
          this.flashMessage.show("Database cleared", {cssClass: 'alert-success', timeout:1500});
        }else{
          this.flashMessage.show("Failed to clear Database", {cssClass: 'alert-danger', timeout:1500});
        }
      });    } else {

      }

  }

}
