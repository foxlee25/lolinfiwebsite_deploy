app.directive("lolChampionsMatchDetail",function(){return{restrict:"E",templateUrl:"templates/base/general/matchDetail.html",transclude:!0,replace:!0,scope:!1,link:function(a,b,c){},controller:function(a,b,c,d){null===b.getMatchId()&&(c.get("MatchId")?b.setMatchId(c.get("MatchId")):d("/base/baseHome")),b.getInfo("matchdetail").success(function(b){a.match=b}).error(function(a){console.log(a+"can't get summoner match details")})}}});