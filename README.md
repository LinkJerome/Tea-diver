# TIW8 - IOT : Projet Tea-diver

Groupe :
- GIL Jérôme => 11608911
- ICMEN Malik => 11704010
- TRÉMÉ Guillaume => 11507711
- VIGLIANO Léa => 11517348

## Idée de base : Tea Diver

On souhaite réaliser un contrôleur d'infusion d'une tasse de thé. On indique quel thé on souhaite infuser, une API va 
chercher les informations concernant son infusion, puis l'arduino va effectuer des contrôles. Il va vérifier la
si l'eau est à la bonne température, et va indiquer si elle est trop chaude ou trop froide.
A l'aide d'un moteur rotatif, l'arduino est capable de descendre et monter le sachet, pour démarrer et arrêter
l'infusion, mais aussi pour secouer le sachet pendant l'infusion pour qu'elle soit plus efficace.

## Cahier des charges

### Matériel nécessaire

- Arduino
- Breadboard
- Moteur rotatif Servo SM-S2039S
- Thermomètre waterproof DS18B20
- LED RGB
- Fil

### Côté logiciel

- API externe forkée de : https://github.com/victoria-lo/TAPI
- Serveur : Lancement de l'application, écoute de l'arduino => Express, Johnny-Five. 
- Interface web : Choix du thé, affichage température, lancement de la préparation du thé => SPA React simple

### Besoins
Permets de gérer l'infusion d'un thé :
- Un moteur permet de plonger le thé dans l'eau chaude, le retirer et le secouer pendant l'infusion
- Un capteur permet de mesurer la température de l'eau pour s'assurer d'une infusion en conditions optimale

### Contraintes
- Nécessite un tiers pour faire chauffer l'eau
- Nécessite un tiers pour accrocher le sachet de thé et l'enlever une fois le processus terminé

## Lancement du projet

Installation des dépendances :
```
yarn install
ou
npm install
```

Build le projet :
```
yarn build
ou
npm run build
```

Lancement du serveur :
```
yarn start
ou
npm run start
```
Accéder à l'application à [cette adresse](http://localhost:3000/)

## Fonctionnement : Tea Diver

Commencer par démarrer le serveur et accéder à l'application.

Une fois que vous pouvez accéder à l'application, vous pouvez mettre votre contenant d'eau chaude, accrocher vôtre thé 
et selectionner le thé qui correspond au vôtre dans l'application (peu importe l'ordre).

Le bouton de lancement ne sera pas actionnable temps que vous n'aurez pas respecté les conditions suivantes :
- Avoir sélectionné un thé
- Avoir une eau avec une température aux environs de celle conseillé pour le thé selectionné

Une fois les conditions respectées, le bouton de lancement est actionnable, vous pourrez alors déclencher l'infusion.

Une fois l'infusion déclenchée, la led s'allumera en rouge qui indiquera que le processus est en cours.
Le thé sera alors plongé dans l'eau et secoué régulièrement.

Une fois le temps d'infusion écouler, le sachet sera remonté, la led passera au vert et vous pourrez récupérer
votre thé.