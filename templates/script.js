// TODO to remove
////------------------------------------------ controls
//$('.control--radio').click(
//		function() {
//			setCompleted($(this).children("input[type=radio]:checked").length,
//					$(this).parent().closest(".data--item"));
//		});
//
//function validate() {
//	$(this).parent().closest(".data--item").removeClass("invalid");
//	if (!$(this).val().length) {
//		setCompleted($(this).val().length, $(this).parent().closest(".data--item"));
//		return;
//	}
//	var pattern = $(this).attr("pattern");
//	if (pattern.length) {
//		var regex = new RegExp(pattern, "i");
//		if (!regex.test($(this).val())) {
//			$(this).parent().closest(".data--item").removeClass("completed");
//			$(this).parent().closest(".data--item").addClass("invalid");
//			return;
//		}
//	}
//	setCompleted($(this).val().length, $(this).parent().closest(".data--item"));
//};
//
//$('.control--field').on('input', validate);
//$('.control--field').change(validate);
//
//$('.control--select').change(
//		function(e) {
//			setCompleted(this.options[e.target.selectedIndex].text.length, 
//					$(this).parent().closest(".data--item"));
//		});
//
//$('.control--field').on('input', function() {
//	var val = $(this).val()
//	$(":root #" + $(this).attr("id")).each(function() {
//		$(this).val(val);
//		$(this).change();
//	});
//	
//});
//
//function setCompleted(completed, table) {
//	if (completed) {
//		table.removeClass("notcompleted").addClass("completed");
//	} else {
//		table.removeClass("completed").addClass("notcompleted");
//	}
//}