'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
    'ngRoute',
  'myApp.version'
]);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/team/:teamHashCode', {
            templateUrl: 'views/team.html',
            controller: 'TeamCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);
app.controller('HomeCtrl', ['$scope', '$stateParams',function($scope, $stateParams) {
    $scope.pageName = "Home";
    $scope.teams = [{"type":"NHL", "hashTag":"newjerseydevils", "imgUrl":"assets/img/NHL/Devils.png", "teamName": "New Jersey Devils" },
        {"type":"NHL", "hashTag":"newyorkislanders", "imgUrl":"assets/img/NHL/Islanders.png", "teamName": "New York Islanders" },
        {"type":"NHL", "hashTag":"newyorkrangers", "imgUrl":"assets/img/NHL/Rangers.png", "teamName": "New York Rangers" },
        {"type":"NHL", "hashTag":"philadelphiaflyers", "imgUrl":"assets/img/NHL/Flyers.png", "teamName": "Philadelphia Flyers" },
        {"type":"NHL", "hashTag":"pittsburghpenguins", "imgUrl":"assets/img/NHL/Penguins.png", "teamName": "Pittsburgh Penguins" },
        {"type":"NHL", "hashTag":"bostonbruins", "imgUrl":"assets/img/NHL/Bruins.png", "teamName": "Boston Bruins" },
        {"type":"NHL", "hashTag":"FloridaPanthers", "imgUrl":"assets/img/NHL/Panthers.png", "teamName": "Florida Panthers" },
        {"type":"NHL", "hashTag":"oilers", "imgUrl":"assets/img/NHL/Oilers.png", "teamName": "Edmonton Oilers" },
        {"type":"NHL", "hashTag":"canucks", "imgUrl":"assets/img/NHL/Canucks.png", "teamName": "Vancouver Canucks" },
        {"type":"NHL", "hashTag":"torontomapleleafs", "imgUrl":"assets/img/NHL/Leafs.png", "teamName": "Toronto Maple Leafs" },
        {"type":"NHL", "hashTag":"calgaryflames", "imgUrl":"assets/img/NHL/Flames.png", "teamName": "Calgary Flames" },
        {"type":"NHL", "hashTag":"minnesotawild", "imgUrl":"assets/img/NHL/Wild.png", "teamName": "Minnesota Wild" },
        {"type":"NHL", "hashTag":"blackhawks", "imgUrl":"assets/img/NHL/Blackhawks.png", "teamName": "Chicago Blackhawks" },
        {"type":"NHL", "hashTag":"stlouisblues", "imgUrl":"assets/img/NHL/Blues.png", "teamName": "Saint Louis Blues" },
        {"type":"NHL", "hashTag":"winnipegjets", "imgUrl":"assets/img/NHL/jets.png", "teamName": "Winnipeg Jets" },
        {"type":"MLS", "hashTag":"redbulls", "imgUrl":"assets/img/MLS/nyredbull.png", "teamName": "New York Red Bulls" },
        {"type":"MLS", "hashTag":"sportingkc", "imgUrl":"assets/img/MLS/kansas.png", "teamName": "Sporting Kansas City" },
        {"type":"MLS", "hashTag":"dcunited", "imgUrl":"assets/img/MLS/dcunited.png", "teamName": "D.C. United" },
        {"type":"MLS", "hashTag":"chicagofire", "imgUrl":"assets/img/MLS/chicago.png", "teamName": "Chicago Fire" },
        {"type":"MLS", "hashTag":"nerevolution", "imgUrl":"assets/img/MLS/nengland.png", "teamName": "New England Rev" },
        {"type":"MLS", "hashTag":"houstondynamo", "imgUrl":"assets/img/MLS/houston.png", "teamName": "Houston Dynamo" },
        {"type":"MLS", "hashTag":"montrealimpact", "imgUrl":"assets/img/MLS/impact.png", "teamName": "Montreal Impact" },
        {"type":"MLS", "hashTag":"columbuscrew", "imgUrl":"assets/img/MLS/crew.png", "teamName": "Columbus Crew" },
        {"type":"MLS", "hashTag":"philadelphiaunion", "imgUrl":"assets/img/MLS/PhiladelphiaUnion.png", "teamName": "Philadelphia Union" },
        {"type":"MLS", "hashTag":"torontofc", "imgUrl":"assets/img/MLS/toronto.png", "teamName": "Toronto FC" },
        {"type":"MLS", "hashTag":"realsaltlake", "imgUrl":"assets/img/MLS/saltlake.png", "teamName": "Real Salt Lake" },
        {"type":"MLS", "hashTag":"sjearthquakes", "imgUrl":"assets/img/MLS/sanjose.png", "teamName": "San Jose Earthq" },
        {"type":"MLS", "hashTag":"sounders", "imgUrl":"assets/img/MLS/seattle.png", "teamName": "Seattle Sounders FC" },
        {"type":"MLS", "hashTag":"whitecaps", "imgUrl":"assets/img/MLS/vc.png", "teamName": "Vancouver Whitecaps FC" },
        {"type":"MLS", "hashTag":"coloradorapids", "imgUrl":"assets/img/MLS/colorado.png", "teamName": "Colorado Rapids" },
        {"type":"MLS", "hashTag":"fcdallas", "imgUrl":"assets/img/MLS/fcdallas.png", "teamName": "FC Dallas" },
        {"type":"MLS", "hashTag":"lagalaxy", "imgUrl":"assets/img/MLS/la.png", "teamName": "LA Galaxy" },
        {"type":"MLS", "hashTag":"chivas", "imgUrl":"assets/img/MLS/chivas.png", "teamName": "Chivas USA" },
        {"type":"MLS", "hashTag":"portlandtimbers", "imgUrl":"assets/img/MLS/ptland.png", "teamName": "Portland Timbers" },
        {"type":"NFL", "hashTag":"buffalobills", "imgUrl":"assets/img/NFL/Bills.png", "teamName": "Buffalo Bills" },
        {"type":"NFL", "hashTag":"miamidolphins", "imgUrl":"assets/img/NFL/Dolphins.png", "teamName": "Miami Dolphins" },
        {"type":"NFL", "hashTag":"patriots", "imgUrl":"assets/img/NFL/Patriots.png", "teamName": "New England Patriots" },
        {"type":"NFL", "hashTag":"nyjets", "imgUrl":"assets/img/NFL/Jets.png", "teamName": "New York Jets" },
        {"type":"NFL", "hashTag":"baltimoreravens", "imgUrl":"assets/img/NFL/Ravens.png", "teamName": "Baltimore Ravens" },
        {"type":"NFL", "hashTag":"bengals", "imgUrl":"assets/img/NFL/Bengals.png", "teamName": "Cincinnati Bengals" },
        {"type":"NFL", "hashTag":"clevelandbrowns", "imgUrl":"assets/img/NFL/Browns.png", "teamName": "Cleveland Browns" },
        {"type":"NFL", "hashTag":"steelers", "imgUrl":"assets/img/NFL/Steelers.png", "teamName": "Pittsburgh Steelers" },
        {"type":"NFL", "hashTag":"texans", "imgUrl":"assets/img/NFL/Texans.png", "teamName": "Houston Texans" },
        {"type":"NFL", "hashTag":"colts", "imgUrl":"assets/img/NFL/Colts.png", "teamName": "Indianapolis Colts" },
        {"type":"NFL", "hashTag":"jaguars", "imgUrl":"assets/img/NFL/Jaguars.png", "teamName": "Jacksonville Jaguars" },
        {"type":"NFL", "hashTag":"tennesseetitans", "imgUrl":"assets/img/NFL/Titans.png", "teamName": "Tennessee Titans" },
        {"type":"NFL", "hashTag":"broncos", "imgUrl":"assets/img/NFL/Broncos.png", "teamName": "Denver Broncos" },
        {"type":"NFL", "hashTag":"chiefs", "imgUrl":"assets/img/NFL/Chiefs.png", "teamName": "Kansas City Chiefs" },
        {"type":"NFL", "hashTag":"raiders", "imgUrl":"assets/img/NFL/Raiders.png", "teamName": "Oakland Raiders" },
        {"type":"NFL", "hashTag":"sandiegochargers", "imgUrl":"assets/img/NFL/Chargers.png", "teamName": "San Diego Chargers" },
        {"type":"NFL", "hashTag":"cowboys", "imgUrl":"assets/img/NFL/Cowboys.png", "teamName": "Dallas Cowboys" },
        {"type":"NFL", "hashTag":"nygiants", "imgUrl":"assets/img/NFL/nyg.png", "teamName": "New York Giants" },
        {"type":"NFL", "hashTag":"Philadelphiaeagles", "imgUrl":"assets/img/NFL/Eagles.png", "teamName": "Philadelphia Eagles" },
        {"type":"NFL", "hashTag":"redskins", "imgUrl":"assets/img/NFL/Redskins.png", "teamName": "Washington Redskins" },
        {"type":"NFL", "hashTag":"chicagobears", "imgUrl":"assets/img/NFL/Bears.png", "teamName": "Chicago Bears" },
        {"type":"NFL", "hashTag":"detroitlions", "imgUrl":"assets/img/NFL/Lions.png", "teamName": "Detroit Lions" },
        {"type":"NFL", "hashTag":"pakers", "imgUrl":"assets/img/NFL/Packers.png", "teamName": "Green Bay Packers" },
        {"type":"NFL", "hashTag":"vikings", "imgUrl":"assets/img/NFL/Vikings.png", "teamName": "Minnesota Vikings" },
        {"type":"NFL", "hashTag":"atlantafalcons", "imgUrl":"assets/img/NFL/Falcons.png", "teamName": "Atlanta Falcons" },
        {"type":"NFL", "hashTag":"carolinapanthers", "imgUrl":"assets/img/NFL/Panthers.png", "teamName": "Carolina Panthers" },
        {"type":"NFL", "hashTag":"saints", "imgUrl":"assets/img/NFL/Saints.png", "teamName": "New Orleans Saints" },
        {"type":"NFL", "hashTag":"buccaneers", "imgUrl":"assets/img/NFL/Buccaneers.png", "teamName": "Tampa Bay Buccaneers" },
        {"type":"NFL", "hashTag":"cardinals", "imgUrl":"assets/img/NFL/Cardinals.png", "teamName": "Arizona Cardinals" },
        {"type":"NFL", "hashTag":"49ers", "imgUrl":"assets/img/NFL/49ers.png", "teamName": "San Francisco 49ers" },
        {"type":"NFL", "hashTag":"seahawks", "imgUrl":"assets/img/NFL/Seahawks.png", "teamName": "Seattle Seahawks" },
        {"type":"NFL", "hashTag":"rams", "imgUrl":"assets/img/NFL/Rams.png", "teamName": "St. Louis Rams" },
        {"type":"MLB", "hashTag":"orioles", "imgUrl":"assets/img/MLB/orioles.png", "teamName": "Baltimore Orioles" },
        {"type":"MLB", "hashTag":"redsox", "imgUrl":"assets/img/MLB/redsox.png", "teamName": "Boston Red Sox" },
        {"type":"MLB", "hashTag":"whitesox", "imgUrl":"assets/img/MLB/whitesox.png", "teamName": "Chicago White Sox" },
        {"type":"MLB", "hashTag":"clevelandindians", "imgUrl":"assets/img/MLB/redteeth.png", "teamName": "Cleveland Indians" },
        {"type":"MLB", "hashTag":"detroittigers", "imgUrl":"assets/img/MLB/D.png", "teamName": "Detroit Tigers" },
        {"type":"MLB", "hashTag":"kansascityroyals", "imgUrl":"assets/img/MLB/royals.png", "teamName": "Kansas City Royals" },
        {"type":"MLB", "hashTag":"losangelesangels", "imgUrl":"assets/img/MLB/a.png", "teamName": "Los Angeles Angels" },
        {"type":"MLB", "hashTag":"minnesotatwins", "imgUrl":"assets/img/MLB/twins.png", "teamName": "Minnesota Twins" },
        {"type":"MLB", "hashTag":"yankees", "imgUrl":"assets/img/MLB/yankees.png", "teamName": "New York Yankees" },
        {"type":"MLB", "hashTag":"oaklandathletics", "imgUrl":"assets/img/MLB/oakland.png", "teamName": "Oakland Athletics" },
        {"type":"MLB", "hashTag":"seattlemariners", "imgUrl":"assets/img/MLB/seattle.png", "teamName": "Seattle Mariners" },
        {"type":"MLB", "hashTag":"tampabayrays", "imgUrl":"assets/img/MLB/rays.png", "teamName": "Tampa Bay Rays" },
        {"type":"MLB", "hashTag":"texasrangers", "imgUrl":"assets/img/MLB/texasrangers.png", "teamName": "Texas Rangers" },
        {"type":"MLB", "hashTag":"torontobluejays", "imgUrl":"assets/img/MLB/jays.png", "teamName": "Toronto Blue Jays" },
        {"type":"MLB", "hashTag":"diamondbacks", "imgUrl":"assets/img/MLB/diamond.png", "teamName": "Arizona Diamondbacks" },
        {"type":"MLB", "hashTag":"atlantabraves", "imgUrl":"assets/img/MLB/braves.png", "teamName": "Atlanta Braves" },
        {"type":"MLB", "hashTag":"cubs", "imgUrl":"assets/img/MLB/cubs.png", "teamName": "Chicago Cubs" },
        {"type":"MLB", "hashTag":"cincinnatireds", "imgUrl":"assets/img/MLB/reds.png", "teamName": "Cincinnati Reds" },
        {"type":"MLB", "hashTag":"coloradorockies", "imgUrl":"assets/img/MLB/rockies.png", "teamName": "Colorado Rockies" },
        {"type":"MLB", "hashTag":"houstonastros", "imgUrl":"assets/img/MLB/astros.png", "teamName": "Houston Astros" },
        {"type":"MLB", "hashTag":"dodgers", "imgUrl":"assets/img/MLB/dodgers.png", "teamName": "Los Angeles Dodgers" },
        {"type":"MLB", "hashTag":"miamimarlins", "imgUrl":"assets/img/MLB/miami.png", "teamName": "Miami Marlins" },
        {"type":"MLB", "hashTag":"milwaukeebrewers", "imgUrl":"assets/img/MLB/brewers.png", "teamName": "Milwaukee Brewers" },
        {"type":"MLB", "hashTag":"nymets", "imgUrl":"assets/img/MLB/mets.png", "teamName": "New York Mets" },
        {"type":"MLB", "hashTag":"phillies", "imgUrl":"assets/img/MLB/phillies.png", "teamName": "Philadelphia Phillies" },
        {"type":"MLB", "hashTag":"pittsburghpirates", "imgUrl":"assets/img/MLB/pirates.png", "teamName": "Pittsburgh Pirates" },
        {"type":"MLB", "hashTag":"sandiegopadres", "imgUrl":"assets/img/MLB/padres.png", "teamName": "San Diego Padres" },
        {"type":"MLB", "hashTag":"sfgiants", "imgUrl":"assets/img/MLB/giants.png", "teamName": "San Francisco Giants" },
        {"type":"MLB", "hashTag":"stlouiscardinals", "imgUrl":"assets/img/MLB/cardinals.png", "teamName": "St. Louis Cardinals" },
        {"type":"MLB", "hashTag":"washingtonnationals", "imgUrl":"assets/img/MLB/wnationals.png", "teamName": "Washington Nationals" },
        {"type":"NBA", "hashTag":"celtics", "imgUrl":"assets/img/NBA/Celtics.png", "teamName": "Boston Celtics" },
        {"type":"NBA", "hashTag":"nets", "imgUrl":"assets/img/NBA/Nets.png", "teamName": "NJ Nets" },
        {"type":"NBA", "hashTag":"nyknicks", "imgUrl":"assets/img/NBA/Knicks.png", "teamName": "New York Knicks" },
        {"type":"NBA", "hashTag":"76ers", "imgUrl":"assets/img/NBA/76ers.png", "teamName": "Philly 76ers" },
        {"type":"NBA", "hashTag":"torontoraptors", "imgUrl":"assets/img/NBA/Raptors.png", "teamName": "Toronto Raptors" },
        {"type":"NBA", "hashTag":"mavericks", "imgUrl":"assets/img/NBA/Mavericks.png", "teamName": "Dallas Mavericks" },
        {"type":"NBA", "hashTag":"houstonrockets", "imgUrl":"assets/img/NBA/Rockets.png", "teamName": "Houston Rockets" },
        {"type":"NBA", "hashTag":"grizzlies", "imgUrl":"assets/img/NBA/Grizzlies.png", "teamName": "Memphis Grizzlies" },
        {"type":"NBA", "hashTag":"hornets", "imgUrl":"assets/img/NBA/Hornets.png", "teamName": "New Orleans Hornets" },
        {"type":"NBA", "hashTag":"spurs", "imgUrl":"assets/img/NBA/Spurs.png", "teamName": "San Antonio Spurs" },
        {"type":"NBA", "hashTag":"chicagobulls", "imgUrl":"assets/img/NBA/Bulls.png", "teamName": "Chicago Bulls" },
        {"type":"NBA", "hashTag":"cavaliers", "imgUrl":"assets/img/NBA/Cavaliers.png", "teamName": "Cleveland Cavaliers" },
        {"type":"NBA", "hashTag":"pistons", "imgUrl":"assets/img/NBA/Pistons.png", "teamName": "Detroit Pistons" },
        {"type":"NBA", "hashTag":"pacers", "imgUrl":"assets/img/NBA/Pacers.png", "teamName": "Indiana Pacers" },
        {"type":"NBA", "hashTag":"milwaukeebucks", "imgUrl":"assets/img/NBA/Bucks.png", "teamName": "Milwaukee Bucks" },
        {"type":"NBA", "hashTag":"denvernuggets", "imgUrl":"assets/img/NBA/Nuggets.png", "teamName": "Denver Nuggets" },
        {"type":"NBA", "hashTag":"minnesotatimber", "imgUrl":"assets/img/NBA/Timberwolves.png", "teamName": "Minnesota Timber" },
        {"type":"NBA", "hashTag":"okcthunder", "imgUrl":"assets/img/NBA/Thunder.png", "teamName": "OKC Thunder" },
        {"type":"NBA", "hashTag":"portlandtrailblazers", "imgUrl":"assets/img/NBA/Blazers.png", "teamName": "Portland TBlazers" },
        {"type":"NBA", "hashTag":"utahjazz", "imgUrl":"assets/img/NBA/Jazz.png", "teamName": "Utah Jazz" },
        {"type":"NBA", "hashTag":"gswarriors", "imgUrl":"assets/img/NBA/Warriors.png", "teamName": "GS Warriors" },
        {"type":"NBA", "hashTag":"clippers", "imgUrl":"assets/img/NBA/Clippers.png", "teamName": "LA Clippers" },
        {"type":"NBA", "hashTag":"lakers", "imgUrl":"assets/img/NBA/Lakers.png", "teamName": "LA Lakers" },
        {"type":"NBA", "hashTag":"psuns", "imgUrl":"assets/img/NBA/Suns.png", "teamName": "P Suns" },
        {"type":"NBA", "hashTag":"sacramentokings", "imgUrl":"assets/img/NBA/Kings.png", "teamName": "Sac Kings" },
        {"type":"NBA", "hashTag":"atlantahawks", "imgUrl":"assets/img/NBA/Hawks.png", "teamName": "Atlanta Hawks" },
        {"type":"NBA", "hashTag":"bobcats", "imgUrl":"assets/img/NBA/Bobcats.png", "teamName": "Charlotte Bobcats" },
        {"type":"NBA", "hashTag":"miamiheat", "imgUrl":"assets/img/NBA/Heat.png", "teamName": "Miami Heat" },
        {"type":"NBA", "hashTag":"orlandomagic", "imgUrl":"assets/img/NBA/Magic.png", "teamName": "Orlando Magic" },
        {"type":"NBA", "hashTag":"washingtonwizards", "imgUrl":"assets/img/NBA/Wizards.png", "teamName": "Washington Wizards" }]
}])
app.controller('AboutCtrl', ['$scope', '$stateParams',function($scope, $stateParams) {
    $scope.pageName = "About";
}])

