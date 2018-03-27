import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChandanaPage} from './chandana';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
    declarations: [
        ChandanaPage,
    ],
    imports: [
        IonicPageModule.forChild(ChandanaPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class ChandanaPageModule {}
