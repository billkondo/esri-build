// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define({countryCodes:{WORLD:"Mondo",AD:"Andorra",AE:"Emirati Arabi Uniti",AF:"Afghanistan",AG:"Antigua e Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antartide",AR:"Argentina",AS:"Samoa americane",AT:"Austria",AU:"Australia",AW:"Aruba",AZ:"Azerbaigian",BA:"Bosnia ed Erzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgio",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrein",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia, Stato plurinazionale di",BQ:"Bonaire, Sint Eustatius e Saba",BR:"Brasile",BS:"Bahamas",BT:"Bhutan",BV:"Isola Bouvet",BW:"Botswana",BY:"Bielorussia",BZ:"Belize",CA:"Canada",CD:"Congo, Repubblica Democratica del",CF:"Centrafricana, Repubblica",CG:"Congo",CH:"Svizzera",CI:"Costa d'Avorio",CK:"Isole Cook",CL:"Cile",CM:"Camerun",CN:"Cina",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Capo Verde",CW:"Curacao",CY:"Cipro",CZ:"Repubblica Ceca",DE:"Germania",DJ:"Gibuti",DK:"Danimarca",DM:"Dominica",DO:"Repubblica Dominicana",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egitto",EH:"Sahara Occidentale",ER:"Eritrea",ES:"Spagna",ET:"Etiopia",FI:"Finlandia",FJ:"Fiji",FK:"Isole Falkland (Isole Malvine)",FM:"Micronesia, Stati Federati di",FO:"Fær Øer (Isole Faroe)",FR:"Francia",GA:"Gabon",GB:"Regno Unito",GD:"Grenada",GE:"Georgia",GF:"Guayana francese",GG:"Guernsey",GH:"Ghana",GI:"Gibilterra",GL:"Groenlandia",GM:"Gambia",GN:"Guinea",GP:"Guadalupa",GQ:"Guinea Equatoriale",GR:"Grecia",GS:"Georgia del Sud e Isole Sandwich Meridionali",GT:"Guatemala",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Isole Heard e McDonald",HN:"Honduras",HR:"Croazia",HT:"Haiti",HU:"Ungheria",ID:"Indonesia",IE:"Irlanda",IL:"Israele",IM:"Isola di Man",IN:"India",IO:"Territorio britannico dell'Oceano Indiano",IQ:"Iraq",IR:"Iran, Repubblica Islamica di",IS:"Islanda",IT:"Italia",JE:"Jersey",JM:"Giamaica",JO:"Giordania",JP:"Giappone",KE:"Kenya",KG:"Kirghizistan",KH:"Cambogia",KI:"Kiribati",KM:"Comore",KN:"Saint Christopher e Nevis",KP:"Corea, Repubblica democratica della",KR:"Corea, Repubblica di",KW:"Kuwait",KY:"Cayman",KZ:"Kazakhstan",LA:"Repubblica democratica popolare del Laos",LB:"Libano",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lituania",LU:"Lussemburgo",LV:"Lettonia",LY:"Libia",MA:"Marocco",MC:"Monaco",MD:"Moldova, Repubblica di",ME:"Montenegro",MF:"Saint Martin (parte francese)",MG:"Madagascar",MH:"Marshall",MK:"Macedonia, Ex Repubblica Jugoslava di",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Marianne Settentrionali",MQ:"Martinica",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldive",MW:"Malawi",MX:"Messico",MY:"Malaysia",MZ:"Mozambico",NA:"Namibia",NC:"Nuova Caledonia",NE:"Niger",NG:"Nigeria",NI:"Nicaragua",NL:"Paesi Bassi",NO:"Norvegia",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"Nuova Zelanda",OM:"Oman",PA:"Panama",PE:"Perù",PF:"Polinesia Francese",PG:"Papua Nuova Guinea",PH:"Filippine",PK:"Pakistan",PL:"Polonia",PM:"Saint-Pierre e Miquelon",PN:"Pitcairn",PS:"Palestina, Stato di",PT:"Portogallo",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Federazione Russa",RW:"Ruanda",SA:"Arabia Saudita",SB:"Salomone",SC:"Seychelles",SD:"Sudan",SE:"Svezia",SG:"Singapore",SH:"Sant'Elena, Ascensione e Tristan da Cunha",SI:"Slovenia",SJ:"Svalbard e Jan Mayen",SK:"Slovacchia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"Sudan del Sud",ST:"São Tomé e Príncipe",SV:"El Salvador",SX:"Saint Martin (parte olandese)",SY:"Repubblica araba siriana",SZ:"Swaziland",TC:"Turks e Caicos",TD:"Ciad",TF:"Territori australi francesi",TG:"Togo",TH:"Thailandia",TJ:"Tagikistan",TK:"Tokelau",TL:"Timor Est",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turchia",TT:"Trinidad e Tobago",TV:"Tuvalu",TW:"Taiwan, provincia della Cina",TZ:"Tanzania, Repubblica Unita di",UA:"Ucraina",UG:"Uganda",UM:"Altre isole americane del Pacifico",US:"Stati Uniti",UY:"Uruguay",UZ:"Uzbekistan",VA:"Santa Sede (Stato della Città del Vaticano)",VC:"Saint Vincent e Grenadine",VE:"Venezuela, Repubblica Bolivariana di",VG:"Isole Vergini Britanniche",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis e Futuna",WS:"Samoa",XK:"Repubblica del Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"Sudafrica",ZM:"Zambia",ZW:"Zimbabwe"}});