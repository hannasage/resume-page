import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppsService {

  apps = [
    {
      name: "WhiskeyLeague",
      desc: "A crowdsourced whiskey tasting notes database for whiskey lovers by a whiskey lover",
      url: "https://whiskeyleague.app/",
      thumbnail: "https://www.whiskeyleague.app/static/media/bourbons.f9165237.png"
    }
  ]

  constructor() { }

  getApps() {
    return this.apps;
  }

}
