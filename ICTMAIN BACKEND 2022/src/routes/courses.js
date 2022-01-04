const express = require('express');
const app = express.Router();
const nodemailer = require('nodemailer')
const multer = require('multer')
var fs = require('fs');

const CourseData =  require('../modals/courseData')
const CourseBrochure = require('../modals/courseBrochureData')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${+Date.now()}.${file.originalname.split('.')[1]}`
    );
  }
});

const upload = multer({ storage: storage });
const cpUpload = upload.fields([
   { name: 'image', maxCount: 1 }
]);
/* multer end */




//course card data route

app.get('/',async function (req, res) {
    
    try{
  await CourseData.find().sort({ index: 1 })
        .then(function (courses) {
            res.send(courses);
            // console.log(courses)
        });
    }
    catch(err) {
        console.log("error response in coursedata"+err)
    }
});


//Single course route

app.get('/courseSingle/:id', async (req, res) => {
    try{
    const id = req.params.id;
   await CourseData.findOne({ "_id": id })
        .then((course) => {
            res.send(course);
        });
    } catch (err) {
        console.log("error response in Singlecourse"+err)
    }
})

//ADMIN ROUTES


//Add Course Route ||to admin
app.post('/Course/add', cpUpload ,async function (req, res) {

    var indx;

    await CourseData.findOne().sort('-index').exec(function (err, course) {
        indx = course.index;
        indx = indx + 1;

        var course = {
            courseTitle: req.body.courseTitle,
            courseImage:  req.files?.image[0].path,
            shortDesc: req.body.shortDesc,
            Reg_Status: req.body.Reg_Status,
            Objectives: req.body.Objectives,
            Rating: req.body.Rating,
            LongDes: req.body.LongDes,
            dates: req.body.dates,
            eligibility: req.body.eligibility,
            course_fee: req.body.course_fee,
            entrance_details: req.body.entrance_details,
            course_Agenda:req.body.course_Agenda,
            aptitude_test: req.body.aptitude_test,
            course_delivery: req.body.course_delivery,
            internship_partner: req.body.internship_partner,
            knowledge_partner: req.body.knowledge_partner,
            index: indx,
            active: req.body.active
        }

        var courseItem = new CourseData(course);
        courseItem.save().then(function (data) {
            res.send(true)
        }).catch(function (error) {
            res.send(false)

        });

        CourseData.findOne({ 'course_title': course.course_title }).select("_id").lean().then(result => {
            if (result) {
                CourseData.findByIdAndDelete(result).then(function (data) {
                }).catch(function (error) {
                });
            }
        });

    });

});


//Delete course route||to admin
app.post('/Course/remove', async(req, res) => {
    console.log(req.body);
    id = req.body._id
    console.log(` inside remove ${id}`);
   let data =  await CourseData.findByIdAndDelete({ '_id': id },
     fs.unlink(data.image,(err) => {
            if (err) {
                res.send(false)
            } else {
                res.send(true)
            }
}));
});

   //delete book
//    app.post('/Course/remove',(req,res)=>{
   
//     id = req.body._id;
//     CourseData.findByIdAndDelete({"_id":id})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })


//Update course route ||to admin
app.post('/Course/update', cpUpload , (req, res) => {

    id = req.body._id;
    let item = {
        courseTitle: req.body.courseTitle,
        courseImage: req.files?.image[0].path,
        image:req.files?.image[0].path,
        shortDesc: req.body.shortDesc,
        Reg_Status: req.body.Reg_Status,
        Objectives: req.body.Objectives,
        Rating: req.body.Rating,
        LongDes: req.body.LongDes,
        dates: req.body.dates,
        eligibility: req.body.eligibility,
        course_fee: req.body.course_fee,
        entrance_details: req.body.entrance_details,
        course_Agenda:req.body.course_Agenda,
        aptitude_test: req.body.aptitude_test,
        course_delivery: req.body.course_delivery,
        internship_partner: req.body.internship_partner,
        knowledge_partner: req.body.knowledge_partner,
        active: req.body.active
    }

    let updateCourse = { $set: item };
    CourseData.findByIdAndUpdate({ "_id": id }, updateCourse)
        .then((data) => {
            if (data) {
                res.send(true)
            }
            else {
                res.send(false)
            }
        });
});


//CourseBrochure route & mail sending nodemailer section

app.post('/courseBrochure/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await CourseBrochure.find({ "course_id": id })
            .then((brochurePerson) => {
                // res.send(brochures);
                
           // initialize nodemailer
         var transporter = nodemailer.createTransport(
           {
             service: 'gmail',
             auth:{
             user: 'rightuser008@gmail.com',
             pass: 'SecretPassword@#$'
           }
         }
                );
                
                //mail sending To,from & Content creation section
                var mailOptions = {
                    from: '"ICT Academy of Kerala" <rightuser008@gmail.com>', // sender address
                    to: brochurePerson.email, // list of receivers
                    subject: 'Welcome!',
                    html: `<h1>test mail</h1>`, // Create HTML data directly
                   
                };
                
                // trigger the sending of the E-mail
                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        return console.log(error);
                    }
                    console.log('Message sent: ' + info.response);
                });

            });
    } catch (err) {
        console.log("error detected on Course Brochure"+err)
    }
})







module.exports = app;