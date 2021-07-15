import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-card-list',
  templateUrl: './app-card-list.component.html',
  styleUrls: ['./app-card-list.component.css']
})
export class AppCardListComponent implements OnInit {

  @Input() appURL: string;
  @Input() appThumbnailURL: string;
  @Input() appName: string;
  @Input() appDescription: string;

  constructor() { }

  ngOnInit(): void {
  }

}
