import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmarasiriPage } from './amarasiri';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    AmarasiriPage,
  ],
  imports: [
    IonicPageModule.forChild(AmarasiriPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class AmarasiriPageModule {}
