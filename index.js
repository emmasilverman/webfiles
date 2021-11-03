
  var menu_symbol = document.querySelector(".menu_symbol");
	var dd_wrap = document.querySelector(".dd_wrap");
	var a_parent =  document.querySelectorAll(".a_parent");

	menu_symbol.addEventListener("click", function(){
		dd_wrap.classList.toggle("active");
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
