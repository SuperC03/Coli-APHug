export default function groupInputs(input, quantity) {
	var output = [];
	var increment = 0;
	if (input.length > quantity) {
		for (var i = 0; i < Math.floor(input.length / quantity); i++) {
			output.push([]);
			for (var j = 0; j < quantity; j++) {
				output[increment].push(input[j + increment * 5]);
			}
			increment++;
		}
		if (input.length % quantity != 0) {
			output.push([]);
			for (var k = 0; k < input.length % 5; k++) {
				output[increment].push(input[input.length - (input.length % 5) + k]);
			}
		}
	} else {
		output.push(input);
	}
	return output;
}
