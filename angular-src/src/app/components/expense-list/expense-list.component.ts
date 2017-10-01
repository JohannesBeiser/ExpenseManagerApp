import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../services/auth.service';
import {ComponentCommunicationService} from '../../services/component-communication.service'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private authService : AuthService,
              private _compCommunicationService : ComponentCommunicationService
  ) { }

  ngOnInit() {
      this.loadUnfilteredList();
      this.filterList();
  }

  categories = this._compCommunicationService.categories;

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

unfilteredExpenselist: any[] =[];
filteredList : any[] =[];
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

public filterList(){
  this.filteredList = this.unfilteredExpenselist;
}


public showFullDescription(expense :any){
  if(expense.descriptionShown){
    expense.descriptionShown = false;
  }else{
    for(var i=0; i<this.unfilteredExpenselist.length;i++){
      this.unfilteredExpenselist[i].descriptionShown = false;
    }
    expense.descriptionShown =true;
  }
}


}
