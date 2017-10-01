import { Injectable } from '@angular/core';

@Injectable()
export class ComponentCommunicationService {

  dashboardActive:  boolean = false;
  statisticsActive: boolean = false;
  expenseListActive: boolean = false;
  onHomeSite: boolean = false;

  categories = [   // TODO: Farbenerst bei hover original - davor entsättigt
    { name: 'Food',
      color: '#607D8A',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Food.png'
    },
    {
      name: 'Transport',
      color: '#A5A8AA',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Transport.png'
    },
    {
      name: 'Accommodation',
      color: '#FFCD34',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Accomodation.png'
    },
    {
      name: 'Leisure',
      color: '#92CD00',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Leisure2.png'
    },
    {
      name: 'Multimedia',
      color:  '#b14947',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Multimedia.png'
    },
    {
      name: 'Insurance & Health',
      color: '#fb8c00',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Insurance.png'

    },
    {
      name: 'Clothing & Hygiene',
      color: '#645F5D',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_Clothing.png'
    },
    {
      name: 'General',
      color: '#444444',
      amount: 0,
      iconPath: 'resources/icons/categories/icon_General2.png'

    }
  ];




  deactivateAll(){
    this.dashboardActive=false;
    this.statisticsActive=false;
    this.expenseListActive=false;
  }

  activateDashboard(){
    this.deactivateAll();
    this.dashboardActive = true;
  }

  activateStatistics(){
    this.deactivateAll();
    this.statisticsActive = true;
  }

  activateExpenseList(){
    this.deactivateAll();
    this.expenseListActive = true;
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
