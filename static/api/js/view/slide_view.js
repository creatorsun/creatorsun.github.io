window._bd_share_main.F.module("view/slide_view",function(e,t,n){var r=e("base/tangram").T,i=e("base/class").Class,s=e("conf/const"),o=e("view/view_base"),u={box:"bdshare-slide-button-box",btn:"bdshare-slide-button"};
	t.View=i.create(function(e){function p(){window._bd_share_main.F.use("slide_share.css",function(){var t=i.width()||24;
	i.css(e.bdPos=="right"?"left":"right",-t),n&&n.css({top:e.bdTop|0,width:0,"z-index":99999}).css(e.bdPos,0).show(),o.width(0).hide(),a.width(h),f.width(h)})}function d(){if(l)return;
		a.html()||window._bd_share_main.F.use("component/partners",function(e){partnerSort=e.partnerSort,partners=e.partners,m(partnerSort,partners)});
	var e={};
	window._bd_share_main.F.use("component/animate",function(e){o.show(),e.animate(n[0],{width:h},300,function(){l=!0},function(e){o.width(e*h)})})}function v(){if(!l)return;
		var e={};window._bd_share_main.F.use("component/animate",function(e){e.animate(n[0],{width:0},300,function(){l=!1,o.hide()},function(e){o.width((1-e)*h)})})}function m(t,n){var i=e.bdMiniList||t.slice(0,8*c),s=[];
		r.each(i,function(e,t){if(!/(iPhone | iPad | Android)/i.test(navigator.userAgent)||t!=="weixin")s[e]='<li><a href="#" onclick="return false;" class="slide-'+t+'" data-cmd="'+t+'">'+n[t].name+"</a></li>"}),a.html(s.join(""))}var t=this,n,i,s,o,a,f,l=!1;
		t._buttonType=1;var c=e.bdMini||2,h=c*110+6,e=r.extend({},e);
		t.render=function(){var l=u.btn,c=u.box+" bdshare-slide-style-"+(e.bdPos=="right"?"r":"l")+e.bdImg,h=['<div class="'+c+'" style="display:none;">','<a href="#" onclick="return false;" class="'+l+'"></a>','<div class="bdshare-slide-list-box">','<div class="bdshare-slide-top">
		\u5206\u4eab\u5230</div>','<div class="bdshare-slide-list">','<ul class="bdshare-slide-list-ul"></ul>',"</div>",'<div class="bdshare-slide-bottom">','<a href="#" onclick="return false;" class="slide-more"  data-cmd="more">\u66f4\u591a...</a>',"</div>","</div>","</div>"].join("");
		n=r(h).appendTo("body"),i=n.find("."+u.btn),o=n.find(".bdshare-slide-list-box"),a=n.find(".bdshare-slide-list-ul"),s=n.find(".bdshare-slide-list"),f=n.find(".bdshare-slide-bottom"),p(),t._entities.push(n);
		if(r.browser.ie==6){n.css("position","absolute");var d=parseInt(n.css("top"));
		setInterval(function(){var t=(e.bdTop|0);
			d!=t&&window._bd_share_main.F.use("component/animate",function(e){e.animate(n[0],{top:t},300)})},1e3)}},t._init=function(){var e=!1;
	i.on("mouseenter click",d),n.on("mouseleave click",v),r("body").click(function(e){n.contains(e.target)||v()})},t._distory=function(){n.remove()}},o.ViewBase)});