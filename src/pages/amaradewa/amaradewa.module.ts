import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AmaradewaPage} from './amaradewa';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
    declarations: [
        AmaradewaPage,
    ],
    imports: [
        IonicPageModule.forChild(AmaradewaPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class AmaradewaPageModule {}
