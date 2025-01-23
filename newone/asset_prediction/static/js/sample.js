 // Sample data

// const jsonData = [

//     {

//       "S.No": 1,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "21EYS7CG1W",

//       "Model_Name": "ThinkPad X13 Intel G4 (Win11)",

//       "Quantity": 4,

//       "Cost_per_unit": 1237435.92,

//       "Total_cost": 4949743.68

//     },

//     {

//       "S.No": 2,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "4X41A30364",

//       "Model_Name": "BO Essential Plus 15.6 BackPack (Eco)",

//       "Quantity": 7,

//       "Cost_per_unit": 49941.36,

//       "Total_cost": 349589.52

//     },

//     {

//       "S.No": 3,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "4X41A30364",

//       "Model_Name": "BO Essential Plus 15.6 BackPack (Eco)",

//       "Quantity": 6,

//       "Cost_per_unit": 49941.36,

//       "Total_cost": 299648.16

//     },

//     {

//       "S.No": 4,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "4XD0X88524",

//       "Model_Name": "Audio_BO 100 Stereo USB Headset",

//       "Quantity": 1,

//       "Cost_per_unit": 27745.2,

//       "Total_cost": 27745.2

//     },

//     {

//       "S.No": 5,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "4XD0X88524",

//       "Model_Name": "Audio_BO 100 Stereo USB Headset",

//       "Quantity": 1,

//       "Cost_per_unit": 27745.2,

//       "Total_cost": 27745.2

//     },

//     {

//       "S.No": 6,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "4Y51C21217",

//       "Model_Name": "Go Wireless Multi-Device Mouse",

//       "Quantity": 7,

//       "Cost_per_unit": 55490.4,

//       "Total_cost": 388432.8

//     },

//     {

//       "S.No": 7,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "4Y51C21217",

//       "Model_Name": "Go Wireless Multi-Device Mouse",

//       "Quantity": 5,

//       "Cost_per_unit": 55490.4,

//       "Total_cost": 277452.0

//     },

//     {

//       "S.No": 8,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "21H2S7G11W",

//       "Model_Name": "ThinkPad L14 Gen 4 (Win11)",

//       "Quantity": 6,

//       "Cost_per_unit": 1015474.32,

//       "Total_cost": 6092845.92

//     },

//     {

//       "S.No": 9,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "21H2S7G11W",

//       "Model_Name": "ThinkPad L14 Gen 4 (Win11)",

//       "Quantity": 5,

//       "Cost_per_unit": 1015474.32,

//       "Total_cost": 5077371.6

//     },

//     {

//       "S.No": 10,

//       "Location": "9AAE101713",

//       "City": "Busan",

//       "Product": "21H2S7G11W",

//       "Model_Name": "ThinkPad L14 Gen 4 (Win11)",

//       "Quantity": 1,

//       "Cost_per_unit": 1015474.32,

//       "Total_cost": 1015474.32

//     },

//     {

//       "S.No": 11,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "4X30L79883",

//       "Model_Name": "KB MICE_BO Essential Wired Combo",

//       "Quantity": 8,

//       "Cost_per_unit": 27745.2,

//       "Total_cost": 221961.6

//     },

//     {

//       "S.No": 12,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "4X30L79883",

//       "Model_Name": "KB MICE_BO Essential Wired Combo",

//       "Quantity": 7,

//       "Cost_per_unit": 27745.2,

//       "Total_cost": 194216.4

//     },

//     {

//       "S.No": 13,

//       "Location": "9AAE101713",

//       "City": "Busan",

//       "Product": "4X30L79883",

//       "Model_Name": "KB MICE_BO Essential Wired Combo",

//       "Quantity": 5,

//       "Cost_per_unit": 27745.2,

//       "Total_cost": 138726.0

//     },

//     {

//       "S.No": 14,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "40AY0090EU",

//       "Model_Name": "Universal USB-C Dock",

//       "Quantity": 1,

//       "Cost_per_unit": 173407.5,

//       "Total_cost": 173407.5

//     },

//     {

//       "S.No": 15,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "40AY0090EU",

//       "Model_Name": "Universal USB-C Dock",

//       "Quantity": 1,

//       "Cost_per_unit": 173407.5,

//       "Total_cost": 173407.5

//     },

//     {

//       "S.No": 16,

//       "Location": "9AAE100499",

//       "City": "Cheonan-si",

//       "Product": "63CFMARXKR",

//       "Model_Name": "ThinkVision T24i-30 23.8 inch",

//       "Quantity": 1,

//       "Cost_per_unit": 192829.14,

//       "Total_cost": 192829.14

//     },

//     {

//       "S.No": 17,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "63CFMARXKR",

//       "Model_Name": "ThinkVision T24i-30 23.8 inch",

//       "Quantity": 2,

//       "Cost_per_unit": 192829.14,

