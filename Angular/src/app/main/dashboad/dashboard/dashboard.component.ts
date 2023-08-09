import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'Dashboard',
      back: false,
    });
  }
  ngOnDestroy(): void {
    this.headerService.resetHeader();
  }
}
