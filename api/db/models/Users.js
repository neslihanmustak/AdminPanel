const mongoose = require('mongoose');

const schema=mongoose.Schema({
    //id otamatik oluşturulur mongose tarafından.
    email:String,
    password: String,
    is_active:Boolean,
    first_name:String,
    last_name:String,
    phone_number:String
},{
    //timestamps:true  direkt böyle de yazılabilirdi ama o zaman createdAt şeklinde adlandırılacaktı.
    timestamps:{//bu şekilde yazarak adlandırmalarını  created_at formatında yaptık.
        createdAt: "created_at",//mongodb bunları otomatik dolduruyor.
        updatedAt:"updated_at"
    }
});
//extend sayesinde classtan türetilen farklı classlar Users classı mongoose altındaki model classın içindeki methodları override ediyor.
class Users extends mongoose.Model {
    //hooke yapısı ile (save methodu vs ) öncesinde bu method çalışıyor sonra save yapıyor.
    //burda password geçerli bir veri mi? Mail geçerli bir mail mi vs kontrolü yapılıyor.

}
schema.loadClass(Users);
module.exports = mongoose.model("users", schema);