//       "Total_cost": 385658.28

//     },

//     {

//       "S.No": 18,

//       "Location": "9AAE101713",

//       "City": "Busan",

//       "Product": "63CFMARXKR",

//       "Model_Name": "ThinkVision T24i-30 23.8 inch",

//       "Quantity": 3,

//       "Cost_per_unit": 192829.14,

//       "Total_cost": 578487.42

//     },

//     {

//       "S.No": 19,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "4XJ1M77973",

//       "Model_Name": "14-inch Bright Screen Privacy Filter",

//       "Quantity": 1,

//       "Cost_per_unit": 47166.84,

//       "Total_cost": 47166.84

//     },

//     {

//       "S.No": 20,

//       "Location": "9AAE105104",

//       "City": "Seoul",

//       "Product": "4XJ1K79629",

//       "Model_Name": "13.3-inch Bright Screen Privacy Filter",

//       "Quantity": 1,

//       "Cost_per_unit": 54103.14,

//       "Total_cost": 54103.14

//     }

//   ];

   

var productjs ;

// = [

//   { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 4], "Avg_demand": [2, 2, 2.3, 3.5, 4, 4.3], "Predicted": [0, 0, 0, 0, 0, 7] },

//   { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 2], "Avg_demand": [2, 4, 3.6, 3.5, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 7] },

//   { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0.5, 0.6, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0.25, 0.2, 0], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 2, 2.3, 2.75, 3.2, 2.83], "Predicted": [0, 0, 0, 0, 0, 8] },

//   { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [4, 2.5, 2, 2, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },

//   { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 2.5, 2, 2.5, 2.6, 2.3], "Predicted": [0, 0, 0, 0, 0, 7] },

//   { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 3.5, 3.3, 3.75, 3.2, 4], "Predicted": [0, 0, 0, 0, 0, 7] },

//   { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [6, 5, 5.3, 5, 4.4, 4.5], "Predicted": [0, 0, 0, 0, 0, 6] },

//   { "Product": "21EYS7CG1W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0, 0, 0.5, 1.6, 1.5], "Predicted": [0, 0, 0, 0, 0, 4] },

//   { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [2, 0, 2.6, 4.25, 3.4, 2.8], "Predicted": [0, 0, 0, 0, 0, 7] },

//   { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.5, 0.4, 0.3], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 1.5, 2.3, 2.25, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },

//   { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 7], "Avg_demand": [1, 1, 3, 3.5, 3.6, 3.5], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [1, 1, 0.6, 1.25, 1.4, 1.6], "Predicted": [0, 0, 0, 0, 0, 3] },

//   { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 2] },

//   { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 6], "Avg_demand": [0, 2.5, 3, 3.25, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 5], "Avg_demand": [3, 2.5, 2.6, 3, 2.8, 2.5], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "4XJ1M77973", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0.6, 2, 0.4, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "4XJ1K79629", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 1] },

//   { "Product": "4XD1M45626", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 2] }

// ];

 



// Default data for chart rendering

// var dummyinventory = [100, 100, 100, 100, 100, 100];

// var dummyIntransit = [50, 50, 50, 50, 50, 50];

// var dummypredicted = [75, 75, 75, 75, 75, 75];

 

// // Current chart instance for bar chart destruction

// var currentBarChart = null;

// function getdata(get_url) {

// return new Promise(function (resolve, reject) {

//   $.ajax({

//     url: get_url,

//     type: 'GET',  // GET is the default, but you can specify it here

//     headers: {

//       'ngrok-skip-browser-warning': '1'  // Custom header to skip browser warning for ngrok

//     },

//     success: function (data) {

//       resolve(data);  // Resolve the promise with the API data

//     },

//     error: function (jqXHR, textStatus, errorThrown) {

//       reject(new Error('Request failed: ' + textStatus));  // Reject the promise in case of error

//     }

//   });

// });

// }

// var productjs;

// async function fetchData123() {

// //  productjs = await getdata('https://piranha-robust-polliwog.ngrok-free.app/dashboardinv');

// productjs = await getdata('http://127.0.0.1:5000//dashboardinv');



// // The next line will only be executed once productjs has been retrieved

// console.log(productjs);



// // Continue with other code

// // ...other logic here

// }

// fetchData123();

// // Populate the table with data

// async function populateTable() {

//   // alert("hi12");

//   // console.log("HI");

//   var Url_path = "http://127.0.0.1:5000/dashboardpq"

// // var jsonData = await getdata('https://piranha-robust-polliwog.ngrok-free.app/dashboardpq');

// var jsonData = await getdata("http://127.0.0.1:5000/dashboardpq");

// console.log(jsonData);

//   // $.get(Url_path, function (data, status) {

//   //   console.log(data);

//   // });

//   // $.get(Url_path, function (data, status) {

