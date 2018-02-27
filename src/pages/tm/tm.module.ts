import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmPage } from './tm';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    TmPage,
  ],
  imports: [
    IonicPageModule.forChild(TmPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class TmPageModule {}
