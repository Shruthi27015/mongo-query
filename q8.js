db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:{$eq:"HR"}}
)

db.employees.find(
    {salary:{$eq:1500}}
)

db.employees.find(
    {salary:{$gt:1500}}
)

db.employees.find(
    {salary:{$lt:1500}}
)

db.employees.find(
    {salary:{$lte:1500}}
)

db.employees.find(
    {salary:{$gte:1500}}
)