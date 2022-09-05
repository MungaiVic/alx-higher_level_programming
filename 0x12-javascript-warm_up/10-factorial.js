#!/usr/bin/node
const X = process.argv[2];
function factorial(X) {
	if (isNaN(X) || X === 1) {
		return 1;
	} else {
		return X * factorial(X - 1);
	}
}
console.log(factorial(parseInt(X)));
