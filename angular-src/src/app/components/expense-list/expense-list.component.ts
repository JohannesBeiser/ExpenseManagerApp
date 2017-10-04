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
      this.sortEntries();
  }

  categories = this._compCommunicationService.categories;

  sortedCategoryAscending: boolean = false; //is actually ascending, but arrow would be reversed, so user does see same direction arrow on first click but category is sorted from 0-->i not i-->0 (as initial value)
  sortedAmountAscending : boolean = false;
  sortedDateAscending : boolean = false;

  sortedCategory :boolean = false;
  sortedAmount :boolean = false;
  sortedDate :boolean = true;
  sortedDescription: boolean = false;


/* Sorts the List according to variables above for
 * 1.) Category
 * 2.) Amount
 * 3.) Date
 */
public sortEntries(){
  if(this.sortedCategory){ //also sort with descending date and categories order deoend on order of entries in list (-->maybe order or categories array description?)
      if(this.unfilteredExpenselist !=undefined){
        this.sortedList = [];
        this.sortedList.push(this.unfilteredExpenselist[0]);

        for(var i=1; i<this.unfilteredExpenselist.length;i++){ //for all entries that exist...
            var sortedBorder=this.sortedList.length;

            for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
              var newCategory = this.unfilteredExpenselist[i].expenseData.category;
              var conparingToCategory = this.sortedList[j].expenseData.category;

              if(newCategory == conparingToCategory){
                this.sortedList.splice(j,0,this.unfilteredExpenselist[i]);
                break;
              }
              if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                this.sortedList.push(this.unfilteredExpenselist[i]);
                break;
              }
            }
        }
      }

    if(this.sortedCategoryAscending){
      this.sortedList.reverse();
    }
  }else if(this.sortedAmount){

    if(this.unfilteredExpenselist !=undefined){
      this.sortedList = [];
      this.sortedList.push(this.unfilteredExpenselist[0]);

      for(var i=1; i<this.unfilteredExpenselist.length;i++){ //for all entries that exist...
          var sortedBorder=this.sortedList.length;

          for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
            var newAmount = parseInt(this.unfilteredExpenselist[i].expenseData.value);
            var conparingToAmount = parseInt(this.sortedList[j].expenseData.value);

            if(newAmount >= conparingToAmount){
              this.sortedList.splice(j,0,this.unfilteredExpenselist[i]);
              break;
            }
            if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
              this.sortedList.push(this.unfilteredExpenselist[i]);
              break;
            }
          }
      }
    }

    if(this.sortedAmountAscending){
      this.sortedList.reverse();
    }
  }else if(this.sortedDate){
    if(this.unfilteredExpenselist != undefined){
        this.sortedList = [];
        this.sortedList.push(this.unfilteredExpenselist[0]);

        for(var i=1; i<this.unfilteredExpenselist.length;i++){ //for all entries that exist...
            var sortedBorder=this.sortedList.length;

            for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
              var newDate = new Date( parseInt(this.unfilteredExpenselist[i].expenseData.date.year) , (parseInt(this.unfilteredExpenselist[i].expenseData.date.month)-1) ,parseInt(this.unfilteredExpenselist[i].expenseData.date.day)   ); //Year - monthIndex - day
              var comparingToDate = new Date( parseInt(this.sortedList[j].expenseData.date.year) , (parseInt(this.sortedList[j].expenseData.date.month)-1) ,parseInt(this.sortedList[j].expenseData.date.day)   ); //Year - monthIndex - day

              if(newDate >=comparingToDate){
                this.sortedList.splice(j,0,this.unfilteredExpenselist[i]);
                break;
              }
              if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                this.sortedList.push(this.unfilteredExpenselist[i]);
                break;
              }
            }
        }
    }
    //now everything sorted descending
    if(this.sortedDateAscending){
      this.sortedList.reverse();
    }
  }else if(this.sortedDescription){
    if(this.unfilteredExpenselist != undefined){
        this.sortedList = [];
        this.sortedList.push(this.unfilteredExpenselist[0]);

        for(var i=1; i<this.unfilteredExpenselist.length;i++){ //for all entries that exist...
            var sortedBorder=this.sortedList.length;

            for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
              var newDescription = this.unfilteredExpenselist[i].expenseData.description;

              if(newDescription == "- no description available -" || newDescription == ""){
                this.sortedList.splice(j,0,this.unfilteredExpenselist[i]);
                break;
              }
              if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                this.sortedList.push(this.unfilteredExpenselist[i]);
                break;
              }
            }
        }
    }
  }
}




  public deactivateSortAll(){
    this.sortedDate=false;
    this.sortedAmount=false;
    this.sortedCategory=false;
  }

  public sortCategory(){ // only sets parameters,then calls a sort() method which sorts according to settings
    if(this.sortedCategory){
      this.sortedCategoryAscending = !this.sortedCategoryAscending;
    }else{
      this.deactivateSortAll();
      this.sortedCategory=true;
      this.sortedCategoryAscending= true; //initial value
    }
    this.sortEntries();
  }
  public sortAmount(){ // only sets parameters,then calls a sort() method which sorts according to settings
    if(this.sortedAmount){
      this.sortedAmountAscending = !this.sortedAmountAscending;
    }else{
      this.deactivateSortAll();
      this.sortedAmount=true;
      this.sortedAmountAscending = false; //initial value
    }
    this.sortEntries();
  }
  public sortDate(){ // only sets parameters,then calls a sort() method which sorts according to settings
    if(this.sortedDate){
      this.sortedDateAscending = !this.sortedDateAscending;
    }else{
      this.deactivateSortAll();
      this.sortedDate=true;
      this.sortedDateAscending = false; //initial value
    }
    this.sortEntries();
  }
  public sortDescription(){ // only sets parameters,then calls a sort() method which sorts according to settings
    this.deactivateSortAll();
    this.sortedDescription=true;
    this.sortEntries();
  }




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

unfilteredExpenselist: any[] = [];
sortedList : any[] =[];
user: any;

public loadUnfilteredList(){

  this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;

    for(var i=0;i<this.user.expenseData.length;i++){
      this.unfilteredExpenselist.push({
        expenseData: this.user.expenseData[i],
        descriptionShown: false
      });
    }
    this.sortEntries();
    },
    err => {
      console.log(err);
      return false;
    });
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
