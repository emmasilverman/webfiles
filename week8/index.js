// console.log("hello world");


// console.log (document.getElementsByClassName("options"));
// console.log (document.getElementsByClassName("options")[0].innerHTML);
// [i]=0

const images = ["lunch.jpg","chio.jpg","granola.jpg"];
const title = ["panini","salad bar", "granola"];



for(i=0;i<document.getElementsByClassName("options").length;i++){
  document.getElementsByClassName("label")[i].innerHTML = title[i];

  // console.log(document.getElementsByClassName("options")[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src="week8/assets/' +images[i] + ' ">';
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  // document.getElementsByClassName('options')[i].innerHTML += "<img src='week8/assets/lunch.jpg'>";
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});

  // ("click", function(){alert("you clicked a div")}));
  // console.log(i);
}
function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classlist.toggle("blue");
}
// or for(i=0;i<3;i++){}
