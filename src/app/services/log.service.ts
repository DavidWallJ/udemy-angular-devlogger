import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  constructor() {
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

  getLogs() {
    return this.logs;
  }
}
