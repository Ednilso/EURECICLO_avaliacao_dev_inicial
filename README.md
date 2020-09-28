# EURECICLO avaliação de desenvolvimento inicial
Desafio de programação inicial elaborado pela Eureciclo

Dado um conjunto de garrafas d'água, com volumes de água diferentes entre si, e um galão de água.
Crie um algoritmo, na linguagem que achar melhor, para escolher as garrafas a serem utilizadas para encher o galão, de acordo:
- 1) O galão deve ser completamente preenchido com o volume das garrafas;
- 2) Procure esvaziar totalmente as garrafas escolhidas;
- 3) Quando não for possível esvaziar todas garrafas escolhidas, deixe a menor sobra possível;
- 4) utilize o menor número de garrafas possível;

## Resposta
Para resolver o problema proposto pelo desafio, utilizei a técnica do modelo matemático de "Subsequência", que consiste em construir uma subsequência derivada de outra sequência, excluindo alguns ou nenhum elemento, sem alterar a ordem dos elementos restantes. 
As subsequências podem conter elementos consecutivos, que não eram consecutivos na sequência original. A metodologia aplicada na subsequência consiste em uma execução consecutiva de elementos da sequência original, da esquerda para a direita.
A aplicação desta metodologia supera, em velocidade, a técnica de combinação, visto que essa técnica possibilita a duplicação de elementos. Na metodologia da subsequência não há essa duplicação e o máximo de subsequências possíveis pode ser representado pela potência 2^n, sendo n o número de elementos da sequência principal.
A solução apresenta o seguinte comportamento:
- Solicita o volume do galão até que seja informado um valor acima de zero;
- Solicita a quantidade de garrafas até que seja informado um valor acima de zero, e;
- Solicita o volume individual de cada garrafa até que seja informado um valor acima de zero e que ele seja diferente dos valores informados anteriormente.
Ao final da inserção das informações solicitadas, a execução do algorítimo é finalizada se o somatório dos volumes das garrafas for inferior ao conteúdo do galão. 

### Característica do algorítimo:
O algorítimo foi desenvolvimento na linguagem de programação Javascript para o ambiente Node.js. 
**Estrutura do algorítimo:**
As principais rotinas do algorítimo são representadas pelas seguintes funções:
- Função **pegarDados()**; 
  - Linha 20 a 24 - Responsável pela coleta das informações digitadas pelo usuário;
- Função **somaVolume()**; 
  - Linha 26 a 32 - Responsável pelo cálculo do total dos volumes das subsequências; 
- Função **selecionarVolumeGarrafaIdeal()** ;
  - Linha 34 a 75 - Responsável pelo cálculo do total dos volumes das subsequências;
- Função **fnc()** ;
  - Linha 47 a 70 - Função interna da função **selecionarVolumeGarrafaIdeal()** - Responsável pela aplicação da técnica Subsequência para identificar a subsequência que enche o galão com a menor sobra de volume nas garrafas e com o menor número de garrafas. A verificação é realizada por meio da combinação do volume das garrafas da esquerda para a direita. A técnica utilizada analisa todas as possibilidades sem realizar permutação ou combinação, o que resulta no número máximo de ciclo de repetição na potência de 2^n; e
 - Função **start()**.
   - Linha 79 a 125 - Função principal - Responsável por controlar a sequência lógica de execução do algorítimo.
