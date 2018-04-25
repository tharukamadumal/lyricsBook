import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AthulaPage} from './athula';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
    declarations: [
        AthulaPage,
    ],
    imports: [
        IonicPageModule.forChild(AthulaPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class AthulaPageModule {}
