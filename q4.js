db.users.insertMany([
    {name:"test1",age:23},
    {name:"test2",age:21,location:"Hyderabad"},
    {name:"test3",country:"India"},
]);
db.users.find({name:"test1"});

db.users.find({},{_id:0,name:1});

db.users.find({}, { _id: false, name: true });
  
db.users.find(
    { email: "cathy@email.com" }, 
    { _id: false, name: true }
);