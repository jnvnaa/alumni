import { Component, Input } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-digicard',
  templateUrl: './digicard.component.html',
  styleUrls: ['./digicard.component.css']
})
export class DigicardComponent {

  @Input() name:any;
  @Input() batch:any;
  @Input() qrfile = "";

  save() {
    // Select the element that you want to capture
    var node = document.getElementById('icard')!;

    domtoimage.toBlob(node)
    .then(function (blob) {
        window.saveAs(blob, 'jnvnsjc-digicard.png');
    });
  }
}