//   //   if (status === 'success') {

//   //     console.log('User data:', data);

//   //     print(data);

//   //   } else {

//   //     console.log('Request failed:', status);

//   //   }

//   // });





  







//   const tableBody = document.querySelector('#predQuantityTable tbody');

//   jsonData.forEach((item, index) => {

//       const row = document.createElement('tr');

//       row.innerHTML = `

 

// <td class="border-bottom-0"><h6 class="fw-semibold mb-1">${item["Part Number"]}</h6></td>

// <td class="border-bottom-0"><p class="mb-0 fw-normal">${item.Location}</p></td>

// <td class="border-bottom-0"><div class="d-flex align-items-center gap-2"><p class="mb-0 fw-normal">${item.City}</p></div></td>

// <td class="border-bottom-0"><p class="fw-normal mb-0 fs-3">${item["Model Name"]}</p></td>

// <td class="border-bottom-0"><h6 class="fw-semibold mb-0 fs-4">${item.Quantity}</h6></td>

// <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item["Unit Cost"]}</p></td>

// <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item["Total Cost"]}</p></td>

//       `;

 

//       // Automatically select the first row

//       if (index === 0) {

//           row.classList.add('clicked-row');



//       }

 

//       // Event listener for row clicks

//       row.addEventListener('click', function () {

//           document.querySelectorAll('tr').forEach(r => r.classList.remove('clicked-row'));

//           row.classList.add('clicked-row');

 

//         const selectedProduct = item["Part Number"];

//         const selectedProductLocation = item.City;

//         //

//           const selectedProductData = productjs.find(prodItem => ((prodItem.Product === selectedProduct)&& (prodItem["Location"]===selectedProductLocation) ));

//         // alert(selectedProductData.Inventory);

//           if (selectedProductData) {

//               updateBarChart(selectedProductData.Inventory, selectedProductData.Avg_demand, selectedProductData.Predicted);

//           }

//       });

 

//       tableBody.appendChild(row);

//   });

 

//   // Automatically call the function for the first product after table load

//   if (productjs.length > 0) {

//       updateBarChart(productjs[0].Inventory, productjs[0].Avg_demand, productjs[0].Predicted);

//   }

// }

 

// Function to update the bar chart dynamically

// function updateBarChart(inventory1 = dummyinventory, Intransit1 = dummyIntransit, Predicted1 = dummypredicted) {
//     if (currentBarChart) {
//         currentBarChart.destroy(); // Destroy the previous chart instance
//     }

//     // Fetch the current theme from localStorage
//     const currentTheme = localStorage.getItem("currentTheme") || "srp"; // Default to SRP

//     // Define colors for each theme
//     const themeColors = {
//         srp: ["#5D87FF", "#49BEFF", "#FFC107"], // SRP theme colors
//         gea: ["#6A0DAD", "#4B0082", "#FF6347"], // GEA theme colors
//     };

//     const selectedColors = themeColors[currentTheme] || themeColors.srp;

//     var barChartOptions = {
//         series: [
//             { name: "In Inventory:", data: inventory1 },
//             { name: "Demand:", data: Intransit1 },
//             { name: "Predicted required quantity:", data: Predicted1 }
//         ],
//         chart: {
//             type: "bar",
//             height: 345,
//             offsetX: -15,
//             toolbar: { show: true },
//             foreColor: "#adb0bb",
//             fontFamily: 'inherit',
//             sparkline: { enabled: false },
//         },
//         colors: selectedColors, // Apply the theme colors here
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: "35%",
//                 borderRadius: [5],
//                 borderRadiusApplication: 'end',
//                 borderRadiusWhenStacked: 'all'
//             },
//         },
//         dataLabels: { enabled: false },
//         legend: { show: true },
//         grid: {
//             borderColor: "rgba(0,0,0,0.1)",
//             strokeDashArray: 3,
//             xaxis: { lines: { show: true } },
//         },
//         xaxis: {
//             type: "category",
//             categories: ["April", "May", "June", "July", "August", "Sep"],
//             labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } }
//         },
//         yaxis: {
//             show: true,
//             min: 0,
//             max: 10,
//             tickAmount: 4,
//             labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } }
//         },
//         stroke: { show: true, width: 3, lineCap: "butt", colors: ["transparent"] },
//         tooltip: { theme: "light" },
//         responsive: [
//             {
//                 breakpoint: 600,
//                 options: {
//                     plotOptions: { bar: { borderRadius: 3 } }
//                 }
//             }
//         ]
//     };

//     // Create the bar chart
//     currentBarChart = new ApexCharts(document.querySelector("#chart"), barChartOptions);
//     currentBarChart.render();
// }


 

// Function to render constant yearly cost breakup chart

// function renderYearlyCostBreakup() {

//   var breakupOptions = {

//       color: "bbccbd",

