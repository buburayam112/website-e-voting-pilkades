@echo off
cd /d "%~dp0"
title EVOTE MEMPAWAH - Local Server

echo =================================================================
echo       PORTAL INFORMASI E-VOTING PILKADES MEMPAWAH 2026
echo =================================================================
echo.

REM Tambahkan path D:\Koding jika belum terdaftar di session
set "PATH=D:\Koding;%PATH%"

REM Cek apakah node_modules sudah terpasang
if not exist "node_modules\" (
  echo [*] Dependensi belum terpasang. Menjalankan npm install...
  echo     Mohon tunggu sebentar hingga selesai...
  echo.
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo [!] Gagal memasang dependensi. Pastikan komputer terhubung ke internet.
    pause
    exit /b 1
  )
  echo.
  echo [*] Dependensi berhasil terpasang!
  echo.
)

echo [*] Menjalankan server pengembangan Astro...
echo.
echo =================================================================
echo   Alamat Akses Website:
echo   - Portal Masyarakat (Utama) : http://localhost:4321/
echo   - Halaman Login Admin       : http://localhost:4321/admin/login
echo   - Dashboard Kelola Berita   : http://localhost:4321/admin
echo.
echo   Kredensial Admin Default:
echo   - Username : admin  (atau admin@mempawahkab.go.id)
echo   - Password : admin
echo =================================================================
echo.
echo Tekan CTRL + C di jendela ini untuk mematikan server.
echo.

call npm.cmd run dev
pause
