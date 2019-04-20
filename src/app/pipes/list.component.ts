import { Component, OnInit } from "@angular/core";
import { Product } from "./product";

@Component({
  selector: "zl-list",
  template: `
    <div class="field">
      <label class="label">Filter by name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-success"
          type="text"
          placeholder="Text input"
          [(ngModel)]="q"
        />
      </div>
      <ul>
        <li *ngFor="let p of (products | filter: 'title':q)">
          {{ p.title }}
          <hr />
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  products: Array<Product> = [];
  props: Array<string> = [
    "id",
    "image",
    "title",
    "additionalInfo",
    "price",
    "rating",
    "reviews"
  ];

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        id: 1,
        image: "hp-na-laptop-original-imaff7augnvgmznw.jpeg",
        title: "HP 15 Core i5 8th Gen - (8 GB/1 TB HDD/DOS) 15-BS145TU Laptop ",
        additionalInfo: "15.6 inch, SParkling Black, 2.1 kg",
        price: 38990,
        rating: 4.2,
        reviews: 451
      },
      {
        id: 2,
        image: "hp-na-laptop-original-imaex8fhspprkq3p.jpeg",
        title:
          "HP 15 Pentium Quad Core - (4 GB/1 TB HDD/DOS) 15Q-BU009TU Laptop",
        additionalInfo: "15.6 inch, Black, 2.1 kg",
        price: 21990,
        rating: 4.1,
        reviews: 2652
      },
      {
        id: 3,
        image: "lenovo-ip-320-laptop-original-imafffgvknqrjqtw.jpeg",
        title:
          "Lenovo Ideapad Core i5 7th Gen - (8 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320 Laptop",
        additionalInfo: "15.6 inch, Black, 2.1 kg",
        price: 45990,
        rating: 4.3,
        reviews: 8916
      },
      {
        id: 4,
        image: "lenovo-na-laptop-original-imaexjhtzgtnucgz.jpeg",
        title:
          "Lenovo Core i5 7th Gen - (8 GB/1 TB HDD/DOS/2 GB Graphics) IP 320E Laptop",
        additionalInfo: "15.6 inch, Onyx Black, 2.2 kg",
        price: 41990,
        rating: 4.3,
        reviews: 8916
      },
      {
        id: 5,
        image: "lenovo-na-laptop-original-imaexjhtzgtnucgz.jpeg",
        title:
          "Lenovo Core i7 7th Gen - (16 GB/1 TB HDD/DOS/2 GB Graphics) IP 620E Laptop",
        additionalInfo: "15.6 inch, Onyx Red, 2.2 kg",
        price: 41990,
        rating: 4.3,
        reviews: 8916
      },
      {
        id: 6,
        image: "hp-na-laptop-original-imaff7augnvgmznw.jpeg",
        title:
          "HP 15 Core i7 7th Gen - (32 GB/1 TB SSD/DOS) 15-XS145TU Laptop ",
        additionalInfo: "15.6 inch, SParkling Black, 2.1 kg",
        price: 68990,
        rating: 4.8,
        reviews: 4510
      },
      {
        id: 7,
        image: "lenovo-ip-320-laptop-original-imafffgvknqrjqtw.jpeg",
        title:
          "Lenovo Ideapad Core i7 7th Gen - (32 GB/1 TB SSD/Windows 10 Home/2 GB Graphics) IP 820 Laptop",
        additionalInfo: "15.6 inch, Black, 2.1 kg",
        price: 65990,
        rating: 3.3,
        reviews: 916
      },
      {
        id: 8,
        image: "lenovo-na-laptop-original-imaexjhtzgtnucgz.jpeg",
        title:
          "Lenovo Core i5 7th Gen - (8 GB/1 TB HDD/DOS/2 GB Graphics) IP 320E Laptop",
        additionalInfo: "15.6 inch, Onyx Black, 2.2 kg",
        price: 41990,
        rating: 4.3,
        reviews: 8916
      },
      {
        id: 9,
        image: "hp-na-laptop-original-imaff7augnvgmznw.jpeg",
        title: "HP 15 Core i5 8th Gen - (8 GB/1 TB HDD/DOS) 15-BS145TU Laptop ",
        additionalInfo: "15.6 inch, SParkling Black, 2.1 kg",
        price: 38990,
        rating: 4.2,
        reviews: 451
      },
      {
        id: 10,
        image: "hp-na-laptop-original-imaex8fhspprkq3p.jpeg",
        title:
          "HP 15 Pentium Quad Core - (4 GB/1 TB HDD/DOS) 15Q-BU009TU Laptop",
        additionalInfo: "15.6 inch, Black, 2.1 kg",
        price: 21990,
        rating: 4.1,
        reviews: 2652
      }
    ];
  }
}
