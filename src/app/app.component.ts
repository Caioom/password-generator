import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters: boolean = false
  includeNumbers: boolean = false
  includeSymbols: boolean = false
  password: string = ''

  onButtonClick (): void {
    this.password = 'MY PASSWORD'
  }

  onChangeUseLetters (): void {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers (): void {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols (): void {
    this.includeSymbols = !this.includeSymbols
  }
}
