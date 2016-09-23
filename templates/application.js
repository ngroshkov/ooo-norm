var app = angular.module('app', ['ui.utils.masks']);
app.controller('ctrl', function($scope) {
    $scope.regions = [
                      {name:'Республика Адыгея',meanwage:26200,hotwater:110.16,water:14.5,sewage:13.66,electricity:3.12,heat:2030.08},
                      {name:'Республика Алтай',meanwage:26800,hotwater:161.83,water:46.82,sewage:19.27,electricity:3.04,heat:2568.95},
                      {name:'Алтайский край',meanwage:19600,hotwater:97.43,water:20.94,sewage:16.02,electricity:2.65,heat:1314.18},
                      {name:'Амурская область',meanwage:39400,hotwater:117.32,water:28,sewage:34.13,electricity:2.8,heat:1933.96},
                      {name:'Архангельская область',meanwage:43900,hotwater:91.35,water:24.83,sewage:24.89,electricity:3.55,heat:1407.98},
                      {name:'Астраханская область',meanwage:29700,hotwater:75.93,water:21.78,sewage:22.45,electricity:3.26,heat:1208.03},
                      {name:'Республика Башкортостан',meanwage:25100,hotwater:49.31,water:17.02,sewage:15.85,electricity:2.01,heat:1121.89},
                      {name:'Белгородская область ',meanwage:24800,hotwater:63.42,water:17.09,sewage:17.06,electricity:2.83,heat:1463.5},
                      {name:'Брянская область',meanwage:24800,hotwater:72.18,water:17.38,sewage:15.26,electricity:2.9,heat:1802.06},
                      {name:'Республика Бурятия',meanwage:35200,hotwater:91.42,water:25.89,sewage:27.35,electricity:2.75,heat:1857},
                      {name:'Владимирская область',meanwage:28900,hotwater:99.96,water:21.63,sewage:21.12,electricity:3.12,heat:2100.53},
                      {name:'Волгоградская область',meanwage:28000,hotwater:69.75,water:17.15,sewage:14.94,electricity:2.86,heat:1069.1},
                      {name:'Вологодская область',meanwage:33400,hotwater:80.34,water:26.4,sewage:24.78,electricity:3.15,heat:1705.12},
                      {name:'Воронежская область',meanwage:27500,hotwater:87.3,water:24.81,sewage:18.45,electricity:2.6,heat:1509.14},
                      {name:'Республика Дагестан',meanwage:19800,hotwater:41.45,water:6.32,sewage:3.06,electricity:1.65,heat:1059.73},
                      {name:'Еврейская АО',meanwage:37100,hotwater:127.59,water:23.93,sewage:26.1,electricity:2.55,heat:2242.9},
                      {name:'Забайкальский край',meanwage:36200,hotwater:53.24,water:25.83,sewage:26.57,electricity:2.03,heat:1303.18},
                      {name:'Ивановская область',meanwage:24200,hotwater:106.06,water:19.17,sewage:15.96,electricity:3.02,heat:1779.47},
                      {name:'Республика Ингушетия',meanwage:21900,hotwater:41.34,water:21.4,sewage:10.02,electricity:2.11,heat:1100},
                      {name:'Иркутская область',meanwage:34000,hotwater:67.51,water:18.69,sewage:16.96,electricity:0.8,heat:1007.4},
                      {name:'Кабардино-Балкарская Республика',meanwage:20800,hotwater:64.95,water:10.73,sewage:10.11,electricity:2.63,heat:1555.87},
                      {name:'Калининградская область',meanwage:29000,hotwater:105.23,water:16.25,sewage:8.29,electricity:3.03,heat:1705.06},
                      {name:'Республика Калмыкия',meanwage:23900,hotwater:93.9,water:37.46,sewage:15.47,electricity:2.61,heat:1395.46},
                      {name:'Калужская область',meanwage:27900,hotwater:95.21,water:20.1,sewage:14.99,electricity:3.36,heat:1693.46},
                      {name:'Камчатский край',meanwage:76200,hotwater:232.05,water:34.93,sewage:34.71,electricity:null,heat:3380.42},
                      {name:'Карачаево-Черкесская Республика',meanwage:22700,hotwater:67.77,water:18.55,sewage:12.89,electricity:2.68,heat:2236.19},
                      {name:'Республика Карелия',meanwage:36500,hotwater:106.54,water:31.41,sewage:25.08,electricity:2.38,heat:2133.65},
                      {name:'Кемеровская область',meanwage:32300,hotwater:41.12,water:17.92,sewage:11.86,electricity:2.64,heat:863.1},
                      {name:'Кировская область',meanwage:25600,hotwater:88.59,water:25.21,sewage:24.27,electricity:2.74,heat:1738.39},
                      {name:'Республика Коми',meanwage:53300,hotwater:128.12,water:41.32,sewage:46.17,electricity:3.01,heat:1726.62},
                      {name:'Костромская область',meanwage:21500,hotwater:89.86,water:28.66,sewage:24.98,electricity:3.01,heat:1934.32},
                      {name:'Краснодарский край',meanwage:32000,hotwater:138.64,water:28.68,sewage:27.04,electricity:3.1,heat:2147.32},
                      {name:'Красноярский край',meanwage:43500,hotwater:93.47,water:30.12,sewage:32.46,electricity:1.73,heat:1642.68},
                      {name:'Республика Крым',meanwage:26100,hotwater:null,water:null,sewage:null,electricity:null,heat:null},
                      {name:'Курганская область',meanwage:23500,hotwater:74.83,water:34.93,sewage:27.52,electricity:2.98,heat:1931.36},
                      {name:'Курская область',meanwage:23200,hotwater:72.75,water:20.88,sewage:16.33,electricity:2.91,heat:1438.72},
                      {name:'Ленинградская область',meanwage:35000,hotwater:78.89,water:26.48,sewage:24.63,electricity:2.85,heat:1717.84},
                      {name:'Липецкая область',meanwage:28800,hotwater:89.78,water:23.58,sewage:20.5,electricity:2.53,heat:1430.88},
                      {name:'Магаданская область',meanwage:77700,hotwater:141.74,water:20.4,sewage:26.44,electricity:null,heat:2782.63},
                      {name:'Республика Марий Эл',meanwage:22600,hotwater:87.42,water:19.05,sewage:23.8,electricity:2.5,heat:1368.59},
                      {name:'Республика Мордовия',meanwage:22800,hotwater:77.35,water:19.13,sewage:10.89,electricity:2.48,heat:1479.76},
                      {name:'Москва',meanwage:63200,hotwater:105.45,water:28.28,sewage:20.25,electricity:4.48,heat:1571.65},
                      {name:'Московская область',meanwage:50300,hotwater:105.26,water:22.04,sewage:23.15,electricity:3.85,heat:1819.44},
                      {name:'Мурманская область',meanwage:55600,hotwater:131.73,water:16.82,sewage:13.57,electricity:2.3,heat:2688.1},
                      {name:'Ненецкий АО',meanwage:95100,hotwater:153.94,water:42.19,sewage:69.02,electricity:3.77,heat:2150.87},
                      {name:'Нижегородская область',meanwage:29600,hotwater:83.81,water:19.55,sewage:18.1,electricity:2.57,heat:1414.59},
                      {name:'Новгородская область',meanwage:25600,hotwater:100.12,water:32.29,sewage:24.17,electricity:3.03,heat:1540.54},
                      {name:'Новосибирская область',meanwage:28900,hotwater:74.1,water:17.29,sewage:14.3,electricity:2,heat:1219.45},
                      {name:'Омская область',meanwage:30500,hotwater:72.26,water:27.14,sewage:18.75,electricity:2.72,heat:1472.62},
                      {name:'Оренбургская область',meanwage:27700,hotwater:73.35,water:21.05,sewage:17.88,electricity:1.96,heat:1346.72},
                      {name:'Орловская область',meanwage:24900,hotwater:75.94,water:16.46,sewage:11.91,electricity:2.66,heat:1572.76},
                      {name:'Пензенская область',meanwage:22000,hotwater:68.41,water:17.79,sewage:14.81,electricity:2.35,heat:1203.83},
                      {name:'Пермский край',meanwage:33200,hotwater:84.92,water:26.13,sewage:20.52,electricity:2.74,heat:1415.79},
                      {name:'Приморский край',meanwage:42400,hotwater:139.17,water:25.07,sewage:15.28,electricity:2.6,heat:2754.8},
                      {name:'Псковская область',meanwage:24200,hotwater:110.36,water:20.54,sewage:21.18,electricity:3.1,heat:1871.76},
                      {name:'Ростовская область',meanwage:28200,hotwater:102.58,water:33.62,sewage:25.63,electricity:3.27,heat:1575.96},
                      {name:'Рязанская область',meanwage:28500,hotwater:87.2,water:19.68,sewage:15.78,electricity:3.03,heat:1518.47},
                      {name:'Самарская область',meanwage:30700,hotwater:89.06,water:22.1,sewage:16.9,electricity:2.87,heat:1381.73},
                      {name:'Санкт-Петербург ',meanwage:43200,hotwater:63,water:20.38,sewage:20.38,electricity:3.39,heat:1351.25},
                      {name:'Саратовская область',meanwage:25900,hotwater:65.13,water:18.01,sewage:14.19,electricity:2.7,heat:1489.1},
                      {name:'Республика Саха (Якутия)',meanwage:66000,hotwater:63.19,water:41.5,sewage:22.14,electricity:3.74,heat:934.16},
                      {name:'Сахалинская область',meanwage:60600,hotwater:131.3,water:44.56,sewage:29.59,electricity:3.37,heat:1875.94},
                      {name:'Свердловская область',meanwage:38900,hotwater:69.1,water:21.23,sewage:14.27,electricity:2.83,heat:1331.91},
                      {name:'Севастополь',meanwage:29700,hotwater:null,water:null,sewage:null,electricity:null,heat:null},
                      {name:'Республика Северная Осетия – Алания',meanwage:23200,hotwater:60.35,water:12.82,sewage:9.06,electricity:2.89,heat:1404.06},
                      {name:'Смоленская область',meanwage:26400,hotwater:91.36,water:21.34,sewage:18.45,electricity:2.66,heat:1796.33},
                      {name:'Ставропольский край',meanwage:27600,hotwater:110.01,water:40.43,sewage:22.47,electricity:3.01,heat:2089.14},
                      {name:'Тамбовская область',meanwage:25600,hotwater:92.96,water:17.59,sewage:17.26,electricity:2.69,heat:1757.7},
                      {name:'Республика Татарстан ',meanwage:33300,hotwater:67.41,water:21.33,sewage:16.45,electricity:2.67,heat:1412.96},
                      {name:'Тверская область',meanwage:28400,hotwater:72.41,water:18.27,sewage:21.23,electricity:3.23,heat:1477.07},
                      {name:'Томская область',meanwage:38900,hotwater:89.69,water:30.55,sewage:22.28,electricity:2.43,heat:1380.26},
                      {name:'Тульская область',meanwage:28300,hotwater:87.02,water:19.3,sewage:12.69,electricity:3.15,heat:1845.11},
                      {name:'Республика Тыва',meanwage:32500,hotwater:75.2,water:15.83,sewage:12.49,electricity:2.59,heat:1480.2},
                      {name:'Тюменская область',meanwage:42700,hotwater:100.47,water:31.83,sewage:33.59,electricity:2.11,heat:1223.77},
                      {name:'Удмуртская Республика',meanwage:27300,hotwater:74.02,water:18.34,sewage:15.7,electricity:2.57,heat:1414.14},
                      {name:'Ульяновская область',meanwage:27200,hotwater:83.96,water:20.56,sewage:16.97,electricity:2.62,heat:1519.84},
                      {name:'Хабаровский край',meanwage:46800,hotwater:154.08,water:31.42,sewage:23.8,electricity:3.36,heat:1526.18},
                      {name:'Республика Хакасия',meanwage:40400,hotwater:67.14,water:13.4,sewage:20.1,electricity:1.44,heat:1243.1},
                      {name:'Ханты-Мансийский АО',meanwage:75400,hotwater:106.67,water:39.51,sewage:40.48,electricity:2.14,heat:1472.47},
                      {name:'Челябинская область',meanwage:32700,hotwater:59.16,water:20.31,sewage:16.8,electricity:2.28,heat:1182.62},
                      {name:'Чеченская Республика',meanwage:22000,hotwater:59.19,water:10.84,sewage:13.02,electricity:1.64,heat:948.84},
                      {name:'Чувашская Республика',meanwage:24700,hotwater:68.96,water:13.65,sewage:14.52,electricity:2.21,heat:1342.2},
                      {name:'Чукотский АО',meanwage:77800,hotwater:156.35,water:47.95,sewage:17.56,electricity:null,heat:864.3},
                      {name:'Ямало-Ненецкий АО',meanwage:91600,hotwater:108.56,water:36.85,sewage:43.4,electricity:2.06,heat:1196.59},
                      {name:'Ярославская область',meanwage:32000,hotwater:73.12,water:20.54,sewage:16.03,electricity:2.74,heat:1264.3},
              ];
    
    $scope.selectedRegionChanged = function(){
        $scope.meanwage = $scope.selectedregion.meanwage;
        $scope.hotwater = $scope.selectedregion.hotwater;
        $scope.water = $scope.selectedregion.water;
        $scope.sewage = $scope.selectedregion.sewage;
        $scope.electricity = $scope.selectedregion.electricity;
        $scope.heat = $scope.selectedregion.heat;
    }
    
    var add = function (a, b) {return a + b}
    var and = function (a, b) {return a && b}
    
    $scope.qtSecSchool = 250;
    $scope.qtAllSchool = 625;
    
    $scope.quiz13result = 2118.87;
    $scope.quiz15result = 293.45;
    $scope.quiz22result = 1505.25;
    $scope.quiz23result = 75.20;
    $scope.quiz24result = 98.67;
    $scope.quiz25result = 30.39;
    $scope.quiz26result = 10155.50;
    $scope.quiz27result = 121.13;
    $scope.quiz28result = 324.72;
    
    $scope.floatRegEx = /^(?:[1-9]\d*|0)?(?:\,\d+)?$/i;
    $scope.intRegEx = /^[1-9]\d*$/i;
    

    $scope.$watch('[meanwage]', function(newValues,oldValues) {
        if (!newValues.reduce(and, true)) {
            $scope.quiz11result = $scope.quiz14result = null;
            return;
        }
        var meanwage = newValues[0];
        
        var b = Number((5495/(5*37*18)));
        var c = Number(((2904+5495+2380)/(11*37*18)));
        var resultValue1 = meanwage * (b/c) * 12 * ((1 + 0.302)/12.3);
        $scope.quiz11result = resultValue1 ? resultValue1 : null;
        
        var d = ((0.75*0.1)+1-0.75);
        var e = 18/(21*12.3*3);
        var f = 32611*d*e;
        var g = meanwage*e;
        var resultValue2 = f + g;

        $scope.quiz14result = resultValue2 ? resultValue2 : null;
    });
    
    $scope.$watch('[qtSecSchool, qtAllSchool]', function(newValues, oldValues) {
        if (!newValues.reduce(and, true)) {
            $scope.quiz12result = null;
            return;
        }
        
        var qtSecSchool = newValues[0];
        var qtAllSchool = newValues[1];
        
        
        var a = (4279980 + 129444 + 1959369 + 269746)/(qtSecSchool*7);
        var b = (126041+701033)/(qtAllSchool*7);
        
        var resultValue = a + b;
        $scope.quiz12result = resultValue ? resultValue : null;
    });
    
    $scope.$watch('[hotwater, water, sewage, electricity, heat]', function(newValues, oldValues) {
        if (!newValues.reduce(and, true)) {
            $scope.quiz21result = null;
            return;
        }
        
        var hotwater = newValues[0];
        var water = newValues[1];
        var sewage = newValues[2];
        var electricity = newValues[3];
        var heat = newValues[4];
        
        var a = 0.00231 * hotwater * 247;
        var b = 0.00347 * water * 247;
        var c = (0.00231+0.00347) * sewage * 247;
        var d = 198.39 * electricity;
        var e = 1.40 * heat;
        
        var resultValue = a + b + c + d + e;
        
        $scope.quiz21result = resultValue ? resultValue : null;
    });
    
    var calcFinal = 
    $scope.$watch('[quiz11result, quiz12result, quiz13result, quiz14result,' +
                   'quiz15result, quiz21result, quiz22result, quiz23result,' +
                   'quiz24result, quiz25result, quiz26result, quiz27result,' +
                   'quiz28result]', function(newValues, oldValues) {
        if (!newValues.reduce(and, true)) {
            $scope.result = null;
            return;
        }

        var resultValue = newValues.reduce(add, 0);
        $scope.result = resultValue ? resultValue : null;
    });

});
