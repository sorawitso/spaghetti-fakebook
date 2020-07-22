const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  user_id : { type: ObjectId , required: true , ref : 'User'  },
  post_id : { type: ObjectId , required: true , ref : 'Post'  },
  text: { type: String , required: true , trim: true }
 }, {
  toJSON: {virtuals: true} ,
  timestamps: true,
  collection: 'Comment'
});

// postSchema.virtual('User', { 
//   ref: 'User', //ลิงก์ไปที่โมเดล Comment
//   localField: '_id', //_id ฟิลด์ของโมเดล Post (ไฟล์นี้)
//   foreignField: 'post' //post ฟิลด์ของโมเดล Comment (fk)
// })

const comment = mongoose.model('Comment', CommentSchema );

module.exports = comment;