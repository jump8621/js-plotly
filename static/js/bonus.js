
// d3.json("samples.json").then(function(importedData) {
//     var data = importedData
//     Object.entries.forEach(entry => {
//         append("option")

        
//     });
// }






// function buildGauge(value) {

//     var filteredData = metadata.filter(event => parseInt(event.id) === parseInt(value))[0];
//     var wfreq = filteredData.wfreq;
  
//     var level = parseFloat(wfreq) * 20;   

//     var degrees = 180 - level;
//     alert(degrees);
//         radius = 0.5;
//     var radians = degrees * Math.PI / 180;
//     var x = radius * Math.cos(radians);
//     var y = radius * Math.sin(radians);
  
//   // Path: may have to change to create a better triangle
//     var mainPath = 'M -.0 -0.035 L .0 0.035 L ',
//         pathX = String(x),
//         space = " ",
//         pathY = String(y),
//         pathEnd = " Z";
//     var path = mainPath.concat(pathX,space,pathY,pathEnd);
//     console.log(path)




//     let data = [
//         {
//             type: "scatter",
//             x:[0],
//             y:[0],
//             marker: { size: 12, color: "850000" },
//             showlegend: false,
//             text: level,
//             hoverinfo: "text+name"
//         },
//         {
//             values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
//             rotation: 90,
//             text:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
//             textinfo: "text",
//             textposition: "inside",
//             marker: {
//                 colors: [
//                     "rgba(0,105,11,.5)",
//                     "rgba(10,120,22,.5)",
//                     "rgba(14,127,0,.5)",
//                     "rgba(110,154,22,.5)",
//                     "rgba(170,202,42,.5)",
//                     "rgba(202,209,95,.5)",
//                     "rgba(210,206,145,.5)",
//                     "rgba(232,226,202,.5)",
//                     "rgba(240, 230,215,.5)",
//                     "rgba(255,255,255,0)"
//                 ]
//             },
//             labels:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
//             hoverinfo: "label",
//             hole: 0.5,
//             type: "pie",
//             showlegend: false
//         }
//     ]

//     var layout = {
//         shapes: [
//             {
//                 type: "path",
//                 path: path,
//                 fillcolor: "850000",
//                 line: {
//                     color: "850000"
//                 }
//             }
//         ],
//         title: "Frequency of Weekly Belly Button Washing <br> Scrubs per Week",
//         height: 500,
//         width: 500,
//         xaxis: {
//             zeroline:false,
//             showticklabels: false,
//             showgrid: false,
//             range: [-1, 1]
//         },
//         yaxis: {
//             zeroline: false,
//             showticklabels: false,
//             showgrid: false,
//             range: [-1, 1]
//         }


//    }

//   let GAUGE = document.getElementById("gauge");
//   Plotly.newPlot(GAUGE, data, layout);
// }


/*********************************from website****************************************************** */
// Enter a speed between 0 and 180
// var level = 10;

// // Trig to calc meter point
// function gaugePointer(value){
	
// 	var degrees = 180 - value,
// 	 radius = .5;
// var radians = degrees * Math.PI / 180;
// var x = radius * Math.cos(radians);
// var y = radius * Math.sin(radians);

// // Path: may have to change to create a better triangle
// var mainPath = 'M -.0 -0.035 L .0 0.035 L ',
// 	 pathX = String(x),
// 	 space = ' ',
// 	 pathY = String(y),
// 	 pathEnd = ' Z';
// var path = mainPath.concat(pathX,space,pathY,pathEnd);
	
// 	return path;

// }

// var data = [{ type: 'scatter',
//    x: [0], y:[0],
// 	marker: {size: 18, color:'850000'},
// 	showlegend: false,
// 	name: 'Frequency of Weekly Belly Button Washing',
// 	text: level,
// 	hoverinfo: 'text+name'},
//   { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
//   rotation: 90,
//   text: ['Not Often!', 'Somewhat Often', 'Average', 'Often',
// 			'Frequently', 'Extremely Frequently!', ''],
//   textinfo: 'text',
//   textposition:'inside',	  
//   marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
// 						 'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
// 						 'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
// 						 'rgba(255, 255, 255, 0)']},
//   labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
//   hoverinfo: 'label',
//   hole: .5,
//   type: 'pie',
//   showlegend: false
// }];

