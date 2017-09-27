import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../services/auth.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
      this.loadUnfilteredList();

  }

  categories = [   // TODO: Farbenerst bei hover original - davor entsättigt
    { name: 'Food',//TODO: code auslagern in service da auch von dasboard benötigt und andere
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

  public getCategoryIconPath(categoryName: string) : string{ //FIXME:wird wiederholt abgefragt weil angular auch änderung checkt //TODO: wird wiederholt abgefragt weil angular auch änderung checkt
    var path: string = '';
    for(var i=0; i<this.categories.length; i++){
        if(this.categories[i].name == categoryName){
          path = this.categories[i].iconPath;
          break;
        }
    }
    return path;
  }

expenseDescriptionShown: boolean =false;
unfilteredExpenselist: any[] =[];
user: any;

public loadUnfilteredList(){

  this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;

    for(var i=0;i<this.user.expenseData.length;i++){
      this.unfilteredExpenselist.push({
        expenseData: this.user.expenseData[i],
        descriptionShown: false
      });
      console.log(i+" added");
    }
    },
    err => {
      console.log(err);
      return false;
    });
}


public showFullDescription(){
  this.expenseDescriptionShown =true;
}


}
