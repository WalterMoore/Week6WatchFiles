interface IMy {
	name: string;
	getName(): string;
}

class MyClass implements IMy{
	name= "Matt";
	getName(): string{
		return this.name;
	}
	lastName= "Landers";
	middleInitial = "n";
}
var c = new MyClass();
console.log(c.getName());