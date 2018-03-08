import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  books: any;

  constructor(private http: HttpClient) { }
   
  
    ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });
  }
  }
  