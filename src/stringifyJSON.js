// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = "";

	// Adds string to result if obj is a string
	if (typeof obj === "string") {
		result += "\"" + obj + "\"";
	}

	// Adds string to result if obj is a number or boolean
	else if (typeof obj === "number" || typeof obj === "boolean") {
		result += obj.toString();
	}

	// If obj is an array, run stringifyJSON on all elements in array
    else if (Array.isArray(obj)) {
    	result += "[";

        _.each(obj, function(element) {
        	result += stringifyJSON(element) + ",";
        });

        if (result.charAt(result.length - 1) === ",") {
        	result = result.substring(0, result.length - 1);
        }
        result += "]";
    }

    // If obj is an object (non-array), run stringifyJSON on all
    // key pairs in object
    else if (typeof obj === "object") {
    	result += "{";

    	_.each(obj, function(value, key) {
    		result += stringifyJSON(key) + ":" + stringifyJSON(value) + ",";
    	});

    	result += "}";
    }

	return result;
};