let rolActual = 'usuario';
let miMapa = null;
let markersLayer = null;
let mapaGruas = null;
let markersGruasLayer = null;

// Nuevas variables de estado para reservas
let saldoUsuario = 4500;
let tieneSuscripcion = true;
let usosSuscripcion = 3;
let reservaActual = null;
let misReservas = [];

function actualizarSaldoUI() {
    const texts = [document.getElementById('saldo-text'), document.getElementById('perfil-saldo-text')];
    texts.forEach(el => {
        if (el) el.textContent = "$" + saldoUsuario.toLocaleString('es-CL');
    });
}

// locationsData is loaded from data.js

function crearMarcador(loc, originalIndex) {
    const markerHtmlStyles = `
        background-color: ${loc.color};
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        left: -0.75rem;
        top: -0.75rem;
        position: relative;
        border-radius: 3rem 3rem 0;
        transform: rotate(45deg);
        border: 2px solid #FFFFFF;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    `;
    
    const customIcon = L.divIcon({
        className: "custom-pin",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -24],
        html: `<span style="${markerHtmlStyles}"></span>`
    });
    
    let popupContent = `<div style="text-align:center; padding-bottom:4px;">`;
    popupContent += `<b style="font-size:14px; color:#1E293B; display:block; margin-bottom:4px;">${loc.name}</b>`;
    popupContent += `<span style="color:#64748B; font-size:11px; display:block;">Horario: ${loc.horario}</span>`;
    popupContent += `<span style="color:#439B8F; font-weight:600; font-size:11px; display:block; margin-top:2px;">Últ. act: ${loc.lastUpdate}</span>`;
    
    if (loc.type !== 'puntos_verdes') {
        popupContent += `<button onclick="abrirStock(${originalIndex})" style="margin-top:10px; background: #2D8B71; color: white; border: none; padding: 6px 14px; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer; box-shadow: 0 2px 4px rgba(45,139,113,0.3); width: 100%;">Ver Stock</button>`;
    }
    
    popupContent += `</div>`;
    
    return L.marker([loc.lat, loc.lng], {icon: customIcon}).bindPopup(popupContent);
}

function filtrarMapa(categoria) {
    if (!miMapa) {
        // If map isn't initialized yet, we must force the view to open
        document.querySelectorAll('.nav-item')[1].click(); // Click "Buscar"
    }
    
    // Esperamos un poquito por si el mapa se acaba de inicializar
    setTimeout(() => {
        if (markersLayer) {
            miMapa.removeLayer(markersLayer);
        }
        
        markersLayer = L.layerGroup().addTo(miMapa);
        
        const filtrados = locationsData.filter(loc => loc.type === categoria);
        
        filtrados.forEach(loc => {
            const originalIndex = locationsData.indexOf(loc);
            crearMarcador(loc, originalIndex).addTo(markersLayer);
        });
        
        if (filtrados.length > 0) {
            const group = new L.featureGroup(markersLayer.getLayers());
            miMapa.fitBounds(group.getBounds(), {padding: [30, 30], maxZoom: 15});
        }
    }, 150);
}

function abrirStock(index) {
    const loc = locationsData[index];
    const modal = document.getElementById('modal-stock');
    const title = document.getElementById('modal-stock-title');
    const list = document.getElementById('modal-stock-list');
    
    title.textContent = "Stock: " + loc.name;
    list.innerHTML = "";
    
    loc.stock.forEach(item => {
        const row = document.createElement('div');
        row.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #F8FAFC; border-radius: 16px; border: 1px solid #E2E8F0;";
        
        const isLow = item.qty === 'Agotado' || item.qty === 'Lleno';
        const qtyColor = isLow ? '#EF4444' : '#2D8B71';
        

        row.innerHTML = `
            <div style="display: flex; flex-direction: column;">
                <span style="font-weight: 600; color: #1E293B; font-size: 15px;">${item.item}</span>
                ${item.precio ? `<span style="font-size: 13px; color: #10B981; font-weight: 600; margin-top: 2px;">${item.precio} c/u</span>` : ''}
            </div>
            <span style="font-weight: 700; color: ${qtyColor}; font-size: 15px;">${item.qty}</span>
        `;
        list.appendChild(row);
    });
    
    modal.style.display = 'flex';
}

function cerrarStock() {
    document.getElementById('modal-stock').style.display = 'none';
}

