// ==UserScript==
// @author         VampiRUS
// @name           Hide repost group for vkontakte.ru
// @description    Hide records from the groups that were shared by your friends on vkontakte.ru
// @namespace      http://vampirus.ru
// @include        http://vk.com/feed*
// @version        0.0.2
// @licence        LGPL 3
// ==/UserScript==

(function(){
	var w = window.wrappedJSObject || window;
	function hideLikes() {
		var images = document.querySelectorAll('a.published_by_photo img');
		var reg = new RegExp('.*?/g\\d+/.*?\\.jpg');
		for (var i in images) {
			if(reg.test(images[i].src)) {
				images[i].parentNode
					.parentNode
					.parentNode
					.parentNode
					.parentNode
					.parentNode
					.parentNode
					.parentNode
					.parentNode
					.parentNode
					.style.display='none';
			}
		}
	}
	var height = document.documentElement.scrollHeight;
	hideLikes();
	w.setInterval(function(){
		if (height != document.documentElement.scrollHeight) {
			height = document.documentElement.scrollHeight;
			hideLikes();
		}
	},1000);
})();
