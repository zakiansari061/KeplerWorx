const { useState } = React;

const Counter = () => {
  let [count, changeCount] = useState(0);
  return (
    React.createElement("div", { class: "counter" },
    React.createElement("h2", null, count),
    React.createElement("button", { onClick: () => changeCount(count - 1) }, React.createElement("span", null, "-1")),
    React.createElement("button", { onClick: () => changeCount(count + 1) }, React.createElement("span", null, "+1")),
    React.createElement("button", { onClick: () => changeCount(count = 0) }, React.createElement("span", null, "Reset"))));


};

ReactDOM.render(React.createElement(Counter, null), document.getElementById('KeplerWorx'));

const SevenEmirates = [
  { id: 'd1', value: 10, region: 'Abu Dhabi' },
  { id: 'd2', value: 11, region: 'Ajman' },
  { id: 'd3', value: 12, region: 'Sharjah' },
  { id: 'd4', value: 6, region: 'Fujairah' },
  { id: 'd5', value: 17, region: 'Ras al Khaimah' },
  { id: 'd6', value: 11, region: 'Dubai' },
  { id: 'd7', value: 4, region: 'Umm al Quwain' }, 
];

const xScale = d3
  .scaleBand()
  .domain(SevenEmirates.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select('svg').classed('container', true);

const bars = container
  .selectAll('.bar')
  .data(SevenEmirates)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 200 - yScale(data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value))  ;

  // setTimeout(() => {
  //   bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
  // }, 2000);