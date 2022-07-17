/* eslint-env es6 */
// Do stuff once the document is ready.
$(document).ready(function(){
/// data = [data]                               // X  : Single axis table, elements get bars
/// data = [[header],[data]]                    // Y  : Single axis table, x = header, y = data
/// data = [[ColHeader],[RowHeader],[data]]     // Z  : Two axis table, x= header, y = colHeader, z = data
///                                                     data.length === col * row;
/// options = {
///   min: 0,
///   max: 100,
///
///
/// }
/// element = document.element
  const drawBarChart = function (data, options, element) {
    // For starters, assume the types passed in are correct.
    // create the chart element and populate the body
    const chart = document.createElement("div");
    chart.setAttribute("class", "_chart");
    element.appendChild(chart);


  };



  // The stuff that isn't functions!
  const body = document.body;

  drawBarChart([ 0, 25, 50, 75, 100 ], { min: 0, max: 100 }, body);
});
