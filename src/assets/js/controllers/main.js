//main.js
angular
    .module('app')
    .controller('cardChartCtrl1', cardChartCtrl1)


function cardChartCtrl1($scope) {
    $scope.filters = [{
            'filterId': 1,
            'time': 'last 24 hours',
        },
        {
            'filterId': 2,
            'time': 'all',
        },
        {
            'filterId': 3,
            'time': 'last hour',
        },
        {
            'filterId': 4,
            'time': 'today',
        },
        {
            'filterId': 5,
            'time': 'yersteday',
        }
    ];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
}