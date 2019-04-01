import {Component, Input, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit {

  userId: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private route: ActivatedRoute) {}

  onNavigateBack() {
    if (this.userId) {
      this.router.navigate(['/ai-chat', this.userId]).then();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('NaviBar Router Params', params);
      this.userId = params.userId;
    });
  }
}
