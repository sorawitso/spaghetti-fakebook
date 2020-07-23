const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id : { type: mongoose.Schema.Types.ObjectId , required: true , ref : 'User'  },
  text: { type: String , required: true , trim: true },
  img : { type: String , required: true, trim: true } ,
  recentComments : { type : Array }
}, {
  toJSON: {virtuals: true} ,
  timestamps: true,
  collection: 'Post'
});

postSchema.virtual('comments', {
  ref: 'Comment', //ลิงก์ไปที่โมเดล Comment
  localField: '_id', //_id ฟิลด์ของโมเดล Post (ไฟล์นี้)
  foreignField: 'post' //post ฟิลด์ของโมเดล Comment (fk)
});

const post = mongoose.model('Post', postSchema );

module.exports = post;