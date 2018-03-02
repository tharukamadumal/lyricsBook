import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';
/**
 * Generated class for the EdwardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-edward',
    templateUrl: 'edward.html',
})
export class EdwardPage {
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

    akuruMeki() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Akuru%20Mekee%20Ne_Edwad%20Jayakodi__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'අකුරු මැකී නෑ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    muwaMukya() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Muwa%20Mukthalatha%20__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'මුව මුඛ්‍යා ලතා ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    katuAkule() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Katu%20Akule__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'කටු අකුලේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    maarambari() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Marambari__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'මාරම්බරී', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    nihandaKalpana() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nihanda%20Kalpana%20%20%20__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'නිහඩ කල්පනා', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    pinnaMale() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pinna%20Male%20Suda%20%20__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'පින්න මලේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    obaThemei() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Oba%20Themei%20Kiya__Edwad%20Jayakodi_mp3[sarigama.lk].mp3',
            artist: 'ඔබ තෙමෙයි කියා බයයි', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    miniMini() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'මිණි මිණි පොද වැටේවි', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    siriYahane() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'සිරියහනේ ලණු ඉහිරී සුසුම් හෙලන රෑ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    } 
    
     karadiya() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'කරදිය ගැඹරේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    } 

    ionViewDidLoad() {
        console.log('ionViewDidLoad EdwardPage');
    }

}
