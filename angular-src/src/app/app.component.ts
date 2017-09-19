import { Component, ViewChild, OnInit } from '@angular/core';
import {AuthService} from'./services/auth.service';
import {ComponentCommunicationService} from './services/component-communication.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private authService: AuthService,
              private _compCommunication: ComponentCommunicationService
  ) {
  }

  ngOnInit() {
  }





}
