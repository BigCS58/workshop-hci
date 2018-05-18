var chart;
var graph;
var categoryAxis;

var chartData =
	[
		{
			"month": "มกราคม 2561",
			"percentage": 50000,
			"color": "#FF0F00"
		},
		{
			"month": "กุมภาพันธ์ 2561",
			"percentage": 30000,
			"color": "#FF6600"
		},
		{
			"month": "มีนาคม 2561",
			"percentage": 20000,
			"color": "#FF9E01"
		},
		{
			"month": "เมษายน 2561",
			"percentage": 40000,
			"color": "#FCD202"
		},
		{
			"month": "พฤษภาคม 2561",
			"percentage": 35000,
			"color": "#F8FF01"
		},
		{
			"month": "มิถุนายน 2561",
			"percentage": 20000,
			"color": "#B0DE09"
		},
		{
			"month": "กรกฎาคม 2561",
			"percentage": 42000,
			"color": "#04D215"

		},
		{
			"month": "สิงหาคม 2561",
			"percentage": 32000,
			"color": "#0D8ECF"
		},
		{
			"month": "กันยายน 2561",
			"percentage": 10000,
			"color": "#0D52D1"
		},
		{
			"month": "ตุลาคม 2561",
			"percentage": 37000,
			"color": "#2A0CD0"
		},
		{
			"month": "พฤศจิกายน 2561",
			"percentage": 25000,
			"color": "#8A0CCF"
		},
		{
			"month": "ธันวาคม 2561",
			"percentage": 45000,
			"color": "#CD0D74"
		},
		//=============================================================================
		{
			"month": "มกราคม 2560",
			"percentage": 45000,
			"color": "#FF0F00"
		},
		{
			"month": "กุมภาพันธ์ 2560",
			"percentage": 32000,
			"color": "#FF6600"
		},
		{
			"month": "มีนาคม 2560",
			"percentage": 10000,
			"color": "#FF9E01"
		},
		{
			"month": "เมษายน 2560",
			"percentage": 25000,
			"color": "#FCD202"
		},
		{
			"month": "พฤษภาคม 2560",
			"percentage": 35000,
			"color": "#F8FF01"
		},
		{
			"month": "มิถุนายน 2560",
			"percentage": 20000,
			"color": "#B0DE09"
		},
		{
			"month": "กรกฎาคม 2560",
			"percentage": 40000,
			"color": "#04D215"

		},
		{
			"month": "สิงหาคม 2560",
			"percentage": 25000,
			"color": "#0D8ECF"
		},
		{
			"month": "กันยายน 2560",
			"percentage": 15000,
			"color": "#0D52D1"
		},
		{
			"month": "ตุลาคม 2560",
			"percentage": 13000,
			"color": "#2A0CD0"
		},
		{
			"month": "พฤศจิกายน 2560",
			"percentage": 37000,
			"color": "#8A0CCF"
		},
		{
			"month": "ธันวาคม 2560",
			"percentage": 28000,
			"color": "#CD0D74"
		},
		//========================================================================================
		{
			"month": "มกราคม 2559",
			"percentage": 45000,
			"color": "#FF0F00"
		},
		{
			"month": "กุมภาพันธ์ 2559",
			"percentage": 32000,
			"color": "#FF6600"
		},
		{
			"month": "มีนาคม 2559",
			"percentage": 10000,
			"color": "#FF9E01"
		},
		{
			"month": "เมษายน 2559",
			"percentage": 25000,
			"color": "#FCD202"
		},
		{
			"month": "พฤษภาคม 2559",
			"percentage": 35000,
			"color": "#F8FF01"
		},
		{
			"month": "มิถุนายน 2559",
			"percentage": 20000,
			"color": "#B0DE09"
		},
		{
			"month": "กรกฎาคม 2559",
			"percentage": 40000,
			"color": "#04D215"

		},
		{
			"month": "สิงหาคม 2559",
			"percentage": 25000,
			"color": "#0D8ECF"
		},
		{
			"month": "กันยายน 2559",
			"percentage": 15000,
			"color": "#0D52D1"
		},
		{
			"month": "ตุลาคม 2559",
			"percentage": 13000,
			"color": "#2A0CD0"
		},
		{
			"month": "พฤศจิกายน 2559",
			"percentage": 37000,
			"color": "#8A0CCF"
		},
		{
			"month": "ธันวาคม 2559",
			"percentage": 28000,
			"color": "#CD0D74"
		},
		//=================================================================================
		{
			"month": "มกราคม 2558",
			"percentage": 45000,
			"color": "#FF0F00"
		},
		{
			"month": "กุมภาพันธ์ 2558",
			"percentage": 32000,
			"color": "#FF6600"
		},
		{
			"month": "มีนาคม 2558",
			"percentage": 10000,
			"color": "#FF9E01"
		},
		{
			"month": "เมษายน 2558",
			"percentage": 25000,
			"color": "#FCD202"
		},
		{
			"month": "พฤษภาคม 2558",
			"percentage": 35000,
			"color": "#F8FF01"
		},
		{
			"month": "มิถุนายน 2558",
			"percentage": 20000,
			"color": "#B0DE09"
		},
		{
			"month": "กรกฎาคม 2558",
			"percentage": 40000,
			"color": "#04D215"

		},
		{
			"month": "สิงหาคม 2558",
			"percentage": 25000,
			"color": "#0D8ECF"
		},
		{
			"month": "กันยายน 2558",
			"percentage": 15000,
			"color": "#0D52D1"
		},
		{
			"month": "ตุลาคม 2558",
			"percentage": 13000,
			"color": "#2A0CD0"
		},
		{
			"month": "พฤศจิกายน 2558",
			"percentage": 37000,
			"color": "#8A0CCF"
		},
		{
			"month": "ธันวาคม 2558",
			"percentage": 28000,
			"color": "#CD0D74"
		},
		//==============================================================================
		{
			"month": "มกราคม 2557",
			"percentage": 45000,
			"color": "#FF0F00"
		},
		{
			"month": "กุมภาพันธ์ 2557",
			"percentage": 32000,
			"color": "#FF6600"
		},
		{
			"month": "มีนาคม 2557",
			"percentage": 10000,
			"color": "#FF9E01"
		},
		{
			"month": "เมษายน 2557",
			"percentage": 25000,
			"color": "#FCD202"
		},
		{
			"month": "พฤษภาคม 2557",
			"percentage": 35000,
			"color": "#F8FF01"
		},
		{
			"month": "มิถุนายน 2557",
			"percentage": 20000,
			"color": "#B0DE09"
		},
		{
			"month": "กรกฎาคม 2557",
			"percentage": 40000,
			"color": "#04D215"

		},
		{
			"month": "สิงหาคม 2557",
			"percentage": 25000,
			"color": "#0D8ECF"
		},
		{
			"month": "กันยายน 2557",
			"percentage": 15000,
			"color": "#0D52D1"
		},
		{
			"month": "ตุลาคม 2557",
			"percentage": 13000,
			"color": "#2A0CD0"
		},
		{
			"month": "พฤศจิกายน 2557",
			"percentage": 37000,
			"color": "#8A0CCF"
		},
		{
			"month": "ธันวาคม 2557",
			"percentage": 28000,
			"color": "#CD0D74"
		},
	];

function selectDataFromYear(year) {
	var data = [];
	chartData.forEach(element => {
		if (element.month.match(year)) {

			data.push(element);
		}
	});
	return data;
}
//===============================================================

function generateGraph(year) {
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = selectDataFromYear(year);
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
}
//=========================================================

AmCharts.ready(function () {
	generateGraph('2561');
});