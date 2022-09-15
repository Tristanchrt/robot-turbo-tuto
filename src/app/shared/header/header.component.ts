import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { RoomModel } from 'src/app/core/models/room.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private notificationService: NzNotificationService) { }

  ngOnInit(): void {

  }


}
