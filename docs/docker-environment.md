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
