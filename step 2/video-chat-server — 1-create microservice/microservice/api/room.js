const RoomService = require('../services/room-service');

module.exports.room = (app) => {

    const service = new RoomService();


    app.post('/create', async(req,res,next) => {

        try {
            const { data } =  await service.CreateRoom(req, res);
            return res.json(data);

        } catch (err) {
            next(err)
        }

    });

    app.get('/join', async(req,res,next) => {
        try {
            const { data } =  await service.CreateRoom(req, res);
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

    app.get('/has-room', async(req,res,next) => {
        try {
            const { data } =  await service.CreateRoom(req, res);
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

    app.post('/leave', async(req,res,next) => {

        try {
            const { data } =  await service.CreateRoom(req, res);
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

}
