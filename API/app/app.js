$(function(){
    var request;
    $("form").on("submit", function(e){
        e.preventDefault();
//        prepare the request
       var queryterm = $ ('#query').val();
        search(queryterm)});
function search(query) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search",
        {
    "part": "snippet",
    "type": "video",
    "key":"AIzaSyCr86jQ0O3zSqtj_oSRWADMEaDkUfVnFE4",
    "q": query  
        },
    function(data){
     display(data.items);   
        
    });
} 
    
function display(videos){
    var videoId;
    var videoTitle;
    var videoImg;
    var channelTitle;
    
    $.each(videos, function(index, video){
    videoId = video.id.videoId;
    videoTitle = video.snippet.title;
    videoImg = video.snippet.thumbnails.high.url;
    channelTitle = video.snippet.channelTitle;
    $("#search-results").append("<h2><a href='http://www.youtube.com/watch?v="+videoId+"'>" + videoTitle + "</a></h2><div><img src='"+videoImg+"' alt='"+videoImg+"'/></div><div><h3>"+channelTitle+"</h3></div>")    
    });
  }
});