google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawGoogChart);
function drawGoogChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'BTC value'],
    [3,  722],
    [4, 750],
    [4.5, 705],
    [5, 660],
    [6,  695],
    [7, 720],
    [8, 740],
    [9,  737],
    [10,  700],
    [11,  670],
    [12,  681],
    [15,  648],
    [17,  620],
    [19,  635]
  ]);

  var options = {
    hAxis: {textStyle: {color: '#909090', fontName: 'Trebuchet MS'}, gridline: {count:0}, ticks: [{v:3, f:"3 am"}, {v:6, f:"6 am"}, {v:9, f:"9 am"}, {v:12, f:"12 pm"}, {v:15, f:"3 pm"}, {v:18, f:"6 pm"}]},
    vAxis: {minValue: 600, textPosition: 'none'},
    explorer: { axis: 'horizontal', actions: []},
    legend: {position: 'none'},
    chartArea: {width: '100%', height: '90%'},
    colors: ['#33CCCC']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));
  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'onmouseover', onMouseOverHandler);
  google.visualization.events.addListener(chart, 'onmouseout', onMouseOutHandler);
}

function onMouseOverHandler(e) {
  row = $($('#articles_list tr')[13-e.row]);
  row.css({'background-color':'#787878', 'color':'#E8E8E8'});

}

function onMouseOutHandler(e) {
  row = $($('#articles_list tr')[13-e.row]);
  row.css({'background-color':'#404040', 'color':'#C0C0C0'});
}
