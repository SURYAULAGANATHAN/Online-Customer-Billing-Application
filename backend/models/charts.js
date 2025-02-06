const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chartSchema = new Schema({
  chart_name: {
    type: String,
    required: true, // This field is mandatory
    unique: true, // Ensures unique chart names
    trim: true // Removes leading and trailing spaces
  },
  image: {
    type: Buffer, // To store binary data
    required: true // This field is mandatory
  }
});

const Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;
