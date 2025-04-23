db.employees.aggregate([
    { $match: { department: "IT" } },
    { $project: { _id: 0, name: 1, salary: 1 } } 
]);


db.employees.aggregate([
    { $project: { _id: 0, name: 1, salary: 1 } } 
]);

db.employees.aggregate([
    { $addFields: { Bonus: { $multiply: [ "$salary",2 ] } } },
]);

db.employees.aggregate([
    { $match: { department: "IT" } },
    { $addFields: { Bonus: { $multiply: [ "$salary",2 ] } } },
    { $project: { _id: 0, name: 1, salary: 1, Bonus: 1 } }, 
]);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            grade: {
                $cond: [{
                    $gte: ["$salary",1500] },
                    "Grade A",
                    "Grade B"],
            },
        },
    },
]);
db.employees.aggregate([
    {
        $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
            $cond: {
            if: { $gte: ["$salary", 1500] },
            then: "Grade A",
            else: "Grade B",
            },
        },
        },
    },
    ]);
db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            grade: {
                $switch: {
                    branches: [
                        { case: {$gte: ["salary",1500] },then:"Grade A" },
                        { case: {$lt: ["salary",1500] },then:"Grade B" },
                    ],
                    default:"Unknown",
                },
            },
        },
    },
]);
  

db.employees.aggregate([
    {
    $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
        $switch: {
            branches: [
            { case: { $gte: ["$salary", 1500] }, then: "Grade A" },
            { case: { $eq: ["$salary", 1500] }, then: "Grade B" },
            ],
            default: "Unknown",
                },
            },
        },
    },
]);