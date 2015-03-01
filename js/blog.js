$(function(){
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
              $("#blogContent").append(blog[title]);
        }
    }
});
