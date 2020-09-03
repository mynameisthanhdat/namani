import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = [
    {
      id: 1,
      title: 'The first Article',
      author: 'AD',
      image: 'gallery-image-1.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 2,
      title: 'The second Article',
      author: 'AD',
      image: 'gallery-image-2.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 3,
      title: 'The third Article',
      author: 'AD',
      image: 'gallery-image-3.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 4,
      title: 'The fourth Article',
      author: 'AD',
      image: 'gallery-image-4.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 5,
      title: 'The fifth Article',
      author: 'AD',
      image: 'gallery-image-5.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 6,
      title: 'The sixth Article',
      author: 'AD',
      image: 'gallery-image-6.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 7,
      title: 'The seventh Article',
      author: 'AD',
      image: 'gallery-image-1.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 8,
      title: 'The eighth Article',
      author: 'AD',
      image: 'gallery-image-3.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 9,
      title: 'The nineth Article',
      author: 'AD',
      image: 'gallery-image-5.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 10,
      title: 'The tenth Article',
      author: 'AD',
      image: 'gallery-image-2.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 11,
      title: 'The eleven Article',
      author: 'AD',
      image: 'gallery-image-4.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    },
    {
      id: 12,
      title: 'The twelve Article',
      author: 'AD',
      image: 'gallery-image-1.jpg',
      publishdate: '2020-03-19T07:22Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt atque necessitatibus, libero minus veniam iste dolorum. Numquam at alias nesciunt soluta quam dolores, unde, ipsum earum repudiandae veritatis blanditiis?'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
