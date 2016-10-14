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
						
						var NYMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.741905, -73.998944),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'New York'
                        });

                        var BerlinMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(52.507629,13.1459634),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Berlin'
                        });

                        var PologneMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(51.8403064,14.6478556),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Pologne'
                        });

                        var CannesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(44.1503375,6.383235,8),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Cannes'
                        });

                        var FlorenceMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(41.9102415,12.395913,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Florence'
                        });

                        var MilanMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.4628328,9.1076922,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Milan'
                        });

                        var NaplesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.8540942,14.1765621,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Naples'
                        });

                        var PalermeMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.1405996,13.2872482,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Palerme'
                        });

                        var VeniseMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.4058031,12.1015568,10),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Venise'
                        });

                        var LimogesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(45.8587393,1.1618575,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Limoges'
                        });

                        var LondresMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(51.5287718,-0.241682,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Londres'
                        });

                        var GlasgowMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(55.8555733,-4.372205,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Glasgow'
                        });

                        var UkraineMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(48.3029685,26.6949791,6),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Ukraine'
                        });

                        var BielorussieMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(53.7633506,27.3021199,16),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Bielorussie'
                        });

                        var TurquieMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.7566017,30.5200149,13),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Turquie'
                        });

                        var ArabiesaouditeMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(23.879839,36.0787804,5),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Arabiesaoudite'
                        });

                        var IsraelMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(31.7964453,35.1053185,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Israel'
                        });

                        var MoscouMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(55.7498597,37.3523159,10),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Moscou'
                        });

                        var RussieMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(58.2418663,63.0379874,9),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Russie'
                        });

                        var ChineMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.7311289,107.5784659,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Chine'
                        });

                        var ChineMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.6991933,118.5761506,10),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Chine'
                        });

                        var ShanghaiMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(31.2243085,120.9162824,9),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Shanghai'
                        });

                        var TaiwanMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(23.5420589,118.7767746,7),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Taiwan'
                        });

                        var ChineMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.9085089,116.045462,7),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Chine'
                        });

                        var PekinMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(39.9390731,116.11727,10),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Pekin'
                        });

                        var SeoulMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(37.5652894,126.8494646,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Seoul'
                        });

                        var CoréeMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.1768202,126.7737597,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Corée'
                        });

                        var JaponMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.270364,140.7968598,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Japon'
                        });

                        var japonMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(37.8492488,138.8855046,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'japon'
                        });

                        var JaponMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.6693878,139.601295,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Japon'
                        });

                        var JaponMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.1681151,136.8765805,13),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Japon'
                        });

                        var JaponMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.0061653,135.7259305,13),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Japon'
                        });

                        var ThailandeMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(13.7251097,100.3529128,10),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Thailande'
                        });

                        var MalaisieMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(5.3543299,100.2227898,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Malaisie'
                        });

                        var SingapourMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(1.3459084,103.6855038,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Singapour'
                        });

                        var JakartaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(-6.2293868,106.6894307,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Jakarta'
                        });

                        var ChicagoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(41.8339043,-88.0123433,10),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'chicago'
                        });

                        var OklahomaMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(35.2928355,-100.9603238,7),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Oklahoma'
                        });

                        var WashingtonMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.8995322,-77.1546518,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Washington'
                        });

                        var CarolinedusudMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(433.6093683,-83.1908964,7),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'carolinedusud'
                        });

                        var LosangelesMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.5466726,-112.264572,4.11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Losangeles'
                        });

                        var SanfranciscoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(37.757815,-122.5076403,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Sanfrancisco'
                        });

                        var SacramentoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(38.5617256,-121.5829978,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Sacramento'
                        });

                        var MiamiMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(25.7824618,-80.301044,12),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'Miami'
                        });

                        var MexicoMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(19.3910039,-99.2836997,11),
                            map: map,
                            icon: 'images/map-marker.png',
                            title: 'mexico'
                        });

                    }
