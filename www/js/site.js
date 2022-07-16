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
    const parent = document.createElement("div");
    parent.setAttribute("class", "bC_Chart");


    element.append(parent);
  };




  // The stuff that isn't functions!
  const body = document.body;



  drawBarChart([ 0, 25, 50, 75, 100 ], { min: 0, max: 100 }, body);


  const progressBar = document.getElementsByClassName('progress-bar')[0];
  const runBar = setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty('--width', width + 0.1);
    if (width === 99.9){
      clearInterval(runBar);
    }
  }, 5);

});
