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
