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

define(["dojo/_base/lang","../../config","dojo/i18n!esri/nls/jsapi"],(function(a,e,i){var d;function c(){return d||(d={3.25:{"US.census":[{id:"e2a6868f979f4e37896b631581ae4918",alias:"demographic-summary"},{id:"88420f4a98bb45cbacacbad67e23266e",alias:"key-facts"},{id:"efb6bee0a80d4801887ec4cf73aa67fc",alias:"marketing-profile"},{id:"12867e4a89d5461fbbe3b9c6c181993a",alias:"at-risk-population"},{id:"6637be1fbddf4e948fbd09ce6a7a7888",alias:"portrait-property-flyer"},{id:"02c1124e916847249aa91b9ce48c2552",alias:"skyscraper"},{id:"3afd4c5089584b089af5b0037d74a9d1",alias:"transportation-to-work"},{id:"a696eae378974ed5a63510fa70bed011",alias:"health-care"},{id:"c931fc6ebdb440189a8bc6bd34115807",alias:"executive-summary-call-outs"},{id:"96096c8afa4847dea936942b1f89acb5",alias:"tapestry-profile"},{id:"7a20b92b48cc4e63bf7ba956295de948",alias:"nearby-restaurants"}],"CA.census":[{id:"6c467040a8a64c33972045cf091bca5b",alias:"key-facts"}],"*.census":[{id:"11c4cec3c0d34c4aa51cd8877e2db4ef",alias:"key-facts"}]},3.26:{"US.census":[{id:"a5161c2ca50d44429daf2bf9dbe73eb5",alias:"demographic-summary"},{id:"693269bfbf6c4851901a3c9c56550294",alias:"key-facts"},{id:"aceee34210e748ba95cb9cae21e196b9",alias:"marketing-profile"},{id:"a7936c5ce77c4d698140db21ab1a7858",alias:"at-risk-population"},{id:"8d42e32b12154bc580af89483c208d56",alias:"portrait-property-flyer"},{id:"7be44b15e29847a383906aac5699cf00",alias:"skyscraper"},{id:"537230b385fb45d9a8d6e59265e36fbf",alias:"transportation-to-work"},{id:"89c6ff4d96de4acaa024b7a408f186b0",alias:"health-care"},{id:"0fa71e0a74294e7b8265e4cd507c7d17",alias:"executive-summary-call-outs"},{id:"f2754d21223a491798dbc0ef2c71858f",alias:"tapestry-profile"},{id:"866e6a839ee348dfae5a8ee9bdafbfc0",alias:"nearby-restaurants"},{id:"f808dfceddd149ff85a9d8825d4e5a5f",alias:"multi-ring-comparison"}],"CA.census":[{id:"f982018306a34cc58756ce0ed78c6b0c",alias:"key-facts"},{id:"c47fa8d040364abe80d288bb606da576",alias:"multi-ring-comparison"}],"*.census":[{id:"3813621424fc4443af1dcecab65be89c",alias:"key-facts"},{id:"dd1fa81faaf94541831cae16788393ab",alias:"multi-ring-comparison"}]},3.27:{"US.census":[{id:"3c6959a7c7c4450f9bdcc7063c9023d5",alias:"demographic-summary"},{id:"4cc0a5e007d946d5909524fcf80bc666",alias:"key-facts"},{id:"fb9b9a501c974540a52ab6d1027a8bcc",alias:"marketing-profile"},{id:"b0f05d5926d6444da40d6bf0c5c9846e",alias:"at-risk-population"},{id:"5cf609b26ce24633a2edc58d7ebeb3fd",alias:"portrait-property-flyer"},{id:"686d7af60bcb410db051ec8465889231",alias:"skyscraper"},{id:"a79a099ab7be4c34a9b0b28831b1aa9c",alias:"transportation-to-work"},{id:"6f64bb63647246dcb5d268fc301614f6",alias:"health-care"},{id:"99e919a7e9fd4fa2b55779f0dc118da8",alias:"executive-summary-call-outs"},{id:"f32b961757f347e2976ba011ee20cb13",alias:"tapestry-profile"},{id:"a266260cc3ec46c1b66c86f263feb8e4",alias:"nearby-restaurants"},{id:"dab290529fd44063a2d83e03a8dc49eb",alias:"multi-ring-comparison"},{id:"1499719e83754c81ae1477223c0dde39",alias:"property-details"},{id:"9c441f80f80348c8b5b747e2cf2a2ccd",alias:"employment-overview"},{id:"bb59cd9292ec47a0928900c5fb9c17b8",alias:"office-market-profile"},{id:"6f75892c4a5f4f5ba3d0edb4d8a0b13b",alias:"health-care-and-insurance"},{id:"a7524b019e1f482493e43f32ab9568a0",alias:"demographic-profile"},{id:"45d528a3865547bb89792d4517db2e7a",alias:"commute-profile"},{id:"acf5c12b54b64550ad7f582c9c97ed28",alias:"target-market-summary"},{id:"489d923d29d44c2681171a590fb37742",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"91d1e8c9d0ea482b9947dfe4bdfbe0ba",alias:"key-facts"},{id:"e05eb227df9b4ceba0ace202b1d0c1e2",alias:"multi-ring-comparison"}],"NL.NLD_4orange":[{id:"77e9461032b24e47b6c6b643cf02381f",alias:"housing-profile"},{id:"b80fd38e5f43448da530521832e0dfba",alias:"insurance-profile"},{id:"d36520d68d8e449c9f300be0e800f698",alias:"media-profile"},{id:"bad567fdf36e48e9a5108b66c96bf0ae",alias:"personicx-segmentation"},{id:"5726fe6cad4c491a863eff64e538231c",alias:"spending-profile"}],"JP.EsriJapan":[{id:"e4bd37bb10c74798a3600ca7484846ac",alias:"base-demographic-profile"},{id:"a5d7db5138644a9e95d9af1b40b31bb9",alias:"demographic-comparison-profile"},{id:"205b45f626f84650a1ca948be4f97411",alias:"future-population-profile"},{id:"ee12a9d9a2e04fb6b93628f075719bc9",alias:"population-households-profile"},{id:"3f857a2a8d14488abfcec383197e5a0b",alias:"consumer-spending-profile"},{id:"77369125467c4c9a8f3b9a628eda3347",alias:"base-demographic-profile-ja"},{id:"08abfdb8b8174846bd3723f094a88d86",alias:"demographic-comparison-profile-ja"},{id:"e5db2ced023d4c53a0ef9fe231d7fd15",alias:"future-population-profile-ja"},{id:"4c55f8ddb53345298e59bccfeb45e489",alias:"population-households-profile-ja"},{id:"24c8ef9a8c5d45c78791a84445eed29d",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"7aa819f9816a494ab28ab7604553f488",alias:"base-demographic-profile"},{id:"710051b492c3481a83e01bd6bf3dd3bf",alias:"household-profile"}],"ES.ESP_AIS":[{id:"3d046bf33ce04b598afd391a0dd195c9",alias:"base-demographic-profile"}],"PR.ACS":[{id:"d8b9f282034d47db808175fef56a15e2",alias:"at-risk-population"},{id:"eab5646a29324a6282db3b8ca47bf2b3",alias:"commute-profile"},{id:"ed6b5a0736aa4e04862a1a4307c608cc",alias:"demographic-summary"},{id:"a4c64a9006544751ad18ce75a401112e",alias:"health-care-and-insurance"},{id:"96d00aefd766428394d6ee6698a56591",alias:"coronavirus-impact-planning"}],"*.census":[{id:"365d52e6bac147a68a12eee229eb9b6b",alias:"key-facts"},{id:"0f7d2ba850fa40579cae1342001d80d7",alias:"multi-ring-comparison"}]},3.28:{"US.census":[{id:"45cb423066194f5f98c6f4ff81124db3",alias:"demographic-summary"},{id:"98d5848a944b4787b2ca038256c7878d",alias:"key-facts"},{id:"879849b937ec4eb0bef31ff2861251f2",alias:"marketing-profile"},{id:"456d7a22adc8439a93d4164ed3846243",alias:"at-risk-population"},{id:"c7e01c953c7e4b70a46ca6408c3ed000",alias:"portrait-property-flyer"},{id:"34330a47546f412d9d09632347da11d3",alias:"skyscraper"},{id:"d349b23334454274ab2a7a20a0a9a55d",alias:"transportation-to-work"},{id:"02086fe6b92b4ff5a9a7a8d172540fc9",alias:"health-care"},{id:"5d8b51e2b27b4832b193d9932bc6f862",alias:"executive-summary-call-outs"},{id:"1b07c48d4b58423990023b43150d7e99",alias:"tapestry-profile"},{id:"c21dd81cd9064649a4bb454530f12790",alias:"nearby-restaurants"},{id:"4d8c102ca7324d09931cfe65ab3a1168",alias:"multi-area-comparison"},{id:"9ed3b5dba02d4b46a3e063c8405fd0cc",alias:"property-details"},{id:"db0606e41ee7485f88122069e74a9b6b",alias:"employment-overview"},{id:"2a43c204c1dd4a758087372d7d7d786b",alias:"office-market-profile"},{id:"f59a3621583d44bbafa14035c2ae3947",alias:"health-care-and-insurance"},{id:"ad58f06a480c4b16aadcff789f543cca",alias:"demographic-profile"},{id:"bd7390ab31dc485489733d22475db0ed",alias:"commute-profile"},{id:"38eab30d7e6840da869fee264ca9fc40",alias:"target-market-summary"},{id:"03b420681f6a466fb14e254669583244",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"6c0a945e91d44640a08776e5bed1b297",alias:"key-facts"},{id:"7464708f379b463c8eec8aed1315989f",alias:"multi-area-comparison"},{id:"425150e63a5346659721bfc0be94511b",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"e602295128e34ea2b2b50a1aa04253bf",alias:"housing-profile"},{id:"3d0f7e63256b43a59fcf037502380685",alias:"insurance-profile"},{id:"fbc685a8837945eb82cde447acfda982",alias:"media-profile"},{id:"da063bf765e341708fad9eeec07b09c7",alias:"personicx-segmentation"},{id:"5003049227804e5cba6ad3bfdbf2dba7",alias:"spending-profile"}],"JP.EsriJapan":[{id:"bd9685651f484488ba24c2838a6a9000",alias:"base-demographic-profile"},{id:"f36b1cc0b9d84ea4b4db1742e875ff80",alias:"demographic-comparison-profile"},{id:"99a48ec44af94af290ab0e6d691a31c7",alias:"future-population-profile"},{id:"b29af5c2e6754f61ba38ad3128668095",alias:"population-households-profile"},{id:"d568dd78527c462e83eb68cb9ca02f09",alias:"consumer-spending-profile"},{id:"a29c9143bd044dad9475e6b6ee292e46",alias:"base-demographic-profile-ja"},{id:"3bb56ea4c4bd4a2aaa124e2e3a0fad60",alias:"demographic-comparison-profile-ja"},{id:"28ef1772bd884db5ae8885731318e503",alias:"future-population-profile-ja"},{id:"7896c8adf89e4f47ab6e0acc7759a1cd",alias:"population-households-profile-ja"},{id:"6c28a650baaa40cda26f4fb372b14d0f",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"31cf6eac0339433f8b4b5f8b62e47554",alias:"base-demographic-profile"},{id:"ccf6bc8472ae4ca8852fec621197fec3",alias:"household-profile"}],"ES.ESP_AIS":[{id:"5b60de05c1694a78b6b6ce8e10a48cd4",alias:"base-demographic-profile"}],"PR.ACS":[{id:"f1d79448541642648293f4b75d7b595a",alias:"at-risk-population"},{id:"7943a0c2f1ca4cad967bb0bfeb8af3a4",alias:"commute-profile"},{id:"ef0579311aac4d14a771389f23263445",alias:"demographic-summary"},{id:"4edd44657989475493ca92a69e80f08c",alias:"health-care-and-insurance"},{id:"c440f0c671264732b16c39f6326a5987",alias:"coronavirus-impact-planning"}],"*.census":[{id:"5886dbf41f984a0a8ec4eb4b5e231584",alias:"key-facts"},{id:"41727f86773c4cf2a37fd99446ea83fc",alias:"multi-area-comparison"}]},3.29:{"US.census":[{id:"368e2bf603fb42c4aa3dac0fce50cdf8",alias:"demographic-summary"},{id:"a32be4a9e51d4affa4cc1ddc812cb629",alias:"key-facts"},{id:"df985e2579004a3292c3d00615d53c39",alias:"marketing-profile"},{id:"8c56287427f84ae8b59142fc5bf1df4c",alias:"at-risk-population"},{id:"d95e40c3c93d480ab4d1d0b0adbbc5d4",alias:"portrait-property-flyer"},{id:"f989f9b820cd44d390187402447051b4",alias:"skyscraper"},{id:"0d322ac073584079a8cd6a1bda981fe7",alias:"transportation-to-work"},{id:"2b9f186425844ec390584b739ffca026",alias:"health-care"},{id:"3e9ccce6cca64e70be19ed789de5f290",alias:"executive-summary-call-outs"},{id:"2a812da4de404ceba3969472d32c42e7",alias:"tapestry-profile"},{id:"2cc25f7b5f194012b39c90b5f9bdb8d3",alias:"nearby-restaurants"},{id:"72d1e9e4cdf94bf9a2020f8214bef9ca",alias:"multi-area-comparison"},{id:"27034d31ab124b9bbe4e63b7df2a0d90",alias:"property-details"},{id:"4a59e329df06480eaa534513eb15f465",alias:"employment-overview"},{id:"d4fe343c4d6f4bea840a715f5b033d2d",alias:"office-market-profile"},{id:"cb2224cc9cb24ce288da729f0650ebf0",alias:"health-care-and-insurance"},{id:"484825ed241c49d58eaf718d46772051",alias:"demographic-profile"},{id:"afee0a2eb16e46cc9bc61b5d82133249",alias:"commute-profile"},{id:"1d32fabd95b446e99049aa0a04f5508e",alias:"target-market-summary"},{id:"783847f3f03f402d855985b45a8bf2df",alias:"population-trends"},{id:"83aef26e61ca41da9b269c06cc418d79",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"73f1c835b1624ff0b29a6a364f7ba6dc",alias:"key-facts"},{id:"84b05aed2d2f478eb6bb1e4749811cf1",alias:"multi-area-comparison"},{id:"ea0737e1e7554c5caf2be381c28369cc",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"3d8cb941742d4fffbaca48c65b4bd5b5",alias:"housing-profile"},{id:"f126395e7bcc494899cfc1a13a34be1f",alias:"insurance-profile"},{id:"8da901e5729e457683f2e4f7081b1bda",alias:"media-profile"},{id:"f9ba90b373a245e1b8fd14a027cf1ba5",alias:"personicx-segmentation"},{id:"81fc53b93a0c4269848ce2ae22ec19e2",alias:"spending-profile"}],"JP.EsriJapan":[{id:"79b2394ea50d44f3b4c1b4bdabed6cc2",alias:"base-demographic-profile"},{id:"9e824283a8954639ab0c0ac237b9e14d",alias:"demographic-comparison-profile"},{id:"f5812c2f542644368c0ff34eef7b731c",alias:"future-population-profile"},{id:"b51d7dde64c34a9796418c1788a6762d",alias:"population-households-profile"},{id:"48a993403d30431784b7bf47a06e4261",alias:"consumer-spending-profile"},{id:"531c59f55de646d5a78fef6c903a678f",alias:"base-demographic-profile-ja"},{id:"cf553f2090a64662a1f9efa8a355964c",alias:"demographic-comparison-profile-ja"},{id:"321150c8ac1049fc9cd253cb12c0b0bc",alias:"future-population-profile-ja"},{id:"e0d6dea7667c47b49f159c207fc311e9",alias:"population-households-profile-ja"},{id:"ba5f50bd617e4519a9322ec24b9cd5b1",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"60ec4173caac4f87a831447d5bf7b450",alias:"base-demographic-profile"},{id:"98d3d99aadba47a8ab53b0dcd4eebf22",alias:"household-profile"}],"ES.ESP_AIS":[{id:"3978b02fbc354acca14d4e959fa5b531",alias:"base-demographic-profile"}],"PR.ACS":[{id:"e2141ddd911c4aadb403db1e858edb51",alias:"at-risk-population"},{id:"78360505668743e0a39ac0d085612dfa",alias:"commute-profile"},{id:"f296deceb6204f85853ac85e98ba3552",alias:"demographic-summary"},{id:"8a1c4d55a77c4cf9805cec380727fc5a",alias:"health-care-and-insurance"},{id:"8dd9de996ba0491d82a2ee8f01cd55b0",alias:"coronavirus-impact-planning"}],"*.census":[{id:"5645a1d6023c4d8a9d02943ad57a7ab2",alias:"key-facts"},{id:"e29f56b6d67447e08a45d08981db987c",alias:"multi-area-comparison"}]},"3.30":{"US.census":[{id:"981382ffe90c40bbb60318b1ce338ba4",alias:"demographic-summary"},{id:"f62dec6c9750496796fdc0619c4c107f",alias:"key-facts"},{id:"f737236a8b644f1597a4457862fa169c",alias:"marketing-profile"},{id:"4746caa1254e4d93af121ce74e9aa8d6",alias:"at-risk-population"},{id:"0bcd882dd7a34fd39ace173243534df0",alias:"portrait-property-flyer"},{id:"4a340b8e642945f6bb7a381d07fb26b6",alias:"skyscraper"},{id:"3e2a42b2d03e42cf91e9727f67273ec3",alias:"transportation-to-work"},{id:"c26e9577d48b4499a07b75215c97c394",alias:"health-care"},{id:"cbc348e601104d0c9bbe971c0297142a",alias:"executive-summary-call-outs"},{id:"d65aaa42b9824864b40eb1a75f2e4cbd",alias:"tapestry-profile"},{id:"d6242e8dd02142bdb98b85f094d5cd9b",alias:"nearby-restaurants"},{id:"aed9e00873fa4010881daaa90e7e8d71",alias:"multi-area-comparison"},{id:"eb0e0df0856e43cdb874f96945c566ac",alias:"property-details"},{id:"e29ebec17c2c4f42a1a929c40163bb90",alias:"employment-overview"},{id:"b84d0f0f5c69461ea52ce2702f7327d6",alias:"office-market-profile"},{id:"5eba537af36e4490869917ee888bacc4",alias:"health-care-and-insurance"},{id:"afb01a3f91374f65ba4c6be9229f2c15",alias:"demographic-profile"},{id:"8074d1bbbfed4858bb24400a0c7bf224",alias:"commute-profile"},{id:"33621d85b1df4547851c904aaa7d44d2",alias:"target-market-summary"},{id:"440170eaae5240e79abbb0bb7de22b27",alias:"population-trends"},{id:"0576deee38714cc69357de9675ab39ae",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"e054928366604fc7b401dcb4a343cd4c",alias:"key-facts"},{id:"986bc92490234c2697d5771b9771166e",alias:"multi-area-comparison"},{id:"52233708250449bc84f906d86616cace",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"22a86d0f982d4b10934f32129f2674f9",alias:"housing-profile"},{id:"9811b2babd5f4283822782867476b92c",alias:"insurance-profile"},{id:"59957cc0524344449fc6035053bb6c4a",alias:"media-profile"},{id:"2511035fed0140b8a7eb7ec7240e41eb",alias:"personicx-segmentation"},{id:"defc390648e543508be22704f1db659c",alias:"spending-profile"}],"JP.EsriJapan":[{id:"91a180442f614c4d96fb40e33aa30948",alias:"base-demographic-profile"},{id:"e7415b6c9ff74922850851eac65ddbc6",alias:"demographic-comparison-profile"},{id:"12e9eb63e4834d3681e15196bfc64642",alias:"future-population-profile"},{id:"291cc1bc2cee455483c96f50e5916f1d",alias:"population-households-profile"},{id:"217c72b7d0534ebc81658c71917c3e15",alias:"consumer-spending-profile"},{id:"48d5baf8e5574abda8fd776219fa0eb6",alias:"base-demographic-profile-ja"},{id:"01a7a0cbacf948b3b715e4f6c55aa5f2",alias:"demographic-comparison-profile-ja"},{id:"0317412d6fb541c9b4067923e314cad3",alias:"future-population-profile-ja"},{id:"0c826ce1e2de415aa2f7af3e615b1fe8",alias:"population-households-profile-ja"},{id:"201211e23758432db4a841dae8ba9428",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"ec6477ce41fa464fb38a360cad0d3da3",alias:"base-demographic-profile"},{id:"e53b2c145f544efaa7d7b4e802c3d747",alias:"household-profile"}],"ES.ESP_AIS":[{id:"4483924cb42043ec85486c58e61a99ef",alias:"base-demographic-profile"}],"PR.ACS":[{id:"7e3b955c4d904624b4cea5d015e693a0",alias:"at-risk-population"},{id:"8927492627124fd0845de8c0dc02bd3f",alias:"commute-profile"},{id:"a308a300f3b4482ea57b4ea4a54ea5ef",alias:"demographic-summary"},{id:"5800acd3784e4a6d88e3228e1af1164f",alias:"health-care-and-insurance"},{id:"d40e2ba95fec40c6ad68ceddde4e160b",alias:"coronavirus-impact-planning"}],"*.census":[{id:"b9d1ca815d9a4a3ab35196ec299f0917",alias:"key-facts"},{id:"6f6d601c2eef4bd1a87baa2652e7bb0b",alias:"multi-area-comparison"}]},3.31:{"US.census":[{id:"784d0b69c02c4cac862b89b0e44cd8fb",alias:"demographic-summary"},{id:"f1bb3a222fab470dbb96a79a51496b2b",alias:"key-facts"},{id:"1780d5b264734757b86e4655d779b213",alias:"at-risk-population"},{id:"8c34121585894e91a50c493c360912f0",alias:"skyscraper"},{id:"1c314d9d06844d44b408caba6099b56b",alias:"executive-summary-call-outs"},{id:"4ee838a250084c9bad84f094895c793c",alias:"tapestry-profile"},{id:"dfba27ac04694513aee257cdd185c8c2",alias:"nearby-restaurants"},{id:"d7cfb836282747199cf0febea42627cc",alias:"multi-area-comparison"},{id:"3a34213116a340a0bbd0d463025444a2",alias:"property-details"},{id:"b277b8572469425fa54c5506c3dbcdf3",alias:"employment-overview"},{id:"eaf35c41f5714f48a1aa61fcbd6ae05f",alias:"office-market-profile"},{id:"688f86931cc345f796154717dc6d0a15",alias:"health-care-and-insurance"},{id:"cb4edb43a1ae473ca651388b5c3fa54f",alias:"demographic-profile"},{id:"49224c10d4ac4c7ab0f8e016165ce235",alias:"commute-profile"},{id:"db67445e4dfa4b6c8c1e5fd30b229c92",alias:"target-market-summary"},{id:"6c9360bfec9041ddba0f03440cb446ca",alias:"population-trends"},{id:"2ae07567c78847abacb14773ffe9dede",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"0704defc6960439ea5b9c484af15eb4c",alias:"key-facts"},{id:"ee01fe05db964878bc6fb627e55dc9b1",alias:"multi-area-comparison"},{id:"a426bb6d944a46658640aee2ba480866",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"710037ca0f024ec5abbe4cf9fecad23f",alias:"housing-profile"},{id:"83bc643ea48344c892a8e9636e3677dd",alias:"insurance-profile"},{id:"53f63e3a9e854a8fa5e2c0222df6f848",alias:"media-profile"},{id:"ca9d66bf4bf940918129d0d5c97e0b50",alias:"personicx-segmentation"},{id:"ab19f90750fd469aa702f961b12eaee8",alias:"spending-profile"}],"JP.EsriJapan":[{id:"7f7c37e8f1fa4ab18b88368c12058eff",alias:"base-demographic-profile"},{id:"25a71f196b7e4db182be346264b442dd",alias:"demographic-comparison-profile"},{id:"e1075eaada7744a59ecabfc445dcd877",alias:"future-population-profile"},{id:"8e2746d993584a7d94d0e66ca6dabdaa",alias:"population-households-profile"},{id:"bc9b91d7ae2c41a5bdece1d322ef6b88",alias:"consumer-spending-profile"},{id:"4f4736d5b2f842faaee83c57417c56b6",alias:"base-demographic-profile-ja"},{id:"bc400448bf3347619349cb7d4ccb3d87",alias:"demographic-comparison-profile-ja"},{id:"00ad3ad05e384d7ea764b356a950356d",alias:"future-population-profile-ja"},{id:"db94d6af598f48778c4471f9fa0d6e4f",alias:"population-households-profile-ja"},{id:"c5f602a9d6714dd6bd6a2b720eced874",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"b0cd9df36d0747ecac2bc34f055f5583",alias:"base-demographic-profile"},{id:"1751ab1998db4e6fb79f484069605cfd",alias:"household-profile"}],"ES.ESP_AIS":[{id:"3d17356c9a5549dbaa4096365e7eb703",alias:"base-demographic-profile"}],"PR.ACS":[{id:"7923818907d248ff8dcd7a5941e89b57",alias:"at-risk-population"},{id:"c0b28d710379405eac4ecb6a64d817b4",alias:"commute-profile"},{id:"4b64ec164a3d4830ae8a4cedf067f55a",alias:"demographic-summary"},{id:"5e47986d4c4644a29a28c92c077919f2",alias:"health-care-and-insurance"},{id:"11c43309216b4d4a8fbd9a03cbcc22ec",alias:"coronavirus-impact-planning"}],"*.census":[{id:"f2d46b136acc46e2a2220388ddc43be0",alias:"key-facts"},{id:"228155af0095410c961cc82f33cdcf49",alias:"multi-area-comparison"}]},3.32:{"US.census":[{id:"2ff58abf55554be4b19006c1e607afaa",alias:"demographic-summary"},{id:"a19b321e3adc441886e706bb9704005c",alias:"key-facts"},{id:"f1e3b0c93e1d44e299eb0b752f93b7db",alias:"at-risk-population"},{id:"3bbc96da4ca142c7b80b082b0f986110",alias:"skyscraper"},{id:"1302184a2f584b86943b6c51d40acace",alias:"executive-summary-call-outs"},{id:"58035dcee74b4875bcd951b9174155d1",alias:"tapestry-profile"},{id:"4da5867dfda046ddb4b82ab01b7cb568",alias:"nearby-restaurants"},{id:"4498b9e35665480cafe3985f788ca61d",alias:"multi-area-comparison"},{id:"83a11d5f38f84e709ff1e24786e963b4",alias:"property-details"},{id:"0a0354d2d0d842d8bd8e05d40545fc5b",alias:"employment-overview"},{id:"400924aa9d5f4bee8b9dd0c0af21dfbb",alias:"office-market-profile"},{id:"0a502ea9be8a43fdb6cd2fb5ff7503bc",alias:"health-care-and-insurance"},{id:"6147ac21718149a69ce15831f12181ed",alias:"demographic-profile"},{id:"4cdaddd947064ca690ebc06eec06ea57",alias:"commute-profile"},{id:"a8fe08a9c5114260a2a6f7ca436d36f6",alias:"target-market-summary"},{id:"34a17e1fceb646228e94089ec5e0890f",alias:"population-trends"},{id:"eb5d984d78364a6596cd97e0bf7901a5",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"5f6e17f3729145959fb38ed2cd508970",alias:"key-facts"},{id:"c86709cbd72043708e09e4a641adfbd0",alias:"multi-area-comparison"},{id:"bd9e3a17678843d4b1fa0716af91c231",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"470686f333d140c7b516294465eea037",alias:"housing-profile"},{id:"ab11f2f11ea3439197769a8189451bea",alias:"insurance-profile"},{id:"f0e6736d0f364d4b88ea613746e57c81",alias:"media-profile"},{id:"bfe0814bc0604a8faa48d01b026ef7a5",alias:"personicx-segmentation"},{id:"bd1d4c7be5ad41ae909267b5e9c5f2dc",alias:"spending-profile"}],"JP.EsriJapan":[{id:"b9dcbb9f31fd4be7bd96a2f89ce66a1c",alias:"base-demographic-profile"},{id:"830ddad066c14c0dad27367a1b2ef132",alias:"demographic-comparison-profile"},{id:"7574f89d591f432da6ffdb94dcfdac52",alias:"future-population-profile"},{id:"ec8785d4c9cb446394e07fa7dd8451fd",alias:"population-households-profile"},{id:"9ac85d73187548b2bb0d0b4a73f88199",alias:"consumer-spending-profile"},{id:"e99eee823684452fbe564fe42dac9535",alias:"base-demographic-profile-ja"},{id:"8598d6a8550d46aebd3fd598ceaefae7",alias:"demographic-comparison-profile-ja"},{id:"fdf81ddffb374e3f898006ffa59e259e",alias:"future-population-profile-ja"},{id:"f2468c2fef314427bd0865b460ef554f",alias:"population-households-profile-ja"},{id:"a96f28fb67024109b7c33161f3c9b308",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"40a5ba79d1204e78ac6deaa633ccd59b",alias:"base-demographic-profile"},{id:"2e647098c613476bbd92b1e07331cb86",alias:"household-profile"}],"ES.ESP_AIS":[{id:"7d82cae4b3fc4575bab56ec82f51c368",alias:"base-demographic-profile"}],"PR.ACS":[{id:"aa65005b75ba4e158afe63baa4bc5fe2",alias:"at-risk-population"},{id:"292a269a813e4d7797baf88a76c11a8c",alias:"commute-profile"},{id:"b1d50628f2484689b9e39d49fc2e16a0",alias:"demographic-summary"},{id:"64839b7a81be45e287e805afc145652e",alias:"health-care-and-insurance"},{id:"44be3c42b70c4aee840fdeb4656b7922",alias:"coronavirus-impact-planning"}],"*.census":[{id:"ce57630d5cc24759809dd54bc1f82c91",alias:"key-facts"},{id:"c48ee0f58c8645bf8d689eb0db2d2936",alias:"multi-area-comparison"}]},3.33:{"US.census":[{id:"55689c3ee7c1490e83accae002a8d164",alias:"demographic-summary"},{id:"173e40bebc9d426a8e4680242acafea4",alias:"key-facts"},{id:"218eba57314e476ba16d1d5d40bb0182",alias:"at-risk-population"},{id:"3d470c82d8664e34b5026675596a7a87",alias:"skyscraper"},{id:"b9381f481f9f417f9647e0a2c8686979",alias:"executive-summary-call-outs"},{id:"d2800b578d1c4dd38ac95ce36882d881",alias:"tapestry-profile"},{id:"d9d8109c537943a78a24d65110291b43",alias:"nearby-restaurants"},{id:"2e835e58629a4f1e8192a729792b638f",alias:"multi-area-comparison"},{id:"6f3c32ed18834a4ea34b200e32ad7c33",alias:"property-details"},{id:"6b1267be3fcb401bbcb49afd221713cf",alias:"employment-overview"},{id:"67e6efc15cb142c2a7cc30a48a59c769",alias:"office-market-profile"},{id:"9d8b447adc634228b24deb315107c0f0",alias:"health-care-and-insurance"},{id:"e45f96db738140869981b7443b6e2658",alias:"demographic-profile"},{id:"88d896eada3340dc8f8f1a2406bd48f9",alias:"commute-profile"},{id:"61492956f89a43ee86d245fca92858a2",alias:"target-market-summary"},{id:"91de69dede414856892dfdd94d2c4bab",alias:"population-trends"},{id:"ee9c6fdc902e4ea09509e4d1bf1582b5",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"dfb663da790248fe89504c662c42aae3",alias:"key-facts"},{id:"9873fcafe7194fcf9dffa8bbb8e001a1",alias:"multi-area-comparison"},{id:"4766ad797ef84968be4b4d0d54b98416",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"2212ff30c72143e6bcd9b8f26b01c47f",alias:"housing-profile"},{id:"c5efcef364ac4d8f82a6d54010ff75c7",alias:"insurance-profile"},{id:"e00894c000a94c42aefce551fe4e48c2",alias:"media-profile"},{id:"9d1da1c80e93407cb94589cee43a0f5a",alias:"personicx-segmentation"},{id:"578199262aa646bf8b0713f3f2160af6",alias:"spending-profile"}],"JP.EsriJapan":[{id:"00bd747c0e48477d8df692848560a8a2",alias:"base-demographic-profile"},{id:"8ac4bd99dd1848dc98967419ab8d299c",alias:"demographic-comparison-profile"},{id:"88f94b5e3b6d414d913957b46e9f8394",alias:"future-population-profile"},{id:"41864cea64f3432a90006eb9a1f97608",alias:"population-households-profile"},{id:"44333ddcda38473d9a24010ed387eda7",alias:"consumer-spending-profile"},{id:"c35ebbeffb3b47fc9bbe3fc6283aaa7b",alias:"base-demographic-profile-ja"},{id:"6c8a565d12954927b83daaad81409a25",alias:"demographic-comparison-profile-ja"},{id:"fcba5d5750514c9c93b2cb5222609d98",alias:"future-population-profile-ja"},{id:"7ad858351b6b4268b791b6cc24bf4e0f",alias:"population-households-profile-ja"},{id:"7d94fec6df6b4bff9ad14f5b711f18c6",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"571f323738c44d5a8b85d6d1e78d9c52",alias:"base-demographic-profile"},{id:"ef7624e051b6407488d8ad59b7979fc4",alias:"household-profile"}],"ES.ESP_AIS":[{id:"46e9329c7b2042fa84dfc1444f7decc0",alias:"base-demographic-profile"}],"PR.ACS":[{id:"0cb7ba4d407640ff967829ae7dd39396",alias:"at-risk-population"},{id:"7598826f28124abf9134801a607d56ce",alias:"commute-profile"},{id:"848c5cc8a4284065a0055b047a106adf",alias:"demographic-summary"},{id:"ecfc8db522004ea6848667e43589efd9",alias:"health-care-and-insurance"},{id:"4685d4c6c51e4ef392bdab89c0af8979",alias:"coronavirus-impact-planning"}],"*.census":[{id:"e4d3d1675d0044089f98a0f85ea16c8b",alias:"key-facts"},{id:"33b6e27f43644811b8a58f15c0832a67",alias:"multi-area-comparison"}]},3.34:{"US.census":[{id:"13cd4abfa97e43b9a5f9d4ddcb43f492",alias:"demographic-summary"},{id:"8861429ac06948f79cdcaaadb39d597f",alias:"key-facts"},{id:"1056cbef133f49a18409a192fbdc221a",alias:"at-risk-population"},{id:"25145b3ca4284dcc999c8d05182588cd",alias:"skyscraper"},{id:"7db2109b9f844be48f3e9154e992699f",alias:"executive-summary-call-outs"},{id:"f43c00c7b10241c097fb71fd5acf1ec2",alias:"tapestry-profile"},{id:"5fb04926a70345c18d6e21d9972ea347",alias:"nearby-restaurants"},{id:"fdd0406e7815402cbf70716c68f4f7d6",alias:"multi-area-comparison"},{id:"7b716975146743b3a56762befaca71ad",alias:"property-details"},{id:"2c0be4fe4d7245e39b4afd9b8eb607a9",alias:"employment-overview"},{id:"c7f42910bc4b49209835e333c6078e71",alias:"office-market-profile"},{id:"7517a7a0409d42748c7ad94f81322bc2",alias:"health-care-and-insurance"},{id:"9919270d8b4846cb86761103def73e76",alias:"demographic-profile"},{id:"0bb0cc183ae145febbf3585518eeaae6",alias:"commute-profile"},{id:"27853eda823e4574b0666d533ba39061",alias:"target-market-summary"},{id:"1df7c5b56b6e431982ef2da037c081c8",alias:"population-trends"},{id:"aaf4cc69e58f43ea87a0c1e493431dd8",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"3a2fb82b034d48bbb9474f8c158c32a8",alias:"key-facts"},{id:"100f5b4d3cca46b38fd651e39cce97b1",alias:"multi-area-comparison"},{id:"41f7b7cfe9cb490593ace88aa627c6ca",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"f5b0ec07181f4b58a01ee0ca1df8201a",alias:"housing-profile"},{id:"a5e0b9b228da4ba5baaa5811c57f6552",alias:"insurance-profile"},{id:"5d24250e3cc14b0db3b3f9884462efbf",alias:"media-profile"},{id:"f216c6574ae0453c951e66ee8fb6b20f",alias:"personicx-segmentation"},{id:"267c816948334e72ab9ed94253790e22",alias:"spending-profile"}],"JP.EsriJapan":[{id:"434e01eacc8e432c8400f5a5aef6f3e4",alias:"base-demographic-profile"},{id:"c44be13f1f8e412288e58048136681d6",alias:"demographic-comparison-profile"},{id:"35c0c12ce88645e7b7cbc0ffe73af85d",alias:"future-population-profile"},{id:"e87fb84cffaa49dba14b104d5b994aa5",alias:"population-households-profile"},{id:"31a4988db08c41d6b9ce755b21ea0b26",alias:"consumer-spending-profile"},{id:"bf9f0203a4c14d03823beadb3f7ac043",alias:"base-demographic-profile-ja"},{id:"fdbe0d4286ab419981bc80a96b46bdb1",alias:"demographic-comparison-profile-ja"},{id:"7541a90960e345308f73e99e4da5c0a8",alias:"future-population-profile-ja"},{id:"f17ecec5cb8d4baeab7af68e1e9ce683",alias:"population-households-profile-ja"},{id:"ddaf4fb6c09447f6beaf4218139bfa20",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"80c74804e91440f08695ba11456f96af",alias:"base-demographic-profile"},{id:"eb49e7ee98f04e1e914a4ce29bbfc7d3",alias:"household-profile"}],"ES.ESP_AIS":[{id:"2e82d587530548569ad792556044342b",alias:"base-demographic-profile"}],"PR.ACS":[{id:"b473aa30469e4e2eabcca3da3f306e94",alias:"at-risk-population"},{id:"4e91594fb4fe4bf3be24380408f1b0c6",alias:"commute-profile"},{id:"321c818398684510ac62e3403ad6628f",alias:"demographic-summary"},{id:"1c3d60191b12460ca9a23dfcbce0c1db",alias:"health-care-and-insurance"},{id:"5e6d78b1c4aa4168b7a3af5751d92261",alias:"coronavirus-impact-planning"}],"*.census":[{id:"530b6aa054664166a7a3ab5f1e82e19b",alias:"key-facts"},{id:"4b8ddef8e8f0406ea9b0a6c3d062186a",alias:"multi-area-comparison"}]},3.35:{"US.census":[{id:"167425f5e12d421eb5784cd3681eab45",alias:"demographic-summary"},{id:"a1ab8710e1104385941825fe772d58fa",alias:"key-facts"},{id:"b3103dee1c994fa0916bd2b5c8ad2cab",alias:"at-risk-population"},{id:"0d261009a37247b4913266bc7093fedb",alias:"skyscraper"},{id:"2e7b01260b7840c196f30be52bf0b57e",alias:"executive-summary-call-outs"},{id:"f47aebc28aa64c7f924053a8c1ee16bd",alias:"tapestry-profile"},{id:"36e6e303ebd943d4aa55604ba7dc0bc0",alias:"nearby-restaurants"},{id:"2f6307fad95f43b193ac74f236fa82d3",alias:"multi-area-comparison"},{id:"1ac99acae7cf44c182727aca1387acc9",alias:"property-details"},{id:"33cb09681a2147a5a07ae801596568c3",alias:"employment-overview"},{id:"8abaef7ba033448693dc6e6db55667c7",alias:"office-market-profile"},{id:"d29fcd15f66f46edad86499675b0ec03",alias:"health-care-and-insurance"},{id:"e631e96f389b4075bc249c01d7f4d1b7",alias:"demographic-profile"},{id:"f97c7b4c8bf84390ad5a5807fb6ca417",alias:"commute-profile"},{id:"c9aef7db1d56495eaf0765e1f3a2d87d",alias:"target-market-summary"},{id:"b0f42ee46e80440cbb567a9a754ba7d4",alias:"population-trends"},{id:"ac36af7d86b74071a1cff5dc11f52ae8",alias:"coronavirus-impact-planning"}],"CA.census":[{id:"e1b06b3915bc4e9ba702a604931390f2",alias:"key-facts"},{id:"aabeb118af9d4d0ba61177b82ff20e6c",alias:"multi-area-comparison"},{id:"d91115c92b96414b8bebd5d5bee75feb",alias:"prizm-profile"}],"NL.NLD_4orange":[{id:"dc94c7a6946a49b5a2f3997a1d751b5d",alias:"housing-profile"},{id:"caaaf49e014840a2a7b2497a970fabc0",alias:"insurance-profile"},{id:"67e0ad06a076477d81f853755fe34fd9",alias:"media-profile"},{id:"2b777fe129f149e9830fa5659d83d164",alias:"personicx-segmentation"},{id:"109338143a024b8eb70a1afcad567363",alias:"spending-profile"}],"JP.EsriJapan":[{id:"1f22c748ad5441a197c4c35ec3b88c6e",alias:"base-demographic-profile"},{id:"3321fc47d60b465bbf1f8312a2656c9d",alias:"demographic-comparison-profile"},{id:"44f656e0dd634f248501030bec1e4e56",alias:"future-population-profile"},{id:"10bee112cd5c452db06145cc97739272",alias:"population-households-profile"},{id:"9d50b931700f4d7e8bfff04362baf2b7",alias:"consumer-spending-profile"},{id:"6f15e753e76741e5b11443d987f9e31b",alias:"base-demographic-profile-ja"},{id:"c89ff30c389b4af28c5e95d56b8b8a2b",alias:"demographic-comparison-profile-ja"},{id:"82cf4d90d4444a9fab0db12c38398ddb",alias:"future-population-profile-ja"},{id:"de0f4294ae8548f8852d3cfc44689262",alias:"population-households-profile-ja"},{id:"aa60be09466d494dab06b7fd3f227838",alias:"consumer-spending-profile-ja"}],"DE.DEU_Nexiga":[{id:"f65d4ab5669541eb82f8cfa44892076d",alias:"base-demographic-profile"},{id:"8f24b985758840bc865eb510c3a096c4",alias:"household-profile"}],"ES.ESP_AIS":[{id:"19973b06ff48411cbe8da96db2201889",alias:"base-demographic-profile"}],"PR.ACS":[{id:"08263fc5aa27402284ad1dd80de03ffe",alias:"at-risk-population"},{id:"1386ceb53e0741428b78182d5ad1295c",alias:"commute-profile"},{id:"52ca001ddcf54d4eab0bbc476a962486",alias:"demographic-summary"},{id:"79480fbe1f5048b69bc0611a2828d74b",alias:"health-care-and-insurance"},{id:"4a9c5dbf1ee6480bbed9a48bdb8aa2ed",alias:"coronavirus-impact-planning"}],"TH.EsriThailand":[{id:"1b202dbb81d7436c91dbd98f7f16da74",alias:"demographic-by-gender"},{id:"a7575375c72244e3819a694bf6dcbd52",alias:"key-facts-circle"},{id:"2403e972375d4b178185c2dbcf94979f",alias:"market-indicators"},{id:"575cfdd3fa9b4e8fafced3a47944156d",alias:"nearby-finance"},{id:"48ee9e3d4a0b4a208a3257ef2cc07692",alias:"nearby-restaurants"},{id:"d446734d5e3e4d13a4c1aebdd9497793",alias:"population-profile"}],"IE.census":[{id:"e6ef23654f6e48fa8854931b539418ac",alias:"community-profile"},{id:"83d14bb8a70e415e9b7d4df3a6a32690",alias:"population-and-spending-profile"},{id:"6bdafe103ba647ed9fb1de0ac21412ea",alias:"site-statistics"},{id:"6e388a60f9bc4194b79ac26140bfb29e",alias:"market-indicators"}],"FR.census":[{id:"938a7f87e6fd4b238be125bb2b25e0ec",alias:"market-indicators"}],"FR.FRA_EsriFrance":[{id:"4a53f2a681c54186a29b8e0f21b0d691",alias:"market-summary"},{id:"35a06097a0e5427c87f8d14235fb8655",alias:"summary"}],"GB.census":[{id:"60d7a69925de41719c5a1779cbe2f9fc",alias:"market-indicators"}],"AU.AUS_ABS":[{id:"bfaa3c492a714a2292cc195a4cec7157",alias:"chain-link"},{id:"a6f5005fc71d4e3692ba2dccbc9085c6",alias:"community-profile"},{id:"4890c1ff7a7c464cb37650a76b77ef20",alias:"hexagon-facts-dark"},{id:"685c139ab196404e992bbf3a5c1788c2",alias:"hexagon-facts-light"},{id:"8a7f81f303c64baf93740102f5142420",alias:"international-community-profile"},{id:"558a0b0e8c9c45b5b5d5aa73525de87b",alias:"key-facts-abs"},{id:"9fe2117084584005a1724635ebcb7a03",alias:"occupation-profile"}],"*.census":[{id:"de0d25e45d4549439c440d9f893afe18",alias:"key-facts"},{id:"19f9971696f74bae8c8fd383a61abac3",alias:"multi-area-comparison"},{id:"8ce8f38bdb87448eb09c031e3206aa76",alias:"key-facts-circle"}]}})}i=i.geoenrichment.dijit.ReportPlayer.StandardTemplates;function f(a){var i=c(),d=i[a=a||e.jsapiVersion]||i[3.35],f={};for(var s in d){var b={};d[s].forEach((function(a){b[a.alias]=a.id})),f[s.substr(0,s.indexOf("."))]=b}return f}function s(e,i){var d=f(i);return a.mixin({},d["*"],d[e])}var b={"demographic-summary":i.demographicSummary,"key-facts":i.keyFacts,"marketing-profile":i.marketingProfile,"at-risk-population":i.atRiskPopulation,"portrait-property-flyer":i.portraitPropertyFlyer,skyscraper:i.skyscraper,"transportation-to-work":i.transportationToWork,"health-care":i.healthCare,"executive-summary-call-outs":i.executiveSummaryCallOuts,"tapestry-profile":i.tapestryProfile,"nearby-restaurants":i.nearbyRestaurants,"multi-area-comparison":i.multiAreaComparison,"property-details":i.propertyDetails,"employment-overview":i.employmentOverview,"office-market-profile":i.officeMarketProfile,"health-care-and-insurance":i.healthCareAndInsuranceStatistics,"demographic-profile":i.demographicProfile,"commute-profile":i.commuteProfile,"target-market-summary":i.targetMarketSummary,"population-trends":i.populationTrends,"coronavirus-impact-planning":i.coronavirusImpactPlanning,"prizm-profile":i.prizmProfile,"housing-profile":i.housingProfile,"insurance-profile":i.insuranceProfile,"media-profile":i.mediaProfile,"personicx-segmentation":i.personicxSegmentation,"spending-profile":i.spendingProfile,"base-demographic-profile":i.baseDemographicProfile,"demographic-comparison-profile":i.demographicComparisonProfile,"future-population-profile":i.futurePopulationProfile,"population-households-profile":i.populationHouseholdsProfile,"consumer-spending-profile":i.consumerSpendingProfile,"base-demographic-profile-ja":"基本統計プロファイル","demographic-comparison-profile-ja":"人口統計比較プロファイル","future-population-profile-ja":"将来人口プロファイル","population-households-profile-ja":"人口・世帯プロファイル","consumer-spending-profile-ja":"消費額プロファイル","household-profile":i.householdProfile},l={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports",aliasToID:function(a,e,i){return s(a,i)[e]},aliasToLabel:function(a){return b[a]},getAliases:function(a,e){var i=Object.keys(s(a,e));return i.sort((function(a,e){return a.localeCompare(e)})),i},getListOptions:function(a,e){return l.getAliases(a,e).map((function(i){return{value:l.aliasToID(a,i,e),label:b[i]}}))},getSupportedCountries:function(a){return Object.keys(f(a)).map((function(a){return"*"===a?"AU":a}))},getLibrary:function(){var e=a.clone(c());for(var i in e){var d=e[i];d["AU.census"]=d["*.census"],delete d["*.census"]}return e}};return l}));