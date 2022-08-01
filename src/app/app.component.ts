import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    count: number = 0;

    pessoas = [
        {
            nome: "Renan",
            sobrenome: "Freitas",
        },
        {
            nome: "Larissa",
            sobrenome: "Gomes",
        },
        {
            nome: "Chaves",
            sobrenome: "Chapolim",
        },
        {
            nome: "Maria",
            sobrenome: "Silva",
        },
    ];

    constructor() {

    }

    ngOnInit(): void {
        console.log(this.pessoas);
        let interval = setInterval(()=> {
            this.count++;
            if (this.count === 10)
                clearInterval(interval);
        }, 1000);
    }

}
