/* eslint-env es6 */
// Do stuff once the document is ready.
$(document).ready(function(){
  const createDiv = function(text) {
    const result = document.createElement("div");
    result.innerText = text;
    return result;
  };
  const drawBarChart = function (data, options, element) {
    const result = document.createElement("div");
    result.attributes("class", "bC_chart");







    element.appendChild(result);
  };




  // The stuff that isn't functions!
  const body = document.body;

  const header = document.createElement("header");
  const headerTitle = document.createElement("h1");

  body.appendChild(header);
  header.appendChild(headerTitle);

  headerTitle.append("Hello Deroche!");

  const divs = [
    createDiv("div 1"),
    createDiv("div 2"),
    createDiv("div 3")
  ];

  for (let d = 0; d < divs.length; d++){
    body.appendChild(divs[d]);
  }

  drawBarChart("drawBarChart", "", body);

});
