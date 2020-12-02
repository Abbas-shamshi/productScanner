import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications: LocalNotifications,
    private storage: Storage

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      this.storage.get('name').then((val) => {
        for (var i = 0; i < val.length; i++) {

          var dateFormat = val[i]['expires'];
          var sDate = dateFormat.split("-");
          var stringDate = sDate.toString();
          console.log(stringDate);


          /////Subtract Date
          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          const firstDate = new Date().getTime();
          const secondDate = new Date(stringDate).getTime();
          const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
          console.log(diffDays);

          if (diffDays < 2) {
            this.localNotifications.schedule({
              id: 1,
              title: val[i]['name']+" is getting Expired",
              text: 'Please use it before '+val[i]['expires'],
              attachments: [val[i]['expires']],
              led: 'FF0000'
            });
          }
        }
        console.log(val);
      });

    });
  }
}
