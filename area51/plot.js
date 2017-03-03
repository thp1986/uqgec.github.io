

  // -------------------------- below is the function to creat grid lines ---------------
  // gridlines in x axis function
  function make_x_gridlines(x_ax) {		
      return d3.axisBottom(x_ax)
          .ticks(5)
  }
  
  // gridlines in y axis function
  function make_y_gridlines(y_ax) {		
      return d3.axisLeft(y_ax)
          .ticks(5)
  }
  // -------------------------- above is the function to creat grid lines ---------------
  
  
  // below is needed to initializating the picture
  
  // Set the dimensions of the canvas / graph
  // right determins the space for writting things
  var margin = {top: 40, right: 100, bottom: 100, left: 110},  
      width = 1300 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
  
  
  var key_mo=["mo_7","mo_8","mo_9","mo_10"];
  var key_temp=["suht_28e5_begin","suht_28e5_peak","suht_28e5_end","suht_2847_begin","suht_2847_peak","suht_2847_end","saltrh_2_tp","saltrh_3_tp"];
  
  
  var act_mo=[];
  var act_temp=[];
  
  
  var legendSpace_mo = width/ key_mo.length
  var legendSpace_temp = width/ key_temp.length
  
  var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
  
  //tenHourslater = d3.time.hour.offset(d, 10)
  
  // Set the ranges
  var x_mo = d3.scaleTime().range([0, width]);
  var y_mo = d3.scaleLinear().range([height, 0]);
  var x_temp = d3.scaleTime().range([0, width]);
  var y_temp = d3.scaleLinear().range([height, 0]);
  
  
  
  
  // ---------Define the line for moisture
  var valueline_mo=[];
  key_mo.forEach(function(d,i) {
      valueline_mo[i]=d3.line()
          .x(function(d) { return x_mo(d.timestamp); })
          .y(function(d) { return y_mo(d[key_mo[i]]); });
  })
  
  //// Define the line for moisture
  var valueline_temp=[];
  key_temp.forEach(function(d,i) {
      valueline_temp[i]=d3.line()
          .x(function(d) { return x_temp(d.timestamp); })
          .y(function(d) { return y_temp(d[key_temp[i]]); });
  })
  
  // ----------------------draw picture for the entire setup ---------------------
  var svg_pic = d3.select("body")
       .append("svg")
       .attr("width", 1280)
       .attr("height", 1124)
       .style("border", "0px solid black");
  
  var text = svg_pic.selectAll("text")
       .data([0])
       .enter()
       .append("text")
       .text("Experimental Setup")
       .style("font-size", "25px")
       .attr("x", "0")
       .attr("y", "20");
  
   var imgs = svg_pic.selectAll("image").data([0]);
       imgs.enter()
       .append("svg:image")
       .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/photo_geo_1st/setup.PNG")
       .attr("x", "00")
       .attr("y", "30")
       .attr("width", "1280")
       .attr("height", "1024");
  
  
  // ----------------------below is to draw picture for the entire setup ---------------------
  var svg_pic_realtime = d3.select("body")
       .append("svg")
       .attr("width", 1280)
       .attr("height", 1124)
       .style("border", "0px solid black");
  
  var text = svg_pic_realtime.selectAll("text")
       .data([0])
       .enter()
       .append("text")
       .text("Real-time snapshot of tailings surface")
       .style("font-size", "25px")
       .attr("x", "0")
       .attr("y", "20");
  
   var imgs = svg_pic_realtime.selectAll("image").data([0]);
       imgs.enter()
       .append("svg:image")
       .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/photo_geo_1st/2017_02_09_12_58_geo_1st.jpg")
       .attr("x", "00")
       .attr("y", "50")
       .attr("width", "1280")
       .attr("height", "924");
  
  	   svg_pic_realtime.append("text")
                  .text("Real-time results")
                  .style("font-size", "25px")
                  .attr("x", "0")
                  .attr("y", "1100");
  // ----------------------above is to draw picture for the entire setup ---------------------
  
  // --------------Adds the svg canvas  -------------------
  //  2017-03-02 12:08  this determines the sequence of plotting appreas.
  var svg_scale = d3.select("body")
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
  var svg_mo = d3.select("body")
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
  
  var svg_temp = d3.select("body")
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
  
  // ---------------------below is data defination for the delta temp --------------------------
  
  var key_del_temp=["del_temp_28e5_heating","del_temp_28e5_cooling","del_temp_2847_heating","del_temp_2847_cooling"]; 
  var act_del_temp=[];
  var legendSpace_del_temp = width/ key_del_temp.length;
  
  var x_del_temp = d3.scaleTime().range([0, width]);
  var y_del_temp = d3.scaleLinear().range([height, 0]);
  
  //// Define the line for moisture
  var valueline_del_temp=[];
  key_del_temp.forEach(function(d,i) {
      valueline_del_temp[i]=d3.line()
          .x(function(d) { return x_del_temp(d.timestamp); })
          .y(function(d) { return y_del_temp(d[key_del_temp[i]]); });
  })
  
  
  var svg_del_temp = d3.select("body")
      .append("svg")
          .attr("width", width + margin.left + margin.right) .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
  
  // ---------------------above is data defination for the delta temperature  --------------------------
  
  // ---------------------below is data defination for the relative humidity sensor --------------------------
  
  var key_rh=["saltrh_2_rh","saltrh_3_rh"];
  
  var act_rh=[];
  var legendSpace_rh = width/ key_rh.length;
  
  var x_rh = d3.scaleTime().range([0, width]);
  var y_rh = d3.scaleLinear().range([height, 0]);
  
  //// Define the line for moisture
  var valueline_rh=[];
  key_rh.forEach(function(d,i) {
      valueline_rh[i]=d3.line()
          .x(function(d) { return x_rh(d.timestamp); })
          .y(function(d) { return y_rh(d[key_rh[i]]); });
  })
  
  
  var svg_rh = d3.select("body")
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
  
  // ---------------------above is data defination for the relative humidity sensor --------------------------
  
  
  // ---------------------below is data defination for load cell -----------------------------
  
  var key_scale=["tas606","te"];
  var act_scale=[];
  var legendSpace_scale = width/ key_scale.length
  
  var format_scale = d3.timeParse('"%Y-%b-%d %H:%M:%S"')
  
  var float_to_string=String.valueOf()
  
  // Set the ranges
  var x_scale = d3.scaleTime().range([0, width]);
  var y_scale = d3.scaleLinear().range([height, 0]);
  
  //// Define the line for scaleisture
  var valueline_scale=[];
  key_scale.forEach(function(d,i) {
      valueline_scale[i]=d3.line()
          .x(function(d) { return x_scale(d.measure_local_time); })
          .y(function(d) { return y_scale(d[key_scale[i]]); });
  })
  
  
  // ---------------------above is data defination for load cell -----------------------------
  
  
  
  
  // ------------------------ below is to obtain the load cell data ------------------------
      var data_scale;
      var url_scale =   "https://data.sparkfun.com/output/KJo3Nx8grJcMDpEWQOXg.json"
      d3.json(url_scale,  function (error,json) {
          if (error) return console.warn(error);
          json.forEach(function(d) {
              d.measure_local_time = format_scale(d.measure_local_time);
              d.tas606=d.tas606/16.73;
              d.te=(d.te-89)/0.00597;
          });
  	 
      	data_scale=json;
      	console.log(data_scale)
          x_scale.domain(d3.extent(data_scale, function(d) { return d.measure_local_time; }));
          y_scale.domain([10000,14200]);
  // ------------------------ above is to obtain the load cell data ------------------------
 



  // --------------------------below is for the plotting of the load cell sensor -----------------------
  
          var color_scale = d3.scaleOrdinal(d3.schemeCategory10);
  
          key_scale.forEach(function(d,i) {
              svg_scale.append("path")
                  .attr("class", "line")
                  .style("stroke", color_scale(key_scale[i]))
                  .attr("d", valueline_scale[i](data_scale))
                  .attr("id", 'tag'+key_scale[i].replace(/\s+/g, '')); // assign id **
  
              svg_scale.append("text")
                  .attr("x", (legendSpace_scale/2)+i*legendSpace_scale)  // space legend
                  .attr("y", -20 )
                  //.attr("y", height + (margin.bottom/2)+ 5)
                  .attr("class", "legend")    // style the legend
                  .style("fill", color_scale(key_scale[i]))
                  .on("click", function(){                  
                            // Determine if current line is visible 
                            var active   = act_scale[i] ? false : true,  
                            newOpacity = active ? 0 : 1;        
                            // Hide or show the elements based on the ID
                            d3.select("#tag"+key_scale[i].replace(/\s+/g, '')) 
                                .transition().duration(100)  
                                .style("opacity", newOpacity);
                            // Update whether or not the elements are active
                            act_scale[i] = active;        
                            })                             
                  .text(key_scale[i]); 
           }); // key_scale.foreach
  
           // Add the X Axis
           svg_scale.append("g")
               .attr("class", "x axis")
               .attr("transform", "translate(0," + height + ")")
               .call(d3.axisBottom(x_scale));
           svg_scale.append("text")             
               .attr("transform",
                     "translate(" + (width/2) + " ," + 
                                    (height + margin.top + 10) + ")")
               .style("text-anchor", "middle")
               .style("font-size", "18px")
               .text("TIME");
  
           // Add the Y Axis
           svg_scale.append("g")
               .attr("class", "y axis")
               .call(d3.axisLeft(y_scale));
           // text label for the y axis
            svg_scale.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x",0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-size", "18px")
                .text("LOAD CELL READING (G)");    
  
           // draw grid lines
           svg_scale.append("g")         
               .attr("class", "grid")
               .attr("transform", "translate(0," + height + ")")
               .call(make_x_gridlines(x_scale)
                   .tickSize(-height, 0, 0)
                   .tickFormat("")
               )
  
           svg_scale.append("g")         
               .attr("class", "grid")
               .call(make_y_gridlines(y_scale)
                   .tickSize(-width, 0, 0)
                   .tickFormat("")
               )
  // ---------------------------------  above is plotting of scale results --------------------
  })   // json for load cell
 



  // ---------------------below is data defination for commercial balance -----------------------------
  
      var key_balance=["commercial"];
      var act_balance=[];
      var legendSpace_balance = width/ key_balance.length
      
      var format_balance = d3.timeParse('"%Y-%b-%d %H:%M:%S"')
      
      var float_to_string=String.valueOf()
      
      // Set the ranges
      var x_balance = d3.scaleTime().range([0, width]);
      var y_balance = d3.scaleLinear().range([height, 0]);
      
      //// Define the line for scaleisture
      var valueline_balance=[];
      key_balance.forEach(function(d,i) {
          valueline_balance[i]=d3.line()
              .x(function(d) { return x_balance(d.measure_local_time); })
              .y(function(d) { return y_balance(d[key_balance[i]]); });
      })
      
      // Adds the svg canvas
      var svg_balance = d3.select("body")
          .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
          .append("g")
              .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
  
  // ---------------------above is data defination for commercial balance -----------------------------
  // ------------------------ below is to obtain the ohaus balance data ------------------------
      var key_balance=["commercial"];

      var act_balance=[];
      var format_balance = d3.timeParse('"%Y-%b-%d %H:%M:%S"')

      var data_balance;
      var url_balance =   "https://data.sparkfun.com/output/7Jlzv3bb9vhZ4LLd9Waj.json"
      d3.json(url_balance,  function (error,json) {
          if (error) return console.warn(error);
          json.forEach(function(d) {
              d.measure_local_time = format_balance(d.measure_local_time);
              d.commercial=d.commercial;
          });
  	 
      	data_balance=json;
      	console.log(data_balance)
	x_balance_bound=d3.extent(data_balance, function(d) { return d.measure_local_time; });
	x_balance_bound[0] = d3.timeDay.offset(x_balance_bound[0],-15)
	x_balance.domain(x_balance_bound)
        //x_balance.domain(d3.extent(data_balance, function(d) { return d.measure_local_time; }));
        //2017-03-02 11:39 some thoughts here:
	// the reason data_scale is not working is because
        y_balance.domain([10000,14200]);
  // ------------------------ above is to obtain the balance data ------------------------

          key_balance.forEach(function(d,i) {
              svg_scale.append("path")
                  .attr("class", "line")
                  //.style("stroke", color_scale(key_balance[i]))
                  .attr("d", valueline_balance[i](data_balance))
                  .attr("id", 'tag'+key_balance[i].replace(/\s+/g, '')); // assign id **


           }); // key_balance.foreach
//           // Add the X Axis
//           svg_balance.append("g")
//               .attr("class", "x axis")
//               .attr("transform", "translate(0," + height + ")")
//               .call(d3.axisBottom(x_balance));
//           svg_balance.append("text")             
//               .attr("transform",
//                     "translate(" + (width/2) + " ," + 
//                                    (height + margin.top + 10) + ")")
//               .style("text-anchor", "middle")
//               .style("font-size", "18px")
//               .text("TIME");
//  
//           // Add the Y Axis
//           svg_balance.append("g")
//               .attr("class", "y axis")
//               .call(d3.axisLeft(y_balance));
  })   // json for balance
  
  
  
  
  
  
  // ----------------------below is to obtain the data from the sensors------------------------------
  
      var data1;
      var url =   "https://data.sparkfun.com/output/9J2rX3QZ94s5RJ9LjrbN.json"
      d3.json(url,  function (error,json) {
          //if (error) return console.warn(error);
          if (error) throw error;
          json.forEach(function(d) {
              //d.timestamp = format(d.timestamp);
              d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/18796291/d3-get-current-time-and-subtract-by-2-hours
	      d.del_temp_28e5_heating=d.suht_28e5_peak-d.suht_28e5_begin;
	      d.del_temp_28e5_cooling=d.suht_28e5_peak-d.suht_28e5_end;
	      d.del_temp_2847_heating=d.suht_2847_peak-d.suht_2847_begin;
	      d.del_temp_2847_cooling=d.suht_2847_peak-d.suht_2847_end;
              //dataset.date = parseDate(d.date);
              //dataset.close = +d.close;
  	    //if (d.saltrh_3_tp == "NaN") {d.saltrh_3_tp=NaN}
  	    //if (d.saltrh_3_rh == "NaN") {d.saltrh_3_rh=NaN}
          });
  	 
      	data1=json;
      	console.log(data1)
   //       console.log(active1)
  //  http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
  //   remove all lines that has NaN
      data1=data1.filter(function(el){
      return el.saltrh_3_rh != "NaN";
      });
  
      console.log(JSON.stringify(data1, null, ' '));
  
  // ----------------------above is to obtain the data ------------------------------
  
  
  
  
  
  //-------------------below are for moisture sensor plot------------------- 
          x_mo.domain(d3.extent(data1, function(d) { return d.timestamp; }));
         //y_mo.domain([200, d3.max(data1, function(d) { return d.mo_10; })]);
          y_mo.domain([300, 550]);
  
          //var color = d3.scaleOrdinal(d3.schemeCategory10);
          var color = d3.scaleOrdinal(d3.schemeCategory20);
  
          key_mo.forEach(function(d,i) {
              svg_mo.append("path")
                  .attr("class", "line")
  //                .attr("stroke-width", 20)  
                  .style("stroke", color(key_mo[i]))
                  .attr("d", valueline_mo[i](data1))
                  .attr("id", 'tag'+key_mo[i].replace(/\s+/g, '')); // assign id **
  
              svg_mo.append("text")
                  .attr("x", (legendSpace_mo/2)+i*legendSpace_mo)  // space legend
                  .attr("y", -20 )
                  //.attr("y", height + (margin.bottom/2)+ 5)
                  .attr("class", "legend")    // style the legend
                  .style("fill", color(key_mo[i]))
                  .on("click", function(){                     // ************
                            // Determine if current line is visible 
                            var active   = act_mo[i] ? false : true,  // ************ 
                            newOpacity = active ? 0 : 1;             // ************
                            // Hide or show the elements based on the ID
                            d3.select("#tag"+key_mo[i].replace(/\s+/g, '')) // *********
                                .transition().duration(100)          // ************
                                .style("opacity", newOpacity);       // ************
                            // Update whether or not the elements are active
                            act_mo[i] = active;                       // ************
                            })                                       // ************
                  .text(key_mo[i]); 
           });
  
           // Add the X Axis
           svg_mo.append("g")
               .attr("class", "x axis")
               .attr("transform", "translate(0," + height + ")")
               .call(d3.axisBottom(x_mo));
           // text label for the x axis
           svg_mo.append("text")             
               .attr("transform",
                     "translate(" + (width/2) + " ," + 
                                    (height + margin.top + 10) + ")")
               .style("text-anchor", "middle")
               .style("font-size", "18px")
               .text("TIME");
  
           // Add the Y Axis
           svg_mo.append("g")
               .attr("class", "y axis")
               .call(d3.axisLeft(y_mo));
  
           // text label for the y axis
            svg_mo.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x",0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-size", "18px")
                .text("MOISTURE SENSOR READING");    
           // draw grid lines
           svg_mo.append("g")         
               .attr("class", "grid")
               .attr("transform", "translate(0," + height + ")")
               .call(make_x_gridlines(x_mo)
                   .tickSize(-height, 0, 0)
                   .tickFormat("")
               )
           svg_mo.append("g")         
               .attr("class", "grid")
               .call(make_y_gridlines(y_mo)
                   .tickSize(-width, 0, 0)
                   .tickFormat("")
               )
  //---------------------------- below are to plot temperature sensors ----------------------
          //x_temp.domain(d3.extent(data1, function(d) { return d.timestamp; }));
          x_temp.domain(d3.extent(data1, function(d) { return d.timestamp; }));
         // y_temp.domain([0, d3.max(data1, function(d) { return d.tp1; })]);
          //y_temp.domain([20, d3.max(data1, function(d) { return d.suht_2847_begin; })]);
          y_temp.domain([22, 65]);
          
          var color_temp = d3.scaleOrdinal(d3.schemeCategory10);
          key_temp.forEach(function(d,i) {
              svg_temp.append("path")
                  .attr("class", "line")
                  .style("stroke", color_temp(key_temp[i]))
                  .attr("d", valueline_temp[i](data1))
                  .attr("id", 'tag'+key_temp[i].replace(/\s+/g, '')); // assign id **
  
              svg_temp.append("text")
                  .attr("x", (legendSpace_temp/2)+i*legendSpace_temp)  // space legend
                  .attr("y", -20 )
                  //.attr("y", height + (margin.bottom/2)+ 5)
                  .attr("class", "legend")    // style the legend
                  .style("fill", color_temp(key_temp[i]))
                  .on("click", function(){                     // ************
                            // Determine if current line is visible 
                            var active   = act_temp[i] ? false : true,  // ************ 
                            newOpacity = active ? 0 : 1;             // ************
                            // Hide or show the elements based on the ID
                            d3.select("#tag"+key_temp[i].replace(/\s+/g, '')) // *********
                                .transition().duration(100)          // ************
                                .style("opacity", newOpacity);       // ************
                            // Update whether or not the elements are active
                            act_temp[i] = active;                       // ************
                            })                                       // ************
                  .text(key_temp[i]); 
           });
  
           // Add the X Axis
           svg_temp.append("g")
               .attr("class", "x axis")
               .attr("transform", "translate(0," + height + ")")
               .call(d3.axisBottom(x_temp));
  
  //         // Add the Y Axis
           svg_temp.append("g")
               .attr("class", "y axis")
               .call(d3.axisLeft(y_temp));
           
  
             // text label for the y axis
            svg_temp.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x",0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-size", "18px")
                .text("TEMPERATURE (CELSIUS)");    
  
           // text label for the x axis
           svg_temp.append("text")             
               .attr("transform",
                     "translate(" + (width/2) + " ," + 
                                    (height + margin.top + 10) + ")")
               .style("text-anchor", "middle")
               .style("font-size", "20px")
               .text("TIME");
  
           // draw grid lines
           svg_temp.append("g")         
               .attr("class", "grid")
               .attr("transform", "translate(0," + height + ")")
               .call(make_x_gridlines(x_temp)
                   .tickSize(-height, 0, 0)
                   .tickFormat("")
               )
           svg_temp.append("g")         
               .attr("class", "grid")
               .call(make_y_gridlines(y_temp)
                   .tickSize(-width, 0, 0)
                   .tickFormat("")
               )
  //---------------------------- below are for delta temperature ----------------------
          x_del_temp.domain(d3.extent(data1, function(d) { return d.timestamp; }));
          y_del_temp.domain([0, 30]);
          
          var color_del_temp = d3.scaleOrdinal(d3.schemeCategory10);
          key_del_temp.forEach(function(d,i) {
              svg_del_temp.append("path")
                  .attr("class", "line")
                  .style("stroke", color_del_temp(key_del_temp[i]))
                  .attr("d", valueline_del_temp[i](data1))
                  .attr("id", 'tag'+key_del_temp[i].replace(/\s+/g, '')); // assign id **
  
              svg_del_temp.append("text")
                  .attr("x", (legendSpace_del_temp/2)+i*legendSpace_del_temp)  // space legend
                  .attr("y", -20 )
//                  .attr("y", height + (margin.bottom/2)+ 45)
                  .attr("class", "legend")    // style the legend
                  .style("fill", color_del_temp(key_del_temp[i]))
                  .on("click", function(){                     // ************
                            // Determine if current line is visible 
                            var active   = act_del_temp[i] ? false : true,  // ************ 
                            newOpacity = active ? 0 : 1;             // ************
                            // Hide or show the elements based on the ID
                            d3.select("#tag"+key_del_temp[i].replace(/\s+/g, '')) // *********
                                .transition().duration(100)          // ************
                                .style("opacity", newOpacity);       // ************
                            // Update whether or not the elements are active
                            act_del_temp[i] = active;                       // ************
                            })                                       // ************
                  .text(key_del_temp[i]); 
           });
  
           // Add the X Axis
           svg_del_temp.append("g")
               .attr("class", "x axis")
               .attr("transform", "translate(0," + height + ")")
               .call(d3.axisBottom(x_del_temp));
  
  
           // text label for the x axis
           svg_del_temp.append("text")             
               .attr("transform",
                     "translate(" + (width/2) + " ," + 
                                    (height + margin.top + 40) + ")") // location of x axis
               .style("text-anchor", "middle")
               .style("font-size", "20px")
               .text("TIME");
  
           // Add the Y Axis
           svg_del_temp.append("g")
               .attr("class", "y axis")
               .call(d3.axisLeft(y_del_temp));
  
           // text label for the y axis
            svg_del_temp.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x",0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-size", "18px")
                .text("TEMPERATURE DIFFERENCE (CELSIUS)");    

           // draw grid lines
           svg_del_temp.append("g")         
               .attr("class", "grid")
               .attr("transform", "translate(0," + height + ")")
               .call(make_x_gridlines(x_del_temp)
                   .tickSize(-height, 0, 0)
                   .tickFormat("")
               )
           svg_del_temp.append("g")         
               .attr("class", "grid")
               .call(make_y_gridlines(y_del_temp)
                   .tickSize(-width, 0, 0)
                   .tickFormat("")
               )
  
  // --------------------------above is for delta temperature -----------------------

  //---------------------------- below are for humidity sensor ----------------------
          x_rh.domain(d3.extent(data1, function(d) { return d.timestamp; }));
          y_rh.domain([45, 105]);
          
          var color_rh = d3.scaleOrdinal(d3.schemeCategory10);
          key_rh.forEach(function(d,i) {
              svg_rh.append("path")
                  .attr("class", "line")
                  .style("stroke", color_rh(key_rh[i]))
                  .attr("d", valueline_rh[i](data1))
                  .attr("id", 'tag'+key_rh[i].replace(/\s+/g, '')); // assign id **
  
              svg_rh.append("text")
                  .attr("x", (legendSpace_rh/2)+i*legendSpace_rh)  // space legend
                  .attr("y", -20 )
//                  .attr("y", height + (margin.bottom/2)+ 45)
                  .attr("class", "legend")    // style the legend
                  .style("fill", color_rh(key_rh[i]))
                  .on("click", function(){                     // ************
                            // Determine if current line is visible 
                            var active   = act_rh[i] ? false : true,  // ************ 
                            newOpacity = active ? 0 : 1;             // ************
                            // Hide or show the elements based on the ID
                            d3.select("#tag"+key_rh[i].replace(/\s+/g, '')) // *********
                                .transition().duration(100)          // ************
                                .style("opacity", newOpacity);       // ************
                            // Update whether or not the elements are active
                            act_rh[i] = active;                       // ************
                            })                                       // ************
                  .text(key_rh[i]); 
           });
  
           // Add the X Axis
           svg_rh.append("g")
               .attr("class", "x axis")
               .attr("transform", "translate(0," + height + ")")
               .call(d3.axisBottom(x_rh));
  
  
           // text label for the x axis
           svg_rh.append("text")             
               .attr("transform",
                     "translate(" + (width/2) + " ," + 
                                    (height + margin.top + 40) + ")") // location of x axis
               .style("text-anchor", "middle")
               .style("font-size", "20px")
               .text("TIME");
  
           // Add the Y Axis
           svg_rh.append("g")
               .attr("class", "y axis")
               .call(d3.axisLeft(y_rh));
  
           // text label for the y axis
            svg_rh.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x",0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-size", "18px")
                .text("RELATIVE HUMIDITY (PERCENT)");    

           // draw grid lines
           svg_rh.append("g")         
               .attr("class", "grid")
               .attr("transform", "translate(0," + height + ")")
               .call(make_x_gridlines(x_rh)
                   .tickSize(-height, 0, 0)
                   .tickFormat("")
               )
           svg_rh.append("g")         
               .attr("class", "grid")
               .call(make_y_gridlines(y_rh)
                   .tickSize(-width, 0, 0)
                   .tickFormat("")
               )
  
  // --------------------------above is for relative humidity sensor -----------------------
  })  // json
  

 
  
  // -----------------------below is to draw gec logo -------------------
  var width_gec = 1250,
      height_gec = 100;
  
  var svg_gec = d3.select("body").append("svg")
      .attr("width", width_gec)
      .attr("height", height_gec);
  
  var g_gec = svg_gec.append("g");
  
  var img = g_gec.append("svg:image")
      .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/photo_geo_1st/gec.PNG")
      .attr("width", 1250)
      .attr("height", 100)
      .attr("x", 0)
      .attr("y",0);
  // -----------------------above is to draw gec logo------------------
  
  
  