function buscarProducto(query) {
    const contenedor = document.getElementById('resultados-busqueda');
    if (!query || query.trim().length === 0) {
        contenedor.style.display = 'none';
        return;
    }
    
    query = query.toLowerCase().trim();
    // Agrupar por nombre de producto exacto para no repetir
    const productosEncontrados = {};
    
    locationsData.forEach((loc) => {
        loc.stock.forEach(stockItem => {
            if (stockItem.item.toLowerCase().includes(query) && stockItem.qty !== 'Agotado') {
                if (!productosEncontrados[stockItem.item]) {
                    productosEncontrados[stockItem.item] = {
                        count: 0
                    };
                }
                productosEncontrados[stockItem.item].count++;
            }
        });
    });
    
    const items = Object.keys(productosEncontrados);
    
    if (items.length > 0) {
        contenedor.innerHTML = '';
        items.forEach(itemName => {
            const count = productosEncontrados[itemName].count;
            const div = document.createElement('div');
            div.style.cssText = "padding: 12px 16px; border-bottom: 1px solid #F1F5F9; cursor: pointer; display: flex; flex-direction: column;";
            div.onclick = () => abrirPagoBusqueda(itemName, count);
            
            div.innerHTML = `
                <span style="font-weight: 600; color: #1E293B; font-size: 14px;">${itemName}</span>
                <span style="color: #64748B; font-size: 12px;">Encontrado en <b style="color: #2D8B71;">${count} tiendas</b></span>
            `;
            
            contenedor.appendChild(div);
        });
        contenedor.style.display = 'block';
    } else {
        contenedor.innerHTML = '<div style="padding: 12px 16px; color: #64748B; font-size: 13px; text-align: center;">No se encontraron resultados con stock</div>';
        contenedor.style.display = 'block';
    }
}

// Nueva función de calcular distancia
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

let busquedaActualItem = "";
let numTiendasMostradas = 3;
let tiendasBuscadasCache = [];
let tiendasDesbloqueadasLista = [];

function abrirPagoBusqueda(itemName, count) {
    document.getElementById('resultados-busqueda').style.display = 'none';
    busquedaActualItem = itemName;
    const modal = document.getElementById('modal-pago-busqueda');
    if (modal) {
        document.getElementById('pago-busqueda-desc').innerHTML = `Hemos encontrado <b>${count} tiendas</b> con stock de <b>${itemName}</b>.<br><br>Paga $500 para ver las 3 tiendas más cercanas en el mapa.`;
        
        const btnPago = document.getElementById('btn-pagar-busqueda');
        if (saldoUsuario >= 500) {
            btnPago.textContent = `Pagar $500 (Tienes $${saldoUsuario.toLocaleString('es-CL')})`;
            btnPago.onclick = () => confirmarPagoBusqueda();
            btnPago.style.opacity = "1";
            btnPago.disabled = false;
        } else {
            btnPago.textContent = `Saldo insuficiente ($${saldoUsuario.toLocaleString('es-CL')})`;
            btnPago.onclick = null;
            btnPago.style.opacity = "0.5";
            btnPago.disabled = true;
        }
        
        modal.style.display = 'flex';
    }
}

function cerrarPagoBusqueda() {
    const modal = document.getElementById('modal-pago-busqueda');
    if (modal) modal.style.display = 'none';
}

function confirmarPagoBusqueda() {
    if (saldoUsuario >= 500) {
        saldoUsuario -= 500;
        actualizarSaldoUI();
        cerrarPagoBusqueda();
        numTiendasMostradas = 3;
        mostrarResultadosCercanos(busquedaActualItem);
    } else {
        alert("Saldo insuficiente");
    }
}

function mostrarResultadosCercanos(itemName) {
    if (!miMapa) {
        document.querySelectorAll('.nav-item')[1].click(); // Forzamos abrir vista mapa si no está
    }
    
    setTimeout(() => {
        if (markersLayer) {
            miMapa.removeLayer(markersLayer);
        }
        markersLayer = L.layerGroup().addTo(miMapa);
        
        // Ubicación del usuario (Centro de Concepción)
        const userLat = -36.826279;
        const userLng = -73.049774;
        
        // Filtrar tiendas que tienen el producto con stock
        const tiendasConStock = [];
        locationsData.forEach((loc, originalIndex) => {
            const hasItem = loc.stock.some(s => s.item === itemName && s.qty !== 'Agotado');
            if (hasItem) {
                const dist = calcularDistancia(userLat, userLng, loc.lat, loc.lng);
                tiendasConStock.push({
                    loc: loc,
                    originalIndex: originalIndex,
                    distancia: dist
                });
            }
        });
        
        // Ordenar por distancia
        tiendasConStock.sort((a, b) => a.distancia - b.distancia);
        tiendasBuscadasCache = tiendasConStock;
        
        // Registrar tiendas desbloqueadas
        const mostradas = tiendasBuscadasCache.slice(0, numTiendasMostradas);
        const now = Date.now();
        mostradas.forEach(t => {
            const existe = tiendasDesbloqueadasLista.find(x => x.originalIndex === t.originalIndex);
            if (existe) {
                existe.unlockTime = now;
            } else {
                tiendasDesbloqueadasLista.push({ loc: t.loc, originalIndex: t.originalIndex, unlockTime: now });
            }
        });
        actualizarTemporizadoresDesbloqueadas();
        
        renderizarTiendasCachadas();
    }, 150);
}

