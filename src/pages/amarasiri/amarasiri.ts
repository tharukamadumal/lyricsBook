import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the AmarasiriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-amarasiri',
    templateUrl: 'amarasiri.html',
})

export class AmarasiriPage {
    myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
    allTracks: any[];
    selectedTrack: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,private _audioProvider: AudioProvider) {
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

    hanthaneta() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            title: 'හන්තානට පායන සඳ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    magePunchi() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'මගේ පුන්චි රෝස මලේ', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    obaApple() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'ඔබ ඇපල් මලක් වාගේ',  
            art: 'assets/imgs/play.png', 
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    landune() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'ළඳුනේ', 
            art: 'assets/imgs/play.png', 
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
	

    malakUne() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',
            artist: 'මලක් උනේ ඇයි', 
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }	

    sonduriya() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nim%20Him%20Sewuwa%20__W.D.Amaradewa_mp3[sarigama.lk].mp3',         
            artist: 'සොඳුරිය',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
	
    ionViewDidLoad() {
        console.log('ionViewDidLoad AmarasiriPage');
    }

}
