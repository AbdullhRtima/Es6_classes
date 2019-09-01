// old code ......

// class Foo {
//     constructor(who){
//         this.me = who;
//     }
//     identify(){
//         return console.log("i am " + this.me) 
//     }
// }
//  class Bar extends Foo {
//     speak(){
//         console.log(this.identify())
//     }
//  }
// // var  a1 = new Foo("abd");
// // var a2 = new Foo("enginner");

// var a3 = new Bar("abd");
// var a4 = new Bar("enginner");

// // a1.identify();
// // a2.identify();
// a3.speak();
// a4.speak();

// add more sweet 

// add super sister 

// class caution 

// 1

// var obj = {} ;

// class rt extends obj {
//     // what the hell errrrrrrrrrrrro 
        // whay i dont know hhhhhhhhhhhhhhhh kill your self 
// }

// 2 
// class far {
//     ////..... 
// }

// class besa {
//     ///.....
// }

// you cant do any thing daynamic 
// error code 
// far();
//bar.call({});


//3
// class Foo {
//     constructor(who){
//         this.me = who;
//     }
//     identify(){
//         return console.log("i am " + this.me) 
//     }
// }

// you cant do this 
// class Bar extends Foo {
//    constructor(who){
//        this.x = 1 ; // error yah mneal 
//        super(who); // super must be call before to use this 
//    }
//  }

// good one 

// class A {
//  one(){ console.log(" one : A") }
//  two(){ console.log(" two : A") }
// }

// var B = {
//     one(){ console.log(" one : B") },
//     two(){ console.log(" two : B") }
// }

// class C extends A {
//     foo (){
//         this.one();
// look here with supre and this its daynamicvly but supper key word is static 
// why طيب  اقول ليش يا معلم عشان لما بدي اجي اعمل super في الرن تايم حيموت وحيكون بطىء جدا جدا 
//         super.two();
//     }
// }

// var x = new C();

// x.foo();

// x.foo.call(B);


// error code here 

// class A {
//     //....
// }

// class B extends A {}

// B.prototype.foo = function(){
//     this.one();
//     super.two(); // errror no super inside function 
// becuse super is stacticly bound 
// };