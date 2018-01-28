const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username :{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nextExpenseDataId: {
      type: Number,
      required: true
    },
    expenseData: {
        type: Array // Array containing all of the users Data
    }
});

const User = module.exports= mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {

    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {

    const query = { username: username};
    User.findOne(query,callback);
};

module.exports.addUser = function (newUser, callback) {

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
          if(err) throw err;
          newUser.password =hash;
          newUser.save(callback);
      });
  });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {

    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};

module.exports.addExpenseToUser = function (expense, username, callback) {
    console.log('AddEXToUsr entered');
    User.update(
        { username: username },
        {
            $push: {
                expenseData: {expenseId:expense.expenseId, value: expense.value, category: expense.category, date: expense.date, description: expense.description }
            }
        }, callback
    );

    User.update(
    { username: username },
    {
        $inc: {
            nextExpenseDataId: 1
        }
    }, function(){
      console.log('Expense ID incremented')
    }
);
};


module.exports.editExpense = function (expense,expenseIndex,username, callback) {
   console.log('Edit Expense entered');

    User.update(
      { username: username, 'expenseData.expenseId': expenseIndex},
      {$set: {
        'expenseData.$.value' : expense.value,
        'expenseData.$.date' : expense.date,
        'expenseData.$.category' : expense.category,
        'expenseData.$.description' : expense.description }
      },callback
    )


};



module.exports.deleteExpense = function (index, username, callback) {
    console.log('editExpense in User near DB entered');

      User.update(
          {username: username},
          {$pull: { expenseData: {expenseId: index}}
          },callback
     );
};


module.exports.resetDatabase = function (username,callback) {
  console.log('resetting Database for: ' + username);
    User.update(
        {username: username},
        {$pull: { expenseData: {$exists: true}}
        },callback
        );
};

