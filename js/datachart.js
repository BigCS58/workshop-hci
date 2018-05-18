var chart;
var graph;
var categoryAxis;

var chartData = 
[
  {
	  "month": "USA",
		"percentage": 4252,
    "color": "#FF0F00"
	},
	{
		"month": "China",
		"percentage": 1882,
    "color": "#FF6600"
	}, 
	{
		"month": "Japan",
		"percentage": 1809,
    "color": "#FF9E01"
	}, 
	{
	  "month": "Germany",
		"percentage": 1322,
    "color": "#FCD202"
	}, 
	{
		"month": "UK",
		"percentage": 1122,
    "color": "#F8FF01"
	}, 
	{
		"month": "France",
		"percentage": 1114,
    "color": "#B0DE09"
	}, 
	{
		"month": "India",
		"percentage": 984,
    "color": "#04D215"
    
	}, 
	{
		"month": "Spain",
		"percentage": 711,
    "color": "#0D8ECF"
	}, 
	{
		"month": "Netherlands",
		"percentage": 665,
    "color": "#0D52D1"
	}, 
	{
		"month": "Russia",
		"percentage": 580,
    "color": "#2A0CD0"
	}, 
	{
		"month": "South Korea",
		"percentage": 443,
    "color": "#8A0CCF"
	}, 
	{
		"month": "Canada",
		"percentage": 441,
    "color": "#CD0D74"
	}, 
	{
		"month": "Brazill",
		"percentage": 395,
    "color": "#754DEB"
	}, 
	{
	  "month": "Italy",
		"percentage": 386,
    "color": "#DDDDDD"
	}, 
	{
		"month": "Australia",
		"percentage": 384,
    "color": "#999999"
	}, 
	{
		"month": "Taiwan",
		"percentage": 338,
    "color": "#333333"
	}, 
	{
		"month": "Poland",
		"percentage": 328,
    "color": "#000000"
	}
];


AmCharts.ready(function () {
  chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "month";
  chart.position = "left";
  chart.angle = 30;
	chart.depth3D = 15;
  chart.startDuration = 1;
  
  categoryAxis = chart.categoryAxis;
	categoryAxis.labelRotation = 45;
  categoryAxis.dashLength = 5; //
  categoryAxis.gridPosition = "start";
  categoryAxis.autoGridCount = false;
	categoryAxis.gridCount = chartData.length;
  
    
	graph = new AmCharts.AmGraph();
	graph.valueField = "percentage";
	graph.type = "column";	
  graph.colorField = "color";
	graph.lineAlpha = 0;
  graph.fillAlphas = 0.8;
  graph.balloonText = "[[category]]: <b>[[value]]</b>";
  
  chart.addGraph(graph);
  
  chart.write('chartdiv');
});