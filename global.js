// Configuration
var ANIM_DURATION = 750;
var SVG_HEIGHT = 400;
var SVG_WIDTH = 4700;
var CIRCLE_COLOR = "#188f7c";
var CURRENT_RATIO = "verb";
var CURRENT_ORDER = "traditional";
var SVG_SPACE;

// Data
var BOOKS;			
var STATS = {
	max     : -1,
	maxVerb : -1,
	maxNoun : -1,
	maxAdj  : -1,
	min     : Number.MAX_VALUE,
	minVerb : Number.MAX_VALUE,
	minNoun : Number.MAX_VALUE,
	minAdj  : Number.MAX_VALUE,
}