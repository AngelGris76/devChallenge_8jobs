# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Api a utilizar

Al no estar disponible job.github, utilizo adzuna

```
https://api.adzuna.com/v1/api/jobs/{country code}/search/{page number}?app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}
```

### Parametros para la api

results_per_page: resultados por pagina
where: ubicacion del trabajo
what: clave a buscar
full_time: si es igual a 1, indica trabajos full time

### requisitos

- ~~se puede ver una lista de trabajos en una ciudad por defecto~~
- ~~se puede buscar trabajos con una descripcion determinada~~
- ~~se puede buscar trabajos por nombre de ciudad, codigo zip, u otro~~
- ~~se puede escoger entre 4 opciones predeterminadas~~
- ~~se puede buscar sólo trabajos full time~~
- ~~se verá la lista de trabajos con logo, nombre de compañía ubicación y el tiempo de publicación~~
- ~~cuando se seleccione un trabajo, se verá la descripción y como aplicar~~
- ~~cuando se esté en la descripción, se podrá volver atrás~~
- ~~opcional, se podrá ver la lista de trabajos en diferentes páginas~~

####

La api que estoy utilizando no muestra logo.
No muestra una descripción completa y tampoco como aplicar al trabajo
La ubicación por defecto es Florida
Las opciones predeterminadas serán distintas ciudades
