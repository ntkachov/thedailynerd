$(function(){
    var blog;
    $.ajax({
        url: "blog.json",
        success: function(data){
           // $("body").append(JSON.stringify(data));
            blog = data;
            buildBlog(data);
        },
        done: function() {
             console.log("Finished Ajax call"); 
         }, 
        error: function (jqXHR, stat, error){ 
            console.log(error);
        },
        fail: function(e){
            console.log(e);
        },
    });

    window.onhashchange = function(){
        console.log(location.hash);
        if(location.hash == ""){
            showAll();
        } else {
            setUri(location.hash);
        }
    }

    function buildBlog(blog){
        for(var post in blog) {
                post = blog[post];
                var uri = + post.uri;
                var postElement = $('<li id=' + post.uri+ ' class="blogTitle card"><h1>'
                  + post.title + '</h1><div id="blurb">'
                  + post.blurb + '</div><div id="body" class="postBody" style="display: none">'
                  + post.body + '</div></li>');

                postElement.click(function(){
                    var id = $(this).attr('id');
                    location.hash = "#" + id;
                });
              $("#blogContent").append(postElement);

        }
    }

    function showAll(){
        $("#blogContent").children().show(250);
        $("#blogContent").find(".postBody").hide(250);
    }

    function setUri(uri){
        $(uri).find("#body").show(250);
        $(uri).siblings().hide(250);
    }

    

});
