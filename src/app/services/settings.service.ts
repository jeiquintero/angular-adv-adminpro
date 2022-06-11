import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeLink = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    if (this.themeLink != null)
      this.themeLink.setAttribute('href', url);

  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${ theme }.css`;

    if (this.themeLink != null)
      this.themeLink.setAttribute('href', url);

    localStorage.setItem('theme', url);
    
    this.checkCurrentTheme();
  }
  
  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const bthThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.themeLink != null ? this.themeLink.getAttribute('href') : './assets/css/colors/default-dark.css';

      if (bthThemeUrl === currentTheme){
        elem.classList.add('working');
      }

    })
  }

}
