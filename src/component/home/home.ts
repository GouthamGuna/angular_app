import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  username: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.username = params.get('username');
    });
  }
}
