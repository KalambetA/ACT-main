$(document).ready(function(){
  $('.bxslider').bxSlider();

  $('form').submit(function(e){
		e.preventDefault();
		$(this)
			.find('.checked')
			.each(function(){
				if($(this).val()==''){
					$(this).css('border-color','red')
				}
				else{
					$(this).css('border-color','green')
				}
			})
	})
});