import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';
/**
 * Generated class for the ChamaraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chamara',
    templateUrl: 'chamara.html',
})
export class ChamaraPage {
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

    Dakune() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Dakune%20Pin__Chamara%20Weerasingha_mp3[sarigama.lk].mp3',
            artist: ' දකුනේ පින් ඇති  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    madaSoda() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mada%20Sodagath%20Pasu%20__Chamara%20Weerasingha_mp3[sarigama.lk].mp3',
            artist: ' මඩ සෝදා ගත් ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    peraSansare() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pera%20Sansare%20Pathumak%20Do%20Oba__Chamara%20Weerasinghe_mp3[www.sarigama.lk].mp3',
            artist: 'පෙර සංසාරේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandata() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sandata%20Sanda%20Eliyata__Chamara%20Weerasingha_mp3[sarigama.lk].mp3',
            artist: 'සඳට සඳ එළියට',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sithinWitharak() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sithin%20Witharak%20__Chamara%20Weerasingha_mp3[sarigama.lk].mp3',
            artist: 'සිතින් විතරක්‌ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    suduRala() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sudu%20Rala%20Gal%20Kula%20Matha__Chamara%20Weerasinghe_mp3[www.sarigama.lk].mp3',
            artist: ' සුදු රල  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    madunagala() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Madunagala%20Ahase__Chamara%20Weerasingha_mp3[sarigama.lk].mp3',
            artist: ' ගුරු ගෙදරට  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    guruGedarata() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Guru%20Gedarata%20Yana__Chamara%20Weerasinghe_mp3[www.sarigama.lk].mp3',
            artist: ' ගුරු ගෙදරට ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    dewathavi() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Dewathivi%20Nuba%20Mage__Chamara%20Weerasinghe_mp3[www.sarigama.lk].mp3',
            artist: 'දේවතාවී නුඹ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    budunDeka() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Budun%20Deka%20Niwan%20Dakinna%20__Chamara%20Weerasingha_mp3[sarigama.lk].mp3',
            artist: 'බුදුන් දැක',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    diwiyamaWage() {
        this.myTracks11 = [{
            src: 'http://sinhala-music.com/sinhala_mp3/Chamara_Weerasinghe_Thaththa.mp3',
            artist: ' දිවියම වාගේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    buduPadawi() {
        this.myTracks12 = [{
            src: 'http://s1.jayasrilanka.info/albums/Chamara-Weerasinghe/Budu%20Padavi%20Pathagena%20-%20Chamara%20Weerasinghe.mp3',
            artist: ' බුදු පදවි පතාගෙන',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    napuruWenna() {
        this.myTracks13 = [{
            src: 'http://s1.jayasrilanka.info/albums/Chamara-Weerasinghe/Napuru%20Wenna%20Epa%20Kiyala%20(Ma%20Adara%20Amma)%20-%20Chamara%20Weerasinghe.mp3',
            artist: ' නපුරු වෙන්න එපා කියලා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChamaraPage');
    }

}
