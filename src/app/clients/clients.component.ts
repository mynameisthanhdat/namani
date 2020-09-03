import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = {
    tagLine: 'TRUST',
    title: 'Companies who use our services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
  }

  clientsContent = [
    {
      image: 'assets/images/company-images/company-logo1.png',
      content: 'Tree'
    },
    {
      image: 'assets/images/company-images/company-logo2.png',
      content: 'Fingerprint'
    },
    {
      image: 'assets/images/company-images/company-logo3.png',
      content: 'The Man'
    },
    {
      image: 'assets/images/company-images/company-logo4.png',
      content: 'Mustache'
    },
    {
      image: 'assets/images/company-images/company-logo5.png',
      content: 'Goat'
    },
    {
      image: 'assets/images/company-images/company-logo6.png',
      content: 'Justice'
    },
    {
      image: 'assets/images/company-images/company-logo7.png',
      content: 'Ball'
    },
    {
      image: 'assets/images/company-images/company-logo8.png',
      content: 'Cold'
    },
    {
      image: 'assets/images/company-images/company-logo9.png',
      content: 'Cold'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
