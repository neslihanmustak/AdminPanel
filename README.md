# API Projesi

Bu repo, Express tabanli bir REST API altyapisi ve MongoDB (Mongoose) model katmani iceren bir uygulamadir. API tum endpointleri `/api` prefix'i altinda sunar ve route dosyalari otomatik olarak yuklenir.

## Ozellikler
- Express uygulama iskeleti
- MongoDB baglantisi (Mongoose)
- Kategoriler icin baslangic CRUD ornekleri
- Ortak response formati ve hata sinifi
- Route'larin otomatik yuklenmesi

## Proje Yapisi
- `api/app.js`: Express uygulamasi ve middleware'ler
- `api/bin/www`: Sunucu baslatma ve DB baglanti noktasi
- `api/config`: Uygulama konfigurasyonu
- `api/db`: MongoDB baglanti sinifi ve Mongoose modelleri
- `api/routes`: API route dosyalari
- `api/lib`: Ortak response ve hata siniflari

## Kurulum
1. Bagimliliklari yukle:

```bash
cd api
npm install
```

2. Ortam degiskenlerini hazirla:
- `api/.env.example` dosyasini referans alarak `api/.env` olustur.

Ornek:
```bash
PORT=3000
LOG_LEVEL=debug
CONNECTION_STRING=mongodb://localhost:27017/MongoDb
```

## Calistirma

```bash
cd api
npm run dev
```

Uygulama varsayilan olarak `http://localhost:3000` uzerinde calisir.

## Endpointler
Route dosyalari otomatik yuklendiginden, `api/routes` altindaki her dosya otomatik olarak `/api/<dosyaadi>` olarak yayinlanir.

Mevcut ornekler:
- `GET /api/categories` 
- `POST /api/categories/add`
- `GET /api/users`
- `GET /api/roles`
- `GET /api/roleprivileges`
- `GET /api/auditlogs/:id`

## Notlar
- `api/.env` dosyasi git'e dahil edilmez.
- CRUD endpointleri ve dogrulama kurallari ihtiyaca gore genisletilebilir.

## Lisans
Bu proje ozel kullanim icindir.
