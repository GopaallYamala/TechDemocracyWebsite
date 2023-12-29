import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { StrapiService } from "src/shared/services/strapi.service";
import { BlogService } from "./shared/blog.service";
import { ActivatedRoute, Router } from "@angular/router";

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
  blogDeatils:any;
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
    private readonly blogService: BlogService) { }


  ngOnInit() {
    this.blogDeatils = JSON.parse(this.route.snapshot.paramMap.get('data'));
    document.getElementById("ResourceArticle").innerHTML = this.blogDeatils.attributes.ArticleEditContent;
    // this.getStrapiBlog();
    // this.getAllBlogs();
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

}
