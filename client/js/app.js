var app=angular.module("lolInfi",["ngAnimate","ngSanitize","ui.router"]);app.controller("formController",function(a){a.config={searchToggle:!0,url:"HOME"},Twitch.init({clientId:"3i5rtey5q5ipvmjmctz5s7lbf0m2h0g"},function(a,b){console.log("!!!!!twtich init called"),console.log(a+"error"),console.log(JSON.stringify(b)+"status"),a&&(console.log(a),console.log("twitch api load fail"))})});