//       series: [38, 40, 25],  // Static data for years 2020, 2021, 2022

//       labels: ["2020", "2021", "2022"],

//       chart: {

//           width: 180,

//           type: "donut",

//           fontFamily: "Plus Jakarta Sans', sans-serif",

//           foreColor: "#adb0bb",

//       },

//       plotOptions: {

//           pie: {

//               startAngle: 0,

//               endAngle: 360,

//               donut: { size: '75%' }

//           }

//       },

//       stroke: { show: false },

//       dataLabels: { enabled: false },

//       legend: { show: false },

//       colors: ["#green", "#ecf2ff", "#F9F9FD"],

//       responsive: [

//           { breakpoint: 991, options: { chart: { width: 150 } } }

//       ],

//       tooltip: { theme: "dark", fillSeriesColor: false }

//   };

 

//   // Create the breakup chart

//   new ApexCharts(document.querySelector("#breakup"), breakupOptions).render();

// }

 

// // Function to render constant monthly open tasks chart

// function renderMonthlyOpenTasks() {

//   var earningOptions = {

//       chart: {

//           id: "sparkline3",

//           type: "area",

//           height: 60,

//           sparkline: { enabled: true },

//           group: "sparklines",

//           fontFamily: "Plus Jakarta Sans', sans-serif",

//           foreColor: "#adb0bb",

//       },

//       series: [

//           {

//               name: "Open Tasks",

//               color: "#49BEFF",

//               data: [25, 66, 20, 40, 12, 58, 20]  // Static data

//           }

//       ],

//       stroke: { curve: "smooth", width: 2 },

//       fill: { colors: ["#f3feff"], type: "solid", opacity: 0.05 },

//       markers: { size: 0 },

//       tooltip: {

//           theme: "dark",

//           fixed: { enabled: true, position: "right" },

//           x: { show: false }

//       }

//   };

 

//   // Create the earning (open tasks) chart

//   new ApexCharts(document.querySelector("#earning"), earningOptions).render();

// }

 

// // Main initialization function

// function initPredQuantity() {

// console.log("Initializing geaQuantity.js");



// // Populate the table

// populateTable();



// // Render constant charts

// renderYearlyCostBreakup();

// renderMonthlyOpenTasks();

// }



 


// theme-srp {
//     --primary-color: #eef4f4; /* Teal Blue */
//     --secondary-color: #20B2AA; /* Sea Green */
//     --background-color: #F5FFFA; /* Mint Cream */
//     --text-color: #2F4F4F; /* Charcoal Gray */
//     --button-active: #005F5F; /* Darker Teal for active button */
//     --graph-line-color: #00796B; /* Graph line for SRP */
//   }
  
//   /* GEA Theme */
//   .theme-gea {
//     --primary-color: #f1edf4; /* Royal Purple */
//     --secondary-color: #FFBF00; /* Amber */
//     --background-color: #F5F3FF; /* Lavender Mist */
//     --text-color: #191970; /* Midnight Blue */
//     --button-active: #4B0082; /* Indigo for active button */
//     --graph-line-color: #8B00FF; /* Graph line for GEA */
//   }
  
//   /* General Theme Application */
//   body.theme-srp,
//   #main-wrapper.theme-srp {
//     background-color: var(--background-color);
//     color: var(--text-color);
//   }
  
//   body.theme-gea,
//   #main-wrapper.theme-gea {
//     background-color: var(--background-color);
//     color: var(--text-color);
//   }
  
//   /* Navbar */
//   .theme-srp .app-header {
//     background-color: var(--primary-color);
//     color: #ffffff;
//     border-bottom: 2px solid var(--secondary-color);
//   }
  
//   .theme-gea .app-header {
//     background-color: var(--primary-color);
//     color: #ffffff;
//     border-bottom: 2px solid var(--secondary-color);
//   }
  
//   /* Sidebar */
//   .theme-srp .left-sidebar {
//     background-color: var(--primary-color);
//     color: #ffffff;
//   }
  
//   .theme-gea .left-sidebar {
//     background-color: var(--primary-color);
//     color: #ffffff;
//   }
  
//   /* Buttons */
//   .theme-srp .btn {
//     background-color: var(--primary-color);
//     border-color: var(--secondary-color);
//     color: #ffffff;
//   }
  
//   .theme-gea .btn {
//     background-color: var(--primary-color);
//     border-color: var(--secondary-color);
//     color: #ffffff;
//   }
  
//   /* Active Button */
//   .theme-srp .btn:active,
//   .theme-srp .btn.active {
//     background-color: var(--button-active);
//   }
  
//   .theme-gea .btn:active,
//   .theme-gea .btn.active {
//     background-color: var(--button-active);
//   }
  
