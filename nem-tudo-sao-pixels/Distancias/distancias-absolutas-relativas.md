# Distâncias absolutas <length>

São fixas e não alteram o seu valor

unidade           Nome                             Equivalência
cm                   Centímetros                   1cm = 96px/2.54
in                     Inches (polegadas)        1in = 2.54cm = 96px
px                    Pixels                              1px = 1/96th of 1in

* O mais comun e mais utilizado é o **px**
* Não recomendado us cm

## Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela

* Benefícios: Maior adaptação aos diferentes tipos de telas

Unidade     Relativo a
em             Tamanho da font do pai
rem            Tamanho da font do elemento raiz (root/html)
vw              1% da Viewport width
vh               1% da viewport height