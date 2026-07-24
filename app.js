// Creación de la instancia principal de Vue
const app = Vue.createApp({
    data() {
        return {
            mostrarCarrito: false,
            // Recupero el carrito de localStorage para que no se borre al recargar la página
            carrito: JSON.parse(localStorage.getItem('franco_cart')) || [],
            // Array de objetos con los productos del catálogo
            productos: [

                { 
                    nombre: "Intel Core Ultra 7 265K 5.5Ghz Turbo Socket 1851 Arrow Lake",
                    precio: 562000, 
                    desc: "20 núcleos, arquitectura Arrow Lake de última generación.",
                    categoria: "CPUs", 
                    img: "images/cpu.jpg" 
                },

                { 
                    nombre: "MSI B860 GAMING PLUS WIFI DDR5 LGA1851 WiFi 6", 
                    precio: 326600, 
                    desc: "Mother MSI compatible con Socket Arrow Lake.", 
                    categoria: "Mothers", 
                    img: "images/mother.jpg" 
                },

                { 
                    nombre: "Asrock Intel ARC B570 10GB GDDR6 Challenger OC", 
                    precio: 423900, 
                    desc: "Gráficos para 1080pe con overclock de fábrica para gaming potenciado con IA.", 
                    categoria: "Gráficos", 
                    img: "images/gpu.jpg" 
                },

                { 
                    nombre: "Memoria RAM DDR5 16GB 6000MHz T-force Vulcan Team Group", 
                    precio: 429865, 
                    desc: "Alta velocidad optimizada para PC de escritorio gamer.", 
                    categoria: "RAM", 
                    img: "images/ram.jpg" 
                },

                { 
                    nombre: "Disco Solido Ssd M2 Pci-E Nvme 1TB Kingston Nv3 PCIe 4.0", 
                    precio: 295999, 
                    desc: "Almacenamiento ultra rápido de 1TB para carga instantánea.", 
                    categoria: "Discos", 
                    img: "images/ssd.jpg" 
                },

                { 
                    nombre: "Fuente Cooler Master 850W 80 Plus Gold Full Modular MWE V3", 
                    precio: 165999, 
                    desc: "Eficiencia Gold y gestión de cables limpia para tu setup con proteccion electrica.", 
                    categoria: "Fuentes", 
                    img: "images/fuente.jpg" 
                },

                { 
                    nombre: "Gabinete be quiet! Light Base 600 LX White ARGB", 
                    precio: 330186, 
                    desc: "Gabinete moderno con formato de pecera y flujo de aire ampliado.", 
                    categoria: "Gabinetes", 
                    img: "images/gabinete.jpg" 
                },

                { 
                    nombre: "Cooler CPU ID-Cooling FROZN A610 120mm ARGB 250w TDP", 
                    precio: 96841, 
                    desc: "Disipador por aire de alto rendimiento para procesadores potentes.", 
                    categoria: "Coolers", 
                    img: "images/cooler-cpu.jpg" 
                },

                { 
                    nombre: "Cooler FAN Be Quiet! LIGHT WINGS 120mm White ARGB PWM KIT X3", 
                    precio: 140085, 
                    desc: "Ventiladores silenciosos con iluminación RGB con controladora.", 
                    categoria: "Coolers", 
                    img: "images/fans.jpg" 
                },

                { 
                    nombre: "Monitor Valkyrie 27\" Qhd 1440p 200hz 1ms Ips G Sync Hdr", 
                    precio: 299500, 
                    desc: "Resolución 2K y 200Hz para fluidez total en gaming y con HDR10 para una buena edicion de video.", 
                    categoria: "Monitores", 
                    img: "images/monitor.jpg" 
                },

                { 
                    nombre: "Teclado gamer bluetooth Redragon Horus K618 QWERTY Low profile", 
                    precio: 124747, 
                    desc: "Teclado Mecánico inalámbrico ultra delgado con switches lineares y tres modos de conexion.", 
                    categoria: "Periféricos", 
                    img: "images/teclado.jpg" 
                },

                { 
                    nombre: "Redragon Ratón Inalámbrico Gaming Tri-mode 2.4g/usb-c/bt", 
                    precio: 93574, 
                    desc: "Mouse ergonómico con iluminación RGB y tres modos de conexion.", 
                    categoria: "Periféricos", 
                    img: "images/mouse.jpg" 
                },

                { 
                    nombre: "Webcam Logitech Brio 100 Full Hd 1080p Negro", 
                    precio: 60199, 
                    desc: "Cámara HD con tapa de privacidad integrada para oficina u streaming.", 
                    categoria: "Periféricos", 
                    img: "images/webcam.jpg" 
                },

                { 
                    nombre: "Gamesir Cyclone 2 Charging dock Shadow Black Hall Effect", 
                    precio: 123999, 
                    desc: "Control inalámbrico con joysticks magnéticos, luces RGB progamables mediante driver y base de carga.", 
                    categoria: "Periféricos", 
                    img: "images/joystick.jpg" 
                },

                { 
                    nombre: "Barra De Sonido Redragon Gs570 Darknets Led Rgb Bt Aux", 
                    precio: 92999, 
                    desc: "Audio compacto con efectos de luz para tu escritorio con dos modos de conexion.", 
                    categoria: "Audio", 
                    img: "images/audio.jpg" 
                },

                { 
                    nombre: "Soporte Naku SS-C024D Doble Brazo Hidráulico 13-32\"", 
                    precio: 78958, 
                    desc: "Soporte robusto con ajuste de altura fluido para dos monitores de hasta 32 pulgadas cada uno.", 
                    categoria: "Soportes", 
                    img: "images/soporte.jpg" 
                },

                { 
                    nombre: "Estabilizador De Tension Trv Powersafe Usb 6tomas Negro", 
                    precio: 59490, 
                    desc: "Protección eléctrica con puertos USB adicionales.", 
                    categoria: "Protección", 
                    img: "images/estabilizador.jpg" 
                },

                { 
                    nombre: "Unidad Sandisk Ultra Dual 256 Gb Usb-c Usb 3.1", 
                    precio: 145603, 
                    desc: "Pendrive versátil con doble ficha para celulares y computadoras.", 
                    categoria: "Almacenamiento", 
                    img: "images/pendrive.jpg" 
                },
                
                { 
                    nombre: "Mouse Pad Gamer Rgb Retroiluminado Xinua Mapa 80x30 Cm", 
                    precio: 25000, 
                    desc: "Superficie extendida con bordes iluminados.", 
                    categoria: "Periféricos", 
                    img: "images/mousepad.jpg" 
                }
            ]
        }
    },
    // Watcher para guardar cambios automáticamente en LocalStorage
    watch: {
        carrito: {
            handler(nuevo) { localStorage.setItem('franco_cart', JSON.stringify(nuevo)); },
            deep: true // deep: true es necesario para detectar cambios dentro del array
        }
    },
    // Propiedades computadas para cálculos automáticos
    computed: {
        // Calcula el total sumando los precios de lo que hay en el carrito
        totalDinero() { return this.carrito.reduce((sum, item) => sum + item.precio, 0); },
        // Agrupa productos repetidos para mostrarlos más prolijos en el sidebar
        carritoResumido() {
            const resumen = {};
            this.carrito.forEach(item => {
                if (!resumen[item.nombre]) resumen[item.nombre] = { ...item, cantidad: 0 };
                resumen[item.nombre].cantidad++;
            });
            return Object.values(resumen);
        }
    },
    // Métodos para manejar las acciones del usuario
    methods: {
        // Abre o cierra el sidebar del carrito
        toggleCarrito() { this.mostrarCarrito = !this.mostrarCarrito; },
        // Agrega un producto al array
        agregarAlCarrito(prod) { this.carrito.push({...prod}); },
        // Borra solo una unidad de un producto específico
        quitarUno(nombre) {
            const index = this.carrito.map(i => i.nombre).lastIndexOf(nombre);
            if (index !== -1) this.carrito.splice(index, 1);
        },
        // Borra todas las unidades de un mismo producto
        eliminarProductoCompleto(nombre) {
            this.carrito = this.carrito.filter(item => item.nombre !== nombre);
        },
        // Devuelve cuántas veces está un producto en el carrito
        getCantidad(nombre) { return this.carrito.filter(i => i.nombre === nombre).length; },
        // Limpia el carrito y el storage
        vaciarCarrito() { 
            this.carrito = []; 
            localStorage.removeItem('franco_cart');
            this.mostrarCarrito = false;
        },
        // Simulación de cierre de compra
        finalizarCompra() {
            alert("¡Gracias por tu compra, Franco! Total procesado: $ " + this.totalDinero.toLocaleString());
            this.vaciarCarrito();
        }
    }
});

