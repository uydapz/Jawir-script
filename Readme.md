
# Project Title

A brief description of what this project does and who it's for

Jawir Script VS Code Extension

Extension VS Code untuk bahasa pemrograman Jawir Script.
Digunakan untuk menulis, membaca, dan menjalankan file Jawir langsung dari VS Code.

Project ini dibuat untuk eksperimen bahasa sederhana dengan syntax custom.

Fitur utama

Syntax highlighting untuk file .jawir

Konfigurasi bahasa seperti comment dan bracket

Menjalankan file Jawir langsung dari VS Code

Contoh file Jawir untuk testing

Struktur project

src/extension.js
File utama extension. Mengatur aktivasi dan command VS Code.

syntaxes/
Berisi aturan syntax highlighting Jawir Script.

language-configuration.json
Mengatur comment, pasangan bracket, dan auto close.

interpreter/jawir-runner.js
Script untuk menjalankan file Jawir.

test.jawir
Contoh file bahasa Jawir.

Teknologi

JavaScript

Node.js

VS Code Extension API

Cara menjalankan di lokal

Clone repository ini

Buka folder di VS Code

Jalankan npm install

Tekan F5 untuk menjalankan Extension Development Host

Buka file .jawir dan coba jalankan

Tujuan project

Belajar membuat VS Code Extension

Eksperimen bahasa pemrograman sederhana

Latihan membuat interpreter dasar

Status
Masih tahap pengembangan dan eksperimen.

Kontributor
Nama kamu
