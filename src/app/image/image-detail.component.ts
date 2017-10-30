
import { Component, OnInit } from "@angular/core";
import { ImageService } from "./shared/image.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
    
    image:any;
    constructor(
        private imageService: ImageService, 
        private route: ActivatedRoute,
        private location: Location) {}

    ngOnInit() {
        this.image = this.imageService.getImage(
            +this.route.snapshot.params['id']
        )
    }

    goBack(): void {
        this.location.back();
    }

}