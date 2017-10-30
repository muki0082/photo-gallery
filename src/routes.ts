
import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image/image-detail.component';
import { SearchComponent } from './app/search/search.component';

export const appRoutes: Routes = [
    { path: "gallery", component: GalleryComponent},
    { path: "image/:id", component: ImageDetailComponent},
    { path: "search", component: SearchComponent},
    { path: "", redirectTo: "gallery", pathMatch: 'full'},
]