import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../services/auth.service';
import {ComponentCommunicationService} from '../../services/component-communication.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import {ValidateService} from '../../services/validate.service';



@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  constructor(private authService : AuthService,
              private validateService: ValidateService,
              private _compCommunicationService : ComponentCommunicationService,
              private flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
      this._compCommunicationService.expenseListActive=true;
      this.currentDate= new Date();
      this.filterYear = this.currentDate.getFullYear();

      this.monthActiveArray=[];
      for(var i=0; i<13; i++){//Not 12 but 13, because of the "all Months" option
        this.monthActiveArray.push(false);
      }

      this.monthActiveArray[this.currentDate.getMonth()+1]=true;

      this.loadUnfilteredList();
  }

  //unfilteredExpenselist-->filteredList-->sortedList (...for production)
  unfilteredExpenselist: any[] = [];
  filteredList: any[] = [];
  sortedList : any[] =[];
  user: any;

  currentDate: any;
  filterYear: any;
  monthActiveArray: boolean[] = []
  monthNames: string[] =["January","February","March","April","May","June", "July", "August", "September", "Oktober", "November", "December"]
  everythingShown: boolean = false;

public showEverything(){
//  this.filterYear = undefined;
  for(var i=0; i<13;i++){
    this.monthActiveArray[i]=false;
  }
  this.everythingShown = true;
  this.filterList();
}


