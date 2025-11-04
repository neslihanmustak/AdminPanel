const e = require("express");
const CustomError = require("./Error");

//lib adında bir klasör oluşturduk ve içine Response.js dosyasını ekledik.
class Response{

    constructor(){ }
    static successResponse(data,code=200){
        return {
            code,
            data
        }
    }

    static errorResponse(error){
        if(error instanceof CustomError){
        return {
            code:error.code,
            error:{
                message: error.message,
                description: error.description
            }
        }
         }
            return {
            code: Enum.HTTP_CODES.INT_SERVER_ERROR,
            error:{
                message: "unknown_error",
                description: error.message
            }
        }
    //normalde oop bir classın içindeki fieldlara attributelara methodlara ulaşmak için bir nesne oluşturmak gerekliydi.
    //ama static ile tanımlanırsa class ismi ile direk ulaşılabilir.
}
}
module.exports = Response; //import edildiğinde class olarak gelir.

//module.exports = new Response(); //import edilebilir hale getirmek için bunu kullanılır.
//bu şekilde yapıldığında instnace oluşturulmuş olur ve her import edildiğinde aynı instance kullanılır.