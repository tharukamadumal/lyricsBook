import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the NandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-nanda',
    templateUrl: 'nanda.html',
})
export class NandaPage {
    myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
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

    mageSanda() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mage%20Sanda%20Oba_Nanda%20Malani__Nanda%20Malani_mp3[sarigama.lk].mp3',
            artist: 'මගේ සඳ ඔබ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    mihiMadale() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mihimadale%20Anduru%20Kuse__Nanda%20Malani_mp3[sarigama.lk].mp3',
            artist: 'මිහි මඬලේ අඳුරු කුසේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    pipunuMale() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pipunu%20Male%20Ruwa__Nanda%20Malani_mp3[sarigama.lk].mp3',
            artist: ' පිපුණු මලේ රුව',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    ammaWarune() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Tharuda%20Nidana%20Maha%20Re%20%20__Nanda%20Malani_mp3[sarigama.lk].mp3',
            artist: ' අම්මාවරුනේ…',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    tharudaNidana() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Amma%20Warune__Nanda%20Malani_mp3[sarigama.lk].mp3',
            artist: ' තරුද නිදන මහ රෑ...',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    raththaranDuwe() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Raththaran%20Duwe_Nanda%20Malani__Nanda%20Malani_mp3[sarigama.lk].mp3',
            artist: '  රත්තරන් දුවේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NandaPage');
    }

}
