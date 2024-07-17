function fng(){
    localStorage.clear()
    document.getElementById("main").innerHTML=""
    location.reload()
}
var num=0;
var boy=1;
var girl=1;
var student;
window.onload = ()=>{
    
   
var data=localStorage.getItem("all")
var data1=localStorage.getItem("pres")
if(data || data1){
    var students=JSON.parse(data)
    var l=students.length
document.getElementById("studnetnum").innerHTML=l
document.getElementById("studnetnum1").innerHTML=l


for(let i=0;i<students.length;i++){
    
    studata(students[i])

    if(students[i].genderof === "male"){
        document.getElementById("boy").innerHTML=boy++
    }
    else if(students[i].genderof === "female"){
        document.getElementById("girl").innerHTML=girl++
    }
    }
}
}


document.getElementById("add").addEventListener("click",()=>{
    location.reload()

    const name = document.getElementById("name").value;
    const email1 = document.getElementById("email1").value;
    const gender = document.getElementById("gender").value;
var all=
    { nameof: name ,
     email1of: email1 ,
     genderof: gender }

 student=JSON.parse( localStorage.getItem("all"))||[]
student.push(all)

localStorage.setItem("all",JSON.stringify(student))
studata(all)





}
)

function studata(student){
 

var main=document.getElementById("main")
var div=document.createElement("Div")

div.innerHTML+=`
<div class="col-12 d-flex flex-column">

  <div class="d-flex col-12 flex-row justify-content-around align-content-end ">
<div class="d-flex col-10 px-1  mt-3">

<p class="px-2 col-4"> ${student.nameof}<p>
  
<p class="px-2 col-6">${student.email1of}</p>
<p class="px-2 col-2">${student.genderof}</p>
</div>
<div class="d-flex  col-2 flex-row justify-content-end align-content-end">
<button class="edit"><i class="far fa-edit"></i></button>
<button class="remove-btn"><i class="fa-solid fa-trash-can"></i></button>
</div>   
</div>
</div>
`
div.querySelector('.edit').addEventListener('click', () => {
document.getElementById("editModal").style.display="block"
// console.log(editGender.value);
document.getElementById("saveEdit").addEventListener("click",()=>{
    var editName=document.getElementById("editName").value
    var editEmail=document.getElementById("editEmail").value
    var editGender=document.getElementById("gender1").value
    // console.log(student.nameof="none");
    div.innerHTML=`
    <div class="col-12 d-flex flex-column">

  <div class="d-flex col-12 flex-row justify-content-around align-content-end ">
<div class="d-flex col-10 px-1  mt-3">

<p class="px-2 col-4"> ${student.nameof=editName}<p>
  
<p class="px-2 col-6">${student.email1of=editEmail}</p>
<p class="px-2 col-2">${student.genderof=editGender}</p>
</div>
<div class="d-flex  col-2 flex-row justify-content-end align-content-end">
<button class="edit"><i class="far fa-edit"></i></button>
<button class="remove-btn" id="re" ><i class="fa-solid fa-trash-can"></i></button>
</div>   
</div>
</div>
    `
    document.getElementById("re").addEventListener("click",()=>{
        div.remove()
    })
    document.getElementById("editModal").style.display="none"
})
})


div.querySelector('.remove-btn').addEventListener('click', () => {
    div.remove();

    let students = JSON.parse(localStorage.getItem("all")); 
localStorage.setItem("all", JSON.stringify(students));
    let index = -1;
    for (let i = 0; i < students.length; i++) {
        if (students[i].nameof === student.nameof && students[i].email1of === student.email1of) {
            index = i;
     
            // break;
        
        }
        
    }


    if (index !== -1) {
        students.splice(index, 1);
   
    }

    localStorage.setItem("all", JSON.stringify(students));


    let l = students.length;
    document.getElementById("studnetnum").innerHTML = l;
    document.getElementById("studnetnum1").innerHTML = l;



 
});

main.appendChild(div);


}





// let num = 0;
// let boy = 0;
// let girl = 0;
// // Load data from localStorage on page load
// window.onload = function() {
//     var savedData = localStorage.getItem("students");
//     if (savedData) {
//         var students = JSON.parse(savedData);
//         for (var i = 0; i < students.length; i++) {
//             addStudentToDOM(students[i]);
//         }
//     }
// };
// // localStorage.clear()
// document.getElementById("add").addEventListener("click", () => {
//     const name = document.getElementById("name").value;
//     const email1 = document.getElementById("email1").value;
//     const gender = document.getElementById("gender").value;

//     const student = {
//         nameof: name,
//         email1of: email1,
//         genderof: gender
//     };

//     const students = JSON.parse(localStorage.getItem("students")) || [];
//     // console.log(students);
//     students.push(student);
//     localStorage.setItem("students", JSON.stringify(students));

//     addStudentToDOM(student);
//     // updateCounts(students);
// });
// // localStorage.clear()
// function addStudentToDOM(student) {
//     console.log(student);
//     const main = document.getElementById("main");
//     const div = document.createElement("div");

//     div.innerHTML = `
//         <div class="col-12 d-flex flex-column student-entry">
//             <div class="d-flex col-12 flex-row justify-content-around align-content-end">
//                 <div class="d-flex col-10 px-1 mt-3">
//                     <p class="px-2 col-4">${student.nameof}</p>
//                     <p class="px-2 col-5">${student.email1of}</p>
//                     <p class="px-2 col-4">${student.genderof}</p>
//                 </div>
//                 <div class="d-flex col-2 flex-row justify-content-end align-content-end">
//                     <button class="edit-btn">Edit</button>
//                     <button class="remove-btn">Remove</button>
//                 </div>
//             </div>
//         </div>
//     `;
//     main.appendChild(div);

//     div.querySelector('.edit-btn').addEventListener('click', () => editStudent(student, div));
    // div.querySelector('.remove-btn').addEventListener('click', () => removeStudent(student, div));
// }

