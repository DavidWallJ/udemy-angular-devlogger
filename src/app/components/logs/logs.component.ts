import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[];

  constructor() {}

  ngOnInit() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('12/12/2015 12:53:34')
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/14/2015 2:53:34')
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('12/14/2015 1:53:34')
      }
    ];
  }
}
