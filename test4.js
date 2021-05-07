// Expected Result : 
// [
//   { name: 'Rahman', school_name: 'STJK' },
//   { name: 'Budi', school_name: 'STJK' }
// ]
// Distudentstion :
// Return a formatted array for students of specific school using id of school.
const students = [
  {
    id: "1",
    name: "Ryan",
    school: { id: "1", short_name: "PLMK" },
  },
  {
    id: "2",
    name: "Ari",
    school: { id: "1", short_name: "PLMK" },
  },
  {
    id: "3",
    name: "Rahman",
    school: { id: "2", short_name: "STJK" },
  },
  {
    id: "4",
    name: "Budi",
    school: { id: "2", short_name: "STJK" },
  },
  {
    id: "5",
    name: "Jaka",
    school: { id: "1", short_name: "PLMK"
    },
  }
]
const schoolId = '2';

console.log(students[1].school.id);
console.log(students);

function result(students, schoolId) {
  // Your Code Here
  let myObj={};
  let myArray=[];
  for(let i=0;i<students.length;i++){
    if(students[i].school.id==schoolId){
      myObj={name:students[i].name,
          school_name:students[i].school.short_name};
      myArray.push(myObj);
      }
  }
  return myArray;
}

console.log(result(students, schoolId));