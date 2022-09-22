const mongoose= require('mongoose');
const {Schema, model}= mongoose;

const PsySchema = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        hours: [{type: Schema.Types.ObjectId, ref: 'Hours'}],
    }
)

const Psy = model('Psy', PsySchema);	

module.exports= Psy;