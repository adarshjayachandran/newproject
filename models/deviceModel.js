var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var deviceSchema = new Schema( {
	
	d_id: Number,
	device_no: String ,
	device_loc: String
}),
Devicetbl = mongoose.model('devicetbl', deviceSchema);

module.exports = Devicetbl;