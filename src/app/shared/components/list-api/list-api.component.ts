import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

    personagens: Array<any> = [];

    constructor(private listServices: ListService) { }

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this.listServices.getList().subscribe((result: any) => {
            this.personagens = result.results;
            console.log(this.personagens);
        })
    }
}
