# hydrophyto-site

Site public de **CLEVERSYSTECH** (https://cleversystech.com) : page société, et pages confidentialité et support de l'application iOS **Hydro-phyto**.
Site 100 % statique, sans build ni dépendance.

```
index.html          page société CLEVERSYSTECH : présentation, Hydro-phyto, contact, mentions légales
privacy.html        politique de confidentialité
support.html        support et FAQ
app-store.html      fiche App Store FR / EN / AR (interne : noindex, non liée depuis l'accueil)
assets/css/style.css  charte de l'app (#32404e, gris de l'app, cartes)
assets/js/lang.js     choix de la langue FR / EN / AR (RTL pour l'arabe)
assets/js/listing.js  fiche App Store : compteurs de caractères et boutons « Copier »
assets/img/           logo (clair / sombre) et favicon
```

## Langues

Chaque page contient les trois langues. Ordre de choix :
`?lang=fr|en|ar` dans l'URL, puis le dernier choix du visiteur, puis la langue du téléphone, sinon l'anglais.

## App Store Connect

- **URL de la politique de confidentialité** : `https://www.cleversystech.com/privacy`
- **URL d'assistance** : `https://www.cleversystech.com/support`

## Tester en local

```sh
python3 -m http.server 8080
# puis http://localhost:8080/privacy.html
```

## Publier

Le site est servi par Cloudflare sur le domaine `cleversystech.com`, en HTTPS.
Il suffit de copier le contenu du dossier à la racine du site.

L'API de l'app (`api.cleversystech.com`) passe elle aussi par Cloudflare (Cloudflare Tunnel vers le relais AWS).
Cloudflare est donc cité comme sous-traitant dans `privacy.html` : à garder à jour si l'infrastructure change.

## Mettre à jour

Quand l'app change (autorisations iOS, données, parcours de réinitialisation), modifier le texte
**dans les trois langues** et la date « Dernière mise à jour » en haut de `privacy.html`.
