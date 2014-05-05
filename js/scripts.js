$(document).ready(function() {
    $(".clickable").click(function() {
        $(".initially-showing").toggle();
        $(".initially-hidden").toggle();
    });

    $(".elementFadeIn").fadeIn();
    $(".elementFadeOut").fadeOut();
    $(".elementSlideDown").slideDown();
    $(".elementSlideUp").slideUp();

    $("button#hello").click(function() {
   		$("ul#user").prepend("<li>Hello! <span class='clickable delete'>x</span></li>");
  		$("ul#webpage").prepend("<li>Why hello there! <span class='clickable delete'>x</span></li>");
   		$("ul#user").children("li").first().click(function() {
		  $(this).remove();
		});
		$("ul#webpage").children("li").first().click(function() {
		  $(this).remove();
		});
  	});

  	$("button#goodbye").click(function() {
    	$("ul#user").prepend("<li>Goodbye! <span class='clickable delete'>x</span></li>");
    	$("ul#webpage").prepend("<li>Goodbye, dear user. <span class='clickable delete'>x</span></li>");
    	$("ul#user").children("li").first().click(function() {
		  $(this).remove();
		});
		$("ul#webpage").children("li").first().click(function() {
		  $(this).remove();
		});
  	});

  	$("button#stop").click(function() {
    	$("ul#user").prepend("<li>Stop copying me! <span class='clickable delete'>x</span></li>");
    	$("ul#webpage").prepend("<li>Pardon me, I meant no offense. <span class='clickable delete'>x</span></li>");
    	$("ul#user").children("li").first().click(function() {
		  $(this).remove();
		});
		$("ul#webpage").children("li").first().click(function() {
		  $(this).remove();
		});
  	});

  	$("button#dog").click(function() {
    	$("ul#provoke").prepend("<li>Bark! <span class='clickable delete'>x</span></li>");
    	$("ul#response").prepend("<li>Meow! <span class='clickable delete'>x</span></li>");
    	$("ul#provoke").children("li").first().click(function() {
    		$(this).remove();
    	})
    	$("ul#response").children("li").first().click(function() {
    		$(this).remove();
    	})
  	});

  	$("button#cat").click(function() {
    	$("ul#provoke").prepend("<li>Hiss! <span class='clickable delete'>x</span></li>");
    	$("ul#response").prepend("<li>Ruff! <span class='clickable delete'>x</span></li>");
    	$("ul#provoke").children("li").first().click(function()	{
    		$(this).remove();
    	})
    	$("ul#response").children("li").first().click(function() {
    		$(this).remove();
    	})
  	});

  	$("#blanks form").submit(function(event) {
  		var person1Input = $("input#person1").val();
  		var person2Input = $("input#person2").val();
  		var person3Input = $("input#person3").val();
  		var animal1Input = $("input#animal1").val();
  		var animal2Input = $("input#animal2").val();
  		var exclamation1Input = $("input#exclamation1").val();
  		var exclamation2Input = $("input#exclamation2").val();
  		var verb1Input = $("input#verb1").val();
  		var verb2Input = $("input#verb2").val();
  		var verb3Input = $("input#verb3").val();
  		var noun1Input = $("input#noun1").val();
  		var noun2Input = $("input#noun2").val();
  		var noun3Input = $("input#noun3").val();
  		var adjective1Input = $("input#adjective1").val();
  		var adjective2Input = $("input#adjective2").val();
  		var adjective3Input = $("input#adjective3").val();

  		$(".person1").text(person1Input);
  		$(".person2").text(person2Input);
  		$(".person3").text(person3Input);
  		$(".animal1").text(animal1Input);
  		$(".animal2").text(animal2Input);
  		$(".exclamation1").text(exclamation1Input);
  		$(".exclamation2").text(exclamation2Input);
  		$(".verb1").text(verb1Input);
  		$(".verb2").text(verb2Input);
  		$(".verb3").text(verb3Input);
  		$(".noun1").text(noun1Input);
  		$(".noun2").text(noun2Input);
  		$(".noun3").text(noun3Input);
  		$(".adjective1").text(adjective1Input);
  		$(".adjective2").text(adjective2Input);
  		$(".adjective3").text(adjective3Input);

  		$("#story").show();
  		$("#blanks").hide();

  		event.preventDefault();
  	})
});