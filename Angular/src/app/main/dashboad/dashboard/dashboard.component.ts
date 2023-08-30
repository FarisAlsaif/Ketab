import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/main/shared/services/header/header.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  constructor(
    private headerService: HeaderService,
    ) { }
  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'Dashboard',
      back: false,
    });

  }


  
}