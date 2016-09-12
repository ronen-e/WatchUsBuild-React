import React, { Component } from 'react';
import CommentBox from '../comment-box';

export default class VideoPage extends Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article article--video">

            <div className="article--picture-author">
              Video by <strong>@morganmccircuit</strong>
            </div>

            <div className="article--video-img">
              <img src="assets/images/video.jpg" />
            </div>

          </article>
        </div>

        <CommentBox apiUrl="api/videos/comments.json" />
      </div>
    )
  }
}
