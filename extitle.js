if(Drupal.jsEnabled)
{
	$(document).ready(function()
	{
		var title = $("#edit-title");
		var linkFieldName = '#' + Drupal.settings.extitle.linkFieldName;
		var titleFieldName = '#' + Drupal.settings.extitle.titleFieldName;

		if(title.val().length == 0)
		{
		$(titleFieldName).bind("focus", function()
		{
			var getitle = $(linkFieldName).val();
			title.addClass("ajax_loader");

			$.post(Drupal.settings.extitle.ajaxUrl,
			{getUrl: getitle},
			function (data)
			{
				var result = Drupal.parseJson(data);
				title.val(result['title']);
				title.removeClass("ajax_loader");
			});
			return false;
		});
		}
	});
}