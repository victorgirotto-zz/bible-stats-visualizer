/*****************
 * AUX FUNCTIONS *
 *****************/
function toggleActiveClass(target, elementClass){
	$("." + elementClass + ".active").toggleClass('active');
	$(target).toggleClass('active');
}

function delay(i){
	return i * 10;
}

function calculateStats(books){
	for(var i = 0; i < books.length; i++){
		var book = books[i];
		books[i].i = i;
		// Max
		if(book.wordsNum > STATS.max) STATS.max = book.wordsNum;
		if(book.verbRatio > STATS.maxVerb) STATS.maxVerb = book.verbRatio;
		if(book.nounRatio > STATS.maxNoun) STATS.maxNoun = book.nounRatio;
		if(book.adjectiveRatio > STATS.maxAdj) STATS.maxAdj = book.adjectiveRatio;
		// Min
		if(book.wordsNum < STATS.min) STATS.min = book.wordsNum;
		if(book.verbRatio < STATS.minVerb) STATS.minVerb = book.verbRatio;
		if(book.nounRatio < STATS.minNoun) STATS.minNoun = book.nounRatio;
		if(book.adjectiveRatio < STATS.minAdj) STATS.minAdj = book.adjectiveRatio;
	}
}


function changeRadius(d){
	switch(CURRENT_RATIO) {
		case "verb":
			return radiusByVerb(d);
		case "noun":
			return radiusByNoun(d);
		default:
			return radiusByAdj(d);
	}
}

function sortCircles(a, b){
	if(CURRENT_ORDER === "traditional"){
		return a.i - b.i;
	} else {
		switch(CURRENT_RATIO){
			case "verb":
				return b.verbRatio - a.verbRatio;	
			case "noun":
				return b.nounRatio - a.nounRatio;	
			default:
				return b.adjectiveRatio - a.adjectiveRatio;	
		}
	}
}

function translate(d, i){
	x = i * 70 + 110;
	y = 50 + (SVG_HEIGHT - 100) - ((SVG_HEIGHT - 100) * (d.wordsNum-STATS.min) / STATS.max);
	return "translate(" + x + "," + y + ")";
}

function radiusBy(ratio, min, max){
	return 5 + 60 * (ratio-min) / max; // These min and max are local
}

function radiusByVerb(d){
	return radiusBy(d.verbRatio, STATS.minVerb, STATS.maxVerb);
}

function radiusByNoun(d){
	return radiusBy(d.nounRatio, STATS.minNoun, STATS.maxNoun);
}

function radiusByAdj(d){
	return radiusBy(d.adjectiveRatio, STATS.minAdj, STATS.maxAdj);
}