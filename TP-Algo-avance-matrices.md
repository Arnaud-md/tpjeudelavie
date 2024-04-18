# Les matrices

## Un peu de contexte

Depuis le début de l'année, on appelle une liste de valeurs un tableau.
On a vu comment les manipuler, les parcourir, les modifier, les trier, les filtrer, les réduire, etc.
Maintenant on aimerait voir comment on peut manipuler des matrices.
Le commun des mortels appelle ça un tableau Excel :) Et c'est d'ailleur la remarque que vous m'aviez faite lors de la première séance d'algo.
Les mathématiciens appellent ça une matrice. Et les développeurs appellent ça un tableau à deux dimensions ou tableau de tableaux.

Les matrices sont très utilisées en informatique, notamment en traitement d'images, en intelligence artificielle, en cryptographie, en simulation, en calcul scientifique, pour les jeux vidéos, etc.

On aura accès à pas mal d'outils reliés à un repère cartésien, à des vecteurs, à des matrices, à des transformations, etc.

## Notre première utilisation des matrices

Notre objectif sera essentiellement de se repérer dans un tableau à deux dimensions.
Etre capable, comme pour les tableaux au début de l'année, de parcourir, de modifier... une matrice.

Nous allons donc commencer par créer une matrice de 3 lignes et 3 colonnes.
Et allons essayer de créer un carré magique.
Ici un exemple de carré non magique :

```typescript
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

### Exercice 1 - Afficher un carré magique

Afficher la matrice dans la console au format suivant :
La grille est affichée et aux extrémités nous afficherons les sommes par lignes et par colonnes

```
-------------
| 1 | 2 | 3 | 6
-------------
| 4 | 5 | 6 | 15
-------------
| 7 | 8 | 9 | 24
-------------
 12  15  18
```

### Exercice 2 - Manipuler la grille

Remplir cette grille à la mano ^^

1 - Créer une matrice vide à partir d'un tableau vide
    Cela nécessite de bien faire la différence entre tableau et matrice.
    Ici nous souhaitons une matrice de 3 par 3.
2 - Remplir cette matrice case par case avec les données de l'exemple suivant :
```plaintext
8 1 6
3 5 7
4 9 2
```

### Exercice 3 - Algorithme pour remplir un carré magique

Ecrire l'algorithme suivant qui permet de saisir un carré magique.
Cet algorithme fonctionne pour les carrés de taille impaire.
Vous pouvez dans un premier temps essayer de le faire fonctionner spécifiquement pour une matrice de 3 par 3.

Suivez cette liste d'instructions pour remplir la matrice :
1 - Placer le 1 dans la première colonne du milieu de la première ligne
2 - Placer le prochain nombre en haut et à droite de la case précédente
    - Si la case est en dehors de la matrice :
        - trop haute => revenir en bas
        - trop à droite => revenir à gauche
3 - Si la case est déjà occupée, placer le prochain nombre en dessous de la dernière case remplie

Voici le remplissage attendu

```plaintext
-------------
|   | 1 |   | 1
-------------
|   |   |   | 0
-------------
|   |   |   | 0
-------------
 0 | 1 | 0

-------------
|   | 1 |   | 1
-------------
|   |   |   | 0
-------------
|   |   | 2 | 2
-------------
 0 | 1 | 2

-------------
|   | 1 |   | 1
-------------
| 3 |   |   | 3
-------------
|   |   | 2 | 2
-------------
 3 | 1 | 2

-------------
|   | 1 |   | 1
-------------
| 3 |   |   | 3
-------------
| 4 |   | 2 | 6
-------------
 7 | 1 | 2

-------------
|   | 1 |   | 1
-------------
| 3 | 5 |   | 8
-------------
| 4 |   | 2 | 6
-------------
 7 | 6 | 2

-------------
|   | 1 | 6 | 7
-------------
| 3 | 5 |   | 8
-------------
| 4 |   | 2 | 6
-------------
 7 | 6 | 8

-------------
|   | 1 | 6 | 7
-------------
| 3 | 5 | 7 | 15
-------------
| 4 |   | 2 | 6
-------------
 7 | 6 | 15

-------------
| 8 | 1 | 6 | 15
-------------
| 3 | 5 | 7 | 15
-------------
| 4 |   | 2 | 6
-------------
 15 | 6 | 15

-------------
| 8 | 1 | 6 | 15
-------------
| 3 | 5 | 7 | 15
-------------
| 4 | 9 | 2 | 15
-------------
 15 | 15 | 15
```

## Le jeu de la vie

Le jeu de la vie est un jeu qui permet de définir des règles de survie, de reproduction ou de mort d'une population de cellules. Il n'a pas obligatoirement de but mais est une curiosité dans le sens ou certains phénomènes proche de notre compréhension de l'évolution s'y produise.

Imaginons plusieurs planètes, avec des paramètres différents pour chacunes. Certaines permettent la vie alors que beaucoup ne parviennent pas à faire survivre une émergence de vie.

Une configuration en particulier permet de réaliser des patterns interessants.

Dans ce TP, vous réaliserez une application React permettant l'affichage d'une telle grille.

Une des règles les plus connues est la suivante :
- Une cellule morte avec exactement 3 cellules voisines vivantes devient vivante
- Une cellule vivante avec 2 ou 3 cellules voisines vivantes reste vivante

Liens utiles :
- [Wikipedia - Jeu de la vie](https://fr.wikipedia.org/wiki/Jeu_de_la_vie)
- [Science étonnante - Jeu de la vie](https://www.youtube.com/watch?v=S-W0NX97DB0&t=11s)
- [ Science étonnante - Jeu de la vie 2 = lenia](https://www.youtube.com/watch?v=PlzV4aJ7iMI)

### Créer une application React avec une grille

1 - Créer une application React avec vite
2 - Dans App, créer un titre "jeu de la vie"
3 - Dans App, afficher un compteur permettant de compter le nombre de générations
4 - En dessous, créer une grille de 10 par 10, reliée à un état : un tableau de 10 par 10 égalent et l'afficher
5 - Créer un bouton "prochaine génération" qui permet de générer la génération suivante
6 - Créer la callback permettant de générer la génération suivante et de mettre à jour l'état de la grille.

### Bonus

- Créer un bouton "Nouvelle partie" qui permet de remettre à zéro la grille aléatoirement
- Rendre paramétrable les conditions de survie et de naissance