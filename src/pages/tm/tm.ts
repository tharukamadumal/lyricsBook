import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the TmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-tm',
    templateUrl: 'tm.html',
})
export class TmPage {

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
    myTracks12: any[];
    myTracks13: any[];
    myTracks14: any[];
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

    sonduruAtheethaya() {
        this.myTracks = [{
            src: 'http://topbadu.net/sinhala_mp3/TM_Jayarathna_Sonduru_Atheethaye.mp3',
            artist: 'සොඳුරු අතීතයෙ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    sanduataHoren() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Hiruta%20Horen%20%20%20__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: ' හිරුට හොරෙන් සඳූට හොරෙන්',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    sithinMaa() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sithin%20Ma%20Noseli__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'සිතින් මා නො සැලී හිඳිද්දී',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    walaTheerayen() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Wala%20Thirayen__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'වලා තීරයෙන් එහා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    ammaSandaki() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Amma%20Sandaki__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'අම්මා සඳකි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    degodaThalaa() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Degoda%20Thala%20%20%20%20%20%20%20__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'දෙගොඩ තලා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    raththaran() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Raththaran%20Neth%20Dekin__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'රත්තරන් නෙත් දෙකින්..',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    sanasumSusuman() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Senasum%20Susuman%20__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'සැනසුම් සුසුමන් පාවීලා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    koMaa() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ko%20Maa%20Pethu__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'කෝමා පැතු ඔබේ ආදරේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    ekaSitha() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Eka%20Sitha%20Dethenaka__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'එක සිත දෙතැනක ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    jeewithAmadara() {
        this.myTracks11 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Jeewithe%20Amadara__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'ජීවිතේ අම ධාරා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    obahaaMemaa() {
        this.myTracks12 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Oba%20Ha%20Mema__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'ඔබ හා මෙමා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    anduruKutiya() {
        this.myTracks13 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Anduru%20Kutiya__T.M%20Jayarathna_mp3[sarigama.lk].mp3',
            artist: 'අඳුරු කුටිය තුල',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    pawanataSalena() {
        this.myTracks14 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pawanata%20Selena%20[%20Lama%20]__Nathasha%20Perera_mp3[sarigama.lk].mp3',
            artist: ' පවනට සැලෙනා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad TmPage');
    }

}