//   /* Cards */
//   .theme-srp .card {
//     background-color: var(--background-color);
//     border-color: var(--primary-color);
//     color: var(--text-color);
//     box-shadow: 0px 4px 6px rgba(0, 128, 128, 0.1);
//   }
  
//   .theme-gea .card {
//     background-color: var(--background-color);
//     border-color: var(--primary-color);
//     color: var(--text-color);
//     box-shadow: 0px 4px 6px rgba(106, 13, 173, 0.1);
//   }
  
//   /* Table Headers */
//   .theme-srp table thead {
//     background-color: var(--primary-color);
//     color: #ffffff;
//   }
  
//   .theme-gea table thead {
//     background-color: var(--primary-color);
//     color: #ffffff;
//   }
  
//   /* Graph Line Colors */
//   .theme-srp .graph-line {
//     stroke: var(--graph-line-color);
//   }
  
//   .theme-gea .graph-line {
//     stroke: var(--graph-line-color);
//   }
//       table tbody tr:hover{
//         background-color: #1260a4; /* light primary color*/
//       }
   
//       .clicked-row{
//         background-color: #1f80d5; /* Change color for clicke row*/
//       }
  
//       .btn.active {
//       background-color: #0d6efd; /* Primary color */
//       color: rgb(31, 35, 165); /* White text */
//       border-color: #0d6efd; /* Match the border to the background */
//     }
//     .btn {
//     font-weight: 400; /* Regular weight for inactive buttons */
//     font-size: 16px; /* Default size */
//     padding: 10px 20px; /* Spacing */
//     transition: all 0.3s ease-in-out; /* Smooth transitions */
//   }
  
//   /* SRP Theme Buttons */
//   .theme-srp .btn-outline-primary {
//     color: #008080; /* Teal */
//     border: 2px solid #008080; /* Visible border */
//     background-color: transparent;
//   }
  
//   .theme-srp .btn-outline-primary:hover {
//     background-color: #008080; /* Teal background on hover */
//     color: #ffffff; /* White text */
//   }
  
//   .theme-srp .btn.active {
//     background-color: #005F5F; /* Darker teal for active */
//     color: #ffffff;
//     font-weight: 700; /* Bold text */
//     font-size: 18px; /* Larger font size */
//     border: 3px solid #005F5F; /* Thicker border */
//   }
  
//   /* GEA Theme Buttons */
//   .theme-gea .btn-outline-primary {
//     color: #6A0DAD; /* Royal Purple */
//     border: 2px solid #6A0DAD; /* Visible border */
//     background-color: transparent;
//   }
  
//   .theme-gea .btn-outline-primary:hover {
//     background-color: #6A0DAD; /* Purple background on hover */
//     color: #ffffff; /* White text */
//   }
  
//   .theme-gea .btn.active {
//     background-color: #4B0082; /* Indigo for active */
//     color: #ffffff;
//     font-weight: 700; /* Bold text */
//     font-size: 18px; /* Larger font size */
//     border: 3px solid #4B0082; /* Thicker border */
//   }

.background{
    background-color: #49BEFF;
 }
