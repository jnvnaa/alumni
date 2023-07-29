import { Component, HostListener, OnInit } from '@angular/core';
import { galleryImages } from 'src/assets/images/gallery/images';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: {id: number, desc: string, src: string, caption: string, thumb: string}[] = [];

  activeImages = this.images;

  description = 'all';

  descriptions:string[] = [];


  isMobile:boolean = false

  constructor(private _lightbox: Lightbox)
  {

    this.images = [];
    galleryImages.forEach( val => {

      this.images.push(JSON.parse(JSON.stringify(val)) );
    });
    
    this.shuffleArray(this.images);
    console.log(this.activeImages);

    this.images.forEach( img => {
      img.caption = img.caption + " (" + img.id + ")";

      img.src = "/assets/images/gallery/" + img.desc + "/" + img.src; 

      img.thumb = img.src;
    });

    var set1 = new Set<string>();
    this.images.forEach( x => {
      set1.add(x.desc);
    });

    this.descriptions = Array.from(set1);
    this.descriptions.sort();
    this.description = "All";

    this.filterData();
  }
  ngOnInit(): void {

    if(window.innerWidth < 780)
    {
      this.isMobile = true;
    }
    else
    {
      this.isMobile = false;
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.activeImages, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  onOptionsSelected(value:string){
      console.log("the selected value is " + value);

      console.log("the selected batch is " + this.description);
      this.filterData();
  }

  selectAll()
  {
    this.description = "All";
    this.filterData();
  }

  selectOthers()
  {
    this.description = "Others";
    this.filterData();
  }

  filterData()
  {
    if(this.description == "All")
    {
      this.activeImages = this.images;
    }
    else
    {
      this.activeImages = this.images.filter( x => {
        return x.desc == this.description;
      });

    }
  }

  shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

  @HostListener("window:resize", [])
  private onResize() {
    if(window.innerWidth < 780)
    {
      this.isMobile = true;
    }
    else
    {
      this.isMobile = false;
    }
  }
  
}
