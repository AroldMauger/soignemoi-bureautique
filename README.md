# Application bureautique de l'hôpital SoigneMoi

Cette application permet aux secrétaires de l'hôpital de voir toutes les entrées et sorties des patients à la date du jour. Chaque séjour concerné s'affiche sur un tableau de bord sous forme de card. Le bouton "Dossier patient" affiche une modale avec tout le récapitulatif de l'information du séjour : informations personnelles du patient, détails du séjour, avis et prescriptions du médecin.

Le bouton "Fin du séjour" permet aux secrétaires de considérer le séjour comme "terminé". Au clic sur ce bouton, le séjour ne s'affichera donc plus sur le tableau de bord.

## Technologies utilisées

Le projet a été réalisé avec les technologies suivantes :

- Vite (version 5.3.1)
- Tauri (version 1.6.0)
- React (version 18.3)
- Appel au backend Symfony de l'application web (https://github.com/AroldMauger/soignemoi-web.git)
- SASS
- JavaScript
- Jest et Cypress pour les tests

## Configuration et lancement du projet (en local)

### Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les éléments suivants sur votre machine :

1. **Node.js et npm**
2. **Rust**
3. **Tauri CLI**

### Installation et lancement

1. Clonez ce dépôt sur votre machine :
   git clone https://github.com/AroldMauger/soignemoi-bureautique.git 

2. Accédez au répertoire du projet :
   cd nom-du-projet

3. Installez les dépendances à l'aide de NPM :
    npm install

4. Construire l'application Tauri :
    npm run tauri dev

5. Démarrer l'application Tauri :
   npm run dev
