# Docker-ympäristön käyttöönotto (MongoDB)

## 1. Alkuun tarkistetaan dockerin toimivuus

```bash
docker --version
docker compose version
```

## 2. Käynnistä Mongo-kontti

Aja komento projektin juuresta:

```bash
docker compose up -d
```

## 3. Testaa MongoDB

```bash
docker exec -it mongo_lab mongosh
```

lopeta ajo:

```text
quit
```
## 4. Kopioi tiedostot konttiin

```bash
docker cp mongodb/create-db.js mongo_lab:/create-db.js
docker cp mongodb/seed-data.js mongo_lab:/seed-data.js
```

# 5. Luo tietokanta ja syötä testidata

```bash
docker exec -it mongo_lab mongosh
```

```js
load("/create-db.js")
load("/seed-data.js")
```

## 6. Testaa kyselyt

Kopioi yksittäisiä kyselyitä tiedostosta `mongodb/queries-for-use-cases.js` suoraan mongosh konsoliin.

## 7. Nollaa tietokanta tarvittaessa

```js
use("tobak_express")
db.dropDatabase()
load("/create-db.js")
load("/seed-data.js")
```

## 8. Sammuta ympäristö

```bash
docker compose down
```