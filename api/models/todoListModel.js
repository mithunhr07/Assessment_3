var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Ename: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  E_id:{
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Email:{
    type: String,
    required: 'Kindly enter the name of the task'
  },
  DOB:{
    type: String,
    required: 'Kindly enter the name of the task'
  },
 JoiningDate:{
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Mob_num:{
    type: String,
    required: 'Kindly enter the name of the task'
  }

//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
});

module.exports = mongoose.model('Tasks', TaskSchema);

