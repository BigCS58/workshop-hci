var chart;
var graph;
var categoryAxis;

var chartData = 
[
  {
	  "country": "USA",
		"visits": 4252,
    "color": "#FF0F00"
	},
	{
		"country": "China",
		"visits": 1882,
    "color": "#FF6600"
	}, 
	{
		"country": "Japan",
		"visits": 1809,
    "color": "#FF9E01"
	}, 
	{
	  "country": "Germany",
		"visits": 1322,
    "color": "#FCD202"
	}, 
	{
		"country": "UK",
		"visits": 1122,
    "color": "#F8FF01"
	}, 
	{
		"country": "France",
		"visits": 1114,
    "color": "#B0DE09"
	}, 
	{
		"country": "India",
		"visits": 984,
    "color": "#04D215"
    
	}, 
	{
		"country": "Spain",
		"visits": 711,
    "color": "#0D8ECF"
	}, 
	{
		"country": "Netherlands",
		"visits": 665,
    "color": "#0D52D1"
	}, 
	{
		"country": "Russia",
		"visits": 580,
    "color": "#2A0CD0"
	}, 
	{
		"country": "South Korea",
		"visits": 443,
    "color": "#8A0CCF"
	}, 
	{
		"country": "Canada",
		"visits": 441,
    "color": "#CD0D74"
	}, 
	{
		"country": "Brazill",
		"visits": 395,
    "color": "#754DEB"
	}, 
	{
	  "country": "Italy",
		"visits": 386,
    "color": "#DDDDDD"
	}, 
	{
		"country": "Australia",
		"visits": 384,
    "color": "#999999"
	}, 
	{
		"country": "Taiwan",
		"visits": 338,
    "color": "#333333"
	}, 
	{
		"country": "Poland",
		"visits": 328,
    "color": "#000000"
	}
];


AmCharts.ready(function () {
  chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "country";
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
	graph.valueField = "visits";
	graph.type = "column";	
  graph.colorField = "color";
	graph.lineAlpha = 0;
  graph.fillAlphas = 0.8;
  graph.balloonText = "[[category]]: <b>[[value]]</b>";
  
  chart.addGraph(graph);
  
  chart.write('chartdiv');
});