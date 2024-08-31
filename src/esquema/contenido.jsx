const _CSScmds_ = new GenerarContenidoLibreria({
    nombre: "CSScmds JS",
    slogan: "Adapta tu diseño web de forma controlada según el ancho de la ventana",
    img: 'src/img/logo.jpeg',

    github: "https://github.com/Jeff-Aporta/CSScmds",

    resumen: {
        desc: `
            *CSScmds* implementa un sistema avanzado de manejo y manipulación de estilos CSS dinámicos basado en comandos 
            personalizados. Está diseñado para modificar estilos en función de condiciones específicas y permite la 
            definición de reglas CSS que responden a ciertos parámetros, como el tamaño de la pantalla, mediante 
            comandos de estilo encapsulados.
        `,
        descImg: [
            "*Interpolación Lineal:* Ajusta suavemente los elementos de la interfaz según el ancho de la ventana.",
            "*Condiciones Dinámicas:* Define comportamientos específicos para diferentes rangos de ancho.",
            "*Switches Inteligentes:* Cambia entre diferentes estilos y configuraciones de manera automática.",
            "*Fácil Integración:* Compatible con cualquier proyecto web y fácil de implementar.",
        ]
    },

    secciones: [
        {
            nombre: "Introducción",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        *CSScmds* es una librería de JavaScript que permite aplicar estilos CSS dinámicos en función de interpolación y condiciones.
                        <div
                            style={{
                                maxWidth: "500px",
                                maxHeight: "400px",
                                margin: "15px auto",
                            }}
                        >
                            <lite-youtube
                                videoid="rd_DuG1c4mw"
                            />
                        </div>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Usar con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Para utilizar este módulo en tu proyecto, simplemente incluye el archivo `index.js`
                        en tu proyecto o enlázalo en tu documento HTML:
                        <br />
                        <Code nocode className="link">
                            {thisObj.githubPage}/index.js
                        </Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "CSScmds(cmds, ...extras)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        *CSScmds* es el núcleo del módulo que permite aplicar y gestionar reglas CSS dinámicas basadas en
                        comandos personalizados. Esta función interpreta cadenas de texto que definen condiciones específicas
                        y aplica los estilos CSS correspondientes en función de esas condiciones.
                        <br />
                        <h2>
                            Parámetros
                        </h2>
                        <ul className="punto-centrico">
                            <LIDocTitulo>
                                comandos: Una cadena de texto que contiene los comandos CSS a ejecutar. Estos comandos pueden
                                incluir condiciones como el tamaño de la pantalla o combinaciones de propiedades y valores CSS.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                extras: Valores adicionales de otras clases que se concatenan con los resultados de la ejecución
                                de los comandos.
                            </LIDocTitulo>
                        </ul>
                        <br />
                        <h2>
                            Retorno
                        </h2>
                        <ul className="punto-centrico">
                            <li>
                                Devuelve una cadena de texto con las clases CSS generadas por los comandos y los valores extras.
                            </li>
                        </ul>
                        <br />
                        <h2>
                            Sintaxis General
                        </h2>
                        La estructura básica de una regla es la siguiente:
                        <Code linenumbers={false}>{`
                            condicion?propiedad1:(valor1,valor2,...);propiedad2:(valor1,valor2,...);...
                        `}</Code>
                        <ul className="punto-centrico">
                            <LIDocTitulo>
                                condición: Define el rango de ancho de pantalla en el cual se aplicará la regla.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                propiedad: La propiedad CSS a la que se le aplicarán los valores especificados.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                (valor1, valor2,...): Los valores que se aplicarán a la propiedad. se escogerá uno según la evaluación de la condición.
                            </LIDocTitulo>
                        </ul>
                        <br />
                        <h2>
                            Tipos de reglas
                        </h2>
                        <SubEnvolventeSeccion>
                            <h3>
                                Reglas IFW
                            </h3>
                            Las reglas IFW son reglas condicionales que se aplican en función del ancho de la pantalla. Se dividen en tres tipos:
                            <ul className="punto-centrico">
                                <LIDocTitulo>
                                    less: Se aplica cuando el ancho de la pantalla es menor que el valor especificado.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    up: Se aplica cuando el ancho de la pantalla es mayor que el valor especificado.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    between: Se aplica cuando el ancho de la pantalla está entre dos valores especificados.
                                </LIDocTitulo>
                            </ul>
                            <h3>
                                Reglas LERPW
                            </h3>
                            Las reglas LERPW son reglas son interpolaciones lineales que ajustan suavemente las medidas de los elementos
                            de la interfaz en función del ancho de la pantalla.
                        </SubEnvolventeSeccion>
                        <br />
                        <h2>
                            Aclaracion
                        </h2>
                        Las reglas LERPW son reglas que se aplican solamente a propiedades de medidas en px, como el ancho, alto,
                        padding, margin, etc.
                        <br /><br />
                        No se pueden aplicar a propiedades como `color, background-color, etc,` ya que LERPW solo genera valores de medidas px.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "CSScmdsReset()",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        *CSScmdsReset* es una función que permite restablecer los estilos CSS aplicados por *CSScmds* a su estado
                        original. Esta función elimina todas las clases CSS generadas por *CSScmds* y restablece los estilos
                        predeterminados de los elementos afectados.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "IFW",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Las reglas IFW (If Width) en *CSScmds* permiten crear estilos condicionales que se aplican en función del
                        ancho de la pantalla. Estas reglas definen cómo deben cambiar las propiedades CSS a medida que el ancho de
                        la ventana cambia, permitiendo adaptar el diseño de la interfaz a diferentes tamaños de pantalla.
                        <h2>
                            Tipos de reglas IFW
                        </h2>
                        <ul className="punto-centrico">
                            <LIDocTitulo>
                                less: Se aplica cuando el ancho de la pantalla es menor que el valor especificado.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                up: Se aplica cuando el ancho de la pantalla es mayor que el valor especificado.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                between: Se aplica cuando el ancho de la pantalla está entre dos valores especificados.
                            </LIDocTitulo>
                        </ul>
                        Este tipo de reglas permite asignar cualquier propiedad CSS a un elemento en función del ancho de la pantalla,
                        sea un color, tamaño, fuente, etc.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "IFW: Reglas less y up (Bifurcación)",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Las reglas less y up tienen las condiciones de la forma: *x&lt;valor-px* y *x&gt;valor-px* respectivamente.
                        se aplican cuando x (el ancho de la pantalla) es menor o mayor que el valor especificado.
                        <h3>
                            Valores de propiedades
                        </h3>
                        Cuando se evaluan las condiciones a la clase asignada se le aplicará el valor de la propiedad que corresponda a la condición.
                        Los valores admiten cualquier tipo de valor CSS, como colores, tamaños, fuentes, etc.
                        Se definen de la siguiente manera
                        <Code>{`
                            condicion?propiedad:(valor-si-verdadero,valor-si-falso);
                        `}</Code>
                        <b>
                            Ejemplo ifw-less
                        </b>
                        <Code>{`
                            x<600px?color:(red,green);
                        `}</Code>
                        <b>
                            Ejemplo ifw-up
                        </b>
                        <Code>{`
                            x>600px?color:(red,green);
                        `}</Code>
                        Cuando el ancho de la pantalla es menor a 600px se aplicará el color rojo, de lo contrario se aplicará el color verde.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "IFW: Reglas between (Trifurcación)",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Las reglas between tienen la condición de la forma *valor-min-px&lt;x&lt;valor-max-px* o *valor-max-px&gt;x&gt;valor-min-px*.
                        Se aplican cuando x (el ancho de la pantalla) está entre los valores especificados.
                        <h3>
                            Valores de propiedades
                        </h3>
                        En las reglas between ocurre lo mismo que en las reglas less y up, pero con la diferencia de que se pueden definir tres valores.
                        También se pueden definir valores con cualquier tipo de valor CSS.
                        <p>
                            <b>
                                Ejemplo con tres valores
                            </b>
                        </p>
                        <Code>{`
                            condicion?propiedad:(valor-si-x-menor-a-min, valor-si-x-entre-min-y-max, valor-si-x-mayor-a-max);
                        `}</Code>
                        <b>
                            Ejemplo con dos valores
                        </b>
                        <Code>{`
                            condicion?propiedad:(valor-si-verdadero, valor-si-falso);
                        `}</Code>
                        Lo que es equivalente a:
                        <Code>{`
                            condicion?propiedad:(valor-si-falso, valor-si-verdadero, valor-si-falso);
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "IFW: conflicto con funciones nativas de CSS",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Para las reglas between y up y less se pueden usar funciones de CSS para definir propiedades.
                        En ocaciones hay que definir propiedades con funciones, funciones como max(), min(), calc(), etc.
                        Para usar estas funciones se debe de usar la siguiente sintaxis
                        <Code>{`
                            x<600px?width:[calc(100% - 20px),100%];
                            400px<x<800px?width:[calc(100% - 20px), calc(50% - 10px), calc(33.33% - 6.67px)];
                        `}</Code>
                        Se usan los corchetes `[ ]` para indicar que se va a usar una función de CSS, así se evitan conflictos con los
                        agrupadores de valores.
                        Si al menos un valor es una propiedad tiene que usar corchetes, entonces todos los valores deben de tener
                        corchetes.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "IFW: Funcionamiento con CSS",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Las reglas IFW funcionan a nivel de CSS, es decir, JavaScript aunque interpreta las reglas, no tiene
                        que realizar cálculos más allá de la interpretación de las reglas.
                        <br /><br />
                        Se hace uso de reglas @media para definir los rangos de anchos de pantalla, y se hace uso de las funciones
                        de CSS para definir los valores de las propiedades.
                        <br />
                        <br />
                        <h3>
                            Ejemplo de regla less IFW
                            <CodeInline>{`
                                x<600px?color:(red,green); 
                            `}</CodeInline>
                        </h3>
                        <Code>{`
                            @media (width < 600px){
                                .clase-retorno{
                                    color: red;
                                }
                            }
                            @media (width >= 600px){
                                .clase-retorno{
                                    color: green;
                                }
                            }
                        `}</Code>
                        <h3>
                            Ejemplo de regla up IFW
                            <CodeInline>{`
                                x>600px?color:(red,green);
                            `}</CodeInline>
                        </h3>
                        <Code>{`    
                            @media (width > 600px){
                                .clase-retorno{
                                    color: red;
                                }
                            }
                            @media (width <= 600px){
                                .clase-retorno{
                                    color: green;
                                }
                            }
                        `}</Code>
                        <h3>
                            Ejemplo de regla between IFW
                            <CodeInline>{`
                                600px<x<1200px?color:(red,green,blue); 
                            `}</CodeInline>
                        </h3>
                        <Code>{`
                            @media (width < 600px){
                                .clase-retorno{
                                    color: red;
                                }
                            }

                            @media (width >= 600px and width < 1200px){
                                .clase-retorno{
                                    color: green;
                                }
                            }

                            @media (width >= 1200px){
                                .clase-retorno{
                                    color: blue;
                                }
                            }
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "LERPW",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Las reglas LERPW (Linear Interpolation Width) en *CSScmds* permiten crear transiciones suaves entre
                        diferentes valores de propiedades CSS en función del ancho de la pantalla. Utilizando interpolación lineal,
                        estas reglas definen cómo deben cambiar las propiedades CSS a medida que el ancho de la ventana se expande o
                        se contrae dentro de un rango específico.
                        <h2>
                            Sintaxis
                        </h2>
                        La estructura básica de una regla LERPW es la siguiente:
                        <Code linenumbers={false}>{`
                            minWidth<-x->maxWidth?propiedad:(valorInicial, valorFinal);
                        `}</Code>
                        <ul className="punto-centrico">
                            <LIDocTitulo>
                                minWidth: Ancho mínimo en píxeles (px) donde la interpolación comienza.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                maxWidth: Ancho máximo en píxeles (px) donde la interpolación termina.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                propiedad: La propiedad CSS a la que se le aplicarán los valores interpolados.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                (valorInicial, valorFinal): Los valores iniciales y finales de la propiedad que se interpolarán.
                            </LIDocTitulo>
                        </ul>
                        <h3>
                            Proyecciones
                        </h3>
                        En las reglas *LERPW* utilizadas en *CSScmds,* los corchetes `[]` y los paréntesis `()` tienen significados
                        específicos que permiten controlar cómo se comportan las interpolaciones a lo largo del rango de anchos
                        de pantalla definido.
                        <h4>
                            Tipos de proyección
                        </h4>
                        <ul className="punto-centrico">
                            <LIDocTitulo>
                                Proyección abierta ( ): Indica que la interpolación continuará siendo lineal más allá de los límites
                                del rango de anchos de pantalla.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                Proyección cerrada [ ]: Indica que la interpolación conservará el valor del extremo más cercano al rango
                                de anchos de pantalla.
                            </LIDocTitulo>
                            <LIDocTitulo>
                                Proyección mixta ( ] o [ ): Indica que la interpolación se comportará de manera diferente en cada extremo,
                                ya sea abierta o cerrada.
                            </LIDocTitulo>
                        </ul>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "LERPW: Proyección abierta ( )",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los paréntesis *( )* indican proyección abierta, la proyección puede ser abierta a la izquierda, a la derecha
                        o a ambos lados.
                        <br /><br />
                        Un valor abierto significa que la interpolación aunque se salga del rango de anchos de pantalla, seguirá calculando.
                        <h3>
                            Ejemplo
                        </h3>
                        <Code>{`
                            600px<-x->1200px?margin:(20px, 50px);
                        `}</Code>
                        Significa que la interpolación se hará desde 600px con margen de 20px hasta 1200px con margen de 50px.
                        <center>
                            {(() => {
                                const h = 300;
                                const w = 350;
                                return (
                                    <svg
                                        width={w}
                                        height={h}
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            backgroundColor: "white",
                                            margin: "20px",
                                            filter: "invert(0.9)",
                                            borderRadius: "20px"
                                        }}
                                    >
                                        <g
                                            transform={`translate(40, ${h - 40})`}
                                        >
                                            <line x1={-w} y1="0" x2={w} y2="0" stroke="black" strokeWidth="2" />
                                            <line x1="0" y1={-h} x2="0" y2={h} stroke="black" strokeWidth="2" />

                                            <line x1="20%" y1={-h} x2="20%" y2={h} stroke="skyblue" strokeWidth="2" />
                                            <line x1="70%" y1={-h} x2="70%" y2={h} stroke="skyblue" strokeWidth="2" />

                                            <line x1={-w} y1="-20%" x2={w} y2="-20%" stroke="skyblue" strokeWidth="2" />
                                            <line x1={-w} y1="-70%" x2={w} y2="-70%" stroke="skyblue" strokeWidth="2" />

                                            <line x1="20%" y1="-20%" x2="70%" y2="-70%" stroke="red" strokeWidth="3" />
                                            <line x1="20%" y1="-20%" x2="-100%" y2="100%" stroke="magenta" strokeWidth="3" />
                                            <line x1="100%" y1="-100%" x2="70%" y2="-70%" stroke="magenta" strokeWidth="3" />

                                            <text
                                                x="20%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                600px
                                            </text>
                                            <text
                                                x="70%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                1200px
                                            </text>

                                            <text
                                                x="-20"
                                                y="-20%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                20px
                                            </text>
                                            <text
                                                x="-20"
                                                y="-70%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                50px
                                            </text>
                                        </g>
                                    </svg>
                                );
                            })()}
                        </center>
                        El hecho de que la proyección sea abierta significa que aunque el ancho de la pantalla sea menor a 600px
                        o mayor a 1200px, la interpolación seguirá calculando los valores proyectados linealmente de la propiedad.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "LERPW: Proyección cerrada [ ]",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los corchetes *[ ]* indican proyección cerrada, la proyección puede ser cerrada a la izquierda, a la derecha
                        o a ambos lados.
                        <br /><br />
                        Un valor cerrado significa que la interpolación conservará el valor del extremo más cercano al ancho de la pantalla.
                        <h3>
                            Ejemplo
                        </h3>
                        <Code>{`
                            600px<-x->1200px?margin:[20px, 50px];
                        `}</Code>
                        Significa que la interpolación se hará desde 600px con margen de 20px hasta 1200px con margen de 50px.
                        <center>
                            {(() => {
                                const h = 300;
                                const w = 350;
                                return (
                                    <svg
                                        width={w}
                                        height={h}
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            backgroundColor: "white",
                                            margin: "20px",
                                            filter: "invert(0.9)",
                                            borderRadius: "20px"
                                        }}
                                    >
                                        <g
                                            transform={`translate(40, ${h - 40})`}
                                        >
                                            <line x1={-w} y1="0" x2={w} y2="0" stroke="black" strokeWidth="2" />
                                            <line x1="0" y1={-h} x2="0" y2={h} stroke="black" strokeWidth="2" />

                                            <line x1="20%" y1={-h} x2="20%" y2={h} stroke="skyblue" strokeWidth="2" />
                                            <line x1="70%" y1={-h} x2="70%" y2={h} stroke="skyblue" strokeWidth="2" />

                                            <line x1={-w} y1="-20%" x2={w} y2="-20%" stroke="skyblue" strokeWidth="2" />
                                            <line x1={-w} y1="-70%" x2={w} y2="-70%" stroke="skyblue" strokeWidth="2" />

                                            <line x1="20%" y1="-20%" x2="70%" y2="-70%" stroke="red" strokeWidth="3" />
                                            <line x1={-w} y1="-20%" x2="20%" y2="-20%" stroke="magenta" strokeWidth="3" />
                                            <line x1="70%" y1="-70%" x2={w} y2="-70%" stroke="magenta" strokeWidth="3" />

                                            <text
                                                x="20%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                600px
                                            </text>
                                            <text
                                                x="70%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                1200px
                                            </text>

                                            <text
                                                x="-20"
                                                y="-20%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                20px
                                            </text>
                                            <text
                                                x="-20"
                                                y="-70%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                50px
                                            </text>
                                        </g>
                                    </svg>
                                );
                            })()}
                        </center>
                        El hecho de que la proyección sea cerrada significa que aunque el ancho de la pantalla sea menor a 600px
                        o mayor a 1200px, la interpolación conservará el valor del extremo más cercano al ancho de la pantalla.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "LERPW: Proyección mixta ( ] o [ )",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los corchetes *[ ]* y los paréntesis *( )* pueden generar proyección mixta.
                        <br /><br />
                        Un valor mixto significa que la interpolación se comportará de manera diferente en cada extremo,
                        ya sea abierta o cerrada.
                        <br />
                        <h3>
                            Ejemplo de proyección mixta [ )
                        </h3>
                        <Code>{`
                            600px<-x->1200px?margin:[20px, 50px);
                        `}</Code>
                        <center>
                            {(() => {
                                const h = 300;
                                const w = 350;
                                return (
                                    <svg
                                        width={w}
                                        height={h}
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            backgroundColor: "white",
                                            margin: "20px",
                                            filter: "invert(0.9)",
                                            borderRadius: "20px"
                                        }}
                                    >
                                        <g
                                            transform={`translate(40, ${h - 40})`}
                                        >
                                            <line x1={-w} y1="0" x2={w} y2="0" stroke="black" strokeWidth="2" />
                                            <line x1="0" y1={-h} x2="0" y2={h} stroke="black" strokeWidth="2" />

                                            <line x1="20%" y1={-h} x2="20%" y2={h} stroke="skyblue" strokeWidth="2" />
                                            <line x1="70%" y1={-h} x2="70%" y2={h} stroke="skyblue" strokeWidth="2" />

                                            <line x1={-w} y1="-20%" x2={w} y2="-20%" stroke="skyblue" strokeWidth="2" />
                                            <line x1={-w} y1="-70%" x2={w} y2="-70%" stroke="skyblue" strokeWidth="2" />

                                            <line x1="20%" y1="-20%" x2="70%" y2="-70%" stroke="red" strokeWidth="3" />
                                            <line x1={-w} y1="-20%" x2="20%" y2="-20%" stroke="magenta" strokeWidth="3" />
                                            <line x1="100%" y1="-100%" x2="70%" y2="-70%" stroke="magenta" strokeWidth="3" />

                                            <text
                                                x="20%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                600px
                                            </text>
                                            <text
                                                x="70%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                1200px
                                            </text>

                                            <text
                                                x="-20"
                                                y="-20%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                20px
                                            </text>
                                            <text
                                                x="-20"
                                                y="-70%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                50px
                                            </text>
                                        </g>
                                    </svg>
                                );
                            }
                            )()}
                        </center>
                        El hecho de que la proyección sea mixta [ ) significa que cuando el ancho de la pantalla sea menor a 600px
                        la interpolación se comportará como cerrada y si por encima de 1200px se comportará como abierta.
                        <br />
                        <h3>
                            Ejemplo de proyección mixta ( ]
                        </h3>
                        <Code>{`
                            600px<-x->1200px?margin:(20px, 50px];
                        `}</Code>
                        <center>
                            {(() => {
                                const h = 300;
                                const w = 350;
                                return (
                                    <svg
                                        width={w}
                                        height={h}
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            backgroundColor: "white",
                                            margin: "20px",
                                            filter: "invert(0.9)",
                                            borderRadius: "20px"
                                        }}
                                    >
                                        <g
                                            transform={`translate(40, ${h - 40})`}
                                        >
                                            <line x1={-w} y1="0" x2={w} y2="0" stroke="black" strokeWidth="2" />
                                            <line x1="0" y1={-h} x2="0" y2={h} stroke="black" strokeWidth="2" />

                                            <line x1="20%" y1={-h} x2="20%" y2={h} stroke="skyblue" strokeWidth="2" />
                                            <line x1="70%" y1={-h} x2="70%" y2={h} stroke="skyblue" strokeWidth="2" />

                                            <line x1={-w} y1="-20%" x2={w} y2="-20%" stroke="skyblue" strokeWidth="2" />
                                            <line x1={-w} y1="-70%" x2={w} y2="-70%" stroke="skyblue" strokeWidth="2" />

                                            <line x1="20%" y1="-20%" x2="70%" y2="-70%" stroke="red" strokeWidth="3" />
                                            <line x1="70%" y1="-70%" x2={w} y2="-70%" stroke="magenta" strokeWidth="3" />
                                            <line x1="20%" y1="-20%" x2="-100%" y2="100%" stroke="magenta" strokeWidth="3" />

                                            <text
                                                x="20%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                600px
                                            </text>
                                            <text
                                                x="70%"
                                                y="20"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                1200px
                                            </text>

                                            <text
                                                x="-20"
                                                y="-20%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                20px
                                            </text>
                                            <text
                                                x="-20"
                                                y="-70%"
                                                fontSize="12"
                                                fill="black"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                50px
                                            </text>
                                        </g>
                                    </svg>
                                );
                            }
                            )()}
                        </center>
                        El hecho de que la proyección sea mixta significa que cuando el ancho de la pantalla sea menor a 600px
                        la interpolación se comportará como abierta y si por encima de 1200px se comportará como cerrada.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "LERPW: funcionamiento con CSS",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Las reglas LERPW funcionan a nivel de CSS, es decir, JavaScript aunque interpreta las reglas, no tiene
                        que realizar cálculos más allá de la interpretación de las reglas.
                        <br /><br />
                        Existe una ecuación sobre la que se basa la interpolación lineal, la ecuación es la siguiente:
                        <Code className="mini simple">{`
                            y = (vf - vi) * t + vi
                        `}</Code>
                        *A continuación se muestra una guia de cómo se realiza la interpolación lineal en CSS.*
                        <Code>{`
                            :root {
                                --i: 500px; /*Ancho inicial*/
                                --ni: 500; /*Ancho inicial en número entero*/
                                --f: 1000px; /*Ancho final*/
                                --nf: 1000; /*Ancho final en número entero*/

                                --vis: 15px; /*Valor inicial*/
                                --vi: 15; /*Valor inicial en número entero*/
                                --vf: 30; /*Valor final en número entero*/

                                /*LERPW: Proyección abierta*/
                                --t: calc((100vw - var(--i)) / (var(--nf) - var(--ni)));
                                --lerp: calc((var(--vf) - var(--vi)) * var(--t) + var(--vis));

                                /*LERPW: Proyección cerrada*/
                                --t-ends: clamp(0px, var(--t), 1px); /* 0 <= t <= 1 */
                                --lerp-ends: calc((var(--vf) - var(--vi)) * var(--t-ends) + var(--vis));

                                /*LERPW: Proyección mixta [ )*/
                                --t-end-open: max(0px, var(--t));  /* t >= 0 */
                                --lerp-end-open: calc((var(--vf) - var(--vi)) * var(--t-end-open) + var(--vis));

                                /*LERPW: Proyección mixta ( ]*/
                                --t-open-end: clamp(-1px, var(--t), 1px);  /* t <= 1 */
                                --lerp-open-end: calc((var(--vf) - var(--vi)) * var(--t-open-end) + var(--vis));                                
                            }
                        `}</Code>
                        Por la naturaleza en cómo se aprovecha CSS para realizar la interpolación lineal,
                        es que la regla LERPW solo se puede aplicar a propiedades de medidas en px, y no se puede aplicar a propiedades
                        como color, background, opacity, etc.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Sintaxis multilínea",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Cuando hay muchas propiedades para modificar con la misma condición, se puede usar la sintaxis multilínea
                        para hacer más legible, mantenible y ordenado el código.
                        <Code linenumbers={false}>{`
                            condicion{
                                propiedad: [valores...];
                                propiedad2: [valores...];
                                propiedad3: [valores...];
                                ...//demás propiedades y sus respectivos valores
                            }
                        `}</Code>
                        <b>
                            Ejemplo
                        </b>
                        <Code linenumbers={false}>{`
                            x<600px{
                                color:(red,green);
                                background-color:(blue,yellow);
                                font-size:(20px,15px);
                            }
                        `}</Code>
                        <h3>
                            Multilinea para propiedades
                        </h3>
                        Hay propiedades que reciben muchos argumentos, como box-shadow, border, etc. Para estos casos se puede usar multiples renglones.
                        <Code>{`
                            x<600px{
                                padding:
                                    (10px,20px)
                                    (5px,10px) 
                                    (15px,30px)
                                    (5px,10px);
                            }
                        `}</Code>
                        Siempre hay que cerrar con punto y coma la propiedad. Solamente la última propiedad puede no llevar punto y coma.
                    </FormatoDoc>
                );
            }
        }
    ]
})