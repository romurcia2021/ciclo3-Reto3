const Income = require('../models/income')

const incomeController = {
    async add(req,res){
        try {

            const income = new Income(req.body)
            await income.save()
            res.status(200).json(income)
        } catch (error){
            res.status(500).json(error)
        }
    }
},
async list(req,res){
    try{
        const incomes = await Income.find()
        res.status(200).json(incomes)
    }catch (error) {
        res.status(500).json(error)
    }
}

module.exports = incomeController