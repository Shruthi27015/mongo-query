db.employees.updateMany(
    {},
    { $set: {points:1} }
);

db.employees.updateMany(
    { email:"cathy@gmail.com"},
    { $inc: {points:3} }
);

db.employees.updateOne(
    {email:"cathy@gmail.com"}, 
    { $inc: { points: -2 } }
);

db.employees.updateMany(
    {}, 
    { $rename: { points:"ratings" } }
);

db.employees.updateMany(
    {}, 
    { $set: {test:1}  }
);

db.employees.updateMany(
    {}, 
    { $unset: {test:""}  }
);