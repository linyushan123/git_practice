$(function () {
    $("input").on("change",function(){
        setMonthAndDay(dateControl.value.slice(5,7), dateControl.value.slice(8));
        updatetable();
    })

    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    var millisecsPerDay = 24*60*60*1000;

    for (var x = 0; x < topicCount; x++) {
        
        
        if (topic[x]=="尚未開學" | topic[x]== "國定假日"){
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x + 1}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5).fontcolor("gray")}</td>`);
            $("#courseTable").append(`<td>${topic[x].fontcolor("gray")}</td>`);
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x + 1}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
        
       
    }
});
function updatetable(startMonth, startDay) {
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    var millisecsPerDay = 24*60*60*1000;

    for (var x = 0; x < topicCount; x++) {
        if (topic[x]=="尚未開學" | topic[x]== "國定假日"){
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x + 1}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5).fontcolor("gray")}</td>`);
            $("#courseTable").append(`<td>${topic[x].fontcolor("gray")}</td>`);
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x + 1}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
    }
};
//`<td>${((new Date($('#coursedate').val()+7*x*millisecsPerDay)).toLocaleDateString()).slice(5)}</td>`