.inputWidth{
    min-width: 50%;
    width: 50%;
  }

  .container {
margin: 0 auto;
padding: 20px;
max-width: 1000px;
}
.filter-tabs {
display: flex;
justify-content: flex-start;
margin-bottom: 20px;
flex-wrap: wrap; /* Allow wrapping of filter tabs */
}
.filter-group {
position: relative;
display: inline-block;
margin-right: 15px;
margin-bottom: 10px; /* Added space between rows */
}
.filter-title {
cursor: pointer;
padding: 10px 15px;
background: #fff;
border: 1px solid #ccc;
border-radius: 4px;
text-align: center;
}
.dropdown {
display: none;
position: absolute;
background-color: #ffffff;
box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
z-index: 10; /* Ensure dropdown is above other elements */
padding: 10px;
border-radius: 8px;
min-width: 200px;
max-height: 200px;
overflow-y: auto; /* Enables scrolling */
border: 1px solid #ccc;
top: 35px; /* Adjust position below the filter title */
}
.dropdown.show {
display: block;
}
.dropdown label {
display: block;
margin: 5px 0;
cursor: pointer;
}
.sort-container {
margin-bottom: 15px;
}
.sort-select {
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
width: 120px;
}
.product {
display: flex;
background-color: white;
border-radius: 8px;
padding: 20px; /* Increased padding for larger tiles */
margin-bottom: 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
position: relative; /* Added for positioning the action dots */
cursor: pointer; /* Indicate clickable */
transition: transform 0.2s; /* Smooth hover effect */
}
.product:hover {
transform: scale(1.02); /* Slightly enlarge on hover */
}
.product img {
width: 150px; /* Increased image size */
height: 150px; /* Increased image size */
object-fit: cover;
border-radius: 8px;
margin-right: 20px;
}
.product-details {
flex-grow: 1;
}
.product-details h3 {
font-size: 18px; /* Increased font size */
margin: 0;
margin-bottom: 8px;
font-weight: bold;
}
.product-details p {
margin: 0;
margin-bottom: 5px;
color: #555;
font-size: 14px; /* Adjusted font size for details */
}
.product-actions {
position: absolute; /* Changed to absolute to position it in the corner */
top: 10px;
right: 10px;
}
.dots {
cursor: pointer;
font-size: 14px; /* Reduced size for dots */
color: #007bff;
line-height: 0; /* Centers the dots */
}
.dropdown-menu {
display: none;
position: absolute;
right: 0;
top: 30px;
background-color: #ffffff;
box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
z-index: 1;
padding: 10px;
border-radius: 8px;
min-width: 120px;
}
.dropdown-menu button {
background: #007bff; /* Stylish button background */
border: none;
color: white; /* White text */
padding: 10px; /* Padding for buttons */
width: 100%;
text-align: center; /* Center text */
border-radius: 4px; /* Rounded corners */
margin: 5px 0; /* Spacing between buttons */
cursor: pointer; /* Pointer cursor */
transition: background-color 0.3s; /* Smooth transition for hover */
}
.dropdown-menu button:hover {
background: #0056b3; /* Darker on hover */
}
/* Tag Styles */
.selected-filters {
display: flex;
flex-wrap: wrap;
margin-bottom: 15px;
}
.filter-tag {
background: #007bff;
color: white;
padding: 5px 10px;
border-radius: 4px;
margin-right: 5px;
margin-bottom: 5px;
cursor: pointer;
}
/* Responsive adjustments */
@media (max-width: 768px) {
.product {
    flex-direction: column;
    align-items: flex-start;
}
.product img {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
}
.product-actions {
    margin-left: 0;
    align-self: flex-end;
}
}
/* Popup styling */
/* Popup styling */
.popup {
display: none; /* Hidden by default */
position: fixed;
z-index: 1000;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
backdrop-filter: blur(5px); /* Slight blur effect for modern look */
}

.popup-content {
background-color: #fff; /* Clean white background */
margin: 10% auto; /* Vertical and horizontal centering */
padding: 25px;
border-radius: 12px; /* Rounded corners for smoothness */
width: 50%; /* Adjust width for responsiveness */
max-width: 600px; /* Ensure it doesn't get too large */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
position: relative; /* For close button positioning */
font-family: 'Nunito', sans-serif; /* Match font with the rest of the page */
}

.popup-grid {
display: grid;
grid-template-columns: 1fr 1fr; /* Two columns */
grid-gap: 20px; /* Increased spacing between elements for better readability */
margin-bottom: 20px;
}

.popup-grid div {
color: #333; /* Darker text for clarity */
font-weight: 600; /* Slightly bold for labels */
}

.popup-grid input {
width: 100%;
padding: 10px;
border: 1px solid #ccc; /* Border matches the rest of the page */
border-radius: 6px;
font-size: 14px; /* Consistent font size */
color: #333; /* Dark text for readability */
}

.popup-notice {
font-size: 14px;
color: #555;
text-align: center;
margin-top: 10px;
font-style: italic; /* Italicized for emphasis */
}

button {
display: block;
margin: 20px auto;
padding: 12px 30px;
background-color: #007bff; /* Primary blue color for consistency */
color: white;
border: none;
border-radius: 6px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s ease;
}

button:hover {
background-color: #0056b3; /* Darker blue on hover */
}

/* Close button */
.close {
position: absolute;
top: 15px;
right: 20px;
color: #aaa;
font-size: 24px;
font-weight: bold;
}

.close:hover,
.close:focus {
color: #000;
cursor: pointer;
}
/* Popup styling */
.popup {
display: none; /* Hidden by default, shown when 'display: block' */
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
justify-content: center;
align-items: center;
z-index: 1000; /* Ensure it's on top of other content */
}

.popup-content {
background-color: #fff;
padding: 20px;
border-radius: 8px;
width: 500px; /* Width of the popup */
max-width: 90%;
position: relative;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add some shadow */
}

.popup-grid {
display: grid;
grid-template-columns: 1fr 1fr; /* 2 columns */
gap: 10px; /* Space between grid items */
margin-bottom: 20px; /* Space below the grid */
}

.popup-grid div, /* Style for grid items */
input[type="text"] {
padding: 10px; /* Add padding */
border: 1px solid #ccc; /* Add border */
border-radius: 4px; /* Round corners */
}

input[type="text"] {
width: 100%; /* Make input full width */
}

.popup-notice {
font-size: 0.9em; /* Slightly smaller text */
color: #555; /* Gray color for notice */
}

