import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChamaraPage} from './chamara';
import {IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory} from 'ionic-audio';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
    declarations: [
        ChamaraPage,
    ],
    imports: [
        IonicPageModule.forChild(ChamaraPage),
        IonicAudioModule.forRoot(defaultAudioProviderFactory)
    ],
})
export class ChamaraPageModule {}
