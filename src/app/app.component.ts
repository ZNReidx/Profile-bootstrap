import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BootstrapComponent } from "./bootstrap/bootstrap.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BootstrapComponent]
})
export class AppComponent {
  title = 'bootstrap';
}
