import Plot from "react-plotly.js";
const SimplePlot = () => {
  const data = [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    },
    { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
  ];
  const layout = { width: 320, height: 240, title: "A Fancy Plot" };
  return <Plot data={data} layout={layout} />;
};

export default SimplePlot;
