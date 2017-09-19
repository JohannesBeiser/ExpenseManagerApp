import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


  validateRegister(user){
    if(user.name== undefined || user.email== undefined || user.username== undefined || user.password== undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  validateExpenseValue(expense){
      if(expense.value == undefined || isNaN(expense.value+1 || expense.value == null || expense.value =="")){
        return false;
      }else{
        return true;
      }
  }

  validateExpenseDate(expense){
    if(expense.date == undefined || expense.date.day == undefined || expense.date.year == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateExpenseCategory(expense){
    if(expense.category == undefined) {
      return false;
    }else{
      return true;
    }
  }


}
