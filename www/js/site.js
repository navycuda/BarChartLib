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
  const generateRow = function (value){
    const row = document.createElement("div");
    row.setAttribute("class", "_row");
    row.setAttribute("data-value", value);
    row.innerText = value;
    return row;
  };
  const getPercent = function (value, min, max){
    if (value >= max){
      return 100;
    } else if (value <= min){
      return 0;
    }
    return (value / max) * 100;
  };
  const drawBarChart = function (data, options, element) {
    // For starters, assume the types passed in are correct.
    // create the chart element and populate the body
    const chart = document.createElement("div");
    chart.setAttribute("class", "_chart");
    element.appendChild(chart);
    // create the rows and populate with the data.
    for (let d = 0; d < data.length; d++){
      chart.appendChild(generateRow(data[d]));
    }
    // collect the rows in an array
    const rows = document.getElementsByClassName('_row');
    console.log(rows);
    // iterate through to change percent
    let percent = 0;
    const animateChart = setInterval(() => {
      for (let r = 0; r < rows.length; r++){
        if (percent <= getPercent(data[r], options.min, options.max)){
          rows[r].style.setProperty('--width', percent);
        }
      }
      // stop the animation once bars are complete.
      if (percent >= 100){
        clearInterval(animateChart);
        return;
      }
      percent += 0.1;
    }, 1);
  };



  // The stuff that isn't functions!
  const body = document.body;

  drawBarChart([ 42, 312, 160], { min: 42, max: 312 }, body);
});
