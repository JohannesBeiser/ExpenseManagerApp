import { Injectable } from '@angular/core';

@Injectable()
export class ComponentCommunicationService {

  dashboardActive:  boolean = false;
  statisticsActive: boolean = false;
  onHomeSite: boolean = false;

  deactivateAll(){
    this.dashboardActive=false;
    this.statisticsActive=false;
  }

  activateDashboard(){
    this.deactivateAll();
    this.dashboardActive = true;

  }

  activateStatistics(){
    this.deactivateAll();
    this.statisticsActive = true;
  }

  activateHomeSite(){
    this.onHomeSite = true;
  }

  deactivateHomeSite(){
    this.onHomeSite = false;
  }

  isHomeSiteActive(){
      return this.onHomeSite;
  }


  constructor() { }

}
