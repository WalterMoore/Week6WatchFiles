var MyClass = (function () {
    function MyClass() {
        this.name = "Matt";
        this.lastName = "Landers";
        this.middleInitial = "k";
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
})();
var c = new MyClass();
console.log(c.getName());
