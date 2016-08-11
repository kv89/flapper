app.controller('mainCtrl', ['$scope', '$http', 'fileUpload', function ($scope, $http, fileUpload) {

    $scope.posts = [
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' }
    ];

    // $scope.addPost = function () {
    //     if (!$scope.title || $scope.title === '') { return; }

    //     $scope.posts.push({
    //         title: $scope.title,
    //         link: $scope.link,
    //         upvotes: 0,
    //         comments: [
    //             { author: 'Joe', body: 'Cool post!', upvotes: 0 },
    //             { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
    //         ]
    //     });

    //     $scope.title = '';
    //     $scope.link = '';
    // }

    // $scope.incrementUpvotes = function (post) {
    //     post.upvotes += 1;
    // }

    // function chunk(arr, size) {
    //     var newArr = [];
    //     for (var i = 0; i < arr.length; i += size) {
    //         newArr.push(arr.slice(i, i + size));
    //     }
    //     return newArr;
    // }

    // $scope.postsChunk = chunk($scope.posts, 3);
    
    
    $scope.upload = function (filee) {
        // console.log(file);
        // if (file) {
        //     // create an object for the ids
        //     var pictureId;

        //     // create a new formdata to store our image
        //     // var fd = new FormData();
        //     // fd.append('photo', file);
        //     var fd = {
        //         filePath: file
        //     };
        //     console.log(fd);

        //     // process the upload
        //     $http({
        //         method: 'POST',
        //         url: 'http://localhost:3000/api/upload',
        //         data: fd
        //     }).then(function (response) {
        //         console.log("Upload Single Image to Stamplay successful!");
        //         console.log(response);

        //     }, function (err) {
        //         console.log(err);
        //     });
        // }
        
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        var uploadUrl = "http://localhost:3000/api/upload";
        fileUpload.uploadFileToUrl(file, uploadUrl);

    };

}]);