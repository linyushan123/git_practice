window.onload = function () {
    //document.write("Hello JavaScript");
};
var same = 4;
$(function () {
    $("input").on("click", function () {
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        if (same == randomChildNumber){
            randomChildNumber++;
            if (randomChildNumber > 2)
                randomChildNumber = 0;            
        }
        $("h1").text($("li").eq(randomChildNumber).text());
        
        var img=[
            'https://d1grca2t3zpuug.cloudfront.net/2017/06/Ramen01-870x500.jpg',
            'https://imgcdn.cna.com.tw/www/WebPhotos/1024/20201011/1838x1218_590922953265.jpg',
            'https://images.chinatimes.com/newsphoto/2020-03-12/1024/20200312002373.jpg'
        ];
        
        same = randomChildNumber;
        $("img").attr("src",img[randomChildNumber]);
        
    });
});

