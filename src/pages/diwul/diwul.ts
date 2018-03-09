import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';
/**
 * Generated class for the DiwulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-diwul',
    templateUrl: 'diwul.html',
})
export class DiwulPage {
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

    sulangaNumba() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sulanga%20Numba%20Wage%20%20%20%20__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' සුළඟ නුඹ වගෙයි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    bebaleema() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Babalema%20Wagema%20Basayama__Karunarathna%20Diwulgane_mp3[www.sarigama.lk].mp3',
            artist: ' බැබලීම වගෙම',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    laaDalu() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/La%20Dalu%20Bopath__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' ලා දළු බෝපත්',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    gamataKalin() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Gamata%20Kalin%20__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' ගමට කලින් හිරු ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    pinsara() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pinsara%20Oba__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: '  පින්සර ඔබ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    andaraYaye() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Andara%20Yaaye__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' අන්දර යායේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    adarayaSundara() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Aadaraya%20Sundara%20Waradaki__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' ආදරය සුන්දර වරදකි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    duraKathara() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Durukathara%20Gewagena__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: '  දුර කතර ගෙවාගෙන',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    atheethayaSihinayak() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Athithaya%20Sihinayak__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' අතීතය සිහිනයක් පමනයි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    maalaGiraviye() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Maala%20Giraviye_Karunarathne%20Divulgane__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' මාල ගිරවියේ මාල ගිරවියේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    ObaMaaHamuwana() {
        this.myTracks11 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Oba%20Ma%20Hamuwana__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' ඔබ මා හමුවුන ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    obataWaram() {
        this.myTracks12 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Obata%20Waran%20Nethi__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' ඔබට වරම් නැති මටද වරම් නැති',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    rosaThol() {
        this.myTracks13 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Rosa%20Thol%20Simbimi%20Thol%20Matha__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' රෝස තොල් සිඹිමි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    muduMuhune() {
        this.myTracks14 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mudu%20Muhune_Karunarathne%20Divulgane%20V%202__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: '   මුදු මුහුණේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DiwulPage');
    }

}
