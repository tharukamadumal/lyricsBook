import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdwardPage } from './edward';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    EdwardPage,
  ],
  imports: [
    IonicPageModule.forChild(EdwardPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class EdwardPageModule {}
