import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { AlumniService } from 'src/app/services/alumni.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  chartdata: any;

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  constructor(private als:AlumniService)
  {

  }
  ngOnInit(): void {
      this.als.getAlumniStats().subscribe(result => {
        this.chartdata = result;
        if(this.chartdata!=null){
          for(let i=0; i<this.chartdata.length ;i++){
            //console.log(this.chartdata[i]);
            this.labeldata.push(this.chartdata[i].batch);
            this.realdata.push(this.chartdata[i].count);
          }
          this.RenderChart(this.labeldata,this.realdata,'bar','barchart');
          
        }
      });    
  }

  RenderChart(labeldata:any,maindata:any,type:any,id:any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of batch wise registered Alumni',
          data: maindata,
          borderColor: [ 'rgb(54, 162, 235)'],
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
