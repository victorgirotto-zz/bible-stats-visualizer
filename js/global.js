// Configuration
var ANIM_DURATION = 750;
var SVG_HEIGHT = 400;
var SVG_WIDTH = 4700;
var CURRENT_RATIO = "verb";
var CURRENT_ORDER = "traditional";
var SVG_SPACE;
var CIRCLE_COLOR = {
	law : "#7a0512",
	history_old : "#be2700",
	poetry :"#d95300",
	major_profets : "#f79900",
	minor_profets : "#ffe2b3",
	gospels : "#16c1c8",
	history_new: "#49cccc",
	letters_of_paul : "#7cd7cf",
	general_letters : "#aee1d3",
	prophecy : "#e1ecd6"
};

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