const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
let daysoftheweek = "monday";

for (i=0;i<days.length;i++){
  document.getElementsByClassName("daytype")[i].innerHTML ="<h2>" + days[i] +"</h2>";
  document.getElementsByClassName("daytype")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("daytype")[i].id = days[i];
  console.log(i);
}


function setActive(e){
  console.log("clicked");

  let selfcare = document.getElementsByClassName("active")[0].id + "menu";
  console.log(selfcare);
  document.getElementById(selfcare).style.display = 'none';


  document.getElementsByClassName("active")[0].classList.toggle("active");


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
    day = e.target.innerHTML;
  }else{
    e.target.classList.toggle("active");
    day = e.target.firstChild.innerHTML;
  }
  console.log(day);
  document.getElementById(day + "menu").style.display = "block";
  document.getElementById("image").innerHTML = "<img src='assets/" + day + ".jpg' >"

}


// for (i=0; i<num_ent; i++) {
// let eulist = document.createElement('ul');
// for (j=0; j<elist.length; j++) {
//     let ent = document.createElement('li');
//     ent.innerHTML = elist[j];
//     eulist.appendChild(ent);
//   }
