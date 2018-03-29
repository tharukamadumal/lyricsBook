import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';
/**
 * Generated class for the KasunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-kasun',
    templateUrl: 'kasun.html',
})
export class KasunPage {
    myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
    myTracks7: any[];
    allTracks: any[];
    selectedTrack: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    }

    playSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    }

    pauseSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    }

    onTrackFinished(track: any) {
        console.log('Track finished', track)
    }

    adaraMal() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Aadara%20Malwala__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: 'ආදර මල් වල පාට ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
     ananthayata() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ananthayata%20Yana%20Paara%20Dige%20%20__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: ' අනන්තයට යන ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
     ekaWasanthayaka() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Eka%20Wasanthayaka__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: 'එක වසන්තයක ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
     malMitak() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mal%20Mitak_Kasun%20Kalhara__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: '   මල් මිටක් තියන්න ඔබ අතේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
     kawulupiyan() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Kawulu%20Piyanpath%20Wahanna__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: 'කවුලු පියන්පත් වහන්න ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
     igilenna() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Mithuri%20-%20Egilenna%20Oba%20Ekka__Kasun%20Kalhara_mp3[www.sarigama.lk].mp3',
            artist: 'ඉගිලෙන්න ඔබ එක්ක ආකාසේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    walakulak() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Walakulak%20We%20__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: ' වලා කුලක් වී නිල් අහසේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad KasunPage');
    }

}
