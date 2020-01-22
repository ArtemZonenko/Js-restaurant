import posts from '../posts.json';
import postFeedItemTemplate from '../templates/post-feed-item.hbs';

// const markup = postFeedItemTemplate(posts[0]);

const refs = {
  postFeed: document.querySelector('.catalog__content'),
};

buildPosts(posts);

function buildPosts(posts) {
  const markup = posts.map(post => postFeedItemTemplate(post)).join('');

  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}
