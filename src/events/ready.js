const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    let activities = [ `Dévelopé par Lє ѕτυƒƒ Ɗє нєγρє#0025`, `${client.user.username}` ], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
}};
