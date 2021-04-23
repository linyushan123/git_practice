var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];



var startDate = new Date();//document.getElementById("date").value

//console.log(startDate.getMonth());

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2021-04-20";
setMonthAndDay(4,20);
$("#date").change(function(){
    $("#date").attr("value",$(this).val()); //赋值
});
