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
///   animate: true,
///
/// }
/// element = document.element
  const generateRow = function (value){
    const row = document.createElement("div");
    row.setAttribute("class", "_table_row");
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
    chart.setAttribute("class", "_table");
    // if there is a title, add it
    if (options.title){
      const title = document.createElement("h2");
      title.innerText = options.title;
      chart.appendChild(title);
    }
    // creat the box for the rows
    const column = document.createElement("div");
    column.setAttribute("class", "_table_column");
    chart.appendChild(column);
    element.appendChild(chart);
    // create the rows and populate with the data.
    for (let d = 0; d < data.length; d++){
      column.appendChild(generateRow(data[d]));
    }
    // collect the rows in an array
    const rows = document.getElementsByClassName('_table_row');
    console.log(rows);
    // iterate through to change percent
    let percent = 0;
    // check to see if animation is desired
    if(options.animate){
      const animateChart = setInterval(() => {
        // iterate through and set the percent
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
        percent += options.animationStep ? options.animationStep : 0.25;
      }, 1);
    } else {
      // iterate through and set the percent
      for (let r = 0; r < rows.length; r++){
        rows[r].style.setProperty('--width', getPercent(data[r], options.min, options.max));
      }
    }
  };



  // The stuff that isn't functions!
  const body = document.body;

  drawBarChart([ 0, 312, 160], { min: 0, max: 312, title: 'X: C_DPF_Disable', animate: true, animationStep: 0.5 }, body);
});
