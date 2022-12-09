<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://scontent.fpei1-1.fna.fbcdn.net/v/t1.6435-9/65561324_2360858130793916_1700865331922206720_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=hzTceAgHE_sAX98VwSF&_nc_ht=scontent.fpei1-1.fna&oh=00_AfAlLEQoMZArlO3bioXa6-4BK1KnZWih8KrZw9JVmZaf-Q&oe=63B37D99" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Framework MVC</h3>

  <p align="center">
    Frontend de la app para la asignatura de Framework MVC con VUE.JS
    Grupo:PREELEC2202PC-TDS0032
    <br />
    <a href="https://github.com/osm3030/front-vue"><strong>Acceder al Frontend »</strong></a>
    <br />
    <a href="https://github.com/osm3030/backend-laravel"><strong>Acceder al Backend »</strong></a>
    <br />
    <br />
    <a href="https://github.com/osm3030">Oscar Andres Mantilla Franco</a>

  </p>
</div>

<div align="center">

[![Next][Laravel]][Laravel-url]
[![Mysql]][Mysql-url]

</div>


<!-- Secciones -->

## Configuracion de conexion a base de datos

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306


## Instrucciones

1. composer install
2. Generar archivo .env
3. php artisan key:generate
4. php artisan config:cache
5. npm install
6. php artisan migrate
7. php artisan serve

## Rutas

# Categories:

Consultar categorías
- Get:  _api/category_  

Consultar categoría por id
- Get: _api/category/{id}_  

Crear nueva categoría
- Post: _api/category/store_  

Actualizar una categoría por id
- Post: _api/category/{id}/update_  

Eliminar una categoría por id
- Delete:  _api/category/{id}/destroy_  

---------------------------------
# Posts:

Consultar posts
- Get: _api/post_  

Consultar post por id
- Get: _api/post/{id}_  

Crear un nuevo post
- Post: _api/post/store_  

Actualizar un post por id
- Post: _api/post/{id}/update_  

Eliminar un post por id
- Delete: _api/post/{id}/destroy_  

---------------------------------
# Users

Crear un nuevo usuario
- Post: _user/store_   

Actualizar un usuario por id
- Post: _user/{id}/update_  

Ingresar a un usuario existente
- Post: _user/login_   

Eliminar un usuario por id
- Delete: _user/{id}/destroy_  

Consultar los roles
- Get: _rol_


[contributors-shield]: https://img.shields.io/github/contributors/osm3030/Backend-Helpmeiudigital?style=for-the-badge&logo=github&color=red
[contributors-url]: https://github.com/osm3030/Backend-Helpmeiudigital/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/osm3030/Backend-Helpmeiudigital.svg?style=for-the-badge&color=yellow
[stars-url]: https://github.com/osm3030/Backend-Helpmeiudigital/stargazers
[issues-shield]: https://img.shields.io/github/issues/osm3030/Backend-Helpmeiudigital.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[Mysql]:https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[Security]:https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white
[Laravel]:https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg
[Laravel-url]:https://laravel.com
[Mysql-url]:https://www.mysql.com/

____________________________________________________

# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
