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

define({documentTypes:{data:{caption:"ISO 19115 (Дані)",description:""},service:{caption:"ISO 19119 (Сервіс)",description:""},gmi:{caption:"ISO 19115-2 (Зображення та дані з нанесеною сіткою)",description:""}},general:{reference:"Опорне значення"},sections:{metadata:"Метадані",identification:"Ідентифікація",distribution:"Розподіл",quality:"Якість",acquisition:"Отримання"},metadataSection:{identifier:"Ідентифікатор",contact:"Контакт",date:"Дата",standard:"Стандартний",reference:"Опорне значення"},identificationSection:{citation:"Цитата",description:"Опис",contact:"Контакт",thumbnail:"Ескіз",keywords:"Ключові слова",constraints:"Обмеження",resource:"Ресурс",resourceTab:{representation:"Представлення",language:"Мова",classification:"Класифікація",extent:"Екстент"},serviceResourceTab:{serviceType:"Тип сервісу",extent:"Екстент",couplingType:"Тип звʼязаності",operation:"Операція",operatesOn:"Виконує операції над"}},distributionSection:{},qualitySection:{scope:"Масштаб",conformance:"Відповідність",lineage:"Походження"},acquisitionSection:{requirement:"Вимога",objective:"Ціль",instrument:"Прилад",plan:"План",operation:"Операція",platform:"Платформа",environment:"Навколишнє середовище"},AbstractMD_Identification:{sAbstract:"Короткий огляд",purpose:"Призначення",credit:"Кредити",pointOfContact:"Точка контакту",resourceMaintenance:"Супровід",graphicOverview:"Графічне оглядове зображення",descriptiveKeywords:"Колекція ключових слів",resourceConstraints:"Обмеження"},CI_Address:{deliveryPoint:"Точка доставки",city:"Місто",administrativeArea:"Адміністративна область",postalCode:"Поштовий індекс",country:"Країна",electronicMailAddress:"Адреса електронної пошти"},CI_Citation:{title:"Заголовок",alternateTitle:"Альтернативний заголовок",identifier:"Унікальний ідентифікатор ресурсу",resource:{title:"Заголовок ресурсу",date:"Дата ресурсу"},specification:{title:"Заголовок специфікації",date:"Дата специфікації"}},CI_Contact:{phone:"Телефон",address:"Адреса",onlineResource:"Онлайн-ресурс",hoursOfService:"Години обслуговування",contactInstructions:"Інструкції щодо звʼязку"},CI_Date:{date:"Дата",dateType:"Тип дати"},CI_DateTypeCode:{caption:"Тип дати",creation:"Дата створення",publication:"Дата публікації",revision:"Дата перегляду"},CI_OnLineFunctionCode:{caption:"Функція",download:"Завантажити",information:"Інформація",offlineAccess:"Доступ в режимі «офлайн»",order:"Порядок",search:"Пошук"},CI_OnlineResource:{caption:"Онлайн-ресурс",linkage:"URL",protocol:"Протокол",applicationProfile:"Профіль додатку",name:"Імʼя",description:"Опис",sFunction:"Функція"},CI_ResponsibleParty:{caption:"Точка контакту",individualName:"Особисте імʼя",organisationName:"Назва організації",positionName:"Назва посади",contactInfo:"Контактна інформація",role:"Роль"},CI_RoleCode:{caption:"Роль",resourceProvider:"Постачальник ресурсу",custodian:"Зберігач",owner:"Власник",user:"Користувач",distributor:"Дистрибʼютор",originator:"Засновник",pointOfContact:"Точка контакту",principalInvestigator:"Головний дослідник",processor:"Обробник",publisher:"Видавець",author:"Автор"},CI_Telephone:{voice:"Голос",facsimile:"Факс"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Веб-сервіси"},DQ_ConformanceResult:{caption:"Результат відповідності",explanation:"Пояснення",degree:{caption:"Градус",validationPerformed:"Перевірка виконана",conformant:"Відповідає",nonConformant:"Не відповідає"}},DQ_DataQuality:{report:"Звіт"},DQ_Scope:{level:"Масштаб (інформація про якість відноситься до)",levelDescription:"Опис рівня"},EX_Extent:{caption:"Екстент",description:"Опис",geographicElement:"Просторовий екстент",temporalElement:"Часовий екстент",verticalElement:"Вертикальний екстент"},EX_GeographicBoundingBox:{westBoundLongitude:"Західна гранична довгота",eastBoundLongitude:"Східна гранична довгота",southBoundLatitude:"Південна гранична довгота",northBoundLatitude:"Північна гранична довгота"},EX_GeographicDescription:{caption:"Географічний опис"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Дата початку",endPosition:"Дата завершення"}},EX_VerticalExtent:{minimumValue:"Мінімальне значення",maximumValue:"Максимальне значення",verticalCRS:"Вертикальна СКП"},Length:{caption:"Довжина",uom:"Одиниці виміру",km:"Кілометри",m:"Метри",mi:"Милі",ft:"Фути"},LI_Lineage:{statement:"Інструкція про походження"},MD_BrowseGraphic:{fileName:"URL-адреса графіки перегляду",fileDescription:"Підпис графіки перегляду",fileType:"Тип графіки перегляду"},MD_ClassificationCode:{unclassified:"Некласифікований",restricted:"Обмежений",confidential:"Конфіденційний",secret:"Таємний",topSecret:"Цілком таємний"},MD_Constraints:{caption:"Обмеження використання",useLimitation:"Обмеження використання"},MD_DataIdentification:{spatialRepresentationType:"Тип просторового представлення",spatialResolution:"Просторова роздільна здатність",language:"Мова ресурсу",supplementalInformation:"Додатково"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Формат розподілу",transferOptions:"Опції передачі"},MD_Format:{name:"Імʼя формату",version:"Версія формату"},MD_Identifier:{caption:"URI",identifierCaption:"Ідентифікатор",code:"Код"},MD_Keywords:{delimitedCaption:"Ключові слова",thesaurusName:"Повʼязаний тезаурус"},MD_KeywordTypeCode:{caption:"Тип ключового слова",discipline:"Дисципліна",place:"Місце",stratum:"Шар",temporal:"Часовий",theme:"Тема"},MD_LegalConstraints:{caption:"Правові обмеження",accessConstraints:"Обмеження доступу",useConstraints:"Обмеження використання",otherConstraints:"Інші обмеження"},MD_MaintenanceFrequencyCode:{caption:"Частота",continual:"Безперервний",daily:"Щодня",weekly:"Щотижня",fortnightly:"Раз на два тижня",monthly:"Щомісяця",quarterly:"Щокварталу",biannually:"Двічі на рік",annually:"Щорічно",asNeeded:"По мірі потреби",irregular:"Нерегулярний",notPlanned:"Непланований",unknown:"Невідомий"},MD_Metadata:{caption:"Метадані",fileIdentifier:"Ідентифікатор файлу",language:"Мова метаданих",hierarchyLevel:"Рівень ієрархії",hierarchyLevelName:"Імʼя рівня ієрархії",contact:"Метадані Контакт",dateStamp:"Метадані Дата",metadataStandardName:"Метадані Назва стандарту",metadataStandardVersion:"Метадані Версія стандарту",referenceSystemInfo:"Система привʼязки",identificationInfo:"Ідентифікація",distributionInfo:"Розподіл",dataQualityInfo:"Якість"},MD_ProgressCode:{caption:"Код ходу виконання",completed:"Завершено",historicalArchive:"Історичний архів",obsolete:"Застарілий",onGoing:"Виконується",planned:"Заплановано",required:"Потрібно",underDevelopment:"В розробці"},MD_RepresentativeFraction:{denominator:"Знаменник"},MD_Resolution:{equivalentScale:"Еквівалентна шкала",distance:"Відстань"},MD_RestrictionCode:{copyright:"Авторське право",patent:"Патент",patentPending:"Патент заявлений",trademark:"Торговельна марка",license:"Ліцензія",intellectualPropertyRights:"Права інтелектуальної власності",restricted:"Обмежений",otherRestrictions:"Інші обмеження"},MD_ScopeCode:{attribute:"Атрибут",attributeType:"Тип атрибуту",collectionHardware:"Апаратне забезпечення для збору",collectionSession:"Сеанс збору",dataset:"Набір даних",series:"Серія",nonGeographicDataset:"Набір негеографічних даних",dimensionGroup:"Група вимірів",feature:"Обʼєкт",featureType:"Тип обʼєкту",propertyType:"Тип властивості",fieldSession:"Сеанс поля",software:"Програмне забезпечення",service:"Сервіс",model:"Модель",tile:"Тайл"},MD_ScopeDescription:{attributes:"Атрибути",features:"Об’єкти",featureInstances:"Екземпляри обʼєктів",attributeInstances:"Екземпляри атрибутів",dataset:"Набір даних",other:"Інше"},MD_SecurityConstraints:{caption:"Обмеження безпеки",classification:"Класифікація",userNote:"Примітка користувача",classificationSystem:"Система класифікації",handlingDescription:"Опис обробки"},MD_SpatialRepresentationTypeCode:{caption:"Тип просторового представлення",vector:"Вектор",grid:"Сітка",textTable:"Текстова таблиця",tin:"TIN",stereoModel:"Стерео-модель",video:"Відео"},MD_TopicCategoryCode:{caption:"Категорія тем",boundaries:"Адміністративні та політичні кордони",farming:"Сільське господарство",climatologyMeteorologyAtmosphere:"Атмосфера та клімат",biota:"Біологія та екологія",economy:"Бізнес та економіка",planningCadastre:"Кадастр",society:"Культура, суспільство та демографія",elevation:"Підвищення та похідні обʼєкти",environment:"Навколишнє середовище та раціональне природокористування",structure:"Споруди",geoscientificInformation:"Геологія та геофізика",health:"Охорона здоровʼя та захворювання",imageryBaseMapsEarthCover:"Зображення та базові карти",inlandWaters:"Внутрішні водні ресурси",location:"Місця розташування та геодезичні мережі",intelligenceMilitary:"Військові обʼєкти",oceans:"Океани та естуарії",transportation:"Транспортні мережі",utilitiesCommunication:"Комунальний комплекс та комунікації"},MI_ContextCode:{caption:"Контекст",acquisition:"Отримання",pass:"Допуск",wayPoint:"Точка шляху"},MI_EnvironmentalRecord:{caption:"Умови навколишнього середовища",averageAirTemperature:"Середня температура повітря",maxRelativeHumidity:"Максимальна відносна вологість",maxAltitude:"Максимальна висота",meterologicalConditions:"Метеорологічні умови"},MI_Event:{identifier:"Ідентифікатор події",time:"Час",expectedObjectiveReference:"Очікувана ціль (ідентифікатор цілі)",relatedSensorReference:"Повʼязаний датчик (ідентифікатор приладу)",relatedPassReference:"Повʼязаний допуск (ідентифікатор допуску до платформу)"},MI_GeometryTypeCode:{point:"Точка",linear:"Лінійний",areal:"Площовий",strip:"Смуга"},MI_Instrument:{citation:"Цитата для приладу",identifier:"Ідентифікатор приладу",sType:"Тип приладу",description:"Опис приладу",mountedOn:"Встановлений на",mountedOnPlatformReference:"Встановлений на (ідентифікатор платформу)"},MI_Metadata:{acquisitionInformation:"Отримання"},MI_Objective:{caption:"Ціль",identifier:"Ідентифікатор цілі",priority:"Пріоритет цілі",sFunction:"Функція цілі",extent:"Екстент",pass:"Допуск на платформу",sensingInstrumentReference:"Первинний вимірювальний прилад (ідентифікатор приладу)",objectiveOccurrence:"Події",sections:{identification:"Ідентифікація",extent:"Екстент",pass:"Допуск",sensingInstrument:"Первинний вимірювальний прилад",objectiveOccurrence:"Події"}},MI_ObjectiveTypeCode:{caption:"Тип (техніка збору для цілі)",instantaneousCollection:"Миттєвий збір",persistentView:"Постійний перегляд",survey:"Розвідка"},MI_Operation:{caption:"Операція",description:"Опис операції",citation:"Цитата операції",identifier:"Ідентифікатор операції",status:"Стан операції",objectiveReference:"Повʼязана ціль (ідентифікатор цілі)",planReference:"Повʼязаний план (ідентифікатор плану)",significantEventReference:"Повʼязана подія (ідентифікатор події)",platformReference:"Повʼязана платформа (ідентифікатор платформи)",sections:{identification:"Ідентифікація",related:"Пов’язаний"}},MI_OperationTypeCode:{caption:"Тип операції",real:"Реальний",simulated:"Модельований",synthesized:"Синтетичний"},MI_Plan:{sType:"Відбір зразків геометрії для збирання даних",status:"Стан плану",citation:"Цитата повноважного органу, що запитав збір",satisfiedRequirementReference:"Задоволена вимога (ідентифікатор вимоги)",operationReference:"Повʼязана операція (ідентифікатор операції)"},MI_Platform:{citation:"Цитата платформи",identifier:"Ідентифікатор платформи",description:"Опис платформи, що підтримує прилад",sponsor:"Спонсорська організація для платформи",instrument:"Прилад(и), встановлений на платформі",instrumentReference:"Ідентифікатор приладу",sections:{identification:"Ідентифікація",sponsor:"Спонсор",instruments:"Прилади"}},MI_PlatformPass:{identifier:"Ідентифікатор допуску на платформу",extent:"Екстент допуску на платформу",relatedEventReference:"Повʼязана подія (ідентифікатор події)"},MI_PriorityCode:{critical:"Критичний",highImportance:"Висока важливість",mediumImportance:"Середня важливість",lowImportance:"Низька важливість"},MI_RequestedDate:{requestedDateOfCollection:"Запитана дата збору",latestAcceptableDate:"Остання прийнятна дата"},MI_Requirement:{caption:"Вимога",citation:"Цитата для інструктивного матеріалу щодо вимог",identifier:"Ідентифікатор вимоги",requestor:"Ініціатор запиту вимоги",recipient:"Отримувач результатів вимоги",priority:"Пріоритет вимоги",requestedDate:"Запитана дата",expiryDate:"Дата закінчення терміну дії",satisifiedPlanReference:"Задоволений план (ідентифікатор плану)",sections:{identification:"Ідентифікація",requestor:"Ініціатор запиту",recipient:"Отримувач",priorityAndDates:"Пріоритет та дати",satisifiedPlan:"Задоволений план"}},MI_SequenceCode:{caption:"Послідовність",start:"Початок",end:"Кінець",instantaneous:"Миттєвий"},MI_TriggerCode:{caption:"Тригер",automatic:"Автоматичний",manual:"Ручний",preProgrammed:"Попередньо запрограмований"},ObjectReference:{uuidref:"UUID-посилання",xlinkref:"URL-посилання"},RS_Identifier:{caption:"Ідентифікатор плюс кодовий простір",code:"Код",codeSpace:"Кодовий простір"},SV_CouplingType:{loose:"Вільний",mixed:"Змішаний",tight:"Вузький"},SV_OperationMetadata:{operationName:"Імʼя операції",DCP:"DCP",connectPoint:"Точка зʼєднання"},SV_ServiceIdentification:{serviceType:"Тип сервісу",couplingType:"Тип звʼязаності",containsOperations:"Метадані операції",operatesOn:"Виконує операції над"},TM_Primitive:{indeterminatePosition:"Проміжне положення",indeterminates:{before:"До",after:"Після",now:"Зараз",unknown:"Невідомий"}},gemet:{concept:{gemetConceptKeyword:"GEMET Ключове слово концепції",tool:"Знайти...",dialogTitle:"GEMET - Ключове слово концепції",searchLabel:"Пошук:",searchTip:"Пошук GEMET"},theme:{tool:"Знайти...",dialogTitle:"GEMET - Тема даних Inspire"},ioerror:"Помилка звʼязку з сервісом GEMET: {url}",searching:"Пошук GEMET...",noMatch:"Результати, які відповідають критеріям пошуку, не знайдено.",languages:{bg:"Болгарська",cs:"Чеська",da:"Данська",nl:"Голландська",en:"Англійська",et:"Естонська",fi:"Фінська",fr:"Французька",de:"Німецька",el:"Грецька",hu:"Угорська",ga:"Ґельська (ірландська)",it:"Італійська",lv:"Латвійська",lt:"Литовська",mt:"Мальтійська",pl:"Польська",pt:"Португальська",ro:"Румунська",sk:"Словацька",sl:"Словацька",es:"Іспанська",sv:"Шведська"}}});