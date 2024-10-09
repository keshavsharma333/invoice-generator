import React from "react";
import ReactApexChart from "react-apexcharts";

function Chart({ paymentHistory }) {
  // Prepare the payment dates in ISO format
  let paymentDates = [];
  for (let i = 0; i < paymentHistory.length; i++) {
    const newDate = new Date(paymentHistory[i].datePaid);
    let isoDate = newDate.toISOString(); // Use ISO format for dates
    paymentDates = [...paymentDates, isoDate];
  }

  // Prepare the payment received values
  let paymentReceived = [];
  for (let i = 0; i < paymentHistory.length; i++) {
    paymentReceived = [
      ...paymentReceived,
      Number(paymentHistory[i].amountPaid).toFixed(4) || 0,
    ]; // Ensure valid numbers
  }

  const series = [
    {
      name: "Payment Received",
      data: paymentReceived,
    },
  ];

  const options = {
    chart: {
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime", // ApexCharts expects ISO date format
      categories: paymentDates,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy", // Display dates in this format in the tooltip
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        width: "90%",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
}

export default Chart;
