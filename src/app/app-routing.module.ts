import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  { path: "", component: QRCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
