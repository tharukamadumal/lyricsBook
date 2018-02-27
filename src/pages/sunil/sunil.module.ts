import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SunilPage } from './sunil';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    SunilPage,
  ],
  imports: [
    IonicPageModule.forChild(SunilPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class SunilPageModule {}
