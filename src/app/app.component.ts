import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0
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

  onChangeLength (event: any): void {
    const length = parseInt(event.target.value)
    if (!isNaN(length)) {
      this.length = length
    }
  }
}
