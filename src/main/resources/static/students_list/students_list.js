angular.module('students-front').controller('studentsListController', function ($scope, $http, $location) {
    const contextPath = 'http://localhost:8189/edu';

    $scope.loadStudents = function () {
        $http.get(contextPath + '/students')
            .then(function (response) {
                $scope.students = response.data;
            });
    }

    $scope.updateStudentPage = function (studentId) {
        $location.path('/update_student/' + studentId);
    }

    $scope.deleteStudent = function (studentId) {
        $http.delete(contextPath + '/students/' + studentId)
            .then(function (response) {
                $scope.loadStudents();
            });
    }

    $scope.saveNewStudent = function () {
        $http.post(contextPath + '/students', $scope.new_student)
            .then(function (response) {
                $scope.new_student = null;
                alert('Success!');
                $scope.loadStudents();
            });
    }

    $scope.loadStudents();

});