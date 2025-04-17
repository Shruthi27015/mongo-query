db.products.insertOne({
    name: "John",
    email: "john@email.com",
    pass: "1234",
  });
  
db.products.find();
db.products.renameCollection("users")
db.users.find();