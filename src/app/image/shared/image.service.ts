
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    visibleImages = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id);
    }

}

const IMAGES = [
    /* Animals */
    {"id": 1, "category": "animals", "caption": "Giraffe", "url": "assets/img/a1.jpg"},
    {"id": 2, "category": "animals", "caption": "Lion", "url": "assets/img/a2.jpg"},
    {"id": 3, "category": "animals", "caption": "Animal", "url": "assets/img/a3.jpg"},
    {"id": 4, "category": "animals", "caption": "Kittens", "url": "assets/img/a4.jpg"},
    {"id": 5, "category": "animals", "caption": "Zebra", "url": "assets/img/a5.jpg"},

    /* Boats */
    {"id": 6, "category": "boats", "caption": "Blue boat", "url": "assets/img/b1.jpg"},
    {"id": 7, "category": "boats", "caption": "Old wooden boat", "url": "assets/img/b2.jpg"},
    {"id": 8, "category": "boats", "caption": "Funny", "url": "assets/img/b3.jpg"},
    {"id": 9, "category": "boats", "caption": "Kayak", "url": "assets/img/b4.jpg"},
    {"id": 10, "category": "boats", "caption": "Funny guy", "url": "assets/img/b5.jpg"},

    /* Cars */
    {"id": 11, "category": "cars", "caption": "Red Alfa", "url": "assets/img/c1.jpg"},
    {"id": 12, "category": "cars", "caption": "Red BMW", "url": "assets/img/c2.jpg"},
    {"id": 13, "category": "cars", "caption": "Red Ferrary", "url": "assets/img/c3.jpg"},
    {"id": 14, "category": "cars", "caption": "Police car", "url": "assets/img/c4.jpg"},
    {"id": 15, "category": "cars", "caption": "Eleanor Mustang", "url": "assets/img/c5.jpg"},

    /* 3d art */
    {"id": 16, "category": "3dart", "caption": "Face", "url": "assets/img/d1.jpg"},
    {"id": 17, "category": "3dart", "caption": "Another face", "url": "assets/img/d2.jpg"},
    {"id": 18, "category": "3dart", "caption": "Blue plannets", "url": "assets/img/d3.jpg"},
    {"id": 19, "category": "3dart", "caption": "The World of Tanks", "url": "assets/img/d4.jpg"},
    {"id": 20, "category": "3dart", "caption": "Blue and red dragons", "url": "assets/img/d5.jpg"},

    /* Extreme */
    {"id": 21, "category": "extreme", "caption": "Yelow bike", "url": "assets/img/e1.jpg"},
    {"id": 22, "category": "extreme", "caption": "Snowboard", "url": "assets/img/e2.jpg"},
    {"id": 23, "category": "extreme", "caption": "Desert snowboarder", "url": "assets/img/e3.jpg"},
    {"id": 24, "category": "extreme", "caption": "Skateboard", "url": "assets/img/e4.jpg"},
    {"id": 25, "category": "extreme", "caption": "Jumper, nature", "url": "assets/img/e5.jpg"},
    
]