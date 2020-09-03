import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleyryContent = [
    {
      image: 'assets/images/gallery-images/gallery-image-1.jpg'
    },
    {
      image: 'assets/images/gallery-images/gallery-image-2.jpg'
    },
    {
      image: 'assets/images/gallery-images/gallery-image-3.jpg'
    },
    {
      image: 'assets/images/gallery-images/gallery-image-4.jpg'
    },
    {
      image: 'assets/images/gallery-images/gallery-image-5.jpg'
    },
    {
      image: 'assets/images/gallery-images/gallery-image-6.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
