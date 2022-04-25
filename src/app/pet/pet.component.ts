import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-buon-cuoi-cho-may-tinh-2.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
