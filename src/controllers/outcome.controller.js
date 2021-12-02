const Outcome = require('../models/outcome')

const outcomeController = {
    async add(req,res){
        try{
            const outcome = new Outcome(req.body)
            await outcome.save()
            res.status(200).json(outcome)
        }catch (error){

            res.status(500).json(error)

        }
    },
    async list(req,res){
        try{
            const outcomes = await Outcome.find({user: req.body.user})
            res.status(200).json(outcomes)
        }catch (error){
            res.status(500).json(error)
        }
    }
}

module.exports = outcomeController