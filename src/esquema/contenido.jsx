const _DISEÑO_ADAPTATIVO_ = new GenerarContenidoLibreria({
    nombre: "CSScmds JS",
    slogan: "Adapta tu diseño web de forma controlada según el ancho de la ventana",
    img: 'src/img/logo.jpeg',

    github: "https://github.com/Jeff-Aporta/CSScmds",

    resumen: {
        desc: `
            Diseñada para crear comportamiento responsivos mediante interpolación lineal (lerpw), 
            condiciones (ifw) y switches (switchw) reglas basadas en el ancho de la ventana. 
            Esta herramienta permite a los desarrolladores ajustar dinámicamente el diseño, 
            únicamente apto para tamaños.
        `,
        descImg: [
            "Interpolación Lineal: Ajusta suavemente los elementos de la interfaz según el ancho de la ventana.",
            "Condiciones Dinámicas: Define comportamientos específicos para diferentes rangos de ancho.",
            "Switches Inteligentes: Cambia entre diferentes estilos y configuraciones de manera automática.",
            "Fácil Integración: Compatible con cualquier proyecto web y fácil de implementar.",
        ]
    },

    secciones: [
        {
            nombre: "sección 1",
            contenido: (thisObj) => {
                return (
                    <p>
                        <p
                            className={CSScmds(`
                                x<600px?{
                                    border:1px solid white;
                                    padding: 10px [min(100%,300px),min(100%,500px)];
                                }
                                500px<-x->1000px{
                                    padding: [10px,50px] [0px,50px];
                                    font-size: [20px,30px];
                                }
                            `)}
                        >
                            Sección 1
                        </p>
                        <p
                            className={CSScmds(`
                                x<600px?color:(red,green);border:1px solid white
                                500px<-x->1000px?font-size: [10px,50px];padding: [0px,40px] [10px,50px];
                            `)}
                        >
                            Sección 1
                        </p>
                    </p>
                );
            }
        }
    ]
})