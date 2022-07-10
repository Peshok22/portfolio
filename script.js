jQuery(function(){

	jQuery(".head_inner nav ul li.switch a").on('click', function(e){
		jQuery("body").toggleClass("switchMode")
		e.preventDefault()
	})

})
