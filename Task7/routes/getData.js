'use strict';
var express = require('express');
var router = express.Router();

var data = [{
    carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
},{carId:1,
    id: 0,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch:123,
    cost:100,
    state:"Хорошее",
    mileage:12456,
    type:"Дизель",
    amount:1.8,
    transmission:"Авто",
    photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
}];

/* GET users listing. */
router.get('/Get', function (req, res) {

    res.json(data);
});

router.post('/Update', function (req, res) {

    for(var i=0;i<data.length;i++){
        if(data[i].carId==req.body.carId){
            data[i] = {
                carId: req.body.carId,
                mark: req.body.mark,
                model: req.body.model,
                year: req.body.year,
                watch:req.body.watch,
                cost:req.body.cost,
                state:req.body.state,
                mileage:req.body.mileage,
                type:req.body.type,
                amount:req.body.amount,
                transmission:req.body.transmission,
                photoUrl:req.body.photoUrl
            };
            break;
        }
    }

   res.json(data);
});

router.post('/Delete', function (req, res) {

    console.log(req.body.carId);
    console.log(req.body.mark);

    for(var i=0;i<data.length;i++){
        if(data[i].carId==req.body.carId){
            data.splice(i,1);
            break;
        }
    }
    res.json(data);
});

router.post('/Create', function (req, res) {

    var newCar = {
                id:req.body.carId,
                carId: req.body.carId,
                mark: req.body.mark,
                model: req.body.model,
                year: req.body.year,
                watch:req.body.watch,
                cost:req.body.cost,
                state:req.body.state,
                mileage:req.body.mileage,
                type:req.body.type,
                amount:req.body.amount,
                transmission:req.body.transmission,
                photoUrl:req.body.photoUrl
            };

    data.add(newCar);

    res.json(data);
});

module.exports = router;
