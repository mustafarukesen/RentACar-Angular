import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  // carDetails: CarDetail[] = [];
  carImagePath = "https://localhost:44388/Images";
  filterCarText = "";

  constructor(private carService:CarService,
    private activatedRoot:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoot.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      } 
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data
    })
  }

  // getCarDetailsById(carId:number){
  //   this.carDetailService.getCarDetailsById(carId).subscribe((response) => {
  //     this.carDetails = response.data,
  //     this.dataLoaded = true;
  //   })
  // }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data
    });
  }

  getCarImage(car:Car){
    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'default.png'
    }
  }

}
