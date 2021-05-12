$(function (){
    $('#send').click(fillPost);
});

function fillPost(data){
    let user = $("#userid").val();
    $.ajax('http://jsonplaceholder.typicode.com/posts', {
        'type': "get",
        'data': {
            'userId': user
        }
        //success: postFnc
    }).done( function(data){
        let postData = "";
        //console.log(data);
        $.each(data, function (item, value){
            //console.log(value);
            postData += value.userId+ "<br>"+ value.title+"</br>";
        });
        $('.postList').html(postData);
    })
}

// $.ajax('http://jsonplaceholder.typicode.com/posts', {
//     'type': "get",
//     'data': {
//         'userId': 1
//     },
//     success: postFnc
// });

function postFnc(data){
    let postData = "";
    //console.log(data);
    $.each(data, function (item, value){
        //console.log(value);
        postData += value.userId+ "<br>"+ value.title+"</br>";
    });
    $('.postList').html(postData);
}