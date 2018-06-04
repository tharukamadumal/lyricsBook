import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SamithaPage } from './samitha';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    SamithaPage,
  ],
  imports: [
    IonicPageModule.forChild(SamithaPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class SamithaPageModule {}
