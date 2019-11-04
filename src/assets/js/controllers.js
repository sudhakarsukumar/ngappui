// controller.js
angular
    .module('app')
    .controller('cardChartCtrl1', cardChartCtrl1)

    cardChartCtrl1.$inject = ['$scope'];
function cardChartCtrl1($scope) {
    $scope.metrics = [{
            'id': 1,
            'title': 'Total Sessions',
            'count': '2100',
            'status': 14,
        },
        {
            'id': 2,
            'title': 'Total Visitors',
            'count': '1228',
            'status': -3,
        },
        {
            'id': 3,
            'title': 'Time Spent / HR',
            'count': '6.92',
            'status': 1,
        },
        {
            'id': 4,
            'title': 'Avg. Requests Received',
            'count': '2.3',
            'status': 21,
        }
    ];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
    $(document).ready(function(){
        $('.session_list').slick({
       infinite: false,
       slidesToShow: 3,
       dots:false,
       arrows:false,
     }); 
             });
}