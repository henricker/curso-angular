import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "dio-cadastro-filmes",
  templateUrl: "./cadastro-filmes.component.html",
  styleUrls: ["./cadastro-filmes.component.scss"],
})
export class CadastroFilmesComponent implements OnInit {
  cadastro: FormGroup;
  generos: Array<string>;

  constructor(private fb: FormBuilder) {}

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit() {
    this.cadastro = this.fb.group({
      titulo: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256),
        ],
      ],
      urlFoto: ['', Validators.minLength(10)],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]]
    });

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];
  }

  salvar(): void {
    if(this.cadastro.invalid) {
      return;
    }

    alert(JSON.stringify(this.cadastro.value))
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }
}