public filterList(){
  console.log("now filtering enterd");
  let activeMonthFilter: number = this.monthActiveArray.indexOf(true); //from 0 for all to 12 for december
  this.filteredList = [];
  if(this.unfilteredExpenselist!=undefined){ //only if one specific month selected - not "all months" btn
    for(var i=0;i<this.unfilteredExpenselist.length;i++){
      if(parseInt(this.unfilteredExpenselist[i].expenseData.date.year)== this.filterYear || this.everythingShown){
        if(parseInt(this.unfilteredExpenselist[i].expenseData.date.month) == activeMonthFilter || activeMonthFilter==0 || this.everythingShown ){
          this.filteredList.push(this.unfilteredExpenselist[i]);
          console.log("pushed "+i);
        }
      }

    }
  }
  this.sortEntries();
}


  public activateMonthFilter(index: number){
    for(var i=0; i<13;i++){
      this.monthActiveArray[i]=false;
    }
    this.monthActiveArray[index]=true;
    this.everythingShown = false;
    this.filterList();
  }

  public plusYear(amount){// +1 vor increment and -1 for decrement
    this.everythingShown = false;
      if(this.filterYear.toString().match(/[a-z]/i)){
        this.flashMessage.show("Year must only contain numbers", {cssClass: 'alert-danger', timeout:2500});
      }
      else{
        this.filterYear= parseInt(this.filterYear);
        this.filterYear+= amount;
      }
      this.filterList();
  }





  categories = this._compCommunicationService.categories;

  sortedCategoryAscending: boolean = false; //is actually ascending, but arrow would be reversed, so user does see same direction arrow on first click but category is sorted from 0-->i not i-->0 (as initial value)
  sortedAmountAscending : boolean = false;
  sortedDateAscending : boolean = false;
  sortedDescriptionAscending: boolean =false;

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
  this.sortedList = [];


  if(this.sortedCategory){ //also sort with descending date and categories order deoend on order of entries in list (-->maybe order or categories array description?)
      if(this.filteredList !=undefined && this.filteredList.length != 0){
        this.sortedList = [];
        this.sortedList.push(this.filteredList[0]);

        for(var i=1; i<this.filteredList.length;i++){ //for all entries that exist...
            var sortedBorder=this.sortedList.length;

            for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
              var newCategory = this.filteredList[i].expenseData.category;
              var conparingToCategory = this.sortedList[j].expenseData.category;

              if(newCategory == conparingToCategory){
                this.sortedList.splice(j,0,this.filteredList[i]);
                break;
              }
              if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                this.sortedList.push(this.filteredList[i]);
                break;
              }
            }
        }
      }

    if(this.sortedCategoryAscending){
      this.sortedList.reverse();
    }
  }else if(this.sortedAmount){

    if(this.filteredList !=undefined && this.filteredList.length != 0){
      this.sortedList = [];
      this.sortedList.push(this.filteredList[0]);

      for(var i=1; i<this.filteredList.length;i++){ //for all entries that exist...
          var sortedBorder=this.sortedList.length;

          for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
            var newAmount = parseInt(this.filteredList[i].expenseData.value);
            var conparingToAmount = parseInt(this.sortedList[j].expenseData.value);

            if(newAmount >= conparingToAmount){
              this.sortedList.splice(j,0,this.filteredList[i]);
              break;
            }
            if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
              this.sortedList.push(this.filteredList[i]);
              break;
            }
          }
      }
    }

    if(this.sortedAmountAscending){
      this.sortedList.reverse();
    }
  }else if(this.sortedDate){

    if(this.filteredList != undefined && this.filteredList.length != 0){
      console.log("sorting date");

        this.sortedList.push(this.filteredList[0]);
        console.log("initial push");

        for(var i=1; i<this.filteredList.length;i++){ //for all entries that exist...
            var sortedBorder=this.sortedList.length;

            for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
              var newDate = new Date( parseInt(this.filteredList[i].expenseData.date.year) , (parseInt(this.filteredList[i].expenseData.date.month)-1) ,parseInt(this.filteredList[i].expenseData.date.day)   ); //Year - monthIndex - day
              var comparingToDate = new Date( parseInt(this.sortedList[j].expenseData.date.year) , (parseInt(this.sortedList[j].expenseData.date.month)-1) ,parseInt(this.sortedList[j].expenseData.date.day)   ); //Year - monthIndex - day

              if(newDate >=comparingToDate){
                console.log("inserted to index" + j);

                this.sortedList.splice(j,0,this.filteredList[i]);
                break;
              }
              if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                console.log("pushed to end of List");

                this.sortedList.push(this.filteredList[i]);
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
    if(this.filteredList != undefined && this.filteredList.length != 0){
        this.sortedList = [];
        this.sortedList.push(this.filteredList[0]);

        for(var i=1; i<this.filteredList.length;i++){ //for all entries that exist...
            var sortedBorder=this.sortedList.length;

            for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...
              var newDescription = this.filteredList[i].expenseData.description.charAt(0);
              var comparingToDescription = this.sortedList[j].expenseData.description.charAt(0);
              if(newDescription<=comparingToDescription){
                this.sortedList.splice(j,0,this.filteredList[i]);
                break;
              }
              if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                this.sortedList.push(this.filteredList[i]);
                break;
              }
            }
        }
    }

    if(this.sortedDescriptionAscending){
      this.sortedList.reverse();
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
    if(this.sortedDescription){
      this.sortedDescriptionAscending = !this.sortedDescriptionAscending;
    }else{
      this.deactivateSortAll();
      this.sortedDescription=true;
      this.sortedDescriptionAscending = false; //initial value
    }
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



public loadUnfilteredList(){

  this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;

    for(var i=0;i<this.user.expenseData.length;i++){
      this.unfilteredExpenselist.push({
        expenseData: this.user.expenseData[i],
        descriptionShown: false
      });
    }
    this.filterList();
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





/* ********************     MODAL   ************************* */
public updateProfileData(){
  this.unfilteredExpenselist= [];
  this.loadUnfilteredList()
}





public formatValue(oldValue){// takes any value and converts it to "x.xx"
  if (oldValue==null || oldValue==undefined || oldValue=="" || oldValue.match(/[a-z]/i)) {
    console.log("no formatting")
    oldValue=undefined;
    return oldValue;
  }

  console.log("formatiere:"+oldValue +".")
if(oldValue.indexOf('€')>-1){// IF EURO Char in Value-->remove € and Space
  oldValue= oldValue.replace(/€/g , "");
  oldValue= oldValue.replace(/ /g , "");
}

if(oldValue.indexOf(',')>-1){ //Searching for Commas and converts it to Dots
  oldValue= oldValue.replace(/,/g , ".")
}
if(oldValue.indexOf('.')==-1){// IF no Dot exists-->add one to the end
  oldValue= oldValue + "."
}

var decimalPlace = oldValue.length-1 - oldValue.indexOf('.');
var counter =2; // max Zeros to add--> Loop iterates 2-0 times depending on DecimalPlace
while(counter>decimalPlace){
  oldValue = oldValue+ "0";
  counter--;
}
  return oldValue;
}



  editValue: string ="";
  editDate: DateModel;
  editCategory: string ="";
  editCategoryPath: string ="";
  editDescription: string ="";
  editExpenseId: number;

  modalShown: boolean =false; //TODO: When editing descriptiona dne emptying it, setting to " - no description available -"
  public clickedEdit(expense){
    this.editValue= expense.expenseData.value + " €";
    this.editDate= expense.expenseData.date;
    this.editCategory= expense.expenseData.category;
    this.editCategoryPath= this.getCategoryIconPath(expense.expenseData.category)
    this.editDescription= expense.expenseData.description;
    this.editExpenseId= expense.expenseData.expenseId;
    this.modalShown=true; //Opens Modal Box

  }




  public saveExpenseModalClicked(){
    this.editValue = this.formatValue(this.editValue);

    const expense ={
        expenseId: this.editExpenseId,
        value: this.editValue,
        category: this.editCategory,
        date: this.editDate,
        description: this.editDescription
    };

    if(expense.description=="" || expense.description==undefined){
        expense.description="- no description available -";
    }
/* ***********************  PRE FORMATTING    ******************************* */
    var splitterChar: string = "-";
    var seperatorIndex = expense.date.formatted.length -5;
    splitterChar = expense.date.formatted.charAt(seperatorIndex);
    var dateArr = expense.date.formatted.split(splitterChar);
    var day= dateArr[0];
    var month = dateArr[1];
    if(day.length==1){
        day = "0" + day;
    }
    if(month.length==1){
      month = "0" + month
    }

    expense.date.day = day;
    expense.date.month = month;
    expense.date.year = dateArr[2];


if(expense.value != undefined ){
  if(expense.value.indexOf(',')>-1){

    expense.value = expense.value.replace(/,/g , ".")
  }
}

/* ********************       Validating        ************************** */
    if(!this.validateService.validateExpenseValue(expense)){
      this.flashMessage.show("Please fill in a value", {cssClass: 'alert-danger', timeout:3000});
      console.log('value false');
      return false;
    }

    if(!this.validateService.validateExpenseDate(expense)){
      this.flashMessage.show("Please fill in a date", {cssClass: 'alert-danger', timeout:3000});
      console.log('date false');
      return false;
    }

    this.authService.editUserExpenses(expense).subscribe(data =>{
        if(data.success){
          this.closeModal();
          this.flashMessage.show("Expense edited", {cssClass: 'alert-success', timeout:1500});
          this.updateProfileData();
        }else{
          this.flashMessage.show("Failed to edit Expense", {cssClass: 'alert-danger', timeout:1500});
        }
      });
  }

  innerModal: boolean =false;

  public outerModalClicked(){
  if(this.innerModal){
    this.innerModal=false;
  }else{ //Close Modal if Clicked "outside" the Modal
    this.saveExpenseModalClicked();
  }

  }

  public innerModalClicked(){
    this.innerModal=true;
  }

  public keyDownModalEdit(event) {
    if(event.keyCode == 13) {//ENTER pressed
      this.saveExpenseModalClicked();
    }

  }

  public keyDownModalGeneral(event) {
    var x = event.keyCode;
    if (x == 27) {  // 27 is the ESC key
        alert ("You pressed the Escape key!");
    }
  }


  public modalCategoryChanged(eventItem) {
    this.editCategoryPath  = this.getCategoryIconPath(eventItem);
  }

 public onBlurEditExpenseValue(){
   if(this.editValue ==undefined || this.editValue == ""){

   }else if(!this.editValue.match(/[a-z]/i)){
     this.editValue = this.formatValue(this.editValue) + " €" ;
   }
 }

 public focusFunctionEditValue(){
   this.editValue = this.formatValue(this.editValue);
 }




   public closeModal(){
     this.modalShown=false;
   }





    public deleteUserExpense(index){

    //  var r = confirm("Are you sure you want to DELETE this expense");
  //    if (r == true) {
        this.authService.deleteUserExpense(index).subscribe(data =>{
            if(data.success){
              this.flashMessage.show("Expense deleted", {cssClass: 'alert-success', timeout:1500});
              this.updateProfileData();
            }else{
              this.flashMessage.show("Failed to delete Expense", {cssClass: 'alert-danger', timeout:1500});
            }
          });
          this.closeModal();
      }




}
