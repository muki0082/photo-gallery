
import { Component, OnChanges, Input } from "@angular/core";

import { ImageService } from "../image/shared/image.service"

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
    
    title = 'Click on an image for full size';
    @Input() filterBy?: string = 'all';

    visibleImages: any[] = [];

    constructor(private imageService: ImageService) {
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges() {
        this.visibleImages = this.imageService.getImages();
    }

    private toggle : boolean = false;

    classes: string[] = [];
    show: boolean = false;

    clickEvent() {
        console.log('sidebarToggled');
        this.classes.splice(this.classes.length-1,1);
        this.show = !this.show;
        if(this.show) {
            this.classes.push('active1');
        } else {
            this.classes.push('not-active1');
        }
    }

}