
// d3.json("http://robdunnlab.com/projects/belly-button-biodiversity/", function(data) {
//     console.log(data);
// });
// var drawChart = function(x_data, y_data, hoverText, metadata) {


//     var metadata_panel = d3.select("#sample-metadata");
//     metadata_panel.html("");
//     Object.entries(metadata).forEach(([key, value]) => {
//         metadata_panel.append("p").text(`${key}: ${value}`);
//     });

//     var trace = {
//         x: x_data,
//         y: y_data,
//         text: hoverText,
//         type: 'bar',
//         orientation: 'h'
//     };
  
//     var data = [trace];
  
//     Plotly.newPlot('bar', data);
// }

// d3.json("samples.json").then((data) =>{
//     var trace1 = {
//         x: "data.otu_ids",
//         y: data.sample_values.map(val => Math.sqrt(val)),
//         type: "bar",
//         name: "otu_labels"
//     }
// })

// var data = [trace1]
// var layout ={
//     title: "OTU values"
// };
// Plotly.newPlot("bar", data, layout);

// d3.json("/data/users.json", function(error, data) {
//     //should go near class"wells" first i believe
//     d3.select("body")
//         .selectAll("p") 
//         .data(data)
//         .enter()
//         .append("p")
//         .text(function(d) {
//             return d.name + ", " + d.location;
//         });

// });


// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.



// //importdata is an object- and you can't sort and don't need to sort

//global variable
// var data
var ids = [];
var metadata = [];
var samples = [];

// function init() {
d3.json("samples.json").then(function(data) {
  //data = importedData;
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
// }

function optionChanged(value) {
  demographicdata(value)
  Plotbar(value)
  bubbleChart(value)
}

function demographicdata(value) {
  
  var filteredData = metadata.filter(event => parseInt(event.id) === parseInt(value))[0];
  console.log(filteredData)
  console.log(filteredData[0])
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
  var otu_ids = filteredData.otu_ids;
  var otu_labels = filteredData.otu_labels;

  var trace1 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    text: otu_labels,
    marker: {
      color: otu_ids,
      opacity: otu_ids.map(id => 0.7),
      size: sample_values
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: '',
    showlegend: false,
    // height: 600,
    // width: 900
  };
  
  Plotly.newPlot('bubble', data, layout);
}

function gaugeChart(value) {

  var filteredData = samples.filter(event => parseInt(event.id) === parseInt(value))[0];
  var sample_values = filteredData.sample_values;
  var otu_ids = filteredData.otu_ids;
  var otu_labels = filteredData.otu_labels;

  var trace = {
    type: gauge,
    series: [
      { values: []}
    ]


  }

  var data = [
    {
      type: "indicator",
      mode: "gauge+number+delta",
      value: 420,
      title: { text: "Speed", font: { size: 24 } },
      delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 250], color: "cyan" },
          { range: [250, 400], color: "royalblue" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 490
        }
      }
    }
  ];
  
  var layout = {
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('myDiv', data, layout);


}
// init
    // metadata.forEach(metadata=> {
    //   var option = selection.append("option");
    //   option.property("value", metadata);
    //   option.text(metadata)
    // })

//     console.log(id, metadata)
    

//     var selectValues = importedData.names;

//     var selectOpt = d3.select();

//     // selectValues.forEach(value => {
//     //   selectOpt
//     //     .append("option")
//     //     .text(value)
//     //     .attr("value", function() {
//     //       return value;
//     //     });
//     // })
  

// //start filling the data inside the select option
// init();

// //

// d3.selectAll("#selDataset").on("change", plotFunctions);

// function plotFunctions() {
//   var valueSelect = d3.select("#selDataset").node().value;
//   demographicdata(valueSelect);

// }

// function demographicdata (valueSelect) {
// //*****Demographic Data****** */
//   //var valueSelect = d3.select("#selDataset").node().value;
//   var selectValues = importedData.names;

//   var selectOpt = d3.select("#selDataset");






//   //var sortotu_ids = data.sort((a, b) => b.ple_values - a.sample_values);
//   slicedData = samplesfilter.slice(0, 10);  
//   var reversedData = slicedData.reverse();

//   //map or filter?
//   var otu_id = reversedData.map(object => object.out_ids);
//   var sample_value = reversedData.map(object => object.sample_values);
//   var labels = reversedData.map(object => object.otu_labels)

//   // data.sort(function(a, b) {
//   //   return parseFloat(b.samples.id) - parse(a. samples.id) 
//   // });
//   // data = data.reverse()

//   var trace1 = {
//     x: otu_id,
//     y: sample_value,
//     text: labels,
//     type: "bar",
//     orientation: "h"
//   };
  
//   var chartData = [trace1];
//   Plotly.newPlot("plot", chartData);
// });
 
// var select = d3.select("#selDataset");
// select.on("change(this.value)", function () {
//   var value = d3.event.target.data.id;
//   //would it be equal to data.samples or do i need to make it equal to a var and then put that after target?
//   // var samplesfilter = data.filter(data => data.samples === samples)
//   // slicedData = samplesfilter.slice(0, 10);  
//   // var reversedData = slicedData.reverse();


//   //function newTable () {
//     d3.event.preventDefault();
//     var input = d3.select("selDataset");
//     var person_id = input.property("value");
//     buildBarGraph(person_id);
//   //}
// })


//this logic doesn't worki already have the outline built, or maybe it does

//d3.select("selDataset").on("change", newTable);

//change(this.value)
// d3.selectAll("#selDataset").on("change", function (){
//   var value = d3.event.target.value;
//   console.log(value);
// })


// var us = Object.values(data.us);
// var uk = Object.values(data.uk);
// var canada = Object.values(data.canada);

// // @ADD YOUR CODE HERE

// var labels = Object.keys(data.us)

// function init () {
//     var data = [{
//         values: us,
//         labels: labels,
//         type: "pie" 
//     }];

//     var layout = {
//         height: 600,
//         width: 800
//       };

//     Plotly.newPlot("pie", data, layout);
// } 
// d3.selectAll("#selDataset").on("change", getData);

// function getData() {
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
//     // Initialize an empty array for the country's data
//     var data = [];
  
//     if (dataset == 'us') {
//         data = us;
//     }
//     else if (dataset == 'uk') {
//         data = uk;
//     }
//     else if (dataset == 'canada') {
//         data = canada;
//     }
//     // Call function to update the chart
//     updatePlotly(data);
//   }
  
//   // Update the restyled plot's values
//   function updatePlotly(newdata) {
//     Plotly.restyle("pie", "values", [newdata]);
//   }
  
//   init();





// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");
// }

// var select = d3.select("#select-data");

// select.on('change', function () {
//     var value = d3.event.target.value;
//     console.log(value);
// })

  
// //  var trace1 = {
// //     x: data.otu_ids,
// //     y: data.sample_values.map(val => Math.sqrt(val)),
// //     type: "bar",
// //     name:"otu_labels"
// //   };

// //   var data = [trace1];

// //   Plotly.newPlot("bar", data)

// })

// d3.json("samples.json").then((samples) => {
//   Object.keys = samples
// })


// //
// //************so the first function should call on init function I believ******
// ////****also check about src codes**** */


// promise_1().then(function () {
//   return promise_2();
// }).then(function () {
//   return promise_3();
// }).catch(console.log.bind(console));




//   //hovertemplate overrides hoverinfo 
//   //data[type=bar]
//   //%{variable:d3-format}

//   //should also learn/read up on meta - it is a key/index for data in plotly


 // make_tooltip.js







