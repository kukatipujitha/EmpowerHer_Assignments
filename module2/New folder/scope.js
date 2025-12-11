let z=66;
function fun1(){
    let x=90;
    function fun2(){
        var y=90;
    }
    fun2();
    console.log(x+y+z);
}
fun1();