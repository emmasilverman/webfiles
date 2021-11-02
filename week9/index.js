// grab key elements for later referencing
const week_head = document.getElementById("week_head");
const selfcare_menu = document.getElementById("selfcare_menu");
const images=["clock.jpg","granola.jpg","art.jpg","chio.jpg","stretch.jpg","outside.jpg","facial.jpg","smoothie.jpg","workout.jpg","callmom.jpg","webrec.jpg","friend.jpg","sleepin.jpg","shower.jpg","family.jpg","snack1.jpg","cesar.jpg","zoom.jpg","fridayfriends.jpg","snack2.jpg",""];
// arrays of the actual content that will be on the page
let entities = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// array of (arrays of strings)
let entity_list = [['wake up at 9:00am','make a smoothie','start internship','call family','eat dinner at 7:00 pm'],
['wake up at 8:30 am','eat granola','stetch','call one friend','remember! no snacks before bed'],
['wake up at 10:00 am','do art, be happy','call mom','eat lunch at 1:00 pm','remember! no snacks before bed'],
['wake up at 9:30 am','eat breakfast at sorority house','go to web recitation','stretch','stay outside for at least an hour'],
['wake up at 9:00 am', 'stetch','be outside today','be with friends!'],
['wake up whenever, sleep in!','have fun','be outside','think of your priorities','remember! no snacks before bed'],
['start off day slowly','workout','facial','shower','get ready for the week']];

// store the number of entity categories
const num_ent = entities.length;
// loop through number of entities to create elements for them
for(i=0; i<num_ent; i++){
  let ent_category = entities[i]; // get current entity category string
  let ent_list = entity_list[i]; // get corresponding array for this entity category
  console.log('Category:' + ent_category);
  console.log('Entities in this category: \n' + ent_list); // \n is a newline character (equivalent to Enter)

  // for making a common id for anything related to this entity category
  let identifier = 'egroup_' + i;

   // text that will display on the tab
   let weekday = document.createElement('h2');
   weekday.innerHTML = ent_category;

   // the tab button
   let daybutton = document.createElement('div');
   daybutton.id = identifier;
   daybutton.classList.add('etab_tab');

   // element.addEventListener(event, handler, boolean useCapture); // useCapture defaults to false
   daybutton.addEventListener('click', tabSwitch, false);

   // append the tab and its title to the DOM
   daybutton.appendChild(weekday);
   week_head.appendChild(daybutton);

   // create the body for this category
   let body = document.createElement('section');
   body.id = identifier + '_body';
   body.classList.add('etab_body','hidden');

    // put all the elements into an unordered list
    let eulist = document.createElement ('ul');
    for (j=0; j<ent_list.length; j++){
      let ent = document.createElement('li');
      ent.innerHTML = ent_list[j];
      eulist.appendChild(ent);
    }
    // append the body to the page
    body.appendChild(eulist);
    selfcare_menu.appendChild(body);

    if(i==0){// set to display first category
      daybutton.classList.add('active');
      body.classList.remove('hidden');
    }
}
function tabSwitch(e) {
  let tab = e.target.parentNode.id;
  console.log('switching to tab:' + tab);
  let body = tab + '_body';

  //

   // clear all existing instances of active tab
   let active_day = document.getElementsByClassName('active');
   console.log ('Active Elements: ' + active_day);
   while(active_day.length){
     let active_menu = active_day[0].id + '_body';
     console.log('Hiding the body for: ' + active_menu);
     active_day[0].classList.remove('active');

     // atab[0] re-fetches the list and grabs the first element
     document.getElementById(active_menu).classList.add('hidden');
   }
   // will usually return true, but safeguard
   if(e.target.tagName == "H2"){
     e.target.parentNode.classList.add("active");
   }else{
     e.target.classList.add("active");
   }
   document.getElementById(active_day[0].id + "_body").classList.remove('hidden');
}


let imgcount = 1;
function changeImage(){
  console.log("hello world!");
  document.getElementById("mondayimg1").src="week8/assets/"+ images[imgcount];
  imgcount ++;

  if(imgcount>23){imgcount=0;
  }
}




// Casey's Way of doing it



// // console.log("hello world");
// // weeks=["monday","tuesday","wednesday","thursday","friday", "saturday","sunday"];
// let weeks = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
// let images = ["art.jpg","callmom.jpg","cesar.jpg","chio.jpg","clock.jpg","facial.jpg","family.jpg","fridayfriends.jpg","friend.jpg","granola.jpg","lunch.jpg","lunch.jpg","makeupicon.jpg","outside.jpg","shower.jpg","sleepin.jpg","smoothie.jpg","snack1.jpg","snack2.jpg","snack3.jpg","stretch.jpg","webrec.jpg","workout.jpg","zoom.jpg"];
//
// for(i=0; i<document.getElementsByClassName("week").length; i++){
//   console.log(weeks[i]);
//   document.getElementsByClassName("week")[i].innerHTML = "<h2>" + weeks[i] + "</h2>";
//
//   document.getElementsByClassName("week")[i].addEventListener("click", setActive, false);
//   // = weeks[i];
//   document.getElementsByClassName("week")[i].id = weeks[i];
//
//   // document.getElementsById("one").addEventListener("click",setActiveButton,false);
//   // document.getElementsById("two").addEventListener("click",setActiveButton,false);
// }
//
// function setActive(e){
//
//   // console.log("clicked");
//   // e.target.classList.toggle("active");
//   // console.toggle.className("active");
//   console.log(e.target.innerHTML);
//
//   if(e.target.tagName == "H2"){
//     console.log("h2 clicked");
//       e.target.parentNode.classList.toggle("active");
//   }else{
//     console.log("div cliked");
//     e.target.classList.toggle("active");
//   }
//
// }
//
//
// //
// // function setActiveButton(e){
// //   e.target.classList.toggle("active");
// }
