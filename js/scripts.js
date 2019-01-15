$(".collapsable1").on("click", function(){
			$(".child1").slideToggle();
		});
		$(".collapsable2").on("click", function(){
			$(".child2").slideToggle();
		});
		$(".collapsable3").on("click", function(){
			$(".child3").slideToggle();
		});
		$(".collapsable4").on("click", function(){
				if($(".child4").is(":visible")){
					$(".child4").removeClass("child3");
					$(".child4").slideToggle();
				} else{
					$(".child4").addClass("child3");
					$(".child4").slideToggle();
				}
		});
		$(".collapsable5").on("click", function(){
				if($(".child5").is(":visible")){
					$(".child5").removeClass("child3");
					$(".child5").slideToggle();
				} else{
					$(".child5").addClass("child3");
					$(".child5").slideToggle();
				}
		});
		$(".collapsable6").on("click", function(){
				if($(".child6").is(":visible")){
					$(".child6").removeClass("child3");
					$(".child6").slideToggle();
				} else{
					$(".child6").addClass("child3");
					$(".child6").slideToggle();
				}
		});
		$(".collapsable7").on("click", function(){
				if($(".child7").is(":visible")){
					$(".child7").removeClass("child3");
					$(".child7").slideToggle();
				} else{
					$(".child7").addClass("child3");
					$(".child7").slideToggle();
				}
		});
		$(".collapsable8").on("click", function(){
				if($(".child8").is(":visible")){
					$(".child8").removeClass("child3");
					$(".child8").slideToggle();
				} else{
					$(".child8").addClass("child3");
					$(".child8").slideToggle();
				}
		});