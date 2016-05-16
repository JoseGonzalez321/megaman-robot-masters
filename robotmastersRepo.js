'use strict';

const robotmasters = require('./robotmasters');

module.exports = {
    getRobotMasters: function getRobotMasters() {
        return robotmasters;
    },
    getRandomRobotMaster: function getRandomRobotMaster() {
        let randomRobot = robotmasters[Math.floor(Math.random() * robotmasters.length)];
        return randomRobot;
    },
    getRandomRobotMasterById: function getRandomRobotMasterById(id) {
        let robot = robotmasters.find(r => parseInt(r.id, 10) === parseInt(id, 10));
        return robot;
    },
    getRobotMastersBySeriesId: function getRobotMastersBySeriesId(seriesId) {        
        let robots = robotmasters.find(r => r.series === parseInt(seriesId));
        console.log(robots);
        return robots;
    }
}
