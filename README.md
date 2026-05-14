## Como modificar los letreros

### `<ucr-letrero>`

**Variables CSS** — en `ucr-letrero { }` dentro de `global.css`
- `--ucr-letrero-fondo` — color de fondo
- `--ucr-letrero-texto` — color del texto de las filas
- `--ucr-letrero-borde` — color del borde

**CSS Parts** — en `global.css`
- `ucr-letrero::part(fila)` — tamaño y fuente de cada fila
- `ucr-letrero::part(logo)` — tamaño del logo

**Slots** — en `index.html`
- `slot="titulo"` — texto del encabezado

### `<ucr-acoso>`

**Variables CSS** — en `ucr-acoso { }` dentro de `global.css`
- `--ucr-acoso-fondo` — color de fondo
- `--ucr-acoso-acento` — color del mensaje

**CSS Parts** — en `global.css`
- `ucr-acoso::part(fila)` — tamaño de las fotos
- `ucr-acoso::part(qr-img)` — tamaño del QR

**Slots** — en `index.html`
- `slot="titulo"` — titulo del cartel
- `slot="mensaje"` — mensaje de la campana 