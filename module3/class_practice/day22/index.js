//external file contain reusable code
//imported into other js file
//can contain variable,classes,function ....
//introduce as a part of ecmascript 2015 update es6
import {pi,getCircumference,getCircleArea,getVolume} from './mathfun.js';
console.log(pi);
const circum=getCircumference(10);
console.log(`${circum}`)
console.log(getVolume(10))