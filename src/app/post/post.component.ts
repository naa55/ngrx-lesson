import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { getPosts } from './state/post.selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  posts!: Observable<Post[]>;

constructor(private store: Store<AppState>) {

}
ngOnInit(): void {
  this.posts = this.store.select(getPosts)
}

}
