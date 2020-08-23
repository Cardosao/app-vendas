export class Cliente {

  private id: number;
  private nome: string;
  private cpf: string;
  private ativo: boolean;
  private dataCadastro: string;
  private dataUltimaAtualizacao: string;

  constructor(nome: string, cpf: string, ativo: boolean) {
    this.nome = nome;
    this.cpf = cpf;
    this.ativo = ativo;
  }

  get getId(): number {
    return this.id;
  }

  get getNome(): string {
    return this.nome;
  }

  set setNome(value: string) {
    this.nome = value;
  }

  get getCpf(): string {
    return this.cpf;
  }

  set setCpf(value: string) {
    this.cpf = value;
  }

  get getAtivo(): boolean {
    return this.ativo;
  }

  set setAtivo(value: boolean) {
    this.ativo = value;
  }

  get getDataCadastro(): string {
    return this.dataCadastro;
  }

  get getDataUltimaAtualizacao(): string {
    return this.dataUltimaAtualizacao;
  }

}
