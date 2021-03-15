import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

   
  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}
