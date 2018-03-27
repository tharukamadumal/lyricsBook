import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {KasunPage} from './kasun';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
    declarations: [
        KasunPage,
    ],
    imports: [
        IonicPageModule.forChild(KasunPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class KasunPageModule {}
