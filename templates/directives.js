angular.module('app').directive('trDataValue', function($compile) {
    return {
        template: function(elem, attr) {
            return '<td><input class="control control--disabled" value="' + attr.value + '" disabled></td>' +
                   '<td>–</td><td style="text-align:left;">' + attr.name + '</td>';
        }
    };
});

angular.module('app').directive('trDataModule', function($compile) {
    return {
        template: function(elem, attr) {
            elem.addClass('data--item');
            return '<td><input class="control control--field" ui-number-mask="0" ' +
                            'ng-model="' + attr.value + '">' +
                   '<td>–</td><td style="text-align:left;">' + attr.name + '</td>';
        },
        link: function(scope, elem, attr) {
            scope.$watch(attr.value, function (model) {
                if (model === undefined || model == null) {
                    elem.removeClass('completed');
                    elem.addClass('notcompleted');
                } else {
                    elem.removeClass('notcompleted');
                    elem.addClass('completed');
                }
            })
        }
    };
});