.save-button {
background-color: #4CAF50; /* Green background */
color: white; /* White text */
border: none; /* Remove border */
padding: 10px 15px; /* Padding for button */
border-radius: 4px; /* Round corners */
cursor: pointer; /* Pointer on hover */
font-size: 1em; /* Button text size */
}

.save-button:hover {
background-color: #45a049; /* Darker green on hover */
}

.label-small {
font-size: 12px;
color: #666;
margin-bottom: 4px;
}

.label-bold {
font-weight: bold;
font-size: 16px;
margin-bottom: 16px;
}

.popup-grid {
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 10px;
}

input[type="text"] {
padding: 8px;
font-size: 14px;
width: 100%;
box-sizing: border-box;
margin-bottom: 16px;
}
.label-small {
font-size: 12px;
color: #666;
margin-bottom: 4px;
}

.label-bold {
font-weight: bold;
font-size: 16px;
margin-bottom: 16px;
}

.popup-grid {
display: grid;
grid-template-columns: 1fr 1fr; /* Two equal columns */
grid-column-gap: 20px; /* Space between columns */
grid-row-gap: 10px;
}

input[type="text"] {
padding: 8px;
font-size: 14px;
width: 100%;
box-sizing: border-box;
margin-bottom: 16px;
}
.label-small {
font-size: 12px;
color: #666;
}

.label-bold {
font-weight: bold;
font-size: 16px;
margin-bottom: 16px;
}

.popup-grid {
display: grid;
grid-template-columns: 1fr 1fr; /* Two equal columns for headings and inputs */
grid-column-gap: 20px; /* Space between columns */
grid-row-gap: 10px;
align-items: center; /* Aligns the items in the grid vertically */
}

input[type="text"] {
padding: 8px;
font-size: 14px;
width: 100%;
box-sizing: border-box;
}
.label-small {
font-size: 12px;
color: #666;
border: none; /* Ensures no borders are applied */
}

.label-bold {
font-weight: bold;
font-size: 16px;
margin-bottom: 16px;
}

.popup-grid {
display: grid;
grid-template-columns: 1fr 1fr; /* Two equal columns for headings and inputs */
grid-column-gap: 20px; /* Space between columns */
grid-row-gap: 10px;
align-items: center; /* Aligns the items in the grid vertically */
}

input[type="text"] {
padding: 8px;
font-size: 14px;
width: 100%;
box-sizing: border-box;
border: 1px solid #ccc; /* Input box styling */
border-radius: 4px;
}
.label-small {
font-size: 12px;
color: #666;
border: none;
border-color: white;  /* Ensures no border is applied */
padding: 0;    /* Optional: Adjust padding if needed */
margin: 0;     /* Optional: Adjust margin if needed */
box-shadow: none;  /* Ensures no shadow or other border effects */
}

input[type="text"] {
padding: 8px;
font-size: 14px;
width: 100%;
box-sizing: border-box;
border: 1px solid #ccc; /* Keep border for input fields */
border-radius: 4px;
}

.search-input {
padding: 5px;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 50px;
}

.btn {
font-weight: 400;
font-size: 16px;
padding: 10px 20px;
transition: all 0.3s ease-in-out;
}

/* SRP Theme */
.theme-srp .btn-primary {
background-color: #0056b3; /* SRP Primary Button Color */
border-color: #0056b3;
color: #ffffff;
}

.theme-srp .btn-primary:hover,
.theme-srp .btn-primary:focus,
.theme-srp .btn-primary.active {
background-color: #00408d; /* Darker SRP Button Color for Active and Hover */
border-color: #00408d;
}

.theme-srp .btn-outline-primary {
color: #0056b3; /* SRP Outline Button Text */
border: 2px solid #0056b3;
background-color: transparent;
}

.theme-srp .btn-outline-primary:hover,
.theme-srp .btn-outline-primary:focus,
.theme-srp .btn-outline-primary.active {
background-color: #0056b3;
color: #ffffff;
border-color: #00408d;
}

.theme-srp .btn-check:checked + .btn-outline-primary {
background-color: #00408d; /* Active SRP Toggle */
color: #ffffff;
border-color: #00408d;
}

/* GEA Theme */
.theme-gea .btn-primary {
background-color: #FFA500; /* GEA Primary Button Color */
border-color: #FFA500;
color: #ffffff;
}

.theme-gea .btn-primary:hover,
.theme-gea .btn-primary:focus,
.theme-gea .btn-primary.active {
background-color: #FF8C00; /* Darker GEA Button Color for Active and Hover */
border-color: #FF8C00;
}

.theme-gea .btn-outline-primary {
color: #FFA500; /* GEA Outline Button Text */
border: 2px solid #FFA500;
background-color: transparent;
}

.theme-gea .btn-outline-primary:hover,
.theme-gea .btn-outline-primary:focus,
.theme-gea .btn-outline-primary.active {
background-color: #FFA500;
color: #ffffff;
border-color: #FF8C00;
}

