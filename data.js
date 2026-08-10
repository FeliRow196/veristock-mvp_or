const locationsData = [
    // --- FERRETERÍAS ---
    { type: 'ferreterias', name: 'Ferretería San Juan', lat: -36.822, lng: -73.045, color: '#3B82F6', lastUpdate: 'hace 10 minutos', horario: '08:30 - 18:00', 
      stock: [
          {item: 'Clavos 2"', qty: '500 g.', precio: '$1.000'}, {item: 'Martillos de Carpintero', qty: '3 unid.', precio: '$8.500'}, {item: 'Alicates', qty: '12 unid.', precio: '$4.500'}, 
          {item: 'Taladro Inalámbrico 12V', qty: 'Agotado', precio: '$45.000'}, {item: 'Silicona Transparente', qty: '20 tubos', precio: '$2.500'}, {item: 'Cemento Melón 25kg', qty: '10 sacos', precio: '$4.000'}
      ] 
    },
    { type: 'ferreterias', name: 'Sodimac Constructor Centro', lat: -36.818, lng: -73.055, color: '#3B82F6', lastUpdate: 'hace 1 hora', horario: '07:30 - 21:00', 
      stock: [
          {item: 'Cemento Melón 25kg', qty: '40 sacos', precio: '$3.990'}, {item: 'Pintura Látex Blanca 1G', qty: '12 tarros', precio: '$15.990'}, {item: 'Cerámica Blanca 40x40', qty: '150 cajas', precio: '$12.500'},
          {item: 'Fierro Estriado 8mm', qty: '80 tiras', precio: '$4.200'}, {item: 'Clavos 2"', qty: '65 cajas', precio: '$950'}, {item: 'Tubo PVC 110mm', qty: '30 tiras', precio: '$6.990'}
      ] 
    },
    { type: 'ferreterias', name: 'Ferretería Prat', lat: -36.826, lng: -73.052, color: '#3B82F6', lastUpdate: 'hace 3 horas', horario: '09:00 - 19:00', 
      stock: [
          {item: 'Pintura Esmalte al Agua', qty: '5 tarros', precio: '$18.990'}, {item: 'Cemento Melón 25kg', qty: '15 sacos', precio: '$4.150'}, {item: 'Cinta Aisladora', qty: '30 rollos', precio: '$900'},
          {item: 'Enchufe Doble', qty: '15 unid.', precio: '$2.500'}, {item: 'Clavos 2"', qty: '10 cajas', precio: '$1.100'}, {item: 'Interruptor Simple', qty: '22 unid.', precio: '$1.800'}
      ] 
    },
    { type: 'ferreterias', name: 'Constructor Lientur', lat: -36.814, lng: -73.040, color: '#3B82F6', lastUpdate: 'hace 30 minutos', horario: '08:00 - 18:30', 
      stock: [
          {item: 'Arena Fina', qty: '15 m3', precio: '$15.000'}, {item: 'Ripio', qty: '20 m3', precio: '$12.000'}, {item: 'Cemento Melón 25kg', qty: '50 sacos', precio: '$3.890'},
          {item: 'Malla Acma', qty: '12 rollos', precio: '$15.000'}, {item: 'Clavos 2"', qty: '20 kg', precio: '$1.500'}
      ] 
    },
    { type: 'ferreterias', name: 'Ferretería El Maestro', lat: -36.833, lng: -73.033, color: '#3B82F6', lastUpdate: 'hace 2 días', horario: '08:30 - 19:00', 
      stock: [
          {item: 'Candado 40mm', qty: '8 unid.', precio: '$4.500'}, {item: 'Cemento Melón 25kg', qty: '5 sacos', precio: '$4.300'}, {item: 'Bisagras 3"', qty: '30 unid.', precio: '$3.200'},
          {item: 'Clavos 2"', qty: 'Agotado', precio: '$1.000'}
      ] 
    },
    { type: 'ferreterias', name: 'Ferretería El Tornillo', lat: -36.815, lng: -73.045, color: '#3B82F6', lastUpdate: 'hace 5 horas', horario: '09:00 - 18:00', 
      stock: [
          {item: 'Clavos 3"', qty: '200 g.', precio: '$1.200'}, {item: 'Cemento Melón 25kg', qty: '8 sacos', precio: '$4.200'}, {item: 'Clavos 2"', qty: '10 unid.', precio: '$1.100'}
      ] 
    },
    { type: 'ferreterias', name: 'ConstruHogar', lat: -36.820, lng: -73.050, color: '#3B82F6', lastUpdate: 'hace 10 minutos', horario: '08:00 - 19:30', 
      stock: [
          {item: 'Pintura Blanca 1G', qty: '15 tarros', precio: '$14.990'}, {item: 'Cemento Melón 25kg', qty: '20 sacos', precio: '$4.100'}, {item: 'Clavos 2"', qty: '25 unid.', precio: '$1.000'}
      ] 
    },

    // --- ALMACENES ---
    { type: 'almacenes', name: 'Almacén Don Tito', lat: -36.830, lng: -73.042, color: '#EF4444', lastUpdate: 'hace 30 minutos', horario: '07:00 - 22:00', 
      stock: [
          {item: 'Pan Marraqueta', qty: '2 kg', precio: '$2.000'}, {item: 'Bebida Cola 3L', qty: '14 cajas', precio: '$2.500'}, {item: 'Huevos de campo', qty: '2 docenas', precio: '$3.500'},
          {item: 'Queso Gouda Laminado', qty: '500 g.', precio: '$4.500'}, {item: 'Jamón Pierna', qty: '300 g.', precio: '$3.800'}, {item: 'Té Supremo 100 bolsitas', qty: '4 cajas', precio: '$2.990'}
      ] 
    },
    { type: 'almacenes', name: 'Minimarket Los Andes', lat: -36.828, lng: -73.053, color: '#EF4444', lastUpdate: 'ayer', horario: '09:00 - 21:00', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '6 botellas', precio: '$2.500'}, {item: 'Pan Marraqueta', qty: '10 bolsas', precio: '$2.100'}, {item: 'Cerveza Cristal 1.2L', qty: '15 botellas', precio: '$1.500'},
          {item: 'Hielo en Bolsa 2kg', qty: 'Agotado', precio: '$1.200'}, {item: 'Galletas Tritón', qty: '8 paquetes', precio: '$800'}
      ] 
    },
    { type: 'almacenes', name: 'Providencia Express', lat: -36.820, lng: -73.048, color: '#EF4444', lastUpdate: 'hace 2 horas', horario: '08:00 - 23:00', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '12 botellas', precio: '$2.600'}, {item: 'Pan Marraqueta', qty: '20 botellas', precio: '$2.200'}, {item: 'Maní Salado', qty: '15 paquetes', precio: '$1.200'},
          {item: 'Pan Hallulla', qty: '3 kg', precio: '$1.900'}, {item: 'Mantequilla 250g', qty: '5 panes', precio: '$2.500'}, {item: 'Café Nescafé 100g', qty: '4 frascos', precio: '$3.500'}
      ] 
    },
    { type: 'almacenes', name: 'Almacén La Esquina', lat: -36.825, lng: -73.035, color: '#EF4444', lastUpdate: 'hace 5 minutos', horario: '07:30 - 21:30', 
      stock: [
          {item: 'Pan Marraqueta', qty: '2 kg', precio: '$2.000'}, {item: 'Tomate Larga Vida', qty: '5 kg', precio: '$1.500'}, {item: 'Bebida Cola 3L', qty: '3 kg', precio: '$2.500'},
          {item: 'Limones', qty: 'Agotado', precio: '$1.800'}, {item: 'Fideos Carozzi 400g', qty: '20 paquetes', precio: '$800'}, {item: 'Salsa de Tomate', qty: '18 cajas', precio: '$500'}
      ] 
    },
    { type: 'almacenes', name: 'Supermercado Local Barrio Norte', lat: -36.812, lng: -73.050, color: '#EF4444', lastUpdate: 'hace 4 horas', horario: '08:30 - 20:30', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '30 bolsas', precio: '$2.450'}, {item: 'Pan Marraqueta', qty: '15 botellas', precio: '$1.950'}, {item: 'Azúcar Iansa 1kg', qty: '40 bolsas', precio: '$1.100'},
          {item: 'Sal de Mesa', qty: '25 bolsas', precio: '$600'}, {item: 'Detergente Omo 3kg', qty: '10 bolsas', precio: '$8.990'}, {item: 'Papel Higiénico 4 rollos', qty: 'Agotado', precio: '$2.500'}
      ] 
    },
    { type: 'almacenes', name: 'Minimarket San Pedro', lat: -36.840, lng: -73.105, color: '#EF4444', lastUpdate: 'hace 1 hora', horario: '09:00 - 22:00', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '5 casatas', precio: '$2.600'}, {item: 'Pan Marraqueta', qty: '12 botellas', precio: '$2.200'}, {item: 'Yogurt Batido Fresa', qty: '25 unid.', precio: '$300'},
          {item: 'Leche Cultivada', qty: '10 botellas', precio: '$1.200'}
      ] 
    },
    { type: 'almacenes', name: 'Almacén Los Copihues', lat: -36.832, lng: -73.048, color: '#EF4444', lastUpdate: 'hace 15 minutos', horario: '08:00 - 22:00', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '10 botellas', precio: '$2.500'}, {item: 'Pan Marraqueta', qty: '2 kg', precio: '$2.000'}, {item: 'Queso Crema', qty: '5 unid.', precio: '$1.500'}
      ] 
    },
    { type: 'almacenes', name: 'Minimarket El Sol', lat: -36.818, lng: -73.058, color: '#EF4444', lastUpdate: 'hace 3 horas', horario: '09:00 - 21:00', 
      stock: [
          {item: 'Bebida Cola 3L', qty: '15 paquetes', precio: '$2.500'}, {item: 'Pan Marraqueta', qty: '30 sobres', precio: '$2.100'}, {item: 'Mantequilla 125g', qty: '12 panes', precio: '$1.500'}
      ] 
    },

    // --- TIENDAS ---
    { type: 'tiendas', name: 'Tienda de Ropa', lat: -36.827, lng: -73.050, color: '#8B5CF6', lastUpdate: 'hace 2 horas', horario: '09:00 - 20:00', 
      stock: [
          {item: 'Poleras de Verano', qty: '15 unid.', precio: '$5.000'}, {item: 'Cable USB-C 1m', qty: '5 unid.', precio: '$3.000'}, {item: 'Calcetines Algodón', qty: '30 pares', precio: '$1.500'},
          {item: 'Chaqueta de Mezclilla', qty: 'Agotado', precio: '$25.000'}, {item: 'Gorras Urbanas', qty: '12 unid.', precio: '$5.000'}
      ] 
    },
    { type: 'tiendas', name: 'Zapatería Centro', lat: -36.825, lng: -73.048, color: '#8B5CF6', lastUpdate: 'hace 5 horas', horario: '10:00 - 19:30', 
      stock: [
          {item: 'Zapatos de Cuero Negro', qty: '8 pares', precio: '$35.000'}, {item: 'Cable USB-C 1m', qty: '22 pares', precio: '$3.500'}, {item: 'Botines Mujer', qty: 'Agotado', precio: '$30.000'},
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
          {item: 'Cuaderno Universitario 100 hojas', qty: '150 unid.', precio: '$1.500'}, {item: 'Cable USB-C 1m', qty: '200 unid.', precio: '$3.000'}, {item: 'Destacador Amarillo', qty: '40 unid.', precio: '$600'},
          {item: 'Cartulina de Colores', qty: '80 pliegos', precio: '$200'}, {item: 'Pegamento en Barra 21g', qty: '35 unid.', precio: '$800'}, {item: 'Tijeras Escolares', qty: 'Agotado', precio: '$1.200'}
      ] 
    },
    { type: 'tiendas', name: 'Tienda de Mascotas', lat: -36.821, lng: -73.042, color: '#8B5CF6', lastUpdate: 'hace 45 minutos', horario: '10:00 - 19:00', 
      stock: [
          {item: 'Alimento Perro Adulto 15kg', qty: '12 sacos', precio: '$25.000'}, {item: 'Cable USB-C 1m', qty: '8 sacos', precio: '$3.000'}, {item: 'Arena Sanitaria 5kg', qty: '20 bolsas', precio: '$4.500'},
          {item: 'Juguete Mordedor', qty: '15 unid.', precio: '$5.200'}, {item: 'Pipeta Antipulgas', qty: 'Agotado', precio: '$20.300'}, {item: 'Correa Retráctil 5m', qty: '4 unid.', precio: '$8.000'}
      ] 
    },
    { type: 'tiendas', name: 'Boutique Elegance', lat: -36.828, lng: -73.042, color: '#8B5CF6', lastUpdate: 'hace 1 día', horario: '10:30 - 19:00', 
      stock: [
          {item: 'Vestido de Noche', qty: '3 unid.', precio: '$45.000'}, {item: 'Cable USB-C 1m', qty: '8 unid.', precio: '$3.500'}, {item: 'Cartera Cuero', qty: '5 unid.', precio: '$35.000'}
      ] 
    },
    { type: 'tiendas', name: 'Deportes Pro', lat: -36.822, lng: -73.049, color: '#8B5CF6', lastUpdate: 'hace 4 horas', horario: '10:00 - 20:30', 
      stock: [
          {item: 'Balón de Fútbol', qty: '15 unid.', precio: '$12.000'}, {item: 'Cable USB-C 1m', qty: '10 pares', precio: '$3.000'}, {item: 'Camiseta Deportiva', qty: '20 unid.', precio: '$15.000'}
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
          {item: 'Contenedor Vidrio', qty: 'Disponible', precio: '$23.500'}, {item: 'Contenedor Cartón', qty: '20% Capacidad', precio: '$18.900'}, {item: 'Contenedor Plástico', qty: '40% Capacidad', precio: '$24.100'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Punto Limpio Parque Ecuador', lat: -36.823, lng: -73.040, color: '#22C55E', lastUpdate: 'ayer', horario: 'Abierto 24 hrs', 
      stock: [
          {item: 'Contenedor Vidrio', qty: 'Lleno', precio: '$16.900'}, {item: 'Contenedor Cartón', qty: '60% Capacidad', precio: '$24.200'}, {item: 'Contenedor Plástico', qty: '30% Capacidad', precio: '$2.900'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Reciclaje San Pedro de la Paz', lat: -36.838, lng: -73.102, color: '#22C55E', lastUpdate: 'hace 5 horas', horario: '09:00 - 18:00', 
      stock: [
          {item: 'Contenedor Vidrio', qty: 'Disponible', precio: '$9.100'}, {item: 'Contenedor Cartón', qty: 'Lleno', precio: '$8.800'}, {item: 'Contenedor Plástico', qty: '70% Capacidad', precio: '$10.400'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Punto Ecológico Barrio Norte', lat: -36.808, lng: -73.048, color: '#22C55E', lastUpdate: 'hace 2 días', horario: 'Abierto 24 hrs', 
      stock: [
          {item: 'Contenedor Vidrio', qty: '10% Capacidad', precio: '$21.500'}, {item: 'Contenedor Cartón', qty: '25% Capacidad', precio: '$18.600'}, {item: 'Contenedor Plástico', qty: '50% Capacidad', precio: '$10.600'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Punto Limpio Lomas de San Andrés', lat: -36.810, lng: -73.060, color: '#22C55E', lastUpdate: 'hace 10 horas', horario: '08:30 - 18:30', 
      stock: [
          {item: 'Contenedor Vidrio', qty: '40% Capacidad', precio: '$5.500'}, {item: 'Contenedor Cartón', qty: 'Lleno', precio: '$12.000'}, {item: 'Contenedor Plástico', qty: '10% Capacidad', precio: '$8.200'}
      ] 
    },
    { type: 'puntos_verdes', name: 'Centro de Reciclaje Collao', lat: -36.820, lng: -73.030, color: '#22C55E', lastUpdate: 'hace 1 día', horario: 'Abierto 24 hrs', 
      stock: [
          {item: 'Contenedor Vidrio', qty: 'Disponible', precio: '$15.000'}, {item: 'Contenedor Cartón', qty: '80% Capacidad', precio: '$14.000'}, {item: 'Contenedor Plástico', qty: '60% Capacidad', precio: '$9.000'}
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
          {item: 'Paracetamol 500mg', qty: '12 frascos', precio: '$1.300'}, {item: 'Ibuprofeno 400mg', qty: '40 cajas', precio: '$1.900'}, {item: 'Termómetro Digital', qty: 'Agotado', precio: '$4.500'},
          {item: 'Jarabe para la tos', qty: '8 frascos', precio: '$7.600'}
      ] 
    },
    { type: 'farmacias', name: 'Salcobrand Centro', lat: -36.824, lng: -73.045, color: '#E11D48', lastUpdate: 'hace 20 minutos', horario: '08:00 - 22:00', 
      stock: [
          {item: 'Paracetamol 500mg', qty: '35 cajas', precio: '$1.250'}, {item: 'Ibuprofeno 400mg', qty: '20 frascos', precio: '$1.850'}, {item: 'Gotas para los ojos', qty: '15 unid.', precio: '$5.500'},
          {item: 'Crema Hidratante', qty: '10 potes', precio: '$8.900'}
      ] 
    },
    { type: 'farmacias', name: 'Farmacia Dr. Simi', lat: -36.827, lng: -73.042, color: '#E11D48', lastUpdate: 'hace 2 horas', horario: '09:00 - 20:30', 
      stock: [
          {item: 'Paracetamol 500mg', qty: '50 cajas', precio: '$1.000'}, {item: 'Ibuprofeno 400mg', qty: '40 cajas', precio: '$1.500'}, {item: 'Venda Elástica', qty: '12 unid.', precio: '$2.000'},
          {item: 'Alcohol 70° 500ml', qty: 'Agotado', precio: '$1.800'}
      ] 
    },
    { type: 'farmacias', name: 'Farmacia Redfarma', lat: -36.821, lng: -73.052, color: '#E11D48', lastUpdate: 'hace 5 horas', horario: '08:30 - 21:30', 
      stock: [
          {item: 'Paracetamol 500mg', qty: '25 cajas', precio: '$1.200'}, {item: 'Ibuprofeno 400mg', qty: '30 cajas', precio: '$1.750'}, {item: 'Pañales Adulto', qty: '10 paquetes', precio: '$12.500'},
          {item: 'Toallas Húmedas', qty: '20 paquetes', precio: '$2.500'}
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
          {item: 'Alimento Perro Cachorro 10kg', qty: '10 unid.', precio: '$19.000'}, {item: 'Arena Gatos Premium', qty: '8 sacos', precio: '$9.200'}, {item: 'Rascador para Gatos', qty: '3 unid.', precio: '$7.000'},
          {item: 'Hueso de Juguete', qty: '20 unid.', precio: '$7.100'}
      ] 
    },
    { type: 'petshops', name: 'Peludos & Cía', lat: -36.829, lng: -73.048, color: '#D97706', lastUpdate: 'hace 1 hora', horario: '10:00 - 19:00', 
      stock: [
          {item: 'Alimento Perro Cachorro 10kg', qty: '30 latas', precio: '$17.500'}, {item: 'Arena Gatos Premium', qty: '50 tubos', precio: '$8.000'}, {item: 'Cama para Perro M', qty: '5 unid.', precio: '$18.000'},
          {item: 'Shampoo Avena', qty: '12 frascos', precio: '$6.500'}
      ] 
    },
    { type: 'petshops', name: 'SuperPet', lat: -36.818, lng: -73.040, color: '#D97706', lastUpdate: 'hace 4 horas', horario: '10:30 - 20:00', 
      stock: [
          {item: 'Alimento Perro Cachorro 10kg', qty: '10 sacos', precio: '$18.500'}, {item: 'Arena Gatos Premium', qty: '15 bolsas', precio: '$7.500'}, {item: 'Transportadora Gato', qty: '3 unid.', precio: '$22.000'},
          {item: 'Plato Acero Inoxidable', qty: '20 unid.', precio: '$4.500'}
      ] 
    },
    { type: 'petshops', name: 'Amigos de Cuatro Patas', lat: -36.826, lng: -73.056, color: '#D97706', lastUpdate: 'ayer', horario: '11:00 - 18:30', 
      stock: [
          {item: 'Alimento Perro Cachorro 10kg', qty: '8 unid.', precio: '$18.200'}, {item: 'Arena Gatos Premium', qty: '15 bolsas', precio: '$8.300'}, {item: 'Comida Hamster', qty: '10 cajas', precio: '$2.800'},
          {item: 'Juguete Pluma Gato', qty: '25 unid.', precio: '$1.500'}
      ] 
    }
];
