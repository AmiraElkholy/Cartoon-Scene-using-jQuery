(function($){

	var win = $(window),
		W = win.width(),
		H = win.height(),
		fish = $('div.fish')
					.show()
					.css({	
							'top' : H - 380 ,
							'left': W - 350
						});
		


	
	function moveFish() {

		// $('#msg').fadeIn(4000);

		// fish.animate ({
		// 		'margin-left' : - ( W - 20 )
		// 	},6500)
		// 	.delay(200)
		// 	.animate ({
		// 		'margin-left' : 0
		// 	},5000);

		for (var i=0; i<3; i++)
		{
			fish.animate ({
				'margin-left' : - ( W - 20 )
			},5000-1300*i)
			.delay(200)
			.animate ({
				'margin-left' : 0
			},4000-1300*i);
		}
	} 
	moveFish();


	function showFood(){

		fish.animate({
			'margin-left' : - ( W - 500 )
		},5000)

		$('div.food').animate({
			'margin-top' : 380
		},25000)
		.fadeOut(1000, function(){
			$('p').hide();
		})

	}

	showFood();


})(jQuery);