.theme-gea .btn-check:checked + .btn-outline-primary {
background-color: #FF8C00; /* Active GEA Toggle */
color: #ffffff;
border-color: #FF8C00;
}

/* Dropdown Styling */
.theme-srp .dropdown-menu {
background-color: #eef4f4; /* SRP Dropdown Background */
border-color: #20B2AA; /* SRP Dropdown Border */
color: #2F4F4F; /* SRP Text Color */
}

.theme-gea .dropdown-menu {
background-color: #f1edf4; /* GEA Dropdown Background */
border-color: #FFBF00; /* GEA Dropdown Border */
color: #191970; /* GEA Text Color */
}

.theme-srp #dropDownMenuButton {
background-color: #0056b3; /* SRP Dropdown Button */
color: #ffffff;
border-color: #00408d;
}

.theme-gea #dropDownMenuButton {
background-color: #FFA500; /* GEA Dropdown Button */
color: #ffffff;
border-color: #FF8C00;
}

.theme-srp #dropDownMenuButton:hover,
.theme-srp #dropDownMenuButton:focus {
background-color: #00408d;
color: #ffffff;
}

.theme-gea #dropDownMenuButton:hover,
.theme-gea #dropDownMenuButton:focus {
background-color: #FF8C00;
color: #ffffff;
}
/* Sidebar Link Styling */
.sidebar-link {
display: flex;
align-items: center;
padding: 10px 20px;
border-radius: 5px;
transition: all 0.3s ease-in-out;
text-decoration: none;
font-weight: 400;
font-size: 16px;
color: #495057; /* Default color for the text */
}

/* SRP Theme Sidebar Active Button */
.theme-srp .sidebar-link.active {
background-color: #0056b3; /* SRP Active Background */
color: #ffffff; /* SRP Active Text */
}

/* SRP Theme Sidebar Hover Button */
.theme-srp .sidebar-link:hover {
background-color: #eef4f4; /* SRP Hover Background */
color: #00408d; /* SRP Hover Text */
}

/* GEA Theme Sidebar Active Button */
.theme-gea .sidebar-link.active {
background-color: #FFA500; /* GEA Active Background */
color: #ffffff; /* GEA Active Text */
}

/* GEA Theme Sidebar Hover Button */
.theme-gea .sidebar-link:hover {
background-color: #FFF5E5; /* GEA Hover Background */
color: #FF8C00; /* GEA Hover Text */
}

/* Sidebar Icons */
.theme-srp .sidebar-link i {
color: #0056b3; /* SRP Icon Color */
}

.theme-gea .sidebar-link i {
color: #FFA500; /* GEA Icon Color */
}

.theme-srp .sidebar-link.active i {
color: #ffffff; /* SRP Active Icon Color */
}

.theme-gea .sidebar-link.active i {
color: #ffffff; /* GEA Active Icon Color */
}

.theme-gea .sidebar-nav ul .sidebar-item.selected>.sidebar-link, .sidebar-nav ul .sidebar-item.selected>.sidebar-link.active, .sidebar-nav ul .sidebar-item>.sidebar-link.active {
background-color: #e25010;
color: #fff;
}

.theme-srp .sidebar-nav ul .sidebar-item.selected>.sidebar-link, .sidebar-nav ul .sidebar-item.selected>.sidebar-link.active, .sidebar-nav ul .sidebar-item>.sidebar-link.active {
background-color: #2910e2;
color: #fff;
}

/* Default active sidebar item styles */
.sidebar-nav ul .sidebar-item.active > .sidebar-link {
background-color: #3498db; /* Change this color for default active items */
color: white; /* Text color when active */
}

/* Active sidebar item styles when 'srp' theme is active */
.theme-srp .sidebar-nav ul .sidebar-item.active > .sidebar-link {
background-color: #2910e2; /* Customize this color for the SRP theme */
color: white; /* Text color for SRP active items */
}

/* Active sidebar item styles when 'gea' theme is active */
.theme-gea .sidebar-nav ul .sidebar-item.active > .sidebar-link {
background-color: #e25010; /* Customize this color for the GEA theme */
color: white; /* Text color for GEA active items */
}

/* Default active item (SRP Theme) */
.left-sidebar.theme-srp .sidebar-item.active > .sidebar-link {
background-color: #2910e2; /* SRP theme active background */
color: #fff; /* SRP theme active text color */
}

/* Active item for GEA Theme */
.left-sidebar.theme-gea .sidebar-item.active > .sidebar-link {
background-color: #e25010; /* GEA theme active background */
color: #fff; /* GEA theme active text color */
}

/* General sidebar-link styles */
.sidebar-item > .sidebar-link {
background-color: transparent;
color: inherit;
transition: background-color 0.3s ease, color 0.3s ease;
}

