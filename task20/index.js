// -----------------TASK 20---------------------------
//   Static keyword : keyword that defines propertie4s or methods that belongs to a class itself rather than the objects created from that class 
//                    (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2
    }
    static getCirumference(radius){
        return 2 * this.PI * radius
    }
    static getArea(radius){
        return this.PI * radius * radius
    }

}
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCirumference(10).toFixed(2))
console.log(MathUtil.getArea(10).toFixed(2))
console.log(MathUtil.PI)