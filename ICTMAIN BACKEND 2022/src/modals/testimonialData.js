const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://ictakoffial2021:ictakoffial2021@ictak-official-webdb.vtyb5.mongodb.net/ICTofficialproject');

const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
    courseId                : String,
    courseTitle             : String,
    name                    : String,
    position                : String,
    organisation            : String,
    testimony                 : String,
    image                   : String
});

var Testimonialdata = mongoose.model('CourseTestimony',TestimonialSchema);

module.exports = Testimonialdata;

