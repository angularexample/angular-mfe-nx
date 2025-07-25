import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiLabelComponent } from '@angular-mfe-nx/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiLabelComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-one';
}
