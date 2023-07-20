function fibonacci(num) {
 let num1=0; let num2=1; let sum=0;
	for(let i=0;i<num;i++) {
		sum=num1+num2;
		let temp=num1;
		num1=num2;
		num2=temp;
	}
	return sum;
}

module.exports = fibonacci;
