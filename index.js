
  var menu_symbol = document.querySelector(".menu_symbol");
	var day_menu = document.querySelector(".day_menu");
	var a_parent =  document.querySelectorAll(".a_parent");

	menu_symbol.addEventListener("click", function(){
		day_menu.classList.toggle("active");
		a_parent.forEach(function(aitem){
			aitem.classList.remove("active");
		})
	})



	a_parent.forEach(function(aitem){

		aitem.addEventListener("click", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			aitem.classList.add("active");
		})
	})
