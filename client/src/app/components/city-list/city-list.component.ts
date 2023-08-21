import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: string[] = ["Singapore", "Kuala Lumpur", "Tokyo", "Bangkok", "Hong Kong", "Beijing"];
  submitForm!: FormGroup;

  builder = inject(FormBuilder);

  ngOnInit(): void {
    this.submitForm = this.builder.group({
      city: this.builder.control<string>('')
    })
  }

  addCity() {

    if (this.cities.includes(this.submitForm.value['city'])) {
      alert('City entered is already in the list!');
      return;
    }

    this.cities.push(this.submitForm.value['city']);
  }

}
