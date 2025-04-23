db.employees.aggregate([
    { $project: { _id: 0, name: 1, salary: 1, department: 1 } },
    { $sort: { name: 1 } },
    { $skip: 1},
    { $limit: 1},
]);