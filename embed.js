var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo', { useMongoClient: true });

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
var Post = mongoose.model('post', postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
}, { usePushEach: true });
var User = mongoose.model('user', userSchema);

// var newUser = new User({
//   email: 'Hermione@hogwarts.edu',
//   name: 'Hermione Granger',
// });
//
// newUser.posts.push({
//   title: 'How to brew polyjuice potion',
//   content: 'Just kidding. Go to potions class to learn it!',
// });
//
// newUser.save(function (err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: 'Reflections on Apples',
//   content: 'They are delicious',
// });
//
// newPost.save(function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({ name: 'Hermione Granger' }, function (err, user) {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: '3 Thing I Really Hate',
      content: 'Voldemort. Voldemort. Voldemort.',
    });
    user.save(function (err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
