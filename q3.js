db.users.insertMany([
    {
      name: "Mike",
      email: "mike@email.com",
      pass: "1234",
    },
    {
      name: "Cathy",
      email: "cathy@email.com",
      pass: "1234",
    },
  ]);
  
  
  db.users.find()
  
  db.users.findOne()
  
  db.users.find().limit(2)
  
  db.users.find().skip(1)
  
  db.users.countDocuments()