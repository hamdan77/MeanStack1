import { Post } from './posts/post.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeanStack1';
  storedPosts: Post[] = [];
  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
