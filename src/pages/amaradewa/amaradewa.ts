import {Component, Provider} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';
/**
 * Generated class for the AmaradewaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-amaradewa',
    templateUrl: 'amaradewa.html',
})

export class AmaradewaPage {
    msg: string;
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

    nimhim() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'නිම් හිම් සෙව්වා මා සසරේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    bolWee() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Bol%20Vee__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'බොලි වී අහුරු',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    sandaHoren() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Horen%20%20%20%20%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'සඳ හොරෙන් හොරෙන් හොරෙන්',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    mindadaHeesara() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mindada%20Hee%20Sara__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'මින්දද හී සර',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    aradana() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Aaradhana__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'ජීවිතයේ තනි මංසල්', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
    adawan() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Adawan%20Wu%20Denethin%20%20[Ok[__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'අඩවන් වූ දෙනෙතින් ගලනා', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
    irahanda() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ira%20Handa%20Paayana%20Loke__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: ' ඉර හඳ පායන ලෝකේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
    kolomthota() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ma%20Dan%20Mahalu%20Viye__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'කොළොම්තොට', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
    mahaWessaka() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ma%20Dan%20Mahalu%20Viye__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'මහවැස්සක පෙර නිමිති පෙනෙනවා.', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
    sasaraWasana() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sasara%20Wasana%20Thuru__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'සසර වසන තුරු', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
     shanthaMe() {
        this.myTracks11 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Shantha%20Me%20Re%20Yaame__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'ශාන්ත මේ රෑ යාමේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
     weliThala() {
        this.myTracks12 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Weli%20Thala%20Athare_W.D.Amaradewa__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'වැලිතල අතරේ හෙමිහිට බසිනා', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
     gimanHarina() {
        this.myTracks13 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Giman%20Harina%20Diyaba-Agni__W%20D%20Amaradewa_mp3[www.sarigama.lk].mp3',
            artist: 'ගිමන් හරින දියඹ දිගේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    
     weliThala22() {
        this.myTracks14 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Aaradhana__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'ජීවිතයේ තනි මංසල්', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off 1
        }]
    }
    

    ionViewDidLoad() {
        console.log('ionViewDidLoad AmaradewaPage');
    }

}
