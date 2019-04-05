import { Component, OnInit } from '@angular/core';
import { SendDataService } from './services/SendData/send-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shopping';

  constructor(private sendData:SendDataService){}
  ngOnInit(){
    this.sendData.post_product();
  }
}
