import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, customIncrement, changeTextName } from './count.actions';
import { CounterState } from './count.reducer';
import { getCounter, getTextName } from './count.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {

  value!: number
  text!: string;

  // count$: Observable<number> | undefined;
  count$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {
    // this.count$ = this.store.select(state => state.count.count); // Update to 'counter.count'
    this.count$ = this.store.select(getCounter)
    this.store.select(getTextName).subscribe((data) => {
      this.text = data
      console.log(data)
    })
  }
  
  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }


  reset() {
    this.store.dispatch(reset())
  }

  onSubmit() {
    console.log(this.value)
    this.store.dispatch(customIncrement({ value : this.value}))

  }

  changeText() {
    this.store.dispatch(changeTextName({text:"Hello"}))
  }
}
