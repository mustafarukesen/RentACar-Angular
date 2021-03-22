import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/addMethods/brand-add/brand-add.component';
import { ColorAddComponent } from './components/addMethods/color-add/color-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component:CarComponent},
  {path: "cars", component:CarComponent},
  {path: "cars/brand/:brandId", component:CarComponent},
  {path: "cars/color/:colorId", component:CarComponent},
  {path: "cars/getcardetailsbyid/:carId" , component:CarDetailComponent},
  {path: "brands/add", component:BrandAddComponent},
  {path: "colors/add", component:ColorAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
