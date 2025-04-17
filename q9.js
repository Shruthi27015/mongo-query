db.employees.find({
    salary: { $gte: 1500 },
    department: "HR",
  });
  
  db.employees.find({
    $or: [
      {
        salary: { $gte: 1500 },
      },
      { department: "HR" },
    ],
  });
  
  db.employees.find({
    $and: [
      {
        salary: { $gte: 1500 },
      },
      { department: "HR" },
    ],
  });
  
  db.employees.find({ c1 });
  db.employees.find({ c1, c2 });
  db.employees.find({ $or: [{ c1 }, { c2 }] });
  db.employees.find({ $and: [{ c1 }, { c2 }] });
  
  db.employees.find({
    $nor: [
      {
        salary: { $gte: 1500 },
      },
      { department: "HR" },
    ],
  });
  
  db.employees.find(
      { department: { $ne: "HR" } });
  
  db.employees.insertOne({
      name:"test1",
      email:"test1@email.com"
  })
  
  db.employees.find({
      department:{$exists:false}
  })