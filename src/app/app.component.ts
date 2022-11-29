import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: any;

  constructor(private appService: AppService) {}

  onEnter(value: string) {
    this.appService.getImages(value)
      .subscribe(response => {
        this.images = response
        console.log(this.images)
      })
  }
}
