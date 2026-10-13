# Salud Sexual y Reproductiva - Pasto Salud E.S.E. & UCC

Sitio web informativo e interactivo para la promoción de la salud sexual, reproductiva y acceso gratuito al implante subdérmico **Sinoimplant® (Levonorgestrel 150 mg)** en el Hospital Santa Mónica, en convenio entre Pasto Salud E.S.E. y la Universidad Cooperativa de Colombia (UCC).

## 🚀 Tecnologías

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** (DM Sans & Material Symbols)

---

## 💻 Desarrollo Local

Para correr el proyecto localmente:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para probar la compilación de producción:

```bash
npm run build
npm run start
```

---

## ☁️ Despliegue en Vercel

El proyecto está 100% configurado y optimizado para desplegarse en **Vercel** sin necesidad de configuración adicional.

### Opción 1: Despliegue desde GitHub (Recomendado)

1. Sube este repositorio a tu cuenta de GitHub:
   ```bash
   git add .
   git commit -m "feat: landing salud sexual y reproductiva pasto salud"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/santamonica.git
   git push -u origin main
   ```
2. Ve a [vercel.com](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New..."** > **"Project"**.
4. Selecciona el repositorio `santamonica` e impórtalo.
5. Vercel detectará automáticamente que es un proyecto **Next.js**.
6. Haz clic en **Deploy**. ¡Tu página estará en línea en segundos con HTTPS y CDN global!

### Opción 2: Despliegue directo mediante Vercel CLI

Si tienes instalado o quieres usar el CLI de Vercel directamente en la terminal:

```bash
npx vercel
```

Sigue las instrucciones en pantalla para vincular tu cuenta y tu proyecto. Para desplegar directamente a producción:

```bash
npx vercel --prod
```
