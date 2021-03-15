import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[] = [];
  imageDirectoryPath: any = "https://localhost:44388/api/Images/CarImages";
  dataLoaded = false;

  constructor(private carService:CarService,
    private activetedRoot:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoot.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data,
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

}
