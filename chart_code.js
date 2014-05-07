function gethour(string){
  var hour=string.split("T")[1].split(":")[0];
  return parseInt(hour);
}
function getminute(string){
  var minute=string.split("T")[1].split(":")[1];
  return parseInt(minute);
}
function getmonth(string){
  var month=string.split("T")[0].split("-")[1];
  return parseInt(month);
}
function getdate(string){
  var date=string.split("T")[0].split("-")[2];
  return parseInt(date);
}

current = new Date();
currentHour= current.getUTCHours();
currentDate= current.getUTCDate();
currentMinute = current.getUTCMinutes();
currentMonth= current.getUTCMonth();
CurrentinMinutes = currentDate*24*60+currentHour*60+currentMinute;
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawGoogChart);
function drawGoogChart() {

  chartlist = [['Time', 'BTC value']];
  for (key in articles){
    currentTime=22;
    var time = articles[key].time;
    var bestkey;
    var SearchedinMinutes = CurrentinMinutes - time*60;
    var leastDiff = 100000000000;
    for (key2 in collection2){
      var c2date = getdate(collection2[key2]["d"]);
      var c2hour = gethour(collection2[key2]["d"]);
      var c2minute = getminute(collection2[key2]["d"]);
      var c2minutes = c2date*24*60+c2hour*60+c2minute;


      if (Math.abs(c2minutes-SearchedinMinutes)<leastDiff){
        leastDiff =Math.abs(c2minutes-SearchedinMinutes);
        //console.log("diff is" + Math.abs(c2minutes-SearchedinMinutes)+" best key is " + bestkey);
        bestkey=key2;
      }
    }
    chartlist.push([parseInt(currentTime-time)+currentMinute/60, parseFloat(collection2[bestkey]["v"])]);
    leastdiff = 100000000000;
  }
  var data = google.visualization.arrayToDataTable(
    chartlist
  );


    //console.log(collection2);

  var options = {
    hAxis: {textStyle: {color: '#909090', fontName: 'Trebuchet MS'}, gridline: {count:0}, ticks: [{v:3, f:"6 pm"}, {v:6, f:"9 pm"}, {v:9, f:"12 am"}, {v:12, f:"3 am"}, {v:15, f:"6 am"}, {v:18, f:"9 am"}, {v:21, f:"12 pm"}]},
    vAxis: {textPosition: 'out', textStyle: {color: '#909090', fontName: 'Trebuchet MS'}, gridline: {count:0}, ticks: [{v:428, f:"$428"}, {v:432, f:"$432"}, {v:436, f:"$436"}, {v:440, f:"$440"}, {v:444, f:"$444"}]},
    explorer: { axis: 'horizontal', actions: []},
    legend: {position: 'none'},
    chartArea: {width: '100%', height: '90%'},
    colors: ['#33CCCC'],
    dataOpacity: 1.0,
    pointSize: 8
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));
  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'onmouseover', onMouseOverHandler);
  google.visualization.events.addListener(chart, 'onmouseout', onMouseOutHandler);
}

function onMouseOverHandler(e) {
  row = $($('#articles_list tr')[e.row]).attr("class");
  row = $("."+row);
  row.css({'background-color':'#787878', 'color':'#E8E8E8'});

}

function onMouseOutHandler(e) {
  row = $($('#articles_list tr')[e.row]).attr("class");
  row = $("."+row);
  row.css({'background-color':'#404040', 'color':'#C0C0C0'});
}
