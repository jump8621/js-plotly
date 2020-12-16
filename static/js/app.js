

//global variable
//var data
var ids = [];
var metadata = [];
var samples = [];


d3.json("samples.json").then(function(data) {
 // data = data;
  id = data.names;
  metadata = data.metadata;
  samples = data.samples;
  var selection = d3.select("#selDataset");
  id.forEach(id=> {
    var option = selection.append("option");
    option.property("value", id);
    option.text(id);
  })
optionChanged(selection.property("value"));

})
function change(value) {
  console.log(value)
  optionChanged(value)
}


function optionChanged(value) {
  demographicdata(value)
  Plotbar(value)
  bubbleChart(value)
 //gaugeChart(value)
  buildGauge(value)
}

function demographicdata(value) {
  
  var filteredData = metadata.filter(event => parseInt(event.id) === parseInt(value))[0];
  console.log(filteredData)
  //console.log(filteredData.ethnicity)
  //console.log((filteredData[0]))
  var idData = filteredData.id;
  var ethnicity = filteredData.ethnicity;
  var gender = filteredData.gender;
  var age = filteredData.age;
  var loc = filteredData.location;
  var bbtype = filteredData.bbtype;
  var wfreq = filteredData.wfreq;


  var demographicdata = d3.select("#sample-metadata");
  demographicdata.html("");

  var demographic_info = `id: ${idData}<br/>`;
  demographic_info += `ethnicity: ${ethnicity}<br/>`;
  demographic_info += `gender: ${gender}<br/>`;
  demographic_info += `age: ${age}<br/>`;
  demographic_info += `location: ${loc}<br/>`;
  demographic_info += `bbtype: ${bbtype}<br/>`;
  demographic_info += `wfreq: ${wfreq}<br/>`;
  demographicdata.html(demographic_info)


}

function Plotbar(value) {
  var filteredData = samples.filter(event => parseInt(event.id) === parseInt(value))[0];
  var sample_values = filteredData.sample_values.slice(0,10).reverse();
  var otu_ids = filteredData.otu_ids.slice(0,10).reverse();
  var otu_labels = filteredData.otu_labels.slice(0, 10).reverse();
  otu_ids = otu_ids.map(id => `OTU ${id}`);
  console.log(sample_values, otu_ids, otu_labels)

  var trace1 = {
    x: sample_values,
    y: otu_ids,
    text: otu_labels,
    type: "bar",
    orientation: "h"
  };
  
  var layout = {
    title: "",
    margin: {
      l:100,
      r:100,
      t:100,
      b:100,
    }
  }
  
  var chartData = [trace1];
  Plotly.newPlot("bar", chartData, layout);

}

function bubbleChart(value) {
  var filteredData = samples.filter(event => parseInt(event.id) === parseInt(value))[0];
  var sample_values = filteredData.sample_values;
  var otuIDs = filteredData.otu_ids;
  var otu_labels = filteredData.otu_labels;

  var trace1 = {
    x: otuIDs,
    y: sample_values,
    mode: 'markers',
    text: otu_labels,
    marker: {
      color: otuIDs,
      colorscale: 'Earth',
      type: 'heatmap',
      opacity: otuIDs.map(id => 0.7),
      size: sample_values
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: '',
    showlegend: false,
    height: 600,
    width: 1250
  };
  
  Plotly.newPlot('bubble', data, layout);
}

// function gaugeChart(value) {

//   var filteredData = metadata.filter(event => parseInt(event.id) === parseInt(value))[0];
//   var wfreq = filteredData.wfreq;

//   var trace = [
//     {
//       domain: { x:[0,1], y: [0,1] },
//       value: wfreq,
//       title: {text: "Frequency of Weekly Belly Button Washing"},
//       type: "indicator",
//       mode: "gauge+number",
//       gauge: {
//         axis: { range: [null, 9] },
//         steps: [
//           { range: [0, 3], color: "lightyellow" },
//           { range: [3, 6], color: "yellowgreen" },
//           { range: [6, 9], color: "lightgreen" },
//         ],
//         threshold: {
//           line: { color: "red", width: 4 },
//           thickness: 0.75,
//           value: wfreq,
//         }
//       }
//     }
//   ];




//   // var layout = {
//   //   shapes: [
//   //     {
//   //       type: "path",
//   //       path: path,
//   //       fillcolor: 850000,
//   //       line: {
//   //         color: 850000
//   //       }
//   //     }
//   //   ]
//   // }
//   Plotly.newPlot("gauge", trace) 
// }




//   //hovertemplate overrides hoverinfo 
//   //data[type=bar]
//   //%{variable:d3-format}

//   //should also learn/read up on meta - it is a key/index for data in plotly


 // make_tooltip.js


 function buildGauge(value) {

  var filteredData = metadata.filter(event => parseInt(event.id) === parseInt(value))[0];
  var wfreq = filteredData.wfreq;

  var level = parseFloat(wfreq) * 20;   

  var degrees = 180 - level;
  //alert(degrees);
  let radius = 0.5;
  var radians = degrees * Math.PI / 180;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
  var mainPath = 'M -.0 -0.035 L .0 0.035 L ',
      pathX = String(x),
      space = " ",
      pathY = String(y),
      pathEnd = " Z";
  var path = mainPath.concat(pathX,space,pathY,pathEnd);
  //console.log(path)




  let data = [
      {
          type: "scatter",
          x:[0],
          y:[0],
          marker: { size: 12, color: "850000" },
          showlegend: false,
          text: level,
          hoverinfo: "text+name"
      },
      {
          values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
          rotation: 90,
          text:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
          textinfo: "text",
          textposition: "inside",
          marker: {
              colors: [
                  "rgba(0,105,11,.5)",
                  "rgba(10,120,22,.5)",
                  "rgba(14,127,0,.5)",
                  "rgba(110,154,22,.5)",
                  "rgba(170,202,42,.5)",
                  "rgba(202,209,95,.5)",
                  "rgba(210,206,145,.5)",
                  "rgba(232,226,202,.5)",
                  "rgba(240, 230,215,.5)",
                  "rgba(255,255,255,0)"
              ]
          },
          labels:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
          hoverinfo: "label",
          hole: 0.5,
          type: "pie",
          showlegend: false
      }
  ]

  var layout = {
      shapes: [
          {
              type: "path",
              path: path,
              fillcolor: "850000",
              line: {
                  color: "850000"
              }
          }
      ],
      title: "Frequency of Weekly Belly Button Washing <br> Scrubs per Week",
      height: 500,
      width: 500,
      xaxis: {
          zeroline:false,
          showticklabels: false,
          showgrid: false,
          range: [-1, 1]
      },
      yaxis: {
          zeroline: false,
          showticklabels: false,
          showgrid: false,
          range: [-1, 1]
      }


 }

let GAUGE = document.getElementById("gauge");
Plotly.newPlot(GAUGE, data, layout);
}




