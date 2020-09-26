# EURECICLO avaliação de desenvolvimento inicial
Desafio de programação inicial elaborado pela Eureciclo

Dado um conjunto de garrafas d'água, com volumes de água diferentes entre si, e um galão de água.
Crie um algoritmo, na linguagem que achar melhor, para escolher as garrafas a serem utilizadas para encher o galão, de acordo:
- 1) O galão deve ser completamente preenchido com o volume das garrafas;
- 2) Procure esvaziar totalmente as garrafas escolhidas;
- 3) Quando não for possível esvaziar todas garrafas escolhidas, deixe a menor sobra possível;
- 4) utilize o menor número de garrafas possível;

## Resposta

Para resolver o problema proposto pelo desafio utilizei a técnica proposta pelo modelo matématico "Subsequência", que consiste em construir uma subsequência derivada de outra sequência excluindo alguns ou nenhum elemento sem alterar a ordem dos elementos restantes. 

As subseqüências podem conter elementos consecutivos que não eram consecutivos na seqüência original. 

A metodologia aplicada na subsequência consiste em uma execução consecutiva de elementos da sequência original da esquerda para a direita.

A aplicação desta medodoligia para resolução do problema proposto supera em velocidade a técnia de combinação, visto que a técnia de combinação possibilita a duplicação de elementos e a metodologia da subsequência nã há duplicação de elementos, e o máximo de subsequências possíveis pode ser representada por 2^n, sendo n o número de elementos da sequência principal.

A solução apresenta o seguinte comportamento:

- Solicita o volume do galão até que seja informado um valor acima de 0;
- Solicita a quantidade de garrafas até que seja informado um valor acima de 0;
- Solicita o valuume individual de cada garrafa até que seja informado um valor acima de 0 e diferente dos valores informados anteriormente; e
- Apó o térmido da inserção das informações solicitadas a execução do algorítmo é finalizado se o somatório dos volumes das garrafas for inferior ao conteúdo do galção..

Característica do algorítmo:

O algorítmo foi desenvolvimento na linguagem de programação Javascript para o ambiente Node.js. 

Estrutura do algorítimo:

As principais rotinas do algorítmo esntação disponstas da seguinte forma :

- Funcção **pegarDados()**
  - linha 24 a 28 - Responsável pela coléta das informações digitadas pelo usuário;

- Funcção **somaVolume()**
  - linha 35 a 41 - Responsável pelo cálculo do total dos volumes das subsequências;
  
- Funcção **selecionarVolumeGarrafaIdeal()**
  - linha 48 a 104 - Responsável pela cálculo do total dos volumes das subsequências;

- Funcção **fnc()**
  - linha 73 a 94 - Função interna da funcção **selecionarVolumeGarrafaIdeal()** - Responsável pela aplicação da técnica Subsequência para identificar a subseqência que enche o galão com a menor sobra de resto nas carrafas.

 - Funcção **start()**
   - linha 111 a 177 - Função principal - Responsável por acionar a execução das demais funções conforme as demandas.
  
