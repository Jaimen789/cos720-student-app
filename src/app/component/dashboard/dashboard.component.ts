import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register(){
    this.auth.logout();
  }

}
