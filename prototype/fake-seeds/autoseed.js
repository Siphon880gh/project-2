/**
 * The MongoDB tables are:
 *  - users
 * 
 * 
 * MongoDB ReadMe: https://erikolson186.github.io/zangodb
 */
new zango.Db('goals_social_db').drop(); // Force Sync
var db = new zango.Db('goals_social_db', {
    users: ['_id'],
    posts: ['_id']
});

// <MAJOR: Users>
// Create users.testUser with password testUser
window.users = db.collection('users');

var docs = [{
    username: "testUser",
    password: "testUser"
}]

// Hash password
var myPlainPassword = docs[0].password;
var bcrypt = dcodeIO.bcrypt; // Init bcrypt
var salt = bcrypt.genSaltSync(10); // Prepare salt based on how many rounds
var hashedPassword = bcrypt.hashSync(myPlainPassword, salt); // Finally, generate hashed password
docs[0].password = hashedPassword; // Database will get hashed password instead

users.insert(docs).then(() => {
    return users.find({
        username: { $eq: 'testUser' },
    }).forEach(doc => console.log('users/doc (password shown in prototype for debugging purposes):', doc));
});

// <MAJOR: Posts>
window.posts = db.collection('posts');

var docs = [{
    user_id: 1,
    content: "blah"
}, {
    user_id: 1,
    content: "blah blah"
}, {
    user_id: 1,
    content: "blah blah blah"
}];

posts.insert(docs).then(() => {});