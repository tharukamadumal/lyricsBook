import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupPage } from './group';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    GroupPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupPage),
     IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class GroupPageModule {}
