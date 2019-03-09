const TeamController = require('./TeamController') // TeamController have data from Controller
const PlayerController = require("./PlayerController") // PlayerController have data from Controller
 

module.exports = {
    team: TeamController,
    player: PlayerController
}