import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import $ from 'jquery';
import { PostService } from 'src/app/admin/shared/post.service';

// import { PostService } from '../../../../services/post.service'

@Component({
  selector: 'app-admin-blog-post',
  templateUrl: './admin-blog-post.component.html',
  styleUrls: ['./admin-blog-post.component.scss']
})
export class AdminBlogPostComponent implements OnInit {
  post: any;
  id: any;

  tinyconfig:any = {
    plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    images_upload_handler: (blobInfo: any, success: any, failure: any) => {
      console.log("here");
      console.log("blobInfo", blobInfo.blob());

      this.uploadFile(blobInfo.blob(), success, failure);
    },
    convert_urls: false,
  }


  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }
  isJqueryWorking: string
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id === "new") {
        this.post = { title: "", url: "", body: "" };
      } else {
        this.post = this.postService.get(this.id);
      }
    })

    this.uploadImage();

  }

  cloudName = 'angular-creating-a-blog';
  unsignedUploadPreset = 'wyx68xom';

  uploadImage() {

    let fileSelect: any = document.getElementById("fileSelect"),
      fileElem = document.getElementById("fileElem");

    fileSelect.addEventListener("click", function (e: any) {
      if (fileElem) {
        fileElem.click();
      }
      e.preventDefault(); // prevent navigation to "#"
    }, false);
  }

  handleFiles() {
    const files: any = document.getElementById("fileElem");
    console.log("files", files.files);
    for (var i = 0; i < files.length; i++) {
      // this.uploadFile(files[i]); // call the function to upload the file
    }
  }

  uploadFile(file: any, success: any, failure: any) {

    var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Reset the upload progress bar
    // document.getElementById('progress').style.width = 0;

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function (e) {
      var progress = Math.round((e.loaded * 100.0) / e.total);
      // document.getElementById('progress').style.width = progress + "%";

      console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText);
        console.log(typeof response.secure_url);
        console.log(response.secure_url);

        if (!response || typeof response.secure_url != "string") {
          failure("Invalid JSON: " + xhr.responseText);
          return;
        }

        // success({ location: response.secure_url });
        success(response.secure_url);


        var url = response.secure_url;
        // Create a thumbnail of the uploaded image, with 150px width
        var tokens = url.split('/');
        tokens.splice(-2, 0, 'w_150,c_scale');
        var img = new Image(); // HTML5 Constructor
        img.src = tokens.join('/');
        img.alt = response.public_id;
        //document.getElementById('gallery').appendChild(img);
      }
    };

    fd.append('upload_preset', this.unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  }

  ngAfterViewInit() {
    // tinymce.init({
    //   selector: '#tiny'
    // });
    // $('.cloudinary-fileupload').cloudinary_fileupload({ maxFileSize: 100000000, acceptFileTypes: /(.|\/)(gif|jpe?g|png|bmp|ico)$/i });
  }

  onSubmit() {
    console.log(this.post)
    if (this.id === "new") {
      this.postService.create(this.post);
    } else {
      this.postService.update(this.post);
    }
    this.goList();
  }


  goList() {
    //this.location.back();
    this.router.navigate(['/admin']);
  }
  goBack() {
    //this.location.back();
    this.router.navigate(['/admin']);
  }

  onCancel() {
    this.goBack();
  }

  onChangeKeyTitle() {
    this.post.url = this.getCleanedString(this.post.title).replace(/_/g, "-");

  }

  getCleanedString(cadena: any) {
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
      cadena = cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }

    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();

    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    cadena = cadena.replace(/ /g, "_");

    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi, "a");
    cadena = cadena.replace(/é/gi, "e");
    cadena = cadena.replace(/í/gi, "i");
    cadena = cadena.replace(/ó/gi, "o");
    cadena = cadena.replace(/ú/gi, "u");
    cadena = cadena.replace(/ñ/gi, "n");
    return cadena;
  }
}
