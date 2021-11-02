var hamburger_menu = document.querySelector(".hamburger_menu");
var dd_wrap = document.querySelector(".dd_wrap");
var a_parent = document.querySelector(".a_parent");

hamburger_menu.addEventListener("click", function(){
  dd_wrap.classList.toggle("active");
  a_parent.forEach(function(aitem){
    aitem.classList.remove("active");
  })
})


a_parent.forEach(function(aitem){

  aitem.addEventListener("click",function(){
    a_parent.forEach(function(aitem){
      aitem.classList.remove("active");
    })
    aitem.classList.add("active");

  })
})






// const week_head = document.getElementById("week_head");
// const selfcare_menu = document.getElementById("selfcare_menu");
// const images=["clock.jpg","granola.jpg","art.jpg","chio.jpg","stretch.jpg","outside.jpg","facial.jpg","smoothie.jpg","workout.jpg","callmom.jpg","webrec.jpg","friend.jpg","sleepin.jpg","shower.jpg","family.jpg","snack1.jpg","cesar.jpg","zoom.jpg","fridayfriends.jpg","snack2.jpg",""];
//
// let entities = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//
// let entity_list = [['wake up at 9:00am','make a smoothie','start internship','call family','eat dinner at 7:00 pm'],
// ['wake up at 8:30 am','eat granola','stetch','call one friend','remember! no snacks before bed'],
// ['wake up at 10:00 am','do art, be happy','call mom','eat lunch at 1:00 pm','remember! no snacks before bed'],
// ['wake up at 9:30 am','eat breakfast at sorority house','go to web recitation','stretch','stay outside for at least an hour'],
// ['wake up at 9:00 am', 'stetch','be outside today','be with friends!'],
// ['wake up whenever, sleep in!','have fun','be outside','think of your priorities','remember! no snacks before bed'],
// ['start off day slowly','workout','facial','shower','get ready for the week']];
//
// const num_ent = entities.length;
//
// for(i=0; i<num_ent; i++){
//   let ent_category = entities[i];
//   let ent_list = entity_list[i];
//   console.log('Category:' + ent_category);
//   console.log('Entities in this category: \n' + ent_list);
//
//   let identifier = 'egroup_' + i;
//   let weekday = document.createElement('h2');
//
//   weekday.innerHTML = ent_category;
//
//   let daybutton = document.createElement('div');
//   daybutton.id = identifier;
//   daybutton.classList.add('etab_tab');
//   daybutton.addEventListener('click', tabSwitch, false);
//   daybutton.appendChild(weekday);
//
//   week_head.appendChild(daybutton);
//
//   let body = document.createElement('section');
//   body.id = identifier + '_body';
//   body.classList.add('etab_body','hidden');
//
//   let eulist = document.createElement ('ul');
//   for (j=0; j<ent_list.length; j++){
//   let ent = document.createElement('li');
//     ent.innerHTML = ent_list[j];
//     eulist.appendChild(ent);
//   }
//
//     body.appendChild(eulist);
//     selfcare_menu.appendChild(body);
//
//     if(i==0){// set to display first category
//       daybutton.classList.add('active');
//       body.classList.remove('hidden');
// }
// }
//
// function tabSwitch(e) {
//   let tab = e.target.parentNode.id;
//   console.log('switching to tab:' + tab);
//   let body = tab + '_body';
//
//   let active_day = document.getElementsByClassName('active');
//   console.log ('Active Elements: ' + active_day);
//   while(active_day.length){
//     let active_menu = active_day[0].id + '_body';
//     console.log('Hiding the body for: ' + active_menu);
//     active_day[0].classList.remove('active');
//
//     document.getElementById(active_menu).classList.add('hidden');
//
//   }
//
//   if(e.target.tagName == "H2"){
//     e.target.parentNode.classList.add("active");
//   }else{
//     e.target.classList.add("active");
//   }
//   document.getElementById(active_day[0].id + "_body").classList.remove('hidden');
// }
//
//
// let imgcount = 1;
// function changeImage(){
//  console.log("hello world!");
//  document.getElementById("mondayimg1").src="week8/assets/"+ images[imgcount];
//  imgcount ++;
//
//  if(imgcount>23){imgcount=0;
//  }
// }
