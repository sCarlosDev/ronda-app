import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Ronda } from '../../services/ronda';

@Component({
  selector: 'app-ronda-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './ronda-form.html',
  styleUrl: './ronda-form.css',
})
export class RondaForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly rondaService = inject(Ronda);
  private readonly router = inject(Router);

  protected isSubmitting = false;
  protected errorMessage = '';

  protected readonly rondaForm = this.formBuilder.nonNullable.group({
    creador: ['', [Validators.required, Validators.minLength(2)]],
    lugar: ['', [Validators.required, Validators.minLength(2)]],
    horaSalida: ['', Validators.required],
    telefonoBizum: ['', [Validators.required, Validators.minLength(9)]],
    descripcion: ['', [Validators.required, Validators.maxLength(180)]],
  });

  protected submit(): void {
    if (this.rondaForm.invalid) {
      this.rondaForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.rondaService.createRonda(this.rondaForm.getRawValue()).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'No se pudo publicar la ronda. Revisa el backend e intentalo de nuevo.';
      },
    });
  }
}
