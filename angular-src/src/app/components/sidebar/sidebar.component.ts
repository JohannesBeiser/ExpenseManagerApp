import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../services/auth.service';
import {ComponentCommunicationService} from '../../services/component-communication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private authService: AuthService,
              private _compCommunicationService: ComponentCommunicationService
  ) { }



  ngOnInit() {
  }





}






