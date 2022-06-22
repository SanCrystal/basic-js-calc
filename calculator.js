//create a calculator class
class Calculator{
    add(...args){
        return args.reduce((initial, current) => initial + current);
    }
    subtract(...args){
        return args.reduce((initial, current) =>  initial - current );
    }
    divide(a,b){
        return  (b === 0)? `${a} cannot be divided by a zero value`: a / b;
    }
    multiply(...args){
        return args.reduce((initial, current) => initial * current);
    }
}
//create a new instance of the calculator class
calculator = new Calculator();

//call the add method
added = calculator.add(1,2,-3,4,5);

//call the multiplication method
mul = calculator.multiply(1,2,-3,4,5);

//call the divide method
divide = calculator.divide(4,0);
divide1 = calculator.divide(4,9);
divide2 = calculator.divide(0,9);

//call the subtract method
sub = calculator.subtract(4,5,8);
sub1 = calculator.subtract(0,4,5,-16);
//log the results
console.log(added,mul,divide,divide1,divide2,sub,sub1);