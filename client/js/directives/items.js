app.directive("lolItems",function(){return{restrict:"E",templateUrl:"templates/base/items.html",transclude:!0,replace:!0,scope:!1,link:function(a,b,c){a.itemOption={filter:"All"},$("body").css("background","url('images/otherbg.jpg')"),a.animateOver=!0},controller:function(a,b){b.getInfo("item").success(function(b){$("#itemAnimate").hide(),a.itemInfo=b.data})}}});