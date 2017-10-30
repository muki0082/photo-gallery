import { Component, OnChanges, Input } from '@angular/core';

import { ImageService } from '../image/shared/image.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges{

    title = 'Start typing to search images by caption ...';

    @Input() searchBy?: string='all';

    searchImages: any[] = [];

    constructor(private imageService: ImageService) {
        this.searchImages = this.imageService.getImages();
    }

    ngOnChanges() {
        this.searchImages = this.imageService.getImages();
    }

}