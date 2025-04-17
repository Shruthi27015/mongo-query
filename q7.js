
db.employees.insertMany([
    { name: "test1", department: "test" },
    { name: "test2", department: "test" },
    { name: "test3", department: "test" },
  ]);
  
  db.employees.deleteOne({ department: "test" });
  
  db.employees.deleteMany({ department: "test" });
  