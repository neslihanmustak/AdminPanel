const mongoose = require('mongoose');

const schema=mongoose.Schema({
    //id otamatik oluşturulur mongose tarafından.
    role_name:{type :String, required:true}, //{type :mongoose.SchemeTypes.String, required:true}
    is_active:{type:Boolean, default:true},
    created_by:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true //bu true olduğu durumda bu veri olmadan roles verisi eklenemez demek oluyor.
    }
},{
    versionKey:false, //__v alanını kaldırmak için
    //timestamps:true  direkt böyle de yazılabilirdi ama o zaman createdAt şeklinde adlandırılacaktı.
    timestamps:{//bu şekilde yazarak adlandırmalarını  created_at formatında yaptık.
        createdAt: "created_at",//mongodb bunları otomatik dolduruyor.
        updatedAt:"updated_at"
    }
});
//extend sayesinde classtan türetilen farklı classlar Users classı mongoose altındaki model classın içindeki methodları override ediyor.
class Roles extends mongoose.Model {
    //hooke yapısı ile (save methodu vs ) öncesinde bu method çalışıyor sonra save yapıyor.
    //burda password geçerli bir veri mi? Mail geçerli bir mail mi vs kontrolü yapılıyor.

}
schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);