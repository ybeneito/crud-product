import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { product } from '../product';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: BehaviorSubject<product[]> = new BehaviorSubject<product[]>([]);
  products$ = this.products.asObservable()
  reset$: Subject<boolean> = new Subject<boolean>();

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  ngOnDestroy(): void {
    this.reset$.next(true)
    this.reset$.unsubscribe()
  }

  getProducts() {
    this.service.sendGetRequest().pipe(takeUntil(this.reset$)).subscribe((data: any) => {
      console.log(data)
      this.products.next(data)
    })
  }

  update(id: number) {
    console.log(id + ' a modifier');
    this.router.navigate(['modifier', id])
  }

  delete(id: number){
    console.log(id + 'a suppr')
    this.service.sendDelete(id)
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then((a) => {

      this.router.navigate(["/"])
    })
  }

}
