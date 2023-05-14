const Reload = require("../../../models/reloadModel")

//* API
//TODO frontend

const put_reload =  async (req, res) => {

    try { 
        const {id} = req.params
        const reload = await Reload.findOneAndUpdate({_id: id}, {...req.body})
        res.status(200).json(reload)
        console.log("UPDATE")
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {put_reload}