import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-multiple-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './multiple-table.component.html',
  styleUrls: ['./multiple-table.component.scss'],
})
export class MultipleTableComponent implements OnInit {

multiplicationForm!: FormGroup;
multiplicationTable!: number[][];

constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  this.initForm();
}

private initForm(): void {
  this.multiplicationForm = this.fb.group({
    number: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
  });
}

onSubmit(): void {
  if (this.multiplicationForm.valid) {
    const number = this.multiplicationForm.value.number;
    this.generateMultiplicationTable(number);
  }
}

private generateMultiplicationTable(number: number): void {
  this.multiplicationTable = Array.from({ length: 10 }, (_, index) => [number, index + 1, number * (index + 1)]);
}
}
