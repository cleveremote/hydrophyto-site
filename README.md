# hydrophyto-site

Pages publiques de l'application iOS **Hydro-phyto** (CLEVERSYSTECH) : confidentialité et support.
Site 100 % statique, sans build ni dépendance.

```
index.html          accueil : liens vers les deux pages
privacy.html        politique de confidentialité
support.html        support et FAQ
assets/css/style.css  charte de l'app (#32404e, gris de l'app, cartes)
assets/js/lang.js     choix de la langue FR / EN / AR (RTL pour l'arabe)
assets/img/           logo (clair / sombre) et favicon
```

## Langues

Chaque page contient les trois langues. Ordre de choix :
`?lang=fr|en|ar` dans l'URL, puis le dernier choix du visiteur, puis la langue du téléphone, sinon l'anglais.

## App Store Connect

- **URL de la politique de confidentialité** : `https://<domaine>/privacy.html`
- **URL d'assistance** : `https://<domaine>/support.html`

## Tester en local

```sh
python3 -m http.server 8080
# puis http://localhost:8080/privacy.html
```

## Publier

N'importe quel hébergeur de fichiers statiques convient (GitHub Pages, Netlify, S3 + CloudFront, Caddy…).
Il suffit de copier le contenu du dossier à la racine du site, en HTTPS.

## Mettre à jour

Quand l'app change (autorisations iOS, données, parcours de réinitialisation), modifier le texte
**dans les trois langues** et la date « Dernière mise à jour » en haut de `privacy.html`.
Le délai de réponse du support (`[ex. 2 jours ouvrés]`, surligné en jaune) reste à renseigner dans `support.html`.
