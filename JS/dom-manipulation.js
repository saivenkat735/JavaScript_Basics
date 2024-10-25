var flag=true;
function display(){
    //first grab holf of <p> through its id
    var para1=document.getElementById("para1");
    if (flag){
        para1.innerHTML="Hello ji";
        flag=false;
    }
    else{
        para1.innerHTML="";
        flag=true;
    }
}   
    
