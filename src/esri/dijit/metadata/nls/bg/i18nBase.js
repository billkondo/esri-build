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

define({general:{cancel:"Отказ",close:"Затваряне",none:"Няма",ok:"Ок",other:"Друго",stamp:"Марка",now:"Сега",choose:"Изберете едно:"},editor:{noMetadata:"Няма метаданни за този елемент.",xmlViewOnly:"Типът метаданни, свързани с този елемент, не се поддържа от редактора. Метаданните трябва да са в ArcGIS формат .",editorDialog:{caption:"Метаданни",captionPattern:"Метаданни за {title}"},primaryToolbar:{view:"Преглед",viewXml:"Изглед XML",edit:"Редактиране",initializing:"Зареждане...",startingEditor:"Редакторът се стартира ...",loadingDocument:"Зарежда се документ ...",updatingDocument:"Обновяване на документ...",generatingView:"Генериране на изглед ...",errors:{errorGeneratingView:"Възникна грешка при генерирането на изгледа.",errorLoadingDocument:"Възникна грешка при зареждането на документа."}},changesNotSaved:{prompt:"Документът ви има промени, които не са запазени.",dialogTitle:"Затваряне на редактора на метаданни",closeButton:"Затваряне"},download:{caption:"Изтегляне",dialogTitle:"Изтегляне",prompt:"Щракнете тук, за да изтеглите файла си."},load:{caption:"Отваряне",dialogTitle:"Отваряне",typeTab:"Нов документ",fileTab:"Отваряне на файл",templateTab:"Шаблон",itemTab:"Вашият елемент",filePrompt:"Изберете локален XML файл с метаданни на ArcGIS. Метаданните трябва да са във формат ArcGIS.",templatePrompt:"Създаване на метаданни",pullItem:"Попълнете метаданните с подробности за елемента.",importWarning:"Избраният файл не се появява във формат ArcGIS. Качените метаданни трябва да са във формат ArcGIS.",loading:"Зареждане...",noMetadata:"Метаданните могат да бъдат създадени за този елемент, като изберете една от следните опции.",unrecognizedMetadata:"Типът метаданни, свързани с този елемент, не се поддържа от редактора. Поддържаните метаданни могат да бъдат създадени, като изберете една от следните опции.",errorLoading:"Възникна грешка при зареждането.",warnings:{badFile:"Избраният файл не може да се зареди.",notAnXml:"Избраният файл не е XML файл.",notSupported:"Този тип файл не се поддържа."},portalCaption:"Презаписване"},save:{caption:"Запазване",dialogTitle:"Запазване на метаданни",working:"Метаданните се записват...",errorSaving:"Възникна грешка, вашите метаданни не бяха запазени.",saveDialog:{pushCaption:"Приложете промените към вашия елемент"}},saveAndClose:{caption:"Запазване и затваряне"},saveDraft:{caption:"Изтегляне",dialogTitle:"Изтегляне"},validate:{caption:"Валидиране",dialogTitle:"Проверка",docIsValid:"Вашият документ е валиден."},viewHtml:{caption:"Преглед",dialogTitle:"Преглед на метаданни",savePrompt:"Документът ви има незаписани промени. Трябва да запазите всички промени, за да ги видите, когато преглеждате метаданни.",saveButton:"Запазване и преглед",portalNone:"Метаданните, базирани на стандарти, не са създадени. Първо трябва да запишете, преди да можете да видите метаданните."},del:{caption:"Изтриване",dialogTitle:"Изтриване на метаданни",prompt:"Сигурни ли сте, че искате да изтриете тези метаданни?",working:"Изтриване на метаданни...",errorDeleting:"Възникна грешка, вашите метаданни не са изтрити.",portalNone:"Няма наличен документ с метаданни за изтриване. Метаданните, базирани на стандарти, не са създадени.",portalPrompt:"Това ще изтрие документа с метаданни и ще възстанови метаданните на този елемент до информация за елемента като заглавие, описание и т.н.",portalPrompt2:"Това ще изтрие базирани на стандарти метаданни. Сигурни ли сте, че искате да изтриете тези метаданни?",portalButton:"Изтриване и затваряне"},transform:{caption:"Трансформация",dialogTitle:"Трансформирайте в",prompt:"",working:"Трансформира се...",errorTransforming:"Възникна грешка при трансформирането на вашия документ."},errorDialog:{dialogTitle:"Появи се грешка"}},arcgis:{portal:{metadataButton:{caption:"Метаданни"}}},calendar:{button:"Календар...",title:"Календар"},geoExtent:{button:"Задаване на географски обхват ...",title:"Географски обхват",navigate:"Навигиране",draw:"Начертайте правоъгълник",drawHint:"Натиснете надолу, за да започнете и оставете да завърши."},hints:{date:"(гггг или гггг-мм или гггг-мм-дд)",dateTime:"(гггг-мм-дд чч:мм:сс.ссс[+-]чч:мм)",dateOrDateTime:"(гггг или гггг-мм или гггг-мм-дд или гггг-мм-ддTчч:мм:сс.ссс[+-]чч:мм)",delimitedTextArea:"(използвайте запетая или нов ред за разделяне)",fgdcDate:"(гггг или гггг-мм или гггг-мм-дд)",fgdcTime:"(чч:мм:сс.ссс[+-]чч:мм)",integer:"(въведете цяло число)",latitude:"(десетични градуси)",longitude:"(десетични градуси)",number:"(въведете число)",numberGreaterThanZero:"((въведете число > 0)"},isoTopicCategoryCode:{caption:"Тематична категория",boundaries:"Административни и политически граници",farming:"Селско стопанство и земеделие",climatologyMeteorologyAtmosphere:"Атмосфера и климат",biota:"Биология и екология",economy:"Бизнес и икономика",planningCadastre:"Кадастър",society:"Култура, Общество и Демография",elevation:"Височина и производни продукти",environment:"Околна среда и Опазване на околната среда",structure:"Съоръжения и Структури",geoscientificInformation:"Геоложки и геофизични",health:"Човешко здраве и Болести",imageryBaseMapsEarthCover:"Карти с изображения и Базови карти",inlandWaters:"Вътрешни водни ресурси",location:"Местоположения и Геодезически мрежи",intelligenceMilitary:"Военно дело",oceans:"Океани, Реки и морета",transportation:"Транспортни мрежи",utilitiesCommunication:"Комунални услуги и Комуникация"},multiplicity:{moveElementDown:"Преместете раздела надолу",moveElementUp:"Преместете раздела нагоре",removeElement:"Премахване на раздел",repeatElement:"Повтаряне на раздел"},optionalNode:{switchTip:"Включете или изключете този раздел."},serviceTypes:{featureService:"Услуга с обекти",mapService:"Картова услуга",imageService:"Услуга с изображения",wms:"WMS",wfs:"WFS",wcs:"Услуга за уеб покритие (WCS)"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"Ок",empty:"Изисква се стойност",date:"Стойността трябва да е дата.",integer:"Стойността трябва да е цяло число.",number:"Стойността трябва да е число.",other:"Невалидна стойност."},validationPane:{clearMessages:"Изчистване на съобщения",prompt:"(щракнете върху всяко съобщение по-долу и предоставете необходимата информация в посоченото поле)"}});