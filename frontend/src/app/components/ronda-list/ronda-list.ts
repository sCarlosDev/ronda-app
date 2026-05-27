import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Ronda, RondaDto } from '../../services/ronda';

interface PedidoDraft {
  participante: string;
  producto: string;
}

@Component({
  selector: 'app-ronda-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './ronda-list.html',
  styleUrl: './ronda-list.css',
})
export class RondaList implements OnInit {
  private readonly rondaService = inject(Ronda);

  protected readonly rondas = signal<RondaDto[]>([]);
  protected readonly activeFormId = signal<number | null>(null);
  protected readonly isLoading = signal(true);
  protected readonly savingId = signal<number | null>(null);
  protected readonly closingId = signal<number | null>(null);
  protected readonly errorMessage = signal('');

  protected drafts: Record<number, PedidoDraft> = {};

  ngOnInit(): void {
    this.loadRondas();
  }

  protected toggleForm(rondaId: number): void {
    this.activeFormId.set(this.activeFormId() === rondaId ? null : rondaId);
    this.ensureDraft(rondaId);
  }

  protected submitPedido(ronda: RondaDto): void {
    if (!ronda.id) {
      return;
    }

    const draft = this.ensureDraft(ronda.id);
    if (!draft.participante.trim() || !draft.producto.trim()) {
      this.errorMessage.set('Completa tu nombre y pedido antes de apuntarte.');
      return;
    }

    this.savingId.set(ronda.id);
    this.errorMessage.set('');

    this.rondaService
      .addPedido(ronda.id, {
        participante: draft.participante.trim(),
        producto: draft.producto.trim(),
        precio: 0,
      })
      .subscribe({
        next: () => {
          this.drafts[ronda.id!] = { participante: '', producto: '' };
          this.activeFormId.set(null);
          this.loadRondas();
        },
        error: () => {
          this.savingId.set(null);
          this.errorMessage.set('No se pudo añadir el pedido. Revisa el backend e intentalo de nuevo.');
        },
      });
  }

  protected closeRonda(ronda: RondaDto): void {
    if (!ronda.id) {
      return;
    }

    this.closingId.set(ronda.id);
    this.errorMessage.set('');

    this.rondaService.closeRonda(ronda.id).subscribe({
      next: () => this.loadRondas(),
      error: () => {
        this.closingId.set(null);
        this.errorMessage.set('No se pudo cerrar la ronda. Revisa el backend e intentalo de nuevo.');
      },
    });
  }

  private loadRondas(): void {
    this.isLoading.set(true);
    this.rondaService.getRondas().subscribe({
      next: (rondas) => {
        this.rondas.set(rondas);
        this.isLoading.set(false);
        this.savingId.set(null);
        this.closingId.set(null);
      },
      error: () => {
        this.isLoading.set(false);
        this.savingId.set(null);
        this.closingId.set(null);
        this.errorMessage.set('No se pudieron cargar las rondas activas.');
      },
    });
  }

  private ensureDraft(rondaId: number): PedidoDraft {
    this.drafts[rondaId] ??= { participante: '', producto: '' };
    return this.drafts[rondaId];
  }
}
