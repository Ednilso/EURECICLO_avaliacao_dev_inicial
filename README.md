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

A aplicação desta medodoligia para resolução do problema proposto supera em velocidade a técnia de combinação, visto que a técnia de combinação possibilita a duplicação de elementos e a metodologia da subsequência nã há duplicação de elementos, e o máximo de subsequências possíveis pode ser representada pela potência 2^n, sendo n o número de elementos da sequência principal.

A solução apresenta o seguinte comportamento:

- Solicita o volume do galão até que seja informado um valor acima de 0;
- Solicita a quantidade de garrafas até que seja informado um valor acima de 0;
- Solicita o valuume individual de cada garrafa até que seja informado um valor acima de 0 e diferente dos valores informados anteriormente; e
- Após o térmido da inserção das informações solicitadas a execução do algorítmo é finalizado se o somatório dos volumes das garrafas for inferior ao conteúdo do galção..

Característica do algorítmo:

O algorítmo foi desenvolvimento na linguagem de programação Javascript para o ambiente Node.js. 

Estrutura do algorítimo:

As principais rotinas do algorítmo são representadas pelas seguintes funções:

- Função **pegarDados()** 
  - linha 20 a 24 - Responsável pela coléta das informações digitadas pelo usuário;

- Função **somaVolume()** 
  - linha 26 a 32 - Responsável pelo cálculo do total dos volumes das subsequências;
  
- Função **selecionarVolumeGarrafaIdeal()** 
  - linha 34 a 64 - Responsável pela cálculo do total dos volumes das subsequências;

- Função **fnc()** 
  - linha 43 a 64 - Função interna da funcção **selecionarVolumeGarrafaIdeal()** - Responsável pela aplicação da técnica Subsequência para identificar a subseqência que enche o galão com a menor sobra de volume nas carrafas. A verificação é realizada por meio da combinação do volume das garrafas da esquerda paa a direita. A técnica utilizada analisa todas as possibilidades sem realizar permutação ou combinação que resulta no número máximo de ciclo de repetição na portência de 2^n. O processo de análise será interrompdo na primeira ocorrência de igualdade dos volumes das garrafas em analse com a capacidade do volume do galão. Na hipótese de não haver igualdade entre os volumes dos galões com alguma coleção de volume das garrafas a rotina irá ler todas as possibilidades e selecionar a ocorrência que apresentar o menor valor de resto não utilizado do volume das garrafas. 

 - Função **start()** 
   - linha 73 a 119 - Função principal - Responsável por controlar a sequência lógica de execução do algorítmo.

```
## Resposta

## Sobre diversidade
A eu**reciclo** se esforça para manter um ambiente seguro para todos os profissionais e candidatos, se você acha que tem um fit bom com a empresa, não importa como você se identifica, sua idade, gênero e localização geográfica, você é bem vindo, aplique! :rainbow_flag: :brown_heart: :curly_haired_woman: :person_white_hair:
