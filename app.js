// 1-create object
const person={
    fname:"ahmed",
    lname:"hossam",
    age:"20",
    city:"alex"
}
// 2-convert obj to json
const personJson=JSON.stringify(person)
const fs=require('fs')
// 3-store in file
fs.writeFileSync("data.json",personJson)
// 4-read file (json)
console.log(fs.readFileSync("data.json").toString())
// 5-convert to obj
const personObj=JSON.parse(personJson)
console.log(personObj)
// 6-update data
console.log(person.fname="adel", person.lname="ahmed", person.age="40", person.city="cairo")
// 7-convert obj to json
const person2Json=JSON.stringify(person)
// 8-store in file
fs.writeFileSync("data2.json", person2Json)

