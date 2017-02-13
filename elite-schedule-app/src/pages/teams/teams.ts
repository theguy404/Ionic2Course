import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../pages.ts';

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }
  itemTapped(){
    this.navCtrl.push(TeamDetailPage);
  }
}
