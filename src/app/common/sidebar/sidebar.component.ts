import { Component, Input, Output, EventEmitter } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  link?: string;
  open?: boolean;
  children?: MenuItem[];
}

interface MenuSection {
  section: true;
  label: string;
}

type MenuEntry = MenuItem | MenuSection;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() open: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  menuItems: MenuEntry[] = [
    {
      label: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      link: '#',
    },
    {
      section: true,
      label: 'Navigation'
    },
    {
      label: 'Domains',
      icon: 'fa fa-globe',
      open: false,
      children: [
        {
          label: 'Pending', link: '#',
          icon: 'fa fa-clock'
        },
        {
          label: 'Active', link: '#',
          icon: 'fa fa-check'
        },
        {
          label: 'Inactive', link: '#',
          icon: 'fa fa-times'
        },
      ]
    },
    {
      label: 'Campaigns',
      icon: 'fa fa-bullhorn',
      link: '#',
    },
    {
      label: 'Statistics',
      icon: 'fa fa-chart-bar',
      link: '#',
    },
    {
      label: 'Automation',
      icon: 'fa fa-robot',
      open: false,
      children: [
        {
          label: 'Automagic Push', link: '#',
          icon: 'fa fa-magic'
        },
        {
          label: 'Welcome Push', link: '#',
          icon: 'fa fa-hand-sparkles'
        },
      ]
    },
    {
      label: 'Segmentation',
      icon: 'fa fa-users',
      link: '#',
    },
    {
      label: 'Settings',
      icon: 'fa fa-cog',
      link: '#',
    },
    {
      label: 'Server Status',
      icon: 'fa fa-server',
      link: '#',
    },
    {
      label: 'Report Bug',
      icon: 'fa fa-bug',
      link: '#',
    }
  ];

  toggleSubMenu(item: MenuItem) {
    if (item.children) {
      item.open = !item.open;
    }
  }

  isMenuItem(item: MenuEntry): item is MenuItem {
    return !(item as MenuSection).section;
  }
}
