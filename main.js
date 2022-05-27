name_of_the_student_array=[];

function submit()
{

    var S_name1=document.getElementById("name1").value;
    var S_name2=document.getElementById("name2").value;
    var S_name3=document.getElementById("name3").value;
    var S_name4=document.getElementById("name4").value;

    name_of_the_student_array.push(S_name1);
    name_of_the_student_array.push(S_name2);
    name_of_the_student_array.push(S_name3);
    name_of_the_student_array.push(S_name4); 

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display ="none";
    document.getElementById("sort_button").style.display ="inline-block";

}

function sort()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;


}