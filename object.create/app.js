var Person = {
    firsName : "Phi",
    lastName : "Long",
    getFullName : function () {
        return this.firsName + " " + this.lastName;
    }
};
console.log(Person);

var ps1 = Object.create(Person);
ps1.firsName = "Hoa";
ps1.lastName = "Mai";
console.log(ps1.getFullName());

