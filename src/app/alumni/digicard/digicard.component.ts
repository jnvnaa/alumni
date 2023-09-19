import { Component, Input, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-digicard',
  templateUrl: './digicard.component.html',
  styleUrls: ['./digicard.component.css']
})
export class DigicardComponent implements OnInit {

  @Input() name:any;
  @Input() batch:any;
  @Input() qrfile = "";

  constructor()
  {
    
  }
  ngOnInit(): void {
    
  }

  save() {
    // Select the element that you want to capture
    var node = document.getElementById('icard')!;

    domtoimage.toPng(node).then((doc) => domtoimage.toPng(node)
    .then(function (blob) {
        window.saveAs(blob, 'jnvnsjc-digicard.png');
    }));
  }
}
