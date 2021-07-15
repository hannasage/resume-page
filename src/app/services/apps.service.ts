import { Injectable } from '@angular/core';
import { Tags } from '../enums/tags';

@Injectable({
  providedIn: 'root'
})

export class AppsService {

  //TODO: Maybe create an object structure for this?
  apps: Array<Object> = [
    {
      name: "WhiskeyLeague",
      desc: "A crowdsourced whiskey tasting notes database for whiskey lovers by a whiskey lover",
      url: "https://whiskeyleague.app/",
      thumbnail: "https://www.whiskeyleague.app/static/media/bourbons.f9165237.png",
      tags: [
        Tags.REACT,
        Tags.MONGODB,
        Tags.EXPRESS,
        Tags.NODE,
        Tags.JAVASCRIPT
      ]
    }
  ]

  constructor() { }

  getApps(): Array<Object> {
    return this.apps;
  }

}
