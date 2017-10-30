
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
    {"id": 1, "category": "test1", "caption": "test11", "url": "assets/img/test11.jpg"},
    {"id": 2, "category": "test1", "caption": "test12", "url": "assets/img/test12.jpg"},
    {"id": 3, "category": "test1", "caption": "test13", "url": "assets/img/test13.jpg"},
    {"id": 4, "category": "test2", "caption": "test21", "url": "assets/img/test21.jpg"},
    {"id": 5, "category": "test2", "caption": "test22", "url": "assets/img/test22.jpg"},
    {"id": 6, "category": "test2", "caption": "test23", "url": "assets/img/test23.jpg"},
    {"id": 7, "category": "test3", "caption": "test31", "url": "assets/img/test31.jpg"},
    {"id": 8, "category": "test3", "caption": "test32", "url": "assets/img/test32.jpg"},
    {"id": 9, "category": "test3", "caption": "test33", "url": "assets/img/test33.jpg"}
]