function renderizarTiendasCachadas() {
    if (markersLayer) {
        miMapa.removeLayer(markersLayer);
    }
    markersLayer = L.layerGroup().addTo(miMapa);

    const mostradas = tiendasBuscadasCache.slice(0, numTiendasMostradas);
    
    mostradas.forEach(t => {
        crearMarcador(t.loc, t.originalIndex).addTo(markersLayer);
    });
    
    if (mostradas.length > 0) {
        const group = new L.featureGroup(markersLayer.getLayers());
        miMapa.fitBounds(group.getBounds(), {padding: [30, 30], maxZoom: 16});
        
        // Abrir popup de la más cercana
        setTimeout(() => {
            const layers = markersLayer.getLayers();
            if (layers.length > 0) layers[0].openPopup();
        }, 300);
    }

    const btnContainer = document.getElementById('container-desbloquear-mas');
    if (btnContainer) {
        if (tiendasBuscadasCache.length > numTiendasMostradas) {
            btnContainer.style.display = 'block';
        } else {
            btnContainer.style.display = 'none';
        }
    }
}

function desbloquearTiendaAdicional() {
    if (saldoUsuario >= 250) {
        if (confirm("¿Pagar $250 para desbloquear la siguiente tienda más cercana?")) {
            saldoUsuario -= 250;
            actualizarSaldoUI();
            numTiendasMostradas++;
            
            const nuevaTienda = tiendasBuscadasCache[numTiendasMostradas - 1];
            if (nuevaTienda) {
                const now = Date.now();
                const existe = tiendasDesbloqueadasLista.find(x => x.originalIndex === nuevaTienda.originalIndex);
                if (existe) {
                    existe.unlockTime = now;
                } else {
                    tiendasDesbloqueadasLista.push({ loc: nuevaTienda.loc, originalIndex: nuevaTienda.originalIndex, unlockTime: now });
                }
                actualizarTemporizadoresDesbloqueadas();
            }

            renderizarTiendasCachadas();
        }
    } else {
        alert("Saldo insuficiente para desbloquear otra tienda.");
    }
}


function setActive(element, viewId) {
    // 1. Quitar clase 'active' de todos los items de navegación
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    
    // 2. Poner clase 'active' al item clickeado (si existe)
    if (element) {
        element.classList.add('active');
    }

    // 3. Lista maestra de TODAS las vistas de la aplicación
    const vistas = [
        'vista-login',
        'vista-inicio', 
        'vista-buscar', 
        'vista-perfil',
        'vista-suscripciones', 
        'vista-invitaciones',
        'vista-pagos', 
        'vista-mensajes', 
        'vista-reclamos',
        'vista-verificador',
        'vista-empresa'
    ];

    // 4. Ocultar todas las vistas de manera segura (evita errores si falta alguna)
    vistas.forEach(id => {
        const vista = document.getElementById(id);
        if (vista) {
            vista.style.display = 'none';
        }
    });

    // 5. Mostrar la vista seleccionada
    const vistaSeleccionada = document.getElementById(viewId);
    if (vistaSeleccionada) {
        vistaSeleccionada.style.display = 'block';
        
        // Initialize or adjust the Leaflet map when 'vista-buscar' is active
        if (viewId === 'vista-buscar') {
            if (!miMapa) {
                // Initialize map centered in Concepción
                miMapa = L.map('map-concepcion').setView([-36.826279, -73.049774], 14);
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(miMapa);
            }

            if (!mapaGruas) {
                mapaGruas = L.map('map-gruas').setView([-36.826279, -73.049774], 14);
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(mapaGruas);

                cargarMarcadoresGruas();
            }
            
            // Allow container to render before invalidating size
            setTimeout(() => {
                if(miMapa) miMapa.invalidateSize();
                if(mapaGruas) mapaGruas.invalidateSize();
            }, 100);
        }
    } else {
        console.warn("Advertencia: La vista " + viewId + " no se encontró.");
    }

    // 6. Hacer scroll automático hacia arriba de manera fluida
    const scrollContent = document.querySelector('.scroll-content');
    if (scrollContent) {
        scrollContent.scrollTop = 0;
    }
}

