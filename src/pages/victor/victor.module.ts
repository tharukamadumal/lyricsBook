import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VictorPage } from './victor';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    VictorPage,
  ],
  imports: [
    IonicPageModule.forChild(VictorPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class VictorPageModule {}
