import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-cc-capture',
  templateUrl: './cc-capture.component.html',
  styleUrls: ['./cc-capture.component.scss'],
})
export class CcCaptureComponent implements OnDestroy {

  @Input()  text = '';
  @Output() step = new EventEmitter<number>();
  @Output() imagesArray = new EventEmitter<string[]>();
  @Output() isClose = new EventEmitter<boolean>();

  public image: string;
  public images: string[] = [];
  public cameraActive = false;
  public index: number;
  public icon = 'person-outline';

  private cameraPreviewOptions: CameraPreviewOptions;
  private cameraPreviewPictureOptions: CameraPreviewPictureOptions;

  constructor() {
    this.setConfigPreview();
    this.setConfigPicture();
    this.openCamera();
  }

  public openCamera(): void {
    CameraPreview.start(this.cameraPreviewOptions);
    this.cameraActive = true;
    this.isClose.emit(false);
  }

  public async captureImage(): Promise<void> {
    const result = await CameraPreview.capture(
      this.cameraPreviewPictureOptions
    );
    const base64PictureData = `data:image/jpeg;base64,${result.value}`;
    this.image = base64PictureData;
    this.stopCamera();
  }

  public next(): void {
    this.images.push(this.image);
    this.index = this.images.length;
    this.step.emit(this.index);
    this.icon = 'finger-print-outline';
    if(this.index < 2){
      this.openCamera();
    }

    if(this.index === 2){
      this.imagesArray.emit(this.images);
    }
  }

  public stopCamera(): void {
    CameraPreview.stop();
    this.cameraActive = false;
    this.isClose.emit(true);
  }

  public clear(): void {
    this.image = null;
    this.openCamera();
  }

  ngOnDestroy(): void {
   this.stopCamera();
  }

  private setConfigPreview(): void {
    this.cameraPreviewOptions = {
      y: 90,
      x: 10,
      height: 240,
      width: window.screen.width - 20,
      toBack: true,
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview',
    };
  }

  private setConfigPicture(): void {
    this.cameraPreviewPictureOptions = {
      quality: 100,
    };
  }

}
