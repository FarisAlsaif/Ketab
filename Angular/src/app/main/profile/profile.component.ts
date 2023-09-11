import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public protectedData: any
  public loading: boolean = false
  constructor(
    private api: ApiService, 
    
  ) { }
  ngOnInit(): void {
    
    this.api.getTypeRequest('profile/profile').subscribe((res: any) => {
      this.protectedData = res
    });
  }
}