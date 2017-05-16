'use strict';
var express = require('express');
var router = express.Router();

var data = [{
    carId:1,
    id: 1,
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
},{carId:2,
    id: 2,
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
},{carId:3,
    id: 3,
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
},{carId:4,
    id: 4,
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
},{carId:5,
    id: 5,
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
},{carId:6,
    id: 6,
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
},{carId:7,
    id: 7,
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
},{carId:8,
    id: 8,
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
},{carId:9,
    id: 9,
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
},{carId:10,
    id: 10,
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
},{carId:11,
    id: 11,
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
},{carId:12,
    id: 12,
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
},{carId:13,
    id: 13,
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
},{carId:14,
    id: 14,
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
},{carId:15,
    id: 15,
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
},{carId:16,
    id: 16,
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
},{carId:17,
    id: 17,
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
},{carId:18,
    id: 18,
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
},{carId:19,
    id: 19,
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
},{carId:20,
    id: 20,
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
},{carId:21,
    id: 21,
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
}, {
    carId: 22,
    id: 22,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch: 123,
    cost: 100,
    state: "Хорошее",
    mileage: 12456,
    type: "Дизель",
    amount: 1.8,
    transmission: "Авто",
    photoUrl: 'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
}, {
    carId: 23,
    id: 23,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch: 123,
    cost: 100,
    state: "Хорошее",
    mileage: 12456,
    type: "Дизель",
    amount: 1.8,
    transmission: "Авто",
    photoUrl: 'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
}, {
    carId: 24,
    id: 24,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch: 123,
    cost: 100,
    state: "Хорошее",
    mileage: 12456,
    type: "Дизель",
    amount: 1.8,
    transmission: "Авто",
    photoUrl: 'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
}, {
    carId: 25,
    id: 25,
    mark: "Лифан",
    model: "Новая",
    year: 1996,
    watch: 123,
    cost: 100,
    state: "Хорошее",
    mileage: 12456,
    type: "Дизель",
    amount: 1.8,
    transmission: "Авто",
    photoUrl: 'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg'
}];

/* GET users listing. */
router.get('/Get', function (req, res) {

    res.json(data);
});


router.get('/Get25', function (req, res) {

    res.json(data.slice(0,25));
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
