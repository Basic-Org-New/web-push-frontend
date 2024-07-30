import { Component } from '@angular/core';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent {
  audience = 'all';
  domain = '';
  title = '';
  message = '';
  iconUrl = '';
  imageUrl = '';
  launchUrl = '';
  useUtm = false;
  sendNow = true;
  notificationExpires = 3;
  notificationExpiresUnit = 'days';
  stickyNotification = true;
  button1 = { text: '', icon: '', url: '' };
  button2 = { text: '', icon: '', url: '' };

  domains = ['Domain 1', 'Domain 2', 'Domain 3'];
  operatingSystems = ['All Operating Systems', 'Windows', 'MacOS', 'Linux'];
  browsers = ['All Browsers', 'Chrome', 'Firefox', 'Safari'];
  countries = ['All Countries', 'USA', 'Canada', 'UK'];
  states = ['All States', 'California', 'Texas', 'New York'];
  devices = ['All Devices', 'Desktop', 'Mobile'];

  onSubmit() {
    const notificationData = {
      audience: this.audience,
      domain: this.domain,
      title: this.title,
      message: this.message,
      iconUrl: this.iconUrl,
      imageUrl: this.imageUrl,
      launchUrl: this.launchUrl,
      useUtm: this.useUtm,
      sendNow: this.sendNow,
      notificationExpires: this.notificationExpires,
      notificationExpiresUnit: this.notificationExpiresUnit,
      stickyNotification: this.stickyNotification,
      button1: this.button1,
      button2: this.button2
    };
    console.log('Notification Data:', notificationData);
    // Perform further actions like sending the data to the server
  }
  sidebarOpen = true;

  ngOnInit(): void {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth(): void {
    if (window.innerWidth < 768) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
