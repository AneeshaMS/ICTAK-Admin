const express = require('express');
const partnerApplicationData = require('../../modals/partnerformData');
let partnerformRouter = express.Router();

//partnership form data view || to admin
partnerformRouter.get('/partnerslist', async function (req, res) {
    
    partnerApplicationData.find()
   .then(function (partnership) {
       res.send(partnership)
    })
   });

partnerformRouter.post('/', async function (req, res) { 
console.log(req.body)
    try{
    let item = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        firm: req.body.firm,
        address: req.body.address,
        district: req.body.district,
        officeSpace: req.body.officeSpace,
        report: req.body.report,
        expect: req.body.expect,
        profile: req.body.profile,
        employeeCount: req.body.employeeCount,
        creation_date: new Date(),

    }
    let newPartner = await  partnerApplicationData(item);
    await newPartner.save()
        res.send(true)
    }
    catch {
        res.send(false)
    }
});


// delete
partnerformRouter.delete('/remove/:id',async (req,res)=>{
    try{
   id = req.params.id;
   await partnerApplicationData.findById({"_id":id})
   .then((indus)=>{
        indus.remove()   
       res.send(true);
   })  
  }
  catch{
   res.send(false);
  } 
  })

module.exports = partnerformRouter;