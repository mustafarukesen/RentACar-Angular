import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(carId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  // getCarDetailsByBrand(brandId:number): Observable<ListResponseModel<CarDetail>>{
  //   let newPath = this.apiUrl + "cars/getcardetailsbybrand?brandId=" + brandId;
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  // }

  // getCarDetailsByColor(colorId:number): Observable<ListResponseModel<CarDetail>>{
  //   let newPath = this.apiUrl + "cars/getcardetailsbycolor?colorId=" + colorId;
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  // }

}
