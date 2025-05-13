import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Sublime POS 3';
  username = 'parzibyte';
  isMobile = false;
  sidebarOpen = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.isMobile = result.matches;
      // Only auto-close on initial load for mobile
      if (this.isMobile) {
        this.sidebarOpen = false;
      }
    });

    // Close sidebar on navigation for mobile
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobile) {
        this.closeSidebar();
      }
    });
  }

  toggleSidebar() {
    // Add a small delay to ensure animations are visible
    setTimeout(() => {
      this.sidebarOpen = !this.sidebarOpen;
      
      // When opening sidebar on mobile, prevent body scrolling
      if (this.isMobile) {
        if (this.sidebarOpen) {
          this.renderer.addClass(document.body, 'overflow-hidden');
        } else {
          this.renderer.removeClass(document.body, 'overflow-hidden');
        }
      }
    }, 10);
  }

  closeSidebar() {
    if (this.sidebarOpen) {
      // Add a small delay to ensure animations are visible
      setTimeout(() => {
        this.sidebarOpen = false;
        if (this.isMobile) {
          this.renderer.removeClass(document.body, 'overflow-hidden');
        }
      }, 10);
    }
  }

  // Close sidebar when pressing escape key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.sidebarOpen) {
      this.closeSidebar();
    }
  }
}