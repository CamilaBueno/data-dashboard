var students = newArray.length;
var sprints = newArray[0].sprints.length;
function ativas(periodo){
    var newArray = [];
        for (var i = 0 ; i < periodo.students.length ; i++){
        if (periodo.students[i].active == true){
            newArray.push(periodo.students[i]); 
        }
    }
   

    return newArray;
}