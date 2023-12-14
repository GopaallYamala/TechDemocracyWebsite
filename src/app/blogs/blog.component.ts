import { Component } from "@angular/core";
import { StrapiService } from "src/shared/services/strapi.service";
import { BlogService } from "./shared/blog.service";

@Component({
  selector: 'blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent {

  strapiBlogAttrs: any;
  contextType: string = 'All';
  blogData: any;
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
    private readonly blogService: BlogService) { }


  ngOnInit() {
    this.getStrapiBlog();
    this.getAllBlogs();
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
