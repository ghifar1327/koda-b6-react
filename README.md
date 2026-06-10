# Coffee Shop

A React + Vite project for a coffee shop web application with user authentication, product browsing, order handling, and admin management pages.

## Ringkasan

- Frontend: React 19 dengan Vite
- Routing: React Router Dom
- State management: Redux Toolkit dan Redux Persist
- Form validation: React Hook Form dan Yup
- Fitur utama: katalog produk, detail produk, keranjang/pembayaran, riwayat pesanan, profil pengguna, dan panel admin untuk produk, pengguna, dan pesanan.

## Struktur Proyek

```
coffee-shop/
├─ public/
│  ├─ eWallet/
│  ├─ icons/
│  └─ logos/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Button.jsx
│  │  │  ├─ Input.jsx
│  │  │  └─ Voucher.jsx
│  │  ├─ feature/
│  │  │  ├─ Filter.jsx
│  │  │  ├─ Message.jsx
│  │  │  ├─ Modal.jsx
│  │  │  ├─ OrderAction.jsx
│  │  │  ├─ ProductActions.jsx
│  │  │  └─ UserAction.jsx
│  │  ├─ layouts/
│  │  │  ├─ AdminLayout.jsx
│  │  │  ├─ AuthLayout.jsx
│  │  │  ├─ DetailLayout.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ MainLayout.jsx
│  │  │  ├─ MobileMenu.jsx
│  │  │  ├─ ProtectedRoute.jsx
│  │  │  ├─ SideBar.jsx
│  │  │  └─ SideMenu.jsx
│  │  └─ product/
│  │     └─ Card.jsx
│  ├─ context/
│  │  ├─ AuthContext.jsx
│  │  ├─ FetchContex.jsx
│  │  └─ InvoiceContext.jsx
│  ├─ hooks/
│  │  └─ useLocalStotage.js
│  ├─ lib/
│  │  └─ http.js
│  ├─ pages/
│  │  ├─ DetailProduct.jsx
│  │  ├─ ForgotPwd.jsx
│  │  ├─ History.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ LoginPage.jsx
│  │  ├─ NotfoundPage.jsx
│  │  ├─ Order.jsx
│  │  ├─ Payment.jsx
│  │  ├─ ProductsPage.jsx
│  │  ├─ Profile.jsx
│  │  ├─ RegisterPage.jsx
│  │  ├─ ResetPasswoed.jsx
│  │  └─ admin/
│  │     ├─ Dashboard.jsx
│  │     ├─ OrderAdmin.jsx
│  │     ├─ ProductsAdmin.jsx
│  │     └─ UsersAdmin.jsx
│  ├─ redux/
│  │  ├─ store.js
│  │  └─ reduser/
│  │     ├─ index.js
│  │     └─ products.slice.js
│  ├─ global.css
│  ├─ main.jsx
│  └─ Router.jsx
├─ .env
├─ .gitignore
├─ dockerfile
├─ eslint.config.js
├─ index.html
├─ nginx.conf
├─ package.json
├─ package-lock.json
├─ README.md
└─ vite.config.js
```

- `src/`: Kode sumber aplikasi
  - `assets/`: gambar dan aset statis
  - `components/`: komponen UI umum dan fitur khusus
  - `context/`: React context untuk autentikasi, fetch, dan invoice
  - `hooks/`: custom hooks (misalnya `useLocalStotage`)
  - `lib/`: utilitas HTTP
  - `pages/`: halaman aplikasi untuk pengguna dan admin
  - `redux/`: store Redux dan slice produk
- `public/`: aset publik yang di-copy langsung ke build
- `index.html`: entry point aplikasi
- `vite.config.js`: konfigurasi Vite
- `eslint.config.js`: konfigurasi ESLint

## Prasyarat

- Node.js 18+ (direkomendasikan)
- npm 9+ atau npm terbaru yang kompatibel

## Instalasi

1. Buka terminal di folder proyek:
   ```bash
   cd /home/ghifar/koda-b6/coffee-shop
   ```
2. Pasang dependensi:
   ```bash
   npm install
   ```

## Menjalankan Aplikasi

1. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
2. Buka browser ke alamat yang ditampilkan, biasanya:
   ```text
   http://localhost:5173
   ```

## Perintah Tambahan

- `npm run build`
  - Membangun aplikasi untuk produksi ke folder `dist/`.
- `npm run preview`
  - Menjalankan preview build produksi secara lokal.
- `npm run lint`
  - Menjalankan ESLint pada seluruh proyek.

## Catatan

- Jika ada file `.env`, pastikan variabel lingkungan yang diperlukan tersedia sebelum menjalankan aplikasi.
- Folder `dist/` berisi hasil build produksi.
- `dockerfile` dan `nginx.conf` tersedia untuk penggunaan deployment khusus.

## Lisensi

Proyek ini belum ditentukan lisensinya. Tambahkan file `LICENSE` jika perlu.
