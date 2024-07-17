# Application bureautique de l'hôpital SoigneMoi

Cette application permet aux secrétaires de l'hôpital de voir toutes les entrées et sorties des patients à la date du jour. Chaque séjour concerné s'affiche sur un tableau de bord sous forme de card. Le bouton "Dossier patient" affiche une modale avec tout le récapitulatif de l'information du séjour : informations personnelles du patient, détails du séjour, avis et prescriptions du médecin.

Le bouton "Fin du séjour" permet aux secrétaires de considérer le séjour comme "terminé". Au clic sur ce bouton, le séjour ne s'affichera donc plus sur le tableau de bord.
Le fichier d'installation peut être téléchargé depuis GitHub en suivant le lien suivant : https://github.com/AroldMauger/soignemoi-bureautique/releases/tag/0.1
 
## Installation sur votre ordinateur (Windows 64bit) depuis le fichier GitHub 
1. Rendez-vous à l'adresse : https://github.com/AroldMauger/soignemoi-bureautique/releases/tag/0.1
2. Choisissez le fichier d'installation soignemoi-bureautique_0.1.0_x64-setup.exe
3. Ouvrez le fichier depuis le dossier des téléchargements de votre ordinateur
4. Si Windows cherche à vous protéger contre l'installation d'une application non reconnue, cliquez sur "Informations complémentaires" et/ou "Exécuter quand même".
5. Suivez les étapes de l'installation et lancez l'application.
6. Pour vous connecter en tant que secrétaire, utilisez les identifiants suivants :
- Email : secretary@soignemoi.fr
- Mot de passe : test
7. Vous avez accès au tableau de bord secrétaire.


## Technologies utilisées

Le projet a été réalisé avec les technologies suivantes :

- Vite (version 5.3.1)
- Tauri (version 1.6.0)
- React (version 18.3)
- Appel au backend Symfony de l'application web (https://soignemoi.alwaysdata.net/)
- SASS
- JavaScript
- Jest et Cypress pour les tests

## Configuration et lancement du projet (en local)

### Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les éléments suivants sur votre machine :

1. **Node.js et npm**
2. **Rust**
3. **Tauri CLI**

### Installation et lancement (en local)

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
