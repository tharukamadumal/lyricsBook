import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NiroshaPage} from './nirosha';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
    declarations: [
        NiroshaPage,
    ],
    imports: [
        IonicPageModule.forChild(NiroshaPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class NiroshaPageModule {}
