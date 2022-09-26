console.log('Background Script is Running ...')
// const URL = "http://localhost:3000/products";
// $.ajax({
//     url: URL,
//     type:"POST",
//     data: {
//         name: "Harry",
//         id: 420
//     },
//     success: function (data, status) {
//         console.log('Server says: '+data +'\nStatus is: '+ status)
//     },
//     error: function (error) {
//         console.log('Error: ${error}')
//     }
// })
// const URL = "http://localhost:3000/user/me";
// $.ajax({
//     url: URL,
//     type:"GET",
//     success: function (data, status) {
//         console.log('Server says: '+data +'\nStatus is: '+ status)
//     },
//     error: function (error) {
//         console.log('Error: ${error}')
//     }
// })
// $http({
//     method : "GET",
//     url : "http://localhost:3000/user/me",
//     headers: { 'Content-Type': "application/json" },
//     data: JSON.stringify({"email":email, "password":password})
// }).then(function mySuccess(response) {
//     console.log(response.data);
//     $location.path('/home');
// }, function myError(error) {
//     console.log(error);
//     $location.path('/login');
// });


function messageReceived(msg, sender, sendResponse) {
   // Do your work here
    const URL = "http://localhost:3000/product/add";
    $.ajax({
        url: URL,
        type:"POST",
        data: msg,
        success: function (data, status) {
            console.log('Server says: '+data +'\nStatus is: '+ status);
            setTimeout(function(){
                sendResponse(data);
            },1000);
            
            return true;
        },
        error: function (error) {
            console.log('Error: ${error}')
        }
    })
   console.log(msg);
}

chrome.runtime.onMessage.addListener(messageReceived);