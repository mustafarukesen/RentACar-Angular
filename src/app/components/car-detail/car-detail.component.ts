import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:Car[];
  carImages: CarImage[];
  carImagePath = "https://localhost:44388/";

  constructor(private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetailsById(params["carId"]),
        this.getCarImagesByCar(params["carId"])
      }
      else{
        this.getCarDetails();
      }
    })
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    })
  }
  
  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarImagesByCar(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  // getCarDetailsByBrand(brandId:number){
  //   this.carDetailService.getCarDetailsByBrand(brandId).subscribe((response) => {
  //     this.carDetails = response.data
  //     this.dataLoaded = true;
  //   });
  // }

  // getCarDetailsByColor(colorId:number){
  //   this.carDetailService.getCarDetailsByColor(colorId).subscribe((response) => {
  //     this.carDetails = response.data
  //     this.dataLoaded = true;
  //   });
  // }

}
