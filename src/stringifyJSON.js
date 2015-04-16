// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = "";

	// Adds string to result if obj is a number, string, or boolean
	if (typeof obj === "number" || 
		typeof obj === "string" ||
		typeof obj === "boolean") {
		result += obj.toString();
	}

	// If obj is an array
    else if (Array.isArray(obj)) {

    }


	return result;
};