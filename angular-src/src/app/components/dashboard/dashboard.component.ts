import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from'../../services/auth.service';
import {ComponentCommunicationService} from '../../services/component-communication.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {ValidateService} from '../../services/validate.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  today: number = Date.now();
  datepickerDate: DateModel;
  datepickerOptions: DatePickerOptions;
  categoryName: String;
  newDate: any;
  currentMonth: any;
  currentYear: any;

  monthTotal: number = 0;
  monthTotalString: string ='';
  latestActive: boolean=true;

  user: any;

  categories = this._compCommunicationService.categories; // TODO: Farbenerst bei hover original - davor entsättigt
  categoriesActiveArray: any[] = [];


  @ViewChild("baseChart")
  chart: BaseChartDirective;


  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private  _compCommunicationService: ComponentCommunicationService,
              private flashMessage: FlashMessagesService
  ) {
    this.datepickerOptions = new DatePickerOptions({
      format: 'DD-MM-YYYY'
    });

  }


  ngOnInit() {
    this._compCommunicationService.activateDashboard();
    this.categoryName = "General";//Initial Value
    this.category ="General"
    this.newDate = new Date();
    this.currentMonth = this.newDate.getMonth()+1;
    this.currentYear = this.newDate.getFullYear();
    this.updateProfileData();
    this.setCurrentDateToDatepicker();


    for(var i=0; i<this.categories.length;i++){
      this.categoriesActiveArray.push(false);
    }
    this.categoriesActiveArray[this.categories.length-1]=true;
}






/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
chartData: any= [];
chartLabels: any = [];
backgroundColor:any =[];

public pieChartLabels:string[] = this.chartLabels;
public pieChartData:number[] = this.chartData;
public pieChartColor: any[] = [{  backgroundColor: this.backgroundColor   }];
public pieChartType:string = 'pie';
public pieChartOptions: any={
  legend: false,
  animation: false,
  tooltips: {
    enabled: true,
    bodyFontSize: 20
  }
};



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

