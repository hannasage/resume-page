import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  apps;

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
    this.apps = this.appsService.getApps()
  }

}
