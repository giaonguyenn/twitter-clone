$(document).ready(function() {

	//Step 1--Initially hide Tweet button and character count button
	$("#tweet-controls").hide();

	//Step 2--Increase textarea size and show Tweet button and character count when user clicks
	$("textarea").on("click", function() {
		$(this).css("height", "5em");
		$("#tweet-controls").show();

		//Step 3--Character count decrease as user types and turns red when it hits 10 or lower
		$(this).keyup(function() {
			var maxLength = 140;
			var length = $(this).val().length;
			var length = maxLength-length;
			$("#char-count").text(length);
			if(length<=10) {
				$("#char-count").css("color", "red");
			} else {
				$("#char-count").css("color", "#999");
			}

			if(length<0) {
				$("#tweet-submit").attr("disabled", true);
			} else {
				$("#tweet-submit").attr("disabled", false);
			}
		});
	});

	$("#tweet-submit").on("click", function() {
		var tweet = $("textarea").val().trim();
		$("textarea").val("");

		var date = new Date();

		var newTweet = $(".tweet:first-of-type").clone();
			newTweet.find("img.avatar").attr("src", "img/alagoon.jpg");
			newTweet.find(".fullname").text("YourFullName");
			newTweet.find(".username").text("YourUsername");
			newTweet.find("p.tweet-text").text(tweet);
			newTweet.find(".num-retweets, .num-favorites").text("0");
	  		newTweet.fadeIn();
  		$("#stream").prepend(newTweet);
	});

	$('.content').mouseenter(function() {
		$('.tweet-actions', this).slideDown();
    });

    $('.content').mouseleave(function() {
    	$('.tweet-actions', this).slideUp();
    	$('.stats', this).slideUp();
    });

    $('.tweet').on('click', function() {
    	$('.stats', this).slideDown(true);
    });
});
