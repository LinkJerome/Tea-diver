# TIW8 - IOT : Projet Tea-diver

Groupe :
- GIL Jérôme => 11608911
- ICMEN Malik => 11704010
- TRÉMÉ Guillaume => 11507711
- VIGLIANO Léa => 11517348

[TOC]

## Idée de base : Tea Diver

On souhaite réaliser un contrôleur d'infusion d'une tasse de thé. On indique quel thé on souhaite infuser, une API va 
chercher les informations concernant son infusion, puis l'arduino va effectuer des contrôles. Il va vérifier la
température de l'eau si elle est à la bonne température, et va indiquer si elle est trop chaude ou trop froide.
A l'aide d'un moteur rotatif, l'arduino est capable de descendre et monter le sachet, pour démarrer et arrêter
l'infusion, mais aussi pour secouer le sachet pendant l'infusion pour qu'elle soit plus efficace.

## Cahier des charges

### Matériel nécessaire

Liste amenée à évoluer

- Arduino
- Breadboard
- Moteur rotatif SM-S2039S (rotatif précis)
- Capteur de température waterproof et montant jusqu'à 100°C
- Buzzer actif (alarme)
- Détecteur de présence (photorécepteur) pour la tasse ?

### Côté logiciel

- API externe forkée de : https://github.com/victoria-lo/TAPI
- Application arduino : gère le temps d'infusion et le moteur, vérifie la température
- Framework : interface entre l'arduino et le "serveur web", python
- Interface web : choix du thé, affichage température... SPA React simple

## Lancement du projet

Installation des dépendances :
```
yarn install
```

ou

```
npm install
```

Build le projet :
```
yarn dev
```

ou

```
npm run dev
```

Lancement du serveur :
```
yarn start
```

ou

```
npm run start
```