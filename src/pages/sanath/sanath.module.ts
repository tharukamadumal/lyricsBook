import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SanathPage } from './sanath';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    SanathPage,
  ],
  imports: [
    IonicPageModule.forChild(SanathPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class SanathPageModule {}
