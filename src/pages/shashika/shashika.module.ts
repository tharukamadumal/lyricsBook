import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShashikaPage } from './shashika';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    ShashikaPage,
  ],
  imports: [
    IonicPageModule.forChild(ShashikaPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class ShashikaPageModule {}