// var layout = {
//   shapes:[{
//       type: 'path',
//       path: gaugePointer(90),
//       fillcolor: '850000',
//       line: {
//         color: '850000'
//       }
//     }],
//   //title: '<b>Gauge</b> <br> Speed 0-100',
// 	autosize:true,
//   //height: 1000,
//   //width: 1000,
//   xaxis: {zeroline:false, showticklabels:false,
// 			 showgrid: false, range: [-1, 1]},
//   yaxis: {zeroline:false, showticklabels:false,
// 			 showgrid: false, range: [-1, 1]}
// };

// Plotly.newPlot('myDiv', data, layout);


// var update = {
//     title: 'some new title'
// };

// var update2 =  {
//   shapes:[{
//       type: 'path',
//       path: gaugePointer(130),
//       fillcolor: '850000',
//       line: {
//         color: '850000'
//       }
//     }]
// }

// //Plotly.relayout('myDiv', update2)
// /*
// setTimeout(function(){
	
// 	Plotly.animate('myDiv', {
//     layout: {
// 		  shapes:[{
//       type: 'path',
//       path: gaugePointer(50),
//       fillcolor: '850000',
//       line: {
//         color: '850000'
//       }
//     }],
//        height: 500,
// 		 width: 500,
//     }
//   }, {
//     transition: {
//       duration: 500,
//       easing: 'cubic-in-out'
//     }
//   });
	
// },3000);
// */


























// var frames = [], currentValue;


// //Plotly.relayout('myDiv',layout_update);
// function randomize() {
	
// 	var newVal = Math.floor((Math.random() * 180) + 1),
// 		 currentValue = currentValue || level,
// 		 fps = 60;
	
	
// 	var difference = Math.abs((newVal-currentValue)/fps);
	
	
// 	var sign = (newVal > currentValue) ? 1 : -1;
// 	console.log(newVal)
// 	console.log(currentValue)
	
// 	difference = difference*sign;
// 	console.log(difference)
	
	
// 	for(var i=0; i < fps; i++){
// 		frames[i] = {
// 			shapes:[{
// 				type: 'path',
// 				path: gaugePointer((currentValue+(i*difference))),
// 				fillcolor: '850000',
// 				line: {
// 				  color: '850000'
// 				}
// 			 }], 
// 		}
// 	}
	
// 	currentValue = newVal;
	
// 	var layout_update = {
// 	shapes:[{
//       type: 'path',
//       path: gaugePointer(newVal),
//       fillcolor: '850000',
//       line: {
//         color: '850000'
//       }
//     }],
// 	//height: 500,
//    // width: 500,
// };
	
	 
// 	var totalFps = 0;
// 	/*
// 	var animation = setInterval(function(){
// 		//console.log('timeout');
		
		
// 		Plotly.animate('myDiv', {

// 			 layout: frames[totalFps]
// 		  }, {
// 			 transition: {
// 				duration: 5,
// 				easing: 'cubic-in-out'
// 			 }
// 		  });
// 		totalFps++;
		
		
// 		if(totalFps == frames.length){
// 			clearInterval(animation)
// 		}
		
// 	},3);*/
	
	
// 	for(var i =0; i < fps; i++){
	
	
// 			Plotly.animate('myDiv', {

// 			 layout: frames[i]
// 		  }, {
// 			 transition: {
// 				duration: 5,
// 				easing: 'cubic-in-out'
// 			 }
// 		  });
	
// 	}
	
	

	
// }
// var plotDiv = document.getElementById('myDiv');
// var plotData = plotDiv.data;
// //a
// console.log(plotData[0].text)
