import { Component } from '@angular/core';

const MENU_ITEMS = [
  { label: 'Images', link: '/images' },
  { label: 'Videos', link: '/videos' },
  { label: 'Upload', link: '/upload' }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header {
  menuItems = MENU_ITEMS;

  constructor() {
    // Initialize any necessary data or services here
  }

  ngOnInit() {
    // Perform any additional setup after component initialization
  }

  onMenuItemClick(item: { label: string, link: string }) {
    console.log(`Navigating to ${item.label}`);
    // Logic to handle menu item click, e.g., navigation
  }
}
