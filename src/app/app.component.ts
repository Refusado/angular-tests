import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    count: number = 0;

    constructor() {

    }

    ngOnInit(): void {
        let interval = setInterval(()=> {
            this.count++;
            if (this.count === 10)
                this.count = 0;
                // clearInterval(interval);
        }, 1000);
    }

}
