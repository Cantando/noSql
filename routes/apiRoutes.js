const db = require("../model");
const router = require("express").Router();

// get method for workouts to appear on page
router.get("/workouts",(req,res)=>{
    db.Workout.find({},(err,dbExercises)=>{
        if (err){
            console.log(err);
        }
        res.json(dbExercises);
        console.log(dbExercises);
    });
})

//Put method for adding new exercises

router.put("/workouts/:id", (req,res)=> {
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises:req.body}},(err, dbExercises)=> {
        if(err){
            console.log(err);
        }
        res.json(dbExercises)
    });
})


//Post Method for creating new exercises 

router.post("/workouts", ({body},res)=>{
    db.Workout.create(body,(err,dbExercises)=>{
        if(err){
            console.log(err);
        }
        res.json(dbExercises);
    });
})

//Get request for the stats

router.get("/workouts/range", (req,res)=>{
    db.Workout.find({}).sort({day: -1}).then(dbExercises =>{
        res.json(dbExercises);
        console.log(dbExercises);
    }).catch(err=>{
        res.json(err);

    });
})


module.exports= router;