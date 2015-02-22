$(document).ready(function() {
	// Handles new entry submissions
	$('.entry-form').submit(function(event) {
		var entryValue = $(".entry").val();
		if (entryValue.length > 0) {
			$('.list').prepend("<div class='item not-done'><div class='checkbox'></div><p>" + entryValue + "</p><div class='trash'><i class='fa fa-trash-o'></i></div></div>");
			event.preventDefault();
			$('.entry-form')[0].reset();
			$(".entry").attr("placeholder", "Go ahead. Add a new item to your shopping list here.");
		} else {
			$(".entry").attr("placeholder", "Hey now. Please enter an item first.");
		}
	});

	// Handles adding entries back into the list
	$(document).on("click", ".done p", function() {
		$(this).parent().attr("class", "item not-done");
		$(this).parent().hide().prependTo('.list').fadeIn('.5s');
	});

	// Handles checking off items
	$(document).on("click", ".not-done .checkbox", function() {
		var itemText = $(this).parent().children("p").text();
		$(this).parent().attr("class", "item done");
		$(this).parent().fadeOut('.5s');
		setTimeout(function() {
			$(".list").append("<div class='item done'><div class='checkbox'></div><p><a href='#'>" + itemText + "</a></p><div class='trash'><i class='fa fa-trash-o'></i></div></div>").fadeIn();
		}, 500);
	});

	//Deletes an item when Trash is clicked
	$(".item").hover(function() {
		$(this).children(".trash").toggle();
	});
	$(document).on("click", ".trash", function() {
		$(this).parent().remove();
	});

	//Rotates the images LIKE A BOSS
	var imgArray = [
		"https://ununsplash.imgix.net/photo-1417021423914-070979c8eb34?q=75&fm=jpg&s=55746bd56e02a131b1e48c12196ea866",
		"https://unsplash.imgix.net/photo-1418065460487-3e41a6c84dc5?q=75&fm=jpg&s=127f3a3ccf4356b7f79594e05f6c840e",
		"https://ununsplash.imgix.net/photo-1414637104192-f9ab9a0ee249?q=75&fm=jpg&s=39603686d9062f5c4a5309a45e28264e",
		"https://unsplash.imgix.net/photo-1414005987108-a6d06de8769f?q=75&fm=jpg&s=b37798a9dbd0c8884af2261b518970e3",
		"https://ununsplash.imgix.net/uploads/1413259835094dcdeb9d3/6e609595?q=75&fm=jpg&s=6a4fc66161293fc4a43a6ca6f073d1c5",
		"https://unsplash.imgix.net/photo-1414073875831-b47709631146?q=75&fm=jpg&s=731b6d5150eea8bafa63ae8194e72ebd",
		"https://unsplash.imgix.net/uploads/14135967189272ee843f8/f9c22c58?q=75&fm=jpg&s=cb5b8e149a0a516a43ba6f2166ac9949",
		"https://unsplash.imgix.net/uploads/14128853230824cc16f3e/c38fccbd?q=75&fm=jpg&s=9da0b2c3ab7ceb577c204a887161bd02",
		"https://unsplash.imgix.net/reserve/rVvIisyfQwOhZv35PPhh_unsplash.jpg?q=75&fm=jpg&s=18e60f281c1b5277e2f206874d9f0274",
		"https://ununsplash.imgix.net/reserve/fawrXCzwSsOUMmJr9GGD_alcatraz.jpg?q=75&fm=jpg&s=581307737e7c9f8b24e46d7e770f5769"
	];
	$(document).on("click", ".not-done .checkbox", function() {
		var imgPicked = imgArray[Math.floor(Math.random() * imgArray.length)]
		console.log("url("+imgPicked+")")
		console.log($("body").css("background-image"))
		while ("url("+imgPicked+")" == $("body").css("background-image")) {
			imgPicked = imgArray[Math.floor(Math.random() * imgArray.length)]
			console.log("triggered!");
			console.log("url("+imgPicked+")")
		};
		$("body").css("background-image", "url(" + imgPicked + ")");
	});





});