// Componente reutilizable para las tarjetas de productos
app.component('producto-item', {
    props: ['info', 'cantidad'], // Recibe los datos del producto y la cantidad actual
    data() {
        return { verDetalle: false } // Estado interno para mostrar/ocultar descripción
    },
    template: `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm border-0">
                <img :src="info.img" class="card-img-top p-3" :alt="info.nombre">
                <div class="card-body d-flex flex-column text-center">
                    <p class="badge bg-secondary mb-2 mx-auto">{{ info.categoria }}</p>
                    <h6 class="card-title fw-bold">{{ info.nombre }}</h6>
                    
                    <!-- Botón con evento @click para mostrar/ocultar detalle (v-if) -->
                    <button class="btn btn-sm btn-link text-dark mb-2" @click="verDetalle = !verDetalle">
                        {{ verDetalle ? 'Ocultar especificaciones' : 'Especificaciones' }}
                    </button>
                    
                    <p v-if="verDetalle" class="text-muted xsmall">{{ info.desc }}</p>
                    
                    <p class="h5 text-success mb-3">$ {{ info.precio.toLocaleString() }}</p>
                    
                    <div class="mt-auto">
                        <!-- Botón simple si no hay unidades agregadas -->
                        <button v-if="cantidad === 0" @click="$emit('sumar')" class="btn btn-warning w-100 fw-bold">AGREGAR</button>
                        
                        <!-- Controles de +/- si el producto ya está en el carrito -->
                        <div v-else class="btn-group w-100 shadow-sm">
                            <button @click="$emit('restar')" class="btn btn-danger">-</button>
                            <span class="btn btn-light disabled fw-bold text-dark">{{ cantidad }}</span>
                            <button @click="$emit('sumar')" class="btn btn-success">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});

// Montar la app en el div con id 'app'
app.mount('#app');