import { Component, OnInit } from '@angular/core';
import { StrapiService } from 'src/shared/services/strapi.service';

@Component({
  selector: 'partner-client-news',
  templateUrl: './partner-client-news.component.html',
  styleUrls: ['./partner-client-news.component.scss']
})

export class PartnersClientNewsComponent implements OnInit {

newsObj:any;
strapiContextUrl:any;

  constructor(private readonly strapiService:StrapiService){

  }

  ngOnInit() {
    this.getAllNews();
    this.strapiContextUrl =this.strapiService.strapiContextUrl;
  }

  getAllNews(){
    this.strapiService.getAllNews().subscribe( res=>{
     this.newsObj = res.data;
    });
  }

}
