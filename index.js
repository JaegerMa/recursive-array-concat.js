'use strict';

function concat()
{
	var arrArguments = Array.from(arguments);
	if(!arrArguments.length)
		return [];

	var concatenated = toArray(arrArguments);
	return concatenated;
}

function toArray(input)
{
	switch(typeof(input))
	{
		case 'object':
			if(!Array.isArray(input))
				return [input];
			
			var resolved = [];
			input.forEach((e) =>
			{
				var arr = toArray(e);
				if(arr.length)
					resolved = resolved.concat(arr);
			});
			return resolved;
		default:
			return [input];
	}
}

module.exports = concat;