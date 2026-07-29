const locationsData = [
    // --- FERRETERÍAS ---
    { type: 'ferreterias', name: 'Ferretería San Juan', lat: -36.822, lng: -73.045, color: '#3B82F6', lastUpdate: 'hace 10 minutos', horario: '08:30 - 18:00', 
      stock: [
          {item: 'Clavos 2"', qty: '500 g.', precio: '$1.000'}, {item: 'Martillos de Carpintero', qty: '3 unid.', precio: '$8.500'}, {item: 'Alicates', qty: '12 unid.', precio: '$4.500'}, 
          {item: 'Taladro Inalámbrico 12V', qty: 'Agotado', precio: '$45.000'}, {item: 'Silicona Transparente', qty: '20 tubos', precio: '$2.500'}, {item: 'Tornillos para Madera 1"', qty: '1000 unid.', precio: '$18.100'}
      ] 
    },
    { type: 'ferreterias', name: 'Sodimac Constructor Centro', lat: -36.818, lng: -73.055, color: '#3B82F6', lastUpdate: 'hace 1 hora', horario: '07:30 - 21:00', 
      stock: [
          {item: 'Cemento Melón 25kg', qty: '40 sacos', precio: '$3.990'}, {item: 'Pintura Látex Blanca 1G', qty: '12 tarros', precio: '$15.990'}, {item: 'Cerámica Blanca 40x40', qty: '150 cajas', precio: '$12.500'},
          {item: 'Fierro Estriado 8mm', qty: '80 tiras', precio: '$4.200'}, {item: 'Adhesivo Cerámico Bekron', qty: '65 sacos', precio: '$3.500'}, {item: 'Tubo PVC 110mm', qty: '30 tiras', precio: '$6.990'},
          {item: 'Brocha 3"', qty: '45 unid.', precio: '$20.800'}, {item: 'Rodillo Esponja', qty: 'Agotado', precio: '$1.500'}
      ] 
    },
    { type: 'ferreterias', name: 'Ferretería Prat', lat: -36.826, lng: -73.052, color: '#3B82F6', lastUpdate: 'hace 3 horas', horario: '09:00 - 19:00', 
      stock: [
          {item: 'Pintura Esmalte al Agua', qty: '5 tarros', precio: '$18.990'}, {item: 'Thinner 1L', qty: '10 botellas', precio: '$3.500'}, {item: 'Cinta Aisladora', qty: '30 rollos', precio: '$900'},
          {item: 'Enchufe Doble', qty: '15 unid.', precio: '$2.500'}, {item: 'Ampolleta LED 9W', qty: '50 unid.', precio: '$1.500'}, {item: 'Interruptor Simple', qty: '22 unid.', precio: '$1.800'}
      ] 
    },
    { type: 'ferreterias', name: 'Constructor Lientur', lat: -36.814, lng: -73.040, color: '#3B82F6', lastUpdate: 'hace 30 minutos', horario: '08:00 - 18:30', 
      stock: [
          {item: 'Arena Fina', qty: '15 m3', precio: '$15.000'}, {item: 'Ripio', qty: '20 m3', precio: '$12.000'}, {item: 'Ladrillo Fiscal', qty: '1500 unid.', precio: '$250'},
          {item: 'Malla Acma', qty: '12 rollos', precio: '$15.000'}, {item: 'Alambre Cocido', qty: '20 kg', precio: '$1.500'}
      ] 
    },
    { type: 'ferreterias', name: 'Ferretería El Maestro', lat: -36.833, lng: -73.033, color: '#3B82F6', lastUpdate: 'hace 2 días', horario: '08:30 - 19:00', 
      stock: [
          {item: 'Candado 40mm', qty: '8 unid.', precio: '$4.500'}, {item: 'Cadena Galvanizada', qty: '15 metros', precio: '$2.500'}, {item: 'Bisagras 3"', qty: '30 unid.', precio: '$3.200'},
          {item: 'Cerradura de Puerta', qty: 'Agotado', precio: '$12.990'}
      ] 
    },

    // --- ALMACENES ---
    { type: 'almacenes', name: 'Almacén Don Tito', lat: -36.830, lng: -73.042, color: '#EF4444', lastUpdate: 'hace 30 minutos', horario: '07:00 - 22:00', 
      stock: [
          {item: 'Pan Marraqueta', qty: 'Agotado', precio: '$2.000'}, {item: 'Leche Descremada 1L', qty: '14 cajas', precio: '$990'}, {item: 'Huevos de campo', qty: '2 docenas', precio: '$3.500'},
          {item: 'Queso Gouda Laminado', qty: '500 g.', precio: '$4.500'}, {item: 'Jamón Pierna', qty: '300 g.', precio: '$3.800'}, {item: 'Té Supremo 100 bolsitas', qty: '4 cajas', precio: '$2.990'}
      ] 
    },
    { type: 'almacenes', name: 'Minimarket Los Andes', lat: -36.828, lng: -73.053, color: '#EF4444', lastUpdate: 'ayer', horario: '09:00 - 21:00', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '6 botellas', precio: '$2.500'}, {item: 'Papas Fritas Lays 250g', qty: '10 bolsas', precio: '$1.800'}, {item: 'Cerveza Cristal 1.2L', qty: '15 botellas', precio: '$1.500'},
          {item: 'Hielo en Bolsa 2kg', qty: 'Agotado', precio: '$1.200'}, {item: 'Galletas Tritón', qty: '8 paquetes', precio: '$800'}
      ] 
    },
    { type: 'almacenes', name: 'Providencia Express', lat: -36.820, lng: -73.048, color: '#EF4444', lastUpdate: 'hace 2 horas', horario: '08:00 - 23:00', 
      stock: [
          {item: 'Bebida Sprite 2L', qty: '12 botellas', precio: '$1.990'}, {item: 'Agua Sin Gas 1.5L', qty: '20 botellas', precio: '$900'}, {item: 'Maní Salado', qty: '15 paquetes', precio: '$1.200'},
          {item: 'Pan Hallulla', qty: '3 kg', precio: '$1.900'}, {item: 'Mantequilla 250g', qty: '5 panes', precio: '$2.500'}, {item: 'Café Nescafé 100g', qty: '4 frascos', precio: '$3.500'}
      ] 
    },
    { type: 'almacenes', name: 'Almacén La Esquina', lat: -36.825, lng: -73.035, color: '#EF4444', lastUpdate: 'hace 5 minutos', horario: '07:30 - 21:30', 
      stock: [
          {item: 'Palta Hass', qty: '2 kg', precio: '$4.500'}, {item: 'Tomate Larga Vida', qty: '5 kg', precio: '$1.500'}, {item: 'Cebolla', qty: '3 kg', precio: '$1.200'},
          {item: 'Limones', qty: 'Agotado', precio: '$1.800'}, {item: 'Fideos Carozzi 400g', qty: '20 paquetes', precio: '$800'}, {item: 'Salsa de Tomate', qty: '18 cajas', precio: '$500'}
      ] 
    },
    { type: 'almacenes', name: 'Supermercado Local Barrio Norte', lat: -36.812, lng: -73.050, color: '#EF4444', lastUpdate: 'hace 4 horas', horario: '08:30 - 20:30', 
      stock: [
          {item: 'Arroz Tucapel grado 2', qty: '30 bolsas', precio: '$1.200'}, {item: 'Aceite de Maravilla 1L', qty: '15 botellas', precio: '$2.500'}, {item: 'Azúcar Iansa 1kg', qty: '40 bolsas', precio: '$1.100'},
          {item: 'Sal de Mesa', qty: '25 bolsas', precio: '$600'}, {item: 'Detergente Omo 3kg', qty: '10 bolsas', precio: '$8.990'}, {item: 'Papel Higiénico 4 rollos', qty: 'Agotado', precio: '$2.500'}
      ] 
    },
    { type: 'almacenes', name: 'Minimarket San Pedro', lat: -36.840, lng: -73.105, color: '#EF4444', lastUpdate: 'hace 1 hora', horario: '09:00 - 22:00', 
      stock: [
          {item: 'Helado Savory 1L', qty: '5 casatas', precio: '$3.500'}, {item: 'Jugo Watts Naranja 1.5L', qty: '12 botellas', precio: '$1.500'}, {item: 'Yogurt Batido Fresa', qty: '25 unid.', precio: '$300'},
          {item: 'Leche Cultivada', qty: '10 botellas', precio: '$1.200'}
      ] 
    },

    // --- TIENDAS ---
    { type: 'tiendas', name: 'Tienda de Ropa', lat: -36.827, lng: -73.050, color: '#8B5CF6', lastUpdate: 'hace 2 horas', horario: '09:00 - 20:00', 
      stock: [
          {item: 'Poleras de Verano', qty: '15 unid.', precio: '$5.000'}, {item: 'Jeans Clásicos', qty: '5 unid.', precio: '$15.000'}, {item: 'Calcetines Algodón', qty: '30 pares', precio: '$1.500'},
          {item: 'Chaqueta de Mezclilla', qty: 'Agotado', precio: '$25.000'}, {item: 'Gorras Urbanas', qty: '12 unid.', precio: '$5.000'}
      ] 
    },
    { type: 'tiendas', name: 'Zapatería Centro', lat: -36.825, lng: -73.048, color: '#8B5CF6', lastUpdate: 'hace 5 horas', horario: '10:00 - 19:30', 
      stock: [
          {item: 'Zapatos de Cuero Negro', qty: '8 pares', precio: '$35.000'}, {item: 'Zapatillas Deportivas Blancas', qty: '22 pares', precio: '$25.000'}, {item: 'Botines Mujer', qty: 'Agotado', precio: '$30.000'},
          {item: 'Sandalias de Verano', qty: '15 pares', precio: '$15.000'}, {item: 'Plantillas Ortopédicas', qty: '10 pares', precio: '$4.500'}
      ] 
    },
    { type: 'tiendas', name: 'Electrónica Concepción', lat: -36.824, lng: -73.051, color: '#8B5CF6', lastUpdate: 'hace 30 minutos', horario: '10:00 - 20:00', 
      stock: [
          {item: 'Cable USB-C 1m', qty: '45 unid.', precio: '$2.500'}, {item: 'Cargador Rápido 20W', qty: '15 unid.', precio: '$8.000'}, {item: 'Audífonos Bluetooth', qty: '8 unid.', precio: '$15.000'},
          {item: 'Lámina de Vidrio iPhone 13', qty: '20 unid.', precio: '$3.000'}, {item: 'Pendrive 64GB', qty: 'Agotado', precio: '$8.000'}, {item: 'Pila AAA x4', qty: '30 blísters', precio: '$2.500'}
      ] 
    },
    { type: 'tiendas', name: 'Librería Estudio', lat: -36.829, lng: -73.045, color: '#8B5CF6', lastUpdate: 'hace 1 día', horario: '09:00 - 18:30', 
      stock: [
          {item: 'Cuaderno Universitario 100 hojas', qty: '150 unid.', precio: '$1.500'}, {item: 'Lápiz Pasta Azul', qty: '200 unid.', precio: '$300'}, {item: 'Destacador Amarillo', qty: '40 unid.', precio: '$600'},
          {item: 'Cartulina de Colores', qty: '80 pliegos', precio: '$200'}, {item: 'Pegamento en Barra 21g', qty: '35 unid.', precio: '$800'}, {item: 'Tijeras Escolares', qty: 'Agotado', precio: '$1.200'}
      ] 
    },
    { type: 'tiendas', name: 'Tienda de Mascotas', lat: -36.821, lng: -73.042, color: '#8B5CF6', lastUpdate: 'hace 45 minutos', horario: '10:00 - 19:00', 
      stock: [
          {item: 'Alimento Perro Adulto 15kg', qty: '12 sacos', precio: '$25.000'}, {item: 'Alimento Gato Premium 3kg', qty: '8 sacos', precio: '$12.000'}, {item: 'Arena Sanitaria 5kg', qty: '20 bolsas', precio: '$4.500'},
          {item: 'Juguete Mordedor', qty: '15 unid.', precio: '$5.200'}, {item: 'Pipeta Antipulgas', qty: 'Agotado', precio: '$20.300'}, {item: 'Correa Retráctil 5m', qty: '4 unid.', precio: '$8.000'}
      ] 
    },

    // --- PUNTOS VERDES ---
    { type: 'puntos_verdes', name: 'Punto Verde Plaza Independencia', lat: -36.826279, lng: -73.049774, color: '#22C55E', lastUpdate: 'hace 3 días', horario: 'Abierto 24 hrs', 
      stock: [
          {item: 'Contenedor Vidrio', qty: '50% Capacidad', precio: '$11.800'}, {item: 'Contenedor Cartón', qty: 'Lleno', precio: '$1.200'}, {item: 'Contenedor Plástico', qty: '80% Capacidad', precio: '$17.500'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Reciclaje Universidad de Concepción', lat: -36.829, lng: -73.038, color: '#22C55E', lastUpdate: 'hace 1 hora', horario: '08:00 - 20:00', 
      stock: [
          {item: 'Pilas y Baterías', qty: 'Disponible', precio: '$23.500'}, {item: 'Plásticos PET', qty: '20% Capacidad', precio: '$18.900'}, {item: 'Papel Blanco', qty: '40% Capacidad', precio: '$24.100'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Punto Limpio Parque Ecuador', lat: -36.823, lng: -73.040, color: '#22C55E', lastUpdate: 'ayer', horario: 'Abierto 24 hrs', 
      stock: [
          {item: 'Contenedor Vidrio', qty: 'Lleno', precio: '$16.900'}, {item: 'Contenedor Aluminio', qty: '60% Capacidad', precio: '$24.200'}, {item: 'Contenedor Cartón', qty: '30% Capacidad', precio: '$2.900'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Reciclaje San Pedro de la Paz', lat: -36.838, lng: -73.102, color: '#22C55E', lastUpdate: 'hace 5 horas', horario: '09:00 - 18:00', 
      stock: [
          {item: 'Aceite de Cocina', qty: 'Disponible', precio: '$9.100'}, {item: 'Electrodomésticos Pequeños', qty: 'Lleno', precio: '$8.800'}, {item: 'Plásticos Mixtos', qty: '70% Capacidad', precio: '$10.400'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Punto Ecológico Barrio Norte', lat: -36.808, lng: -73.048, color: '#22C55E', lastUpdate: 'hace 2 días', horario: 'Abierto 24 hrs', 
      stock: [
          {item: 'Contenedor Vidrio', qty: '10% Capacidad', precio: '$21.500'}, {item: 'Latas de Conserva', qty: '25% Capacidad', precio: '$18.600'}, {item: 'Tetra Pak', qty: '50% Capacidad', precio: '$10.600'}
      ] 
    },

    // --- FARMACIAS ---
    { type: 'farmacias', name: 'Farmacia Cruz Verde', lat: -36.822, lng: -73.048, color: '#E11D48', lastUpdate: 'hace 1 hora', horario: '08:30 - 21:00', 
      stock: [
          {item: 'Paracetamol 500mg', qty: '50 cajas', precio: '$1.200'}, {item: 'Ibuprofeno 400mg', qty: '30 cajas', precio: '$1.800'}, {item: 'Alcohol Gel 250ml', qty: '15 unid.', precio: '$1.500'},
          {item: 'Mascarillas x50', qty: '20 cajas', precio: '$15.900'}
      ] 
    },
    { type: 'farmacias', name: 'Farmacia Ahumada', lat: -36.828, lng: -73.040, color: '#E11D48', lastUpdate: 'hace 10 minutos', horario: '09:00 - 22:00', 
      stock: [
          {item: 'Vitamina C 1000mg', qty: '12 frascos', precio: '$23.300'}, {item: 'Aspirina 100mg', qty: '40 cajas', precio: '$1.500'}, {item: 'Termómetro Digital', qty: 'Agotado', precio: '$4.500'},
          {item: 'Jarabe para la tos', qty: '8 frascos', precio: '$7.600'}
      ] 
    },

    // --- PETSHOPS ---
    { type: 'petshops', name: 'Pet Happy', lat: -36.825, lng: -73.047, color: '#D97706', lastUpdate: 'hace 30 minutos', horario: '10:00 - 19:30', 
      stock: [
          {item: 'Alimento Perro Cachorro 10kg', qty: '15 sacos', precio: '$18.000'}, {item: 'Arena Gatos Premium', qty: '25 bolsas', precio: '$8.500'}, {item: 'Snacks Carne Perro', qty: '30 unid.', precio: '$1.500'},
          {item: 'Shampoo Antialérgico', qty: 'Agotado', precio: '$6.500'}
      ] 
    },
    { type: 'petshops', name: 'Mascotas Centro', lat: -36.820, lng: -73.055, color: '#D97706', lastUpdate: 'hace 2 horas', horario: '09:30 - 20:00', 
      stock: [
          {item: 'Collar Reflectante L', qty: '10 unid.', precio: '$23.000'}, {item: 'Alimento Gato Senior 3kg', qty: '8 sacos', precio: '$9.200'}, {item: 'Rascador para Gatos', qty: '3 unid.', precio: '$7.000'},
          {item: 'Hueso de Juguete', qty: '20 unid.', precio: '$7.100'}
      ] 
    }
];
