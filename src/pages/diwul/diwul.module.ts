import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiwulPage } from './diwul';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    DiwulPage,
  ],
  imports: [
    IonicPageModule.forChild(DiwulPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class DiwulPageModule {}
