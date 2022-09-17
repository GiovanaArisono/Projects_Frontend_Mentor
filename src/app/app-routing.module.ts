import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QRCodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "QRCode", component: QRCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
