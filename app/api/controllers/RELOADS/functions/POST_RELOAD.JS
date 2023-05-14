const Reload = require("../../../models/reloadModel")

//* API
//TODO frontend

const post_reload =  async (req, res) => {
    const powderBody = req.body.powder
    const caliberBody = req.body.caliber
    const userId = "Albert E G"

    const reload_post = await Reload.create({ caliber: caliberBody, powder: powderBody, user_id: userId})
    console.log(reload_post)


    res.status(200).json(reload_post)
}

module.exports = {post_reload}