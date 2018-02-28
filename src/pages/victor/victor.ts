import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the VictorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-victor',
    templateUrl: 'victor.html',
})
export class VictorPage {

    myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
    myTracks7: any[];
    myTracks8: any[];
    myTracks9: any[];
    myTracks10: any[];
    myTracks11: any[];
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

    adarayeUlpatha() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Adare%20Ulpatha__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'ආදරයේ උල්පත වූ අම්ම',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    thaniwennata() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Thaniwennata%20%20(Ok)__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'තනි වෙන්නට මගේ ලොවේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    thanitharuwe() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Thani%20Tharuwe_Victor%20Rathnayake__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'තනිතරුවේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    niwanDutu() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Niwan%20Dutu%20Himi_Victor%20Rathnayake__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'නිවන් දුටු හිමි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    sandaHiruTharu() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Hiru%20Tharu%20Pawathinathuru__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'සඳ හිරු තරු පවතින තුරු',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    hithaMithuru() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Hitha%20Mithuru%20Sulanga__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'හිත මිතුරු සුළඟ ළඟ එන වැහි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    nangiye() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nangiye%20Malliye.__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'නන්ගියෙ…. මල්ලියෙ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }


    //NEW
    miyuruKalpana() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Miyuru%20Kalpana.__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: ' මියුරු කල්පනා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    pembaraMadu() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pembara%20Madu%20Mage__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'පෙම්බර මධු මගේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    apeRatak() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Koheda%20Koheda%20Ape%20Lowak__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'කොහේද කොහේද',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    sihithaHathak() {
        this.myTracks11 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sihina%20Sathak__Victor%20Rathnayake_mp3[sarigama.lk].mp3',
            title: 'සිහින සතක් දුටුවෙමි මම ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VictorPage');
    }

}
