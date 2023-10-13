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

define({general:{cancel:"Atcelt",close:"Aizvērt",none:"Nav",ok:"Labi",other:"Cits",stamp:"Zīmogs",now:"Tagad",choose:"Izvēlieties vienu:"},editor:{noMetadata:"Šai vienībai nav metadatu.",xmlViewOnly:"Redaktors neatbalsta ar šo vienību saistīto metadatu veidu. Metadatiem jābūt ArcGIS formātā.",editorDialog:{caption:"Metadati",captionPattern:"{title} metadati"},primaryToolbar:{view:"Skatījums",viewXml:"Skatīt XML",edit:"Rediģēt",initializing:"Ielādē...",startingEditor:"Notiek redaktora startēšana...",loadingDocument:"Notiek dokumenta ielādēšana...",updatingDocument:"Notiek dokumenta atjaunošana...",generatingView:"Notiek skata ģenerēšana...",errors:{errorGeneratingView:"Ģenerējot skatu, radās kļūda.",errorLoadingDocument:"Ielādējot dokumentu, radās kļūda."}},changesNotSaved:{prompt:"Jūsu dokumentā ir veiktas izmaiņas, kas nav saglabātas.",dialogTitle:"Aizvērt metadatu redaktoru",closeButton:"Aizvērt"},download:{caption:"Lejupielāde",dialogTitle:"Lejupielāde",prompt:"Noklikšķiniet šeit, lai lejupielādētu savu failu."},load:{caption:"Atvērts",dialogTitle:"Atvērts",typeTab:"Jauns dokuments",fileTab:"Faila atvēršana",templateTab:"Šablons",itemTab:"Jūsu vienība",filePrompt:"Izvēlieties lokālu ArcGIS Metadata XML failu. Metadatiem jābūt ArcGIS formātā.",templatePrompt:"Metadatu izveide",pullItem:"Papildiniet metadatus ar informāciju par vienību.",importWarning:"Šķiet, ka izvēlētais fails nav ArcGIS formātā. Augšupielādētajiem metadatiem jābūt ArcGIS formātā.",loading:"Ielādē...",noMetadata:"Šai vienībai var izveidot metadatus, izvēloties kādu no tālāk norādītajām opcijām.",unrecognizedMetadata:"Redaktors neatbalsta ar šo vienību saistīto metadatu veidu. Šai vienībai var izveidot atbalstītus metadatus, izvēloties kādu no tālāk norādītajām opcijām.",errorLoading:"Ielādējot radās kļūda.",warnings:{badFile:"Izvēlēto failu nevarēja ielādēt.",notAnXml:"Izvēlētais fails nav XML fails.",notSupported:"Šīs faila veids netiek atbalstīts."},portalCaption:"Pārrakstīt"},save:{caption:"Saglabāt",dialogTitle:"Saglabāt metadatus",working:"Notiek metadatu saglabāšana...",errorSaving:"Radās kļūda, un jūsu metadati netika saglabāti.",saveDialog:{pushCaption:"Saglabāt jūsu vienības izmaiņas"}},saveAndClose:{caption:"Saglabāt un aizvērt"},saveDraft:{caption:"Lejupielādēt",dialogTitle:"Lejupielādēt"},validate:{caption:"Validēt",dialogTitle:"Validācija",docIsValid:"Jūsu dokuments ir derīgs."},viewHtml:{caption:"Skatīt",dialogTitle:"Skatīt metadatus",savePrompt:"Jūsu dokumentā ir nesaglabātas izmaiņas. Ja jūs skatāt metadatus un vēlaties skatīt izmaiņas, tās ir jāsaglabā.",saveButton:"Saglabāt un skatīt",portalNone:"Metadati, kuru pamatā ir standarti, nav izveidoti. Lai skatītu metadatus, vispirms saglabājiet."},del:{caption:"Izdzēst",dialogTitle:"Metadatu dzēšana",prompt:"Vai tiešām vēlaties dzēst šos metadatus?",working:"Notiek metadatu dzēšana...",errorDeleting:"Radās kļūda, un jūsu metadati netika izdzēsti.",portalNone:"Nav pieejams neviens dzēšams metadatu dokuments. Metadati, kuru pamatā ir standarti, nav izveidoti.",portalPrompt:"Metadatu dokuments tiks izdzēsts un šī vienuma metadati tiks atiestatīti uz vienuma informāciju, piemēram, virsrakstu, aprakstu utt.",portalPrompt2:"Šādi tiks izdzēsti standarta metadati. Vai tiešām vēlaties dzēst šos metadatus?",portalButton:"Dzēst un aizvērt"},transform:{caption:"Pārveidot",dialogTitle:"Pārveidot par",prompt:"",working:"Notiek pārveidošana...",errorTransforming:"Pārveidojot dokumentu, radās kļūda."},errorDialog:{dialogTitle:"Radās kļūda"}},arcgis:{portal:{metadataButton:{caption:"Metadati"}}},calendar:{button:"Kalendārs...",title:"Kalendārs"},geoExtent:{button:"Iestatīt ģeogrāfisko paplašinājumu...",title:"Ģeogrāfiskais paplašinājums",navigate:"Navigēšana",draw:"Taisnstūra zīmēšana",drawHint:"Nospiediet uz leju, lai sāktu, un atlaidiet, lai pabeigtu."},hints:{date:"(gggg vai gggg-mm, vai gggg-mm-dd)",dateTime:"(gggg-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(gggg vai gggg-mm, vai gggg-mm-dd, vai gggg-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(atdaliet ar komatu vai jaunu rindu)",fgdcDate:"(gggg vai gggg-mm, vai gggg-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(ievadiet veselu skaitli)",latitude:"(decimālie grādi)",longitude:"(decimālie grādi)",number:"(Ievadiet skaitli)",numberGreaterThanZero:"(ievadiet skaitli > 0)"},isoTopicCategoryCode:{caption:"Tēmas kategorija",boundaries:"Administratīvās un politiskās robežas",farming:"Lauksaimniecība un zemkopība",climatologyMeteorologyAtmosphere:"Atmosfēra un klimats",biota:"Bioloģija un ekoloģija",economy:"Uzņēmējdarbība un ekonomika",planningCadastre:"Kadastrs",society:"Kultūra, sabiedrība un demogrāfija",elevation:"Augstums un tā atvasinājumi",environment:"Vide un tās aizsardzība",structure:"Ēkas un celtnes",geoscientificInformation:"Ģeoloģija un ģeofizika",health:"Cilvēka veselība un slimības",imageryBaseMapsEarthCover:"Attēli un pamatkartes",inlandWaters:"Iekšzemes ūdens resursi",location:"Atrašanās vietas un ģeodēziskie tīkli",intelligenceMilitary:"Militārā nozare",oceans:"Okeāni un estuāri",transportation:"Transporta tīkli",utilitiesCommunication:"Komunikācijas"},multiplicity:{moveElementDown:"Pārvietot sadaļu uz leju",moveElementUp:"Pārvietot sadaļu uz augšu",removeElement:"Noņemt sadaļu",repeatElement:"Atkārtot sadaļu"},optionalNode:{switchTip:"Iekļaut vai izslēgt šo sadaļu."},serviceTypes:{featureService:"Elementu serviss",mapService:"Kartes serviss",imageService:"Attēlu serviss",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} — {message}",patternWithHint:"{label} — {message} {hint}",ok:"Labi",empty:"Ir nepieciešama vērtība.",date:"Vērtībai jābūt datumam.",integer:"Vērtībai jābūt veselam skaitlim.",number:"Vērtībai jābūt skaitlim.",other:"Nederīga vērtība."},validationPane:{clearMessages:"Notīrīt ziņojumus",prompt:"(noklikšķiniet uz katra tālāk redzamā ziņojuma un norādītajā laukā ievadiet nepieciešamo informāciju)"}});