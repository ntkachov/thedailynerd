$(function(){
    var stripHTML = new RegExp('<.*?>', "g");

    $.ajax({
        url: "blog.json",
        success: function(data){
           // $("body").append(JSON.stringify(data));
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

    function buildBlog(blog){
        for(var post in blog) {
                post = blog[post];
                var blurb = post.blurb.replace(stripHTML,"") 
                var postElement = $('<li class="blogTitle card"><h1>'
                  + post.title + '</h1><div id="blurb">'
                  + blurb + '</div><div id="body" class="postBody">'
                  + post.body + '</div></li>');
                postElement.find("#body").hide();
                postElement.click(function(){
                    var clickTarget = $(this);
                    clickTarget.siblings().toggle(250);
                    clickTarget.find("#body").toggle(250 , function(){
                    $('html, body').animate({
                                scrollTop: clickTarget.offset().top
                                    }, 250);
                    });
                });

              $("#blogContent").append(postElement);

        }
    }
});