public setCurrentDateToDatepicker(){
  var day = this.newDate.getDate();
  var month = this.newDate.getMonth()+1;
  var year = this.newDate.getFullYear().toString();
  if(day<10){
    day="0" + day;
  }else{
    day= ""+day;
  }

  if(month<10){
    month= "0"+month;
  }else{
    month=""+month
  }
  this.datepickerDate = new DateModel;
  this.datepickerDate.formatted = day + "-" + month + "-" + year;
  this.datepickerDate.day = day;
  this.datepickerDate.month = month;
  this.datepickerDate.year = year;
}

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public setCategoryName(value: string, index: number){
    this.categoryName = value;
    for(var i=0; i<this.categoriesActiveArray.length;i++){
      this.categoriesActiveArray[i]=false;
    }
    this.categoriesActiveArray[index]=true;
  }

  value: any;
  category: string;
  date: string;
  description: string;

  public onBlurAddExpenseValue(){
    if(this.value ==undefined || this.value == ""){
        //do nothing
    }else if(!this.value.match(/[a-z]/i)){
      this.value = this.formatValue(this.value) + " €" ;
    }

  }

  public focusFunctionAddValue(){
    if(this.value !=undefined && this.value != "")
    this.value = this.formatValue(this.value) ;
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



  public  onExpenseSubmit(){
    this.authService.getProfile().subscribe(profile =>{
      this.value = this.formatValue(this.value);
        const expense ={
            expenseId: profile.user.nextExpenseDataId,
            value: this.value,
            category: this.categoryName,
            date: this.datepickerDate,
            description: this.description
        };

        if(expense.description==undefined){
          expense.description= '- no description available -'
        }

        var splitterChar: string = "-";
        var seperatorIndex = this.datepickerDate.formatted.length -5
        splitterChar = this.datepickerDate.formatted.charAt(seperatorIndex);

        var dateArr = this.datepickerDate.formatted.split(splitterChar);
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
        expense.date.formatted = day+"-"+month+"-"+dateArr[2];

        //TODO: wenn manuell eingegeben-->checken ob manuell und dann new DAtemodel mit dem formattetem befüllen ...bzw ist ja das dateModel scon durch init als aktuelles datum da...dann muss nur vor der sendung an den server day,month und year gesetzt werden

        if(!this.validateService.validateExpenseValue(expense)){
          this.flashMessage.show("Please fill in a value", {cssClass: 'alert-danger', timeout:3000});
          console.log('value false');
          return false;
        }
        if(!this.validateService.validateExpenseCategory(expense)){
          this.flashMessage.show("Please fill in a category", {cssClass: 'alert-danger', timeout:3000});
          console.log('category false');
          return false;
        }
        if(!this.validateService.validateExpenseDate(expense)){
          this.flashMessage.show("Please fill in a date", {cssClass: 'alert-danger', timeout:3000});
          console.log('date false');
          return false;
        }
        this.monthTotal =0;
        for(var i=0; i<this.categories.length;i++){
          this.categories[i].amount=0;
        }

        if(expense.date.day == null){
          alert('NULL DATE DAY'); //TODO: monatsformat umformatieren
        }

        this.authService.updateUserExpenses(expense).subscribe(data =>{
            if(data.success){
              this.flashMessage.show("Data added", {cssClass: 'alert-success', timeout:1500});
              this.updateProfileData();
              this.clearFormData();
              this.updateChart();
              this.setCurrentDateToDatepicker();

            }else{
              this.flashMessage.show("Failed to add data", {cssClass: 'alert-danger', timeout:1500});
            }
          });
      },
      err => {
        console.log(err);
        return false;
      });
    }

  public clearFormData(){
    this.value = null;
    this.datepickerDate= undefined;
    this.datepickerDate = new DateModel;
    this.description = null;
  }

  public updateChart(){
    if(this.chart !== undefined){
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
    }
  }

  public showDescription(expense: any){

    if(expense.shown){ //wenn geklickte Karte bereits gezeigt--->wiede verdecken
      expense.shown= false;
    }else{ //
      this.tenLatestExpenses.forEach(function(entry) {
          entry.shown = false;
      });
        expense.shown= true;
    }
  }

  monthSortedExpenses: any[] =[];
  dateSortedExpenses: any[] = [];
  tenLatestExpenses: any[] = [];

  public updateProfileData(){
    this.monthTotal =0;
    for(var i=0; i<this.categories.length;i++){
      this.categories[i].amount=0;
    }

    this.authService.getProfile().subscribe(profile =>{
        this.monthSortedExpenses =[];
        this.dateSortedExpenses = [];
        this.tenLatestExpenses = [];
        this.user= profile.user;
        for(var i=0; i<this.user.expenseData.length; i++){
          for(var j=0; j<this.categories.length; j++){
            if(this.user.expenseData[i].date.month == this.currentMonth && this.user.expenseData[i].date.year==this.currentYear && this.user.expenseData[i].category == this.categories[j].name){
              this.categories[j].amount += parseFloat(this.user.expenseData[i].value); //TODO: topTen implementierendrinnen oder draußen und if aufsplitten als current month für äußere und innen nochmal categorie mit for oder so?
              if(this.monthSortedExpenses.length==0){ //Initial Value if array empty --> First Step
                this.monthSortedExpenses.splice(0,0,profile.user.expenseData[i]);
              }else{
                var currentLatestBorder = this.monthSortedExpenses.length;
                for(var k=0; k<currentLatestBorder; k++ ){
                  if(parseInt(profile.user.expenseData[i].date.day)>parseInt(this.monthSortedExpenses[k].date.day) || parseInt(profile.user.expenseData[i].date.day)==parseInt(this.monthSortedExpenses[k].date.day)){
                    this.monthSortedExpenses.splice(k,0,profile.user.expenseData[i]);
                    break;
                  }else if(k==currentLatestBorder-1){
                    this.monthSortedExpenses.push(profile.user.expenseData[i]);
                  }
                }

              }

            }
          }

          if(this.user.expenseData != undefined && this.user.expenseData.length != 0){
              if(this.dateSortedExpenses==undefined || this.dateSortedExpenses.length==0){
                this.dateSortedExpenses.push(this.user.expenseData[0]); //only execute when empty
              }else{
                var sortedBorder=this.dateSortedExpenses.length;
                for(var j=0; j<sortedBorder;j++){// ...iterate through all of the already sorted entries...

                  var newDate = new Date( parseInt(this.user.expenseData[i].date.year) , (parseInt(this.user.expenseData[i].date.month)-1) ,parseInt(this.user.expenseData[i].date.day)   ); //Year - monthIndex - day
                  var comparingToDate = new Date( parseInt(this.dateSortedExpenses[j].date.year) , (parseInt(this.dateSortedExpenses[j].date.month)-1) ,parseInt(this.dateSortedExpenses[j].date.day)   ); //Year - monthIndex - day

                  if(newDate >=comparingToDate){
                    this.dateSortedExpenses.splice(j,0,this.user.expenseData[i]);
                    break;
                  }

                  if(j == sortedBorder-1){ //...and one after the other add a new entry sorted into the sorted List
                    this.dateSortedExpenses.push(this.user.expenseData[i]);
                    break;
                  }
                }
              }


            }


        } // Category total counting and sorting
        if(this.latestActive){
          var counter = this.dateSortedExpenses.length;
          var numberOfCounts =0;
          while(numberOfCounts<10 && counter>0){ // loads up to 10 latest expenses
              this.tenLatestExpenses.push({
                expenseData: this.dateSortedExpenses[numberOfCounts],
                shown: false
              });
            this.tenLatestExpenses[numberOfCounts].expenseData.value = this.formatNumberToCurrency(this.tenLatestExpenses[numberOfCounts].expenseData.value);
            numberOfCounts++;
            counter--;
          }
        }else{
          var counter2 = this.user.expenseData.length-1;

          var numberOfCounts =0;
          while(numberOfCounts<10 && counter2>=0){ // loads up to 10 latest expenses

              this.tenLatestExpenses.push({
                expenseData: this.user.expenseData[counter2],
                shown: false
              });
            this.tenLatestExpenses[numberOfCounts].expenseData.value = this.formatNumberToCurrency(this.tenLatestExpenses[numberOfCounts].expenseData.value);
            numberOfCounts++;
            counter2--;
          }
        }




        for(var i=0; i<this.categories.length;i++){
          this.categories[i].amount = Math.round(this.categories[i].amount * 100) / 100;
          this.monthTotal+= this.categories[i].amount;
        }// totalMonth counting
        this.monthTotal=    Math.round(this.monthTotal * 100) / 100;

        this.monthTotalString= this.formatNumberToCurrency(this.monthTotal.toString());

        for(var i=0;i<this.categories.length;i++){
          this.chartData[i]= this.categories[i].amount;
          this.chartLabels[i]= this.categories[i].name;
          this.backgroundColor[i]= this.categories[i].color;
        }

        this.pieChartData = this.chartData;
        this.updateChart();

      },
      err => {
        console.log(err);
        return false;
      });
  }

  public formatNumberToCurrency(number: string): string{
      var formattedValue ="";
      if(number.indexOf('.') > -1){ //IF '.' already exists in the value
          if(number.indexOf('.')== number.length-1){
            formattedValue= number + '00';
          }else if(number.indexOf('.')== number.length-2){
            formattedValue= number + '0';
          }else{
            formattedValue=number;
          }
      }else{
        formattedValue = number + '.00';
      }
      return formattedValue;
  }


/* ********************     MODAL   ************************* */
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



  public toggleLatestLast(number){
    if(number==0){
      if(!this.latestActive){
        this.latestActive=true;
        this.updateProfileData();
      }
    }else if(number==1){
        if(this.latestActive){
          this.latestActive=false;
        this.updateProfileData();
        }
    }
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


/* ***********************  PRE FORMATTING    ******************************* */

if(expense.description=="" || expense.description==undefined){
    expense.description="- no description available -";
}
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
          this.updateChart();
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
              this.updateChart();
            }else{
              this.flashMessage.show("Failed to delete Expense", {cssClass: 'alert-danger', timeout:1500});
            }
          });
          this.closeModal();
      }
  //  }



}
