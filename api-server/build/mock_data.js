"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleEvents = exports.messages = exports.friends = exports.discover = void 0;
exports.discover = [
    {
        userId: 1,
        id: 1,
        photos: [
            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721427/cld-sample-5.jpg',
            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721404/samples/animals/cat.jpg',
            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721405/samples/food/dessert.jpg',
            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721405/samples/animals/reindeer.jpg',
        ],
        name: 'Derek',
        city: 'Greenville',
    },
    {
        userId: 1,
        id: 1,
        photos: [
            'https://i.pinimg.com/236x/56/e8/ba/56e8ba281d0cce55c4db6e3ee10f0ea4--happy-puppy-puppy-love.jpg',
            'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-2-150x150.jpg',
            'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-1.jpg',
            'https://i.pinimg.com/236x/56/e8/ba/56e8ba281d0cce55c4db6e3ee10f0ea4--happy-puppy-puppy-love.jpg',
        ],
        name: 'Larry',
        city: 'Barktown',
    },
];
exports.friends = [
    {
        id: 1,
        name: 'Sophie',
        age: 4,
        breed: 'Siberian Husky',
        gender: 'female',
        pictures: [
            'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-2-150x150.jpg',
            'https://animalso.com/wp-content/uploads/2016/10/husky-corgi-mix-1.jpg',
            'https://i.pinimg.com/236x/56/e8/ba/56e8ba281d0cce55c4db6e3ee10f0ea4--happy-puppy-puppy-love.jpg',
        ],
    },
    {
        id: 2,
        name: 'Kuma',
        age: 3,
        breed: 'Goldendoodle',
        gender: 'male',
        pictures: [
            'https://www.happygodoodle.com/wp-content/uploads/2022/04/apricot-colored-miniature-goldendoodle-720x720.jpg.webp',
            'https://a-z-animals.com/media/2021/06/Petite-Goldendoodle-puppy-1024x535.jpg',
            'https://www.rainfieldgoldendoodles.com/wp-content/uploads/2019/11/20191118_162055-1-200x300.jpg',
        ],
    },
    {
        id: 3,
        name: 'dog',
        age: 2,
        breed: 'shih tzu',
        gender: 'male',
        pictures: [
            'https://www.akc.org/wp-content/uploads/2017/11/Dogo-Argentino.jpg',
            'https://i.pinimg.com/originals/8b/ee/0b/8bee0bf219b91167f191f5268febae96.jpg',
            'http://3.bp.blogspot.com/-7pNCBrtPl_A/TaeOAW-3_xI/AAAAAAAA8_s/F4oAN5WLAug/s1600/Dogo.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F07%2F21%2Fdogo-argentino-lying-on-cement-1309087955-2000.jpg',
        ],
    },
    {
        id: 4,
        name: 'cat',
        age: 4,
        breed: 'maltese',
        gender: 'female',
        pictures: [
            'https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg',
            'https://www.omlet.us/images/cache/1024/693/Dog-Pomeranian-Three_lovely_Pomeranians,_each_with_big,_bushy_tails_and_beautiful_pointed_ears.jpg',
            'https://www.allthingsdogs.com/wp-content/uploads/2020/01/White-Pomeranian-Feature-678x381.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg',
        ],
    },
];
exports.messages = { hello: 'world' };
const today = new Date();
exports.sampleEvents = [
    {
        id: '1',
        title: 'Play date with Lola',
        date: new Date(today.getFullYear(), 0, today.getDate()),
        start: '13:00',
        end: '15:00',
    },
    {
        id: '2',
        title: 'Group play at Majors Hill Park',
        date: new Date(today.getFullYear(), 0, today.getDate() + 5),
        start: '13:00',
        end: '16:00',
    },
    {
        id: '3',
        title: 'Coffee time w/ Banshee',
        date: new Date(today.getFullYear(), 0, today.getDate() + 6),
        start: '11:00',
        end: '12:30',
    },
    {
        id: '4',
        title: 'Sarge Bday',
        date: new Date(today.getFullYear(), 0, today.getDate() + 8),
        start: '17:00',
        end: '19:00',
    },
];
//# sourceMappingURL=mock_data.js.map