module.exports.initDatabase = function (username,callback) {
  console.log('initiating Database for: ' + username);

  User.update(
    { username: username},
    {$set: {'expenseData' : [
      {
                          "expenseId" : 3,
                          "value" : "270.00",
                          "category" : "Accommodation",
                          "date" : {
                                  "day" : "01",
                                  "month" : "12",
                                  "year" : "2017",
                                  "formatted" : "01-12-2017",
                                  "momentObj" : "2017-11-30T23:00:00.000Z"
                          },
                          "description" : "Lease"
                  },
                  {
                          "expenseId" : 4,
                          "value" : "4.50",
                          "category" : "Transport",
                          "date" : {
                                  "day" : "03",
                                  "month" : "12",
                                  "year" : "2017",
                                  "formatted" : "03-12-2017",
                                  "momentObj" : "2017-12-02T23:00:00.000Z"
                          },
                          "description" : "Bus"
                  },
                  {
                          "expenseId" : 5,
                          "value" : "73.65",
                          "category" : "Food",
                          "date" : {
                                  "momentObj" : null,
                                  "formatted" : "06-12-2018",
                                  "year" : "2018",
                                  "month" : "12",
                                  "day" : "06"
                          },
                          "description" : "Week of Food - REWE"
                  },
                  {
                          "expenseId" : 6,
                          "value" : "5.00",
                          "category" : "Multimedia",
                          "date" : {
                                  "day" : "05",
                                  "month" : "11",
                                  "year" : "2017",
                                  "formatted" : "05-11-2017",
                                  "momentObj" : "2017-11-04T23:00:00.000Z"
                          },
                          "description" : "Spotify"
                  },
                  {
                          "expenseId" : 7,
                          "value" : "19.00",
                          "category" : "Multimedia",
                          "date" : {
                                  "day" : "07",
                                  "month" : "11",
                                  "year" : "2017",
                                  "formatted" : "07-11-2017",
                                  "momentObj" : "2017-11-06T23:00:00.000Z"
                          },
                          "description" : "Adobe CC Subscription"
                  },
                  {
                          "expenseId" : 8,
                          "value" : "120.00",
                          "category" : "Clothing & Hygiene",
                          "date" : {
                                  "day" : "17",
                                  "month" : "11",
                                  "year" : "2017",
                                  "formatted" : "17-11-2017",
                                  "momentObj" : "2017-11-16T23:00:00.000Z"
                          },
                          "description" : "Jeans Zara"
                  },
                  {
                          "expenseId" : 9,
                          "value" : "10.00",
                          "category" : "General",
                          "date" : {
                                  "day" : "15",
                                  "month" : "11",
                                  "year" : "2017",
                                  "formatted" : "15-11-2017",
                                  "momentObj" : "2017-11-14T23:00:00.000Z"
                          },
                          "description" : "Present for birthday"
                  },
                  {
                          "expenseId" : 10,
                          "value" : "55.00",
                          "category" : "Leisure",
                          "date" : {
                                  "day" : "15",
                                  "month" : "12",
                                  "year" : "2017",
                                  "formatted" : "15-12-2017",
                                  "momentObj" : "2017-12-14T23:00:00.000Z"
                          },
                          "description" : "Europa Park"
                  },
                  {
                          "expenseId" : 11,
                          "value" : "4.50",
                          "category" : "Food",
                          "date" : {
                                  "day" : "09",
                                  "month" : "12",
                                  "year" : "2017",
                                  "formatted" : "09-12-2017",
                                  "momentObj" : "2017-12-08T23:00:00.000Z"
                          },
                          "description" : "Kebab"
                  },
                  {
                          "expenseId" : 12,
                          "value" : "19.00",
                          "category" : "Multimedia",
                          "date" : {
                                  "day" : "07",
                                  "month" : "12",
                                  "year" : "2017",
                                  "formatted" : "07-12-2017",
                                  "momentObj" : "2017-12-06T23:00:00.000Z"
                          },
                          "description" : "Adobe CC Subsription"
                  },
                  {
                          "expenseId" : 13,
                          "value" : "5.00",
                          "category" : "Multimedia",
                          "date" : {
                                  "day" : "09",
                                  "month" : "12",
                                  "year" : "2017",
                                  "formatted" : "09-12-2017",
                                  "momentObj" : "2017-12-08T23:00:00.000Z"
                          },
                          "description" : "Spotify"
                  },
                  {
                          "expenseId" : 14,
                          "value" : "22.00",
                          "category" : "General",
                          "date" : {
                                  "day" : "28",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "28-01-2018",
                                  "momentObj" : null
                          },
                          "description" : "Amazon"
                  },
                  {
                          "expenseId" : 15,
                          "value" : "22.00",
                          "category" : "Food",
                          "date" : {
                                  "day" : "06",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "06-01-2018",
                                  "momentObj" : "2018-01-05T23:00:00.000Z"
                          },
                          "description" : "Dinner"
                  },
                  {
                          "expenseId" : 16,
                          "value" : "8.95",
                          "category" : "Multimedia",
                          "date" : {
                                  "momentObj" : "2018-01-24T23:00:00.000Z",
                                  "formatted" : "25-01-2018",
                                  "year" : "2018",
                                  "month" : "01",
                                  "day" : "25"
                          },
                          "description" : "USB Drive"
                  },
                  {
                          "expenseId" : 17,
                          "value" : "3.00",
                          "category" : "Leisure",
                          "date" : {
                                  "momentObj" : null,
                                  "formatted" : "12-01-2018",
                                  "year" : "2018",
                                  "month" : "01",
                                  "day" : "12"
                          },
                          "description" : "- no description available -"
                  },
                  {
                          "expenseId" : 18,
                          "value" : "19.00",
                          "category" : "Transport",
                          "date" : {
                                  "day" : "16",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "16-01-2018",
                                  "momentObj" : "2018-01-15T23:00:00.000Z"
                          },
                          "description" : "BW-ticket"
                  },
                  {
                          "expenseId" : 19,
                          "value" : "40.62",
                          "category" : "Food",
                          "date" : {
                                  "day" : "14",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "14-01-2018",
                                  "momentObj" : "2018-01-13T23:00:00.000Z"
                          },
                          "description" : "Food for the week"
                  },
                  {
                          "expenseId" : 20,
                          "value" : "20.00",
                          "category" : "Clothing & Hygiene",
                          "date" : {
                                  "day" : "23",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "23-01-2018",
                                  "momentObj" : "2018-01-22T23:00:00.000Z"
                          },
                          "description" : "Cap"
                  },
                  {
                          "expenseId" : 21,
                          "value" : "63.68",
                          "category" : "Transport",
                          "date" : {
                                  "day" : "28",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "28-01-2018",
                                  "momentObj" : null
                          },
                          "description" : "Month of UBER"
                  },
                  {
                          "expenseId" : 22,
                          "value" : "90.00",
                          "category" : "Multimedia",
                          "date" : {
                                  "day" : "18",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "18-01-2018",
                                  "momentObj" : "2018-01-17T23:00:00.000Z"
                          },
                          "description" : "New SSD-Drive"
                  },
                  {
                          "expenseId" : 23,
                          "value" : "1.00",
                          "category" : "General",
                          "date" : {
                                  "day" : "06",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "06-01-2018",
                                  "momentObj" : "2018-01-05T23:00:00.000Z"
                          },
                          "description" : "Bet with friend"
                  },
                  {
                          "expenseId" : 24,
                          "value" : "6.80",
                          "category" : "Food",
                          "date" : {
                                  "day" : "13",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "13-01-2018",
                                  "momentObj" : "2018-01-12T23:00:00.000Z"
                          },
                          "description" : "Café"
                  },
                  {
                          "expenseId" : 25,
                          "value" : "270.00",
                          "category" : "Accommodation",
                          "date" : {
                                  "day" : "01",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "01-01-2018",
                                  "momentObj" : "2017-12-31T23:00:00.000Z"
                          },
                          "description" : "Rent"
                  },
                  {
                          "expenseId" : 26,
                          "value" : "120.00",
                          "category" : "Leisure",
                          "date" : {
                                  "day" : "06",
                                  "month" : "01",
                                  "year" : "2018",
                                  "formatted" : "06-01-2018",
                                  "momentObj" : "2018-01-05T23:00:00.000Z"
                          },
                          "description" : "Trip to London"
                  }
    ]}
    },callback
  )



};
