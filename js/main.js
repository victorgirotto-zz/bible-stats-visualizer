$(function(){

	/*****************
	 * INITIAL SETUP *
	 *****************/
	// Setting up legends
	$("#legend li").each(function(i, p){
		var curr = $(this);
		$("span", curr).css("background-color", CIRCLE_COLOR[curr.attr("id")]);
	});

	// Setting up viz space
	SVG_SPACE = d3.select("#viz")
        .append("svg:svg")
        .attr("width", SVG_WIDTH)
        .attr("height", SVG_HEIGHT);

	// Loading books
	d3.json('data/data.json', function(data){
		// Getting stats on the data
		BOOKS = data;
		calculateStats(BOOKS);

		// Setting up circle containers
	 	var g = SVG_SPACE.selectAll("g")
			.data(BOOKS)
		    .enter()
		    .append("g")
		    .attr("transform", function(d, i){
		  		return translate(d, i);
		  	});

		// Creating circles
		g.append("svg:circle")
			.style("fill", function(d){
				return CIRCLE_COLOR[d.category];
			})
			.transition()
			.duration(ANIM_DURATION)
	    	.delay(function(d, i) { 
	    		delay(i); 
	    	})
		    .attr("r", radiusByVerb);

		// Creating labels
		g.append("text")
			.attr("dx", -12)
			.attr("dy", 4)
			// .attr("style", "fill:white;fill-opacity:1;stroke:black;stroke-width:3px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.5;")
		    .text(function(d){
		    	return d.bookName;
		    })
	});
	

	/*******************
	 * EVENT LISTENERS *
	 *******************/

	// Radius
	$("a.radius").click(function(){
		toggleActiveClass(this, 'radius');
		CURRENT_RATIO = $(this).attr('id');
		SVG_SPACE.selectAll("circle")
			.transition()
		    .duration(ANIM_DURATION)
		    .delay(function(d, i) { 
		    	delay(i); 
		    })
			.attr("r", function(d){
				return changeRadius(d);	
			});
	});

	// Reordering
	$("a.order").click(function(){
		toggleActiveClass(this, 'order');
		CURRENT_ORDER = $(this).attr('id');
		//
		SVG_SPACE.selectAll("g")
			.sort(function(a,b){
				return sortCircles(a, b);
			})
			.transition()
		    .duration(ANIM_DURATION)
		    .delay(function(d, i) { 
		    	delay(i); 
		    })
			.attr("transform", function(d, i){
				return translate(d, i);
			});
	});

});