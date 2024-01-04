import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { StrapiService } from "src/shared/services/strapi.service";
import { BlogService } from "./shared/blog.service";
import { ActivatedRoute, Router } from "@angular/router";
import e from "express";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BlogComponent implements OnInit {

  strapiBlogAttrs: any;
  contextType: string = 'All';
  blogData: any;
  blogDeatils: any;
  recommendedArticle: any
  recommendedArticle2: any
  CategorieObj = [
    {
      type: 'Customer Story',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Read Customer Story'
    },
    {
      type: 'Whitepapers',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Read Whitepapers'
    }
  ]

  constructor(private readonly strapiService: StrapiService,
    private readonly router: Router,
    private route: ActivatedRoute,
    private readonly blogService: BlogService,
    private meta: Meta) { }


  ngOnInit() {
    this.blogDeatils = JSON.parse(this.route.snapshot.paramMap.get('data'));
    if (this.blogDeatils) {
      this.meta.addTags([
        {name: 'title', content: this.blogDeatils.attributes.seo.metaTitle},
        {name: 'description', content: this.blogDeatils.attributes.seo.metaDescription},
        {name: 'keywords', content: this.blogDeatils.attributes.seo.keywords}
      ])
    }
    if (this.blogDeatils?.attributes?.ArticleEditContent)
      document.getElementById("ResourceArticle").innerHTML = this.blogDeatils.attributes.ArticleEditContent;
    this.recommendedArticle = undefined;
    this.recommendedArticle2 = undefined;
    this.getArticle(this.blogDeatils?.attributes?.RecommendedArticle?.data[0]?.id, 0);
    this.getArticle(this.blogDeatils?.attributes?.RecommendedArticle_2?.data[0]?.id, 1);
    // this.getStrapiBlog();
    // this.getAllBlogs();
  }


  getArticle(id: any, val: number) {
    if (id) {
      this.strapiService.getArticle(id).subscribe(res => {
        if (val === 0)
          this.recommendedArticle = res;
        else {
          this.recommendedArticle2 = res;
        }
      });
    }
  }


  getStrapiBlog() {
    // this.strapiService.getBlog().subscribe((resp) => {
    this.strapiService.getFullBlog().subscribe(res => {
      this.blogData = res.data;
      // this.saveBlog();
      // const data = res.data;
      // this.strapiBlogAttrs = data[0].attributes;
    });
    // })
  }

  // Save the blog
  saveBlog() {
    const myJSON = JSON.stringify(this.blogData);
    let json = {
      jsonObject: myJSON,
    }
    this.blogService.saveStrapiJson(json).subscribe((res: any) => {
      console.log(res);
    });
  }

  // Fetch All the blogs from DB
  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe((res: any) => {
      const myJSON = JSON.stringify(this.blogData);
      res.blogs.forEach((e: any) => {
        let json = JSON.parse(e.blogJson);
        e.blogJson = json;
      });
      console.log(res);
    });
  }

  // Fetch the blog from DB
  getBlog(strapiId: number) {
    this.blogService.getBlog(strapiId).subscribe((res: any) => {
      console.log(res);
    });
  }

  // Updating blog
  updateBlog(strapiId: number, jsonObj: any) {
    this.blogService.updateBlog(strapiId, jsonObj).subscribe((res: any) => {
      console.log(res);
    });
  }

  // Delete Blog
  removeBlog(strapiId: any) {
    this.blogService.deleteBlog(strapiId).subscribe((res: any) => {
      console.log(res);
    });
  }

  openArticle(val: number) {
    if (val === 0) {
      if (this.recommendedArticle) {
        this.router.navigate(['/']);
        setTimeout(() => {
          this.router.navigate(['/blogs', { data: JSON.stringify(this.recommendedArticle?.data), skipLocationChange: true }]);
        }, 50);
      }
    }
    else {
      if (this.recommendedArticle2) {
        this.router.navigate(['/']);
        setTimeout(() => {
          this.router.navigate(['/blogs', { data: JSON.stringify(this.recommendedArticle2?.data), skipLocationChange: true }]);
        }, 50);
      }

    }

  }

}
