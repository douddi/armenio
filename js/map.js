                    // When the window has finished loading create our google map below
                    google.maps.event.addDomListener(window, 'load', init);

                    function init() {
                        // Basic options for a simple Google Map
                        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                        var paris = new google.maps.LatLng(48.858096, 2.337937);

                        var mapOptions = {
                            // How zoomed in you want the map to start at (always required)
                            zoom: 3,
                            disableDefaultUI: true,
							scrollwheel: false, 

                            // The latitude and longitude to center the map (always required)

                            center: paris, // paris

                            // How you would like to style the map. 
                            // This is where you would paste any style found on Snazzy Maps.
                            styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
                        };

                        // Get the HTML DOM element that will contain your map 
                        // We are using a div with id="map" seen below in the <body>
                        var mapElement = document.getElementById('map');

                        // Create the Google Map using out element and options defined above
                        var map = new google.maps.Map(mapElement, mapOptions);
						
                        var ParisMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(48.858096, 2.337937),
                            map: map,
							icon: 'images/map-marker.png',
                            title: 'Paris'
                        });
						
						var DohaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.282094, 51.532267),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Doha'
                        });

                        var AlmatyMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.235150, 76.854893),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Almaty'
                        });

                        var AmsterdamMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(52.372257, 4.892910),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Amsterdam'
                        });

                        var AnconaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.608416, 13.505440),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Ancona'
                        });

                        var AspenMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(39.191380, -106.821475),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Aspen'
                        });

                        var AtheneMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(37.986520, 23.727845),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Athene'
                        });

                        var AtlantaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.751147, -84.387515),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Atlanta'
                        });

                        var AucklandMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(-36.869286, 174.755574),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Auckland'
                        });

                        var AstanaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(51.140719, 71.463545),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Astana'
                        });

                        var CentriaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(63.3533527,22.5498405,8.05),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Centria'
                        });

                        var DubaiMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.203648, 55.266469),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Dubai'
                        });

                        var LondresMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(51.507664, -0.127181),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Londres'
                        });

                        var RiyadhMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(24.716200, 46.709879),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Riyadh'
                        });

                        var TokyoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.708563, 139.732181),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Tokyo'
                        });

                        var JeddahMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(21.321383, 39.205748),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Jeddah'
                        });

                        var MonacoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.738597, 7.424413),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Monaco'
                        });

                        var PuertoBanusMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(36.490480, -4.949194),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'PuertoBanus'
                        });

                        var ShanghaiMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(31.222137, 121.475170),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Shanghai'
                        });

                        var ShenzhenMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(22.529732, 114.055242),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Shenzhen'
                        });

                        var BakuMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.441430, 49.839342),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Baku'
                        });

                        var BalharborMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.891807, -80.125294),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Balharbor'
                        });

                        var BangkokMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(13.812523, 100.539538),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Bangkok'
                        });

                        var BarceloneMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(41.382920, 2.177862),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Barcelone'
                        });

                        var BeijingMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(39.902210, 116.399828),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Beijing'
                        });

                        var LasVegasMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(36.163733, -115.138617),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Las vegas'
                        });

                        var NewYorkMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.699064, -73.973917),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'New york'
                        });

                        var LosangelesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(34.038391, -118.245601),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'losangeles'
                        });

                        var BocaratonMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(26.367019, -80.129740),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Bocaraton'
                        });

                        var BeyrouthMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.893057, 35.499312),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Beyrouth'
                        });

                         var SaopoloMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(-23.565147, -46.640656),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Saopolo'
                        });

                        var BruxellesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(50.853437, 4.352042),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Bruxelles'
                        });

                        var CannesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.551885, 7.022848),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Cannes'
                        });

                        var CapriMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.552363, 14.222647),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Capri'
                        });

                        var ChengduMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(30.588730, 104.065924),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Chengdu'
                        });

                        var TaiwanMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(23.850893, 120.987467),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Taiwan'
                        });

                        var CortinaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(46.537960, 12.135101),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Cortina'
                        });

                        var DalianMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.912143, 121.594268),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Dalian'
                        });

                        var CourchevelMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.414569, 6.634808),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Courchevel'
                        });

                        var DusseldorfMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(51.222892, 6.783444),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Dusseldorf'
                        });

                        var EkaterinburgMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(56.828092, 60.584889),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Ekaterinburg'
                        });

                        var NewportbeachMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.624512, -117.930307),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Newportbeach'
                        });

                        var FlorenceMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.772748, 11.257102),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Florence'
                        });

                        var FrankfortMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(41.493697, -87.847469),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Frankfort'
                        });

                        var SeoulMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(37.557580, 126.985037),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Seoul'
                        });

                         var FukuokaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.573767, 130.357838),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Fukuoka'
                        });

                         var GeneveMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(46.199878, 6.145009),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Geneve'
                        });

                         var GinzaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.671292, 139.765366),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Ginza'
                        });

                         var GranvilleMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(48.836371, -1.590032),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Granville'
                        });

                         var Guamarker = new google.maps.Marker({
                            position: new google.maps.LatLng(13.427630, 144.751075),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Guam'
                        });

                         var GangzhouMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(23.082403, 113.275869),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Gangzhou'
                        });

                         var MoscouMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(55.736332, 37.637963),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Moscou'
                        });

                         var HambourgMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(53.545191, 10.002639),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Hambourg'
                        });

                         var OsakaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(34.691982, 135.502476),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Osaka'
                        });

                         var HoustonMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(29.739405, -95.371118),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Houston'
                        });

                         var SingapourMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(1.344192, 103.864033),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Singapour'
                        });

                         var JakartaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(-6.226313, 106.850107),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Jakarta'
                        });

                         var KoweitMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(29.312907, 47.516312),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Koweit'
                        });

                         var KyotoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.009095, 135.767683),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Kyoto'
                        });

                         var MiamiMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.768086, -80.203883),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Miami'
                        });

                         var MelbourneMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(-37.816325, 144.965195),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Melbourne'
                        });

                         var MexicoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(19.410975, -99.143042),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Mexico'
                        });

                         var CasablancaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.585936, -7.591168),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Casablanca'
                        });

                         var PanamaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(8.799343, -79.899863),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Panama'
                        });

                         var SydneyMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(-33.890163, 151.188735),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Sydney'
                        });

                         var TelavivMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(32.091943, 34.778018),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Telaviv'
                        });

                         var VeniseMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.434014, 12.328176),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Venise'
                        });

                         var VienneMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.523881, 4.875009),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Vienne'
                        });

                         var VarsovieMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(52.224443, 21.022048),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Varsovie'
                        });

                         var ManchesterMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(53.477946, -2.240410),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Manchester'
                        });

                         var ZurichMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(47.380921, 8.545639),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Zurich'
                        });

                         var YokohamaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.445217, 139.642644),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Yokohama'
                        });

                         var MarseilleMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.289302, 5.372858),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Marseille'
                        });

                         var SttropezMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.270112, 6.642542),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Sttropez'
                        });

                         var ShenyangMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(41.802943, 123.479037),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Shenyang'
                        });

                         var PortofinoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(44.303759, 9.208032),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Portofino'
                        });

                         var NewdelhiMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(28.621891, 77.217902),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Newdelhi'
                        });

                         var ChicagoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(41.867405, -87.638780),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Chicago'
                        });

                         var AtlantaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.739089, -84.382161),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Atlanta'
                        });

                         var MontrealMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.499574, -73.568226),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Montreal'
                        });

                         var MarrakechMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(31.621448, -7.981763),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Marrakech'
                        });

                         var HongkongMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(33.739089, -84.382161),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Hongkong'
                        });

                         var LisbonneMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.725930, -9.145100),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Lisbonne'
                        });

                         var MadridMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.417612, -3.702616),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Madrid'
                        });




                    }
