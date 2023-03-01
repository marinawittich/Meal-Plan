const MealModal = require('./MealModal');

//GET
module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModal.find();
    res.send(myMeal);
}

//POST
module.exports.saveMeals = async (req, res) => {
    const { title } = req.body;
    MealModal.create({ title})
    .then((data) => {
        console.log('Meal added')
        res.send(data)
    })
}

//DELETE
module.exports.deleteMeal = async (req, res) => {
    const {_id} = req.body
    MealModal.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a meal'))
}

//EDIT
module.exports.editMeal = async (req, res) => {
    const {_id, title} = req.body;
    MealModal.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Meal is updated'))
}
