// import { Component } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   imports: [FormsModule],
//   template: `
//     <h2>Lista de tarefas</h2>
//     <hr />
//     <p>
//       Tarefa: <input [(ngModel)]="tarefa" /> 
//       <button>Adicionar</button>
//     </p>
//     <ul>
//       @for(item of listaTarefas; track item; let idx = $index) {
//         <li>{{ item }} <button (click)="remover(idx)"> - </button> </li>
//       }
//     </ul> 
//   `,
// })
// export class Playground {
//   tarefa = 'Arrumar o carro';
//   listaTarefas: string[] = [];

//   adicionar() {
//     this.listaTarefas.push(this.tarefa);
//   }

//   remover(index: number) {
//     this.listaTarefas.splice(index, 1);
//   }
// }

// bootstrapApplication(Playground);
