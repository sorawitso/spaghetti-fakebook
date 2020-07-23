const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  text: { type: String, required: true, trim: true }, 
}, {
  toJSON: { virtuals: true },
  timestamps: true,
  collection: 'Comment'
});

// postSchema.virtual('User', { 
//   ref: 'User', //ลิงก์ไปที่โมเดล Comment
//   localField: '_id', //_id ฟิลด์ของโมเดล Post (ไฟล์นี้)
//   foreignField: 'post' //post ฟิลด์ของโมเดล Comment (fk)
// })

const comment = mongoose.model('Comment', CommentSchema);

module.exports = comment;