.controller('TeamCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.teamHash = $route.current.params.teamHashCode;
    var next_url='';
    var cur_url = '';
    function CreateNewLikeButton(url,class_name){           
        var elem = $(document.createElement("fb:like"));
        elem.attr("href", url);
        elem.attr("layout","button_count");
        elem.attr("show_faces","false");   
        $("."+class_name).empty().append(elem);
        FB.XFBML.parse($("."+class_name).get(0));           
    }
    function getImages(url){
        $.ajax({ 
            dataType:"jsonp", 
            url: url, 
            data: {}, 
            success: function(d) {
                next_url=d.pagination.next_url;
                drawBoxes(d);       
                $('#tiles a').lightBox();
            }
            ,error: function(){
                console.log("error");
            }
        });
    }
    function drawBoxes(d){
        var caption='';
        for(var i=0;i<d.data.length;i++){
            if(d.data[i].caption){caption = d.data[i].caption.text;}
            else{caption = ''}
            $('#tiles').append(
                $('<li>').append(
                    $('<a>').attr({href:d.data[i].images.standard_resolution.url,title:caption}).append(
                        $('<img>').attr({src:d.data[i].images.low_resolution.url,width:200,height:200,rel:'lightbox',title:caption})
                    )
                    ,$('<p>').text(caption)
                    ,$('<div>').attr("class",d.data[i].id)          
                )
            );
            CreateNewLikeButton(d.data[i].link,d.data[i].id);
        }
        // Call the layout function.
        handler = $('#tiles li');
        handler.wookmark(options);
    }
    getImages("https://api.instagram.com/v1/tags/"+$scope.teamHash+"/media/recent?client_id=43d63763995a40f6a74d00735429ae5c")
}]);


$(function(){
    $.material.init();
    $(".navbar-nav li").click(function(){
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active")
    })
})