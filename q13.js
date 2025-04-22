
use mystore

db.createCollection("Cars")

db.Cars.insertMany([
    {name:"m1"},
    {name:"m2"},
    {name:"m3"},
    {name:"m4"},
    {name:"m5"}]
)

db.Cars.updateMany(
    {},
    {$set:{price:10000}}
)

db.Cars.updateMany({},{$set:{variant:["v1","v2","v3","v4"]}})

db.Cars.updateOne(
    {name:'m1'},
    {$set:{city:["Hyderabad"]}}

)
db.Cars.updateOne(
    {name:'m2'},
    {$set:{city:["Hyderabad"]}}

)
db.Cars.updateOne(
    {name:'m3'},
    {$set:{city:["Hyderabad"]}}

)
db.Cars.updateOne(
    {name:'m2'},
    {$set:{city:["Hyderabad"]}}

)
db.Cars.updateOne(
    {name:'m4'},
    {$set:{city:["Banglore"]}}

)
db.Cars.updateOne(
    {name:'m4'},
    {$set:{city:["Banglore"]}}

)
db.Cars.updateOne(
    {name:'m5'},
    {$set:{city:["Banglore"]}}

)
db.Cars.deleteMany(
    {city:["Banglore"]}
)
db.Cars.findOne(
    {}
)
