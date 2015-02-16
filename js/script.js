$(document).ready(function() {
	// Handles new entry submissions
	$('.entry-form').submit(function(event) {
		var entryValue = $(".entry").val();
		$('.list').prepend("<div class='item not-done'><div class='checkbox'></div><p>" + entryValue + "</p></div>");
		event.preventDefault();
		$('.entry-form')[0].reset();
	});

	// Handles adding entries back into the list
	$(".done p").click(function() {
		$(this).parent().attr("class", "item not-done");
		$(this).parent().hide().prependTo('.list').fadeIn('.5s');
		$(this).unbind('click');
	});

	// Handles checking off items
	$(".not-done .checkbox").click(function() {
		var itemText = $(this).parent().children("p").text();
		$(this).parent().attr("class", "item done");
		$(this).parent().fadeOut('.5s');
		setTimeout(function() {
			$(".list").append("<div class='item done'><div class='checkbox'></div><p><a href='#'>" + itemText + "</a></p></div>").fadeIn();
		}, 500);
		$(this).unbind('click');
	});









});