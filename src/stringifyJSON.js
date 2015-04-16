// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = "";

	// Function that removes last character if it is a comma
	var removeTrailingComma = function(str) {
		if (str.charAt(str.length - 1) === ",") {
        	str = str.substring(0, str.length - 1);
        }
        return str;
	};

	// Adds "null" to result if obj is null
	if (obj === null) {
		result += "null";
	}

	// Adds string to result if obj is a string
	else if (typeof obj === "string") {
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

        result = removeTrailingComma(result);
        result += "]";
    }

    // If obj is an object (non-array), run stringifyJSON on all
    // key pairs in object
    else if (typeof obj === "object") {
    	result += "{";

    	_.each(obj, function(value, key) {
    		if (typeof value === "function" || value === undefined) {
    			return;
    		}
    		result += stringifyJSON(key) + ":" + stringifyJSON(value) + ",";
    	});

    	result = removeTrailingComma(result);
    	result += "}";
    }

    else {
    	return undefined;
    }

	return result;
};