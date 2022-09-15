

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('body') body: ElementRef | undefined;
  scroll: any;
  constructor(
    public translate: TranslateService
  ) { 
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
  }

  cards: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  data: any = [];
  data2: any = [];
  isFrance: boolean = true;
  isSpinning: boolean = false;
  isModalMenu: boolean = false;
  current = 4;

  robotMain: AnimationOptions = {
    path: '/assets/animation/robot_main.json',
  };
  robot1: AnimationOptions = {
    path: '/assets/animation/robot1.json',
  };
  robotTuto: AnimationOptions = {
    path: '/assets/animation/robot_tuto.json',
  };

  formatOne = (percent: number): string => `ETAPE ${percent}`;

  animationCreated(animationItem: AnimationItem): void {
    animationItem.firstFrame = 180;
    animationItem.loop = false;
    console.log(animationItem);
  }

  reload(): void {
    window.location.reload();
  }

  modalMenu(): void {
    this.isModalMenu = true; 
  } 

  handleOk(): void {
    this.isModalMenu = false;
  }

  handleCancel(): void {
    this.isModalMenu = false;
  }

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }

  toggleLanguage(lang: string): void {
    this.isSpinning = !this.isSpinning;
    this.isFrance = !this.isFrance;
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.translate.use(lang);
      this.isSpinning = !this.isSpinning;
    }, 500);
  }

  // lineChartData: ChartDataSets[] = [{
  //   borderWidth: 1,
  //   radius: 0,
  //   data: this.data,
  // },
  // {
  //   borderWidth: 1,
  //   radius: 0,
  //   data: this.data2,
  // }]

  // lineChartLabels: Label[] = [];


  // lineChartOptions: ChartOptions = {
  //   animation: {
  //     easing: 'linear',
  //     duration: 3500,
  //     onProgress(ctx: any): any {
  //       if (ctx.type !== 'data' || ctx.xStarted) {
  //         return 0;
  //       }
  //       ctx.xStarted = true;
  //       return ctx.index * 1000;
  //     }
  //   },
  //   legend: {
  //     display: false //This will do the task
  //  },
  //   elements: {
  //     line: {
  //       fill: false
  //     }
  //   },
  //   scales: {
  //     xAxes: [{
  //       display: false,
  //       type: 'linear', gridLines: {
  //         color: "rgba(0, 0, 0, 0)",
  //       },
  //       ticks: {
  //         display: false
  //       }
  //     }], yAxes: [{
  //       position: 'left',
  //       ticks: {
  //         beginAtZero: true,
  //         display: false
  //       },
  //       gridLines: {
  //         color: "rgba(0, 0, 0, 0)",
  //       }
  //     }]
  //   },
  // };

  // // Define colors of chart segments
  // lineChartColors: Color[] = [

  //   { // dark grey
  //     borderColor: 'blue',
  //   },
  //   { // red
  //     borderColor: 'red',
  //   }
  // ];

  // // Set true to show legends
  // lineChartLegend = false;

  // // Define type of chart
  // barChartType: string = 'line';
  // lineChartPlugins = [];

  // chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }  

  ngAfterViewInit() {
    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if (this.scroll) {
          this.scroll.update();
        }
      });
    });
    ro.observe(document.getElementById('body') as Element);
  }
}
