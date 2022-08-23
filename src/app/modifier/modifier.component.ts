import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  product: product | any
  form: FormGroup = new FormGroup({})

  constructor(private route: ActivatedRoute, private service: DataService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(10)]],
      description: [null, [Validators.required, Validators.maxLength(250)]],
      price: [null],
      imageUrl: [null],
      quantity: [null],
    })
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.sendGetById(id).subscribe((data) => this.product = data)
  }

  submitForm(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }

}
