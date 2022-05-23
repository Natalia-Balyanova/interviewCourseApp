angular.module('students-front').controller('updateController', function ($scope, $http, $routeParams, $location) {
    const contextPath = 'http://localhost:8189/edu';

    $scope.prepareForUpdate = function () {
        $http.get(contextPath + '/students/' + $routeParams.studentId)
            .then(function (response) {
                console.log(response.data)
                $scope.updated_student = response.data;
            });
    }

    $scope.updateStudent = function () {
        $http.put(contextPath + '/students', $scope.updated_student)
            .then(function (response) {
                $scope.updated_student = null;
                alert('Success!');
                $location.path('/');
            });
    }

    $scope.loadStudents = function () {
        $http.get(contextPath + '/students')
            .then(function (response) {
                $scope.students = response.data;
                $location.path('/');
            });
    }

    $scope.prepareForUpdate();
});