import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoSeparadoIfen'
})
export class TextoSeparadoIfenPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const palavras: string[] = value.split(' ')
    let palavraTransformada: string = '';

    palavras.forEach(palavra => {
      let novaPalavra: string = '';
      for (const letra of palavra) {
        novaPalavra += letra + '-';
      }

      palavraTransformada += novaPalavra + ' ';
    });

    return palavraTransformada;
  }

}
