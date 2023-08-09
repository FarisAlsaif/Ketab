import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { HeaderService,header } from 'src/app/services/header/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string='false';
  @Input() back: boolean=false;
  private headerSubscription: Subscription;


  constructor(private location: Location, private headerService: HeaderService) {
    this.headerSubscription = this.headerService.headerObservable$.subscribe((headerDetails: header) => {
      this.title = headerDetails.title || ''; 
      this.back = headerDetails.back || false;

    });
  }
  goBack(){
    this.location.back()
  }
}
