let obj = {
    fun1: function(){
        console.log("This man is called -> " + this.FullName + ", and he is " + this.Age + " old.");
    },
    fun2: function(){
        console.log("This man is called -> " + obj.FullName + ", and he is " + obj.Age + " old.");
    },
    fun3: function(){
        console.log("This man is called -> " + FullName + ", and he is " + Age + " old.");
    },
    FullName: "AKHIL BICHALA",
    Age: 23
}

obj.fun1(); // This work in both JavaScript and Java.
obj.fun2(); // This works in JavaScript but not in Java.
obj.fun3(); // This will not work in JavaScript but work in Java.

// Here "this" will store object address.

// Stage 1 ->
// Nothing will happen b/c nothing is declaration here

// Stage 2 ->
// When 15th line runs => Obj -> 10k will be created
// In fun1 -> this will direct to 10k and It will use this and will print [AKHIL BICHALA, 30] 


// In fun2 -> this will be directed to 10k but fun2 will use obj which is already present in stack and It will print [AKHIL BICHALA, 20]
// In fun3 -> If will not run b/c FullName is not defined in stack.
