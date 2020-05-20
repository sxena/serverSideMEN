const mongoose =require('mongoose');


const userSchema = new mongoose.Schema({
  name:{
    name: 'string',
    age: 0,
    gender: 'string',

    // summary: 'string',
    // space: 'string',
    // description: 'string',
    // neighborhood_overview: 'string',
    // notes: 'string',
    // transit: 'string',
    // access: 'string',
    // interaction: 'string',
    // house_rules: 'string',
    // property_type: 'string',
    // room_type: 'string',
    // bed_type: 'string',
    // minimum_nights: 'string',
    // maximum_nights: 'string',
    // cancellation_policy: 'string',
    // accommodates: '',
    // bedrooms: '',
    // beds: ''
  }
})

const usermodel = mongoose.model('users', userSchema);
module.exports = usermodel;
