import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NandaPage} from './nanda';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
    declarations: [
        NandaPage,
    ],
    imports: [
        IonicPageModule.forChild(NandaPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class NandaPageModule {}
