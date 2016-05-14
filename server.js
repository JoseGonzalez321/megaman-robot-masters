'use strict';

const express = require('express');
const robotmastersRepo = require('./robotmastersRepo');
const app = express();

const port = process.env.PORT || 9001;

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', (req, res) => {
    res.json(robotmastersRepo.getRobotMasters());
})

app.get('/fightRandom', (req, res) => {
    res.json(robotmastersRepo.getRandomRobotMaster());
})

app.get('/byId/:id', (req,res) => {
    let robotmaster = robotmastersRepo.getRandomRobotMasterById(req.params.id);    
    robotmaster !== undefined ? res.json(robotmaster) : res.json({"STATUS": "404 NOT FOUND"});
})

app.get('/avatarOnly', (req, res) => {
    let robotMasters = robotmastersRepo.getRobotMasters();
    let robotsWithAvatar = robotMasters.filter(r => r.avatar !== undefined);
    res.json(robotsWithAvatar);
})

app.get('/bySeriesId/:id', (req,res) => {
     let robotMasters = robotmastersRepo.getRobotMasters();
    
     let result = robotMasters.filter(r => r.series === parseInt(req.params.id));
     console.log(result);
     res.json(result);
});

app.listen(port, function() {
    console.log('Server running on port', port);
})