function cambiarRol(rol) {
    rolActual = rol;
    const body = document.body;
    
    // 1. Resetear temas
    body.classList.remove('theme-verificador', 'theme-empresa');
    
    // 2. Aplicar nuevo tema y redirigir
    if (rol === 'verificador') {
        body.classList.add('theme-verificador');
        setActive(document.querySelectorAll('.nav-item')[2], 'vista-verificador'); // Perfil index 2
    } else if (rol === 'empresa') {
        body.classList.add('theme-empresa');
        setActive(document.querySelectorAll('.nav-item')[2], 'vista-empresa'); // Perfil index 2
    } else {
        // Usuario (default)
        setActive(document.querySelectorAll('.nav-item')[2], 'vista-perfil');
    }
}

function abrirPerfil(element) {
    if (rolActual === 'verificador') {
        setActive(element, 'vista-verificador');
    } else if (rolActual === 'empresa') {
        setActive(element, 'vista-empresa');
    } else {
        setActive(element, 'vista-perfil');
    }
}

// --- FUNCIONES DE LOGIN ---
function iniciarSesionApp() {
    const nombreInput = document.getElementById('login-name').value.trim();
    const emailInput = document.getElementById('login-email').value.trim();
    
    let nombreFinal = nombreInput;
    
    // Si no ingresa nombre pero sí correo, usamos la parte antes del @
    if (!nombreFinal && emailInput) {
        nombreFinal = emailInput.split('@')[0];
    }
    // Si no ingresó nada, usamos un nombre por defecto
    if (!nombreFinal) {
        nombreFinal = "Usuario";
    }
    
    // Actualizar los textos de bienvenida
    const primerNombre = nombreFinal.split(' ')[0];
    const welcomeEl = document.getElementById('welcome-user-text');
    if (welcomeEl) welcomeEl.innerHTML = `¡Hola, ${primerNombre}! 👋`;
    
    const profileEl = document.getElementById('profile-user-name');
    if (profileEl) profileEl.textContent = nombreFinal;
    
    const verificadorEl = document.getElementById('verificador-user-name');
    if (verificadorEl) verificadorEl.textContent = nombreFinal;
    
    document.getElementById('vista-login').style.display = 'none';
    
    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) {
        bottomNav.style.display = 'flex';
    }
    
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 0) {
        setActive(navItems[0], 'vista-inicio');
    } else {
        setActive(null, 'vista-inicio');
    }
}

function iniciarSesionGoogle() {
    document.getElementById('login-name').value = "Felipe (Google)";
    document.getElementById('login-email').value = "felipe.rubilar@gmail.com";
    iniciarSesionApp();
}

function cerrarSesionApp() {
    if (confirm("¿Estás seguro de querer cerrar sesión?")) {
        // Limpiar inputs
        document.getElementById('login-name').value = '';
        document.getElementById('login-email').value = '';
        
        // Ocultar nav
        const bottomNav = document.getElementById('bottom-nav');
        if (bottomNav) bottomNav.style.display = 'none';
        
        // Ocultar todas las vistas menos login
        const vistas = [
            'vista-inicio', 
            'vista-buscar', 
            'vista-perfil',
            'vista-suscripciones', 
            'vista-invitaciones',
            'vista-pagos', 
            'vista-mensajes', 
            'vista-reclamos',
            'vista-verificador',
            'vista-empresa'
        ];
        
        vistas.forEach(id => {
            const vista = document.getElementById(id);
            if (vista) {
                vista.style.display = 'none';
            }
        });
        
        // Mostrar pantalla de login
        document.getElementById('vista-login').style.display = 'flex';
        
        // Limpiar botones activos del nav
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    }
}

