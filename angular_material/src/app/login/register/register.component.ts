import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    first_name: this.fb.control('', Validators.required),
    last_name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.min(8)]),
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(value: any) {
    this.dialogRef.close(value);
  }

  onClose() {
    this.dialogRef.close();
  }

  onShowPassword(event: any) {}
}

export function openCreateUserDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = matDialog.open(RegisterComponent, config);

  return dialogRef.afterClosed();
}