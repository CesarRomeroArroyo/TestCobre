import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcCaptureComponent } from './cc-capture/cc-capture.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CcCaptureComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [CcCaptureComponent]
})
export class ComponentsModule { }
