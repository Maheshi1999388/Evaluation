const router = require("express").Router();
let Review = require("../modles/review");
router.route("/add").post((req, res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const postededDate = req.body.postededDate;
    const rating= Number(req.body.rating);
    const comment = req.body.comment;
    const react = req.body.react;
    


    const newReview = new Review({

        firstname,
        lastname,
        postededDate,
        rating,
        comment,
        react
    })
    newReview.save().then(() => {
        res.json("medical certificate details Added")
    }).catch((err) => {
        console.log(err);
    })

})





router.route("/").get((req, res) => {

    Medical.find().then((review) => {
        res.json(review)
    }).catch((err) => {
        console.log(err);
    })
})



module.exports = router;