app.directive("lolHome",function(){return{restrict:"E",templateUrl:"templates/base/home.html",transclude:!0,replace:!0,scope:!1,link:function(a,b,c){a.placeHolder="Search for champion name,items ...",$("body").css("background","url('images/bg1.jpg')")},controller:function(a,b,c,d,e,f,g){if(a.championPage={id:1},a.searchInput={value:""},a.searchSummonerById=function(b){e.setSummonerId(b),g.set("SummonerId",b),e.getInfo("general").success(function(c){"null"!=c?(a.summonerId=b,a.championGeneral=c,a.searchInput.value="",a.selectChampionPage(1)):(a.searchInput.value="",a.placeHolder="No Match Found")}).error(function(){a.searchInput.value="",a.placeHolder="No Match Found",console.log("error loading")})},a.searchSummoner=function(b){if(b)if(isNaN(b)){e.setSummonerName(encodeURI(b));var c=e.getInfo("getid");c.then(function(b){if(200===b.status){var c=b.data;console.log(JSON.stringify(b)),a.searchSummonerById(c[Object.keys(c)[0]].id)}else a.searchInput.value="",a.placeHolder="No Match Found"})}else a.searchSummonerById(b);else a.placeHolder="Search Can't be Empty!"},""!==e.getSummonerId()||"undefined"!=typeof e.getSummonerId()){var h=e.getSummonerId();a.searchSummoner(h)}a.$watch("config.searchToggle",function(a){a?$("body").css("background","url('images/bg1.jpg')"):$("body").css("background","url('images/otherbg.jpg')")}),a.selectChampionPage=function(b){switch(a.championPage.id=b,a.config.searchToggle=!1,a.championPage.id){case 1:d("/base/baseHome/baseChampionGeneral");break;case 2:d("/base/baseHome/baseChampionChampions");break;case 3:d("/base/baseHome/baseChampionCharts");break;case 4:d("/base/baseHome/baseChampionMatch");break;case 5:d("/base/baseHome/baseChampionMatchDetail");break;default:d("/base/baseHome/baseChampionGeneral")}},0!==f[c.url()]&&a.selectChampionPage(f[c.url()])}}});