app.directive("lolLive",function(){return{restrict:"E",templateUrl:"templates/base/live.html",transclude:!0,replace:!0,scope:!1,link:function(a,b,c){a.index=1,$("body").css("background","url('images/otherbg.jpg')"),Twitch.api({method:"streams",params:{game:"League of Legends",limit:21}},function(b,c){console.debug(JSON.stringify(c)),a.twitchPlayList=c,a.$apply()})},controller:function(a,b,c){a.loadPage=function(b){var c=21*b;a.index=b,Twitch.api({method:"streams",params:{game:"League of Legends",limit:21,offset:c}},function(b,c){console.debug(JSON.stringify(c)),a.twitchPlayList=c,window.scrollTo(0,0),a.$apply()})},a.playVideo=function(a){c.setVideo(a),b("/base/basePlayer")}}}});