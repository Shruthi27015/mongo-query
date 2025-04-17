
db.users.deleteOne({ name: "test1" });

db.employees.drop();

db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  address: { city: "Columbus", state: "OH" },
  department: "IT",
  salary: 1456,
  score: [4, 1, 6, 4],
  skills: ["Java", "Python"],
  date: Date(),
});

db.employees.insertOne({
    name: "Cathy George",
    email: "cathy@gmail.com",
    address: { city: "Jacksonville", state: "FL" },
    department: "HR",
    salary: 2500,
    score: [6, 2, 6, 4],
    skills: ["Java", "Python","Reactjs","MongoDB"],
    date: Date(),
  });

  db.employees.insertOne({
    name: "Mike Covington",
    email: "mike@gmail.com",
    address: { city: "Columbus", state: "OH" },
    department: "Admin",
    salary: 1500,
    score: [6, 4],
    skills: ["Java", "Reactjs"],
    date: Date(),
  });
