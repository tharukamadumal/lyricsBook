import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';
/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-group',
    templateUrl: 'group.html',
})
export class GroupPage {
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

    ekaYaye() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Eka%20Yaye%20[%20Mangala%20Thegga%20]__Sunil%20Eadirisinghe%20And%20Edward_mp3[sarigama.lk].mp3',
            artist: ' එක යායේ කකා වැටී - සුනිල් එදිරිසිංහ, එඩ්වඩ් ජයකොඩි  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    rahaseHandana() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Rahase%20Handana_Clarance%20Wijewardana__Clarance%20Wijewardana_mp3[sarigama.lk].mp3',
            artist: 'රහසේ හඬනා - නීලා වික්රමසිංහ / ක්ලැරන්ස් විජේවර්ධන  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    kawrundaKawuluwa() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Kawurunda%20Kawuluwa%20Wahuwe__Chamara%20and%20Shashika_mp3[www.sarigama.lk].mp3',
            artist: ' කවුරුන්ද කවුලුව වැහුවේ - චාමර වීරසිංහ, ශෂිකා නිසංසලා  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    hanthanaSihine() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Hanthana%20Sihine-Bala%20Walapemi__W.D.Amaradewa%20and%20Umariya_mp3[www.sarigama.lk].mp3',
            artist: 'බලා වැලපෙමි - ඩබ්.ඩී අමරදේව, උමාරියා  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    heminSere() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Hemin%20Sere%20Piya%20Wida__T.M.Jayarathna_mp3[sarigama.lk].mp3',
            artist: ' හෙමින් සැරේ - ටී.එම්.ජයරත්න, සුනිලා අබේසේකර  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sihinayakiMata() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Aadaraneeya%20Wassanaya%20%20%20%20__Kasun%20Kalhara_mp3[sarigama.lk].mp3',
            artist: 'සිහිනයකි මට ආදරේ - කසුන් කල්හාර, උරේෂා රවිහාරි  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    daiwayeSaradamin() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Daiwaye%20Saradamin__Athula%20and%20Samitha_mp3[www.sarigama.lk].mp3',
            artist: ' දෛවයේ සරදමින් - අතුල අධිකාරි , සමිතා  මුදුන්කොටුව ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    handapanak() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Handa%20Panak__Athula%20Adikari_mp3[sarigama.lk].mp3',
            artist: '  හඳපානක් සේ -  අතුල අධිකාරි , සමිතා  මුදුන්කොටුව ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    tharukaPelin() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Tharuka%20Pelin%20Eha_Athula%20Adikari__Athula%20Adikari_mp3[sarigama.lk].mp3',
            artist: '  තාරුකා පෙලින් එහා -  අතුල අධිකාරි , සමිතා  මුදුන්කොටුව ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandaTharu() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Tharu%20Mal_Athula%20Adikari__Athula%20Adikari_mp3[sarigama.lk].mp3',
            artist: ' සඳ තරු මල් මට-  අතුල අධිකාරි , සමිතා  මුදුන්කොටුව ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    obaMageWela() {
        this.myTracks11 = [{
            src: 'http://topbadu.net/sinhala_mp3/Oba_Mage_Wela_Dehadak_Adaren_Theme_Song.mp3',
            artist: ' ඔබ මගේ වෙලා-  මංගල , කුෂාණි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GroupPage');
    }

}