function actualizarTemporizadoresDesbloqueadas() {
    const now = Date.now();
    // Filtrar las que expiraron (1 hora = 3600000 ms)
    tiendasDesbloqueadasLista = tiendasDesbloqueadasLista.filter(t => (now - t.unlockTime) < 3600000);
    
    const container = document.getElementById('contenedor-tiendas-desbloqueadas');
    const listaHtml = document.getElementById('lista-tiendas-desbloqueadas');
    
    if (!container || !listaHtml) return;
    
    if (tiendasDesbloqueadasLista.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    
    let html = '';
    tiendasDesbloqueadasLista.forEach(t => {
        const remainingMs = 3600000 - (now - t.unlockTime);
        const totalSegundos = Math.floor(remainingMs / 1000);
        const minutos = Math.floor(totalSegundos / 60).toString().padStart(2, '0');
        const segundos = (totalSegundos % 60).toString().padStart(2, '0');
        
        html += `
        <div style="background: white; border-radius: 12px; padding: 12px; border: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onclick="abrirStock(${t.originalIndex})">
            <div>
                <h4 style="font-size: 14px; font-weight: 700; color: #1E293B; margin: 0 0 4px 0;">${t.loc.name}</h4>
                <p style="font-size: 11px; color: #64748B; margin: 0;">Actualizado ${t.loc.lastUpdate}</p>
            </div>
            <div style="background: #FEE2E2; color: #EF4444; padding: 6px 10px; border-radius: 8px; font-weight: 700; font-size: 13px; font-family: monospace;">
                ${minutos}:${segundos}
            </div>
        </div>`;
    });
    
    listaHtml.innerHTML = html;
}

setInterval(actualizarTemporizadoresDesbloqueadas, 1000);

function cargarMarcadoresGruas() {
    if (markersGruasLayer) {
        mapaGruas.removeLayer(markersGruasLayer);
    }
    
    markersGruasLayer = L.layerGroup().addTo(mapaGruas);
    
    const gruas = locationsData.filter(loc => loc.type === 'gruas');
    
    gruas.forEach(loc => {
        const isOnline = loc.status === 'En Línea';
        const color = isOnline ? '#F59E0B' : '#94A3B8'; // Naranja si en linea, Gris si no
        
        const markerHtmlStyles = `
            background-color: ${color};
            width: 1.5rem;
            height: 1.5rem;
            display: block;
            left: -0.75rem;
            top: -0.75rem;
            position: relative;
            border-radius: 50%;
            border: 2px solid #FFFFFF;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 10px;
        `;
        
        const customIcon = L.divIcon({
            className: "custom-pin",
            iconAnchor: [0, 12],
            labelAnchor: [0, 0],
            popupAnchor: [0, -12],
            html: `<span style="${markerHtmlStyles}">🛻</span>`
        });
        
        let popupContent = `<div style="text-align:center; padding-bottom:4px;">`;
        popupContent += `<b style="font-size:14px; color:#1E293B; display:block; margin-bottom:4px;">${loc.name}</b>`;
        popupContent += `<span style="color:#64748B; font-size:11px; display:block;">Tipo: ${loc.modelo}</span>`;
        popupContent += `<span style="color:#64748B; font-size:11px; display:block;">Para: <b>${loc.capacidad}</b></span>`;
        popupContent += `<span style="color:#64748B; font-size:11px; display:block;">Capacidad: <b>${loc.pesoMax}</b></span>`;
        popupContent += `<span style="color:${color}; font-weight:700; font-size:12px; display:block; margin-top:4px;">${loc.status}</span>`;
        popupContent += `<span style="color:#439B8F; font-weight:600; font-size:11px; display:block; margin-top:2px;">Últ. act: ${loc.lastUpdate}</span>`;
        
        if (isOnline) {
            popupContent += `<button onclick="alert('Solicitando grúa de remolque...')" style="margin-top:10px; background: #F59E0B; color: white; border: none; padding: 6px 14px; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer; box-shadow: 0 2px 4px rgba(245,158,11,0.3); width: 100%;">Solicitar Grúa</button>`;
        }
        
        popupContent += `</div>`;
        
        L.marker([loc.lat, loc.lng], {icon: customIcon}).bindPopup(popupContent).addTo(markersGruasLayer);
    });
}

function slideMap(index) {
    const track = document.getElementById('map-slider-track');
    const dot0 = document.getElementById('dot-map-0');
    const dot1 = document.getElementById('dot-map-1');
    
    if (index === 0) {
        track.style.transform = 'translateX(0%)';
        dot0.style.background = '#2D8B71';
        dot1.style.background = '#CBD5E1';
        setTimeout(() => { if(miMapa) miMapa.invalidateSize(); }, 300);
    } else {
        track.style.transform = 'translateX(-50%)';
        dot0.style.background = '#CBD5E1';
        dot1.style.background = '#2D8B71';
        setTimeout(() => { if(mapaGruas) mapaGruas.invalidateSize(); }, 300);
    }
}