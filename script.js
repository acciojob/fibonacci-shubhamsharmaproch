function fibonacci(num) {
 let num1=0; let num2=1; let sum=0;
	for(let i=1;i<=num;i++) {
		sum=num1+num2;
		num2=sum;
		num1=num2;
		
	}
	return sum;
}

module.exports = fibonacci;
