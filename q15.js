db.employees.find({ email: "cathy@gmail.com" }).explain("executionStats");

db.employees.createIndex({ email: 1 });

db.employees.find({ name: "Cathy George" }).explain("executionStats");

db.employees.createIndex({ name: 1 });

db.employees.getIndexes();


db.employees.dropIndex("name_1")

db.employees.dropIndexes()