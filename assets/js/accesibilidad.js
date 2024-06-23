let originalFontSize = 16;

(function() {

    // Elementos alterables del DOM.
    const domElements =
        "a:not(.not-resize),p:not(.not-resize),span:not(.not-resize),h1:not(.not-resize),h2:not(.not-resize),h3:not(.not-resize),h4:not(.not-resize),h5:not(.not-resize),h6:not(.not-resize)";
    /**
     * Cambiar tamaño de texto
     */

    let sizeStep = 4;
   
    // Cantidad de pasos para alterar el texto - 4 es default.
    // const stepnum = 3;
    // const initialFontSize = (el) => {
    //     let element = document.querySelectorAll(el);

    //     element.forEach((el) => {
    //         let style = getComputedStyle(el);
    //         let fontNum = style.fontSize.replace("px", "");

    //         console.log(fontNum);
    //     });
    // };
    // initialFontSize(domElements);
    /** Aumentar tamaño */
    /** Aumentar tamaño */
    const upFontSize = (el, currentStep) => {
        let element = document.querySelectorAll(el);

        element.forEach((el) => {
            let style = getComputedStyle(el);
            let fontNum = parseFloat(style.fontSize.replace("px", ""));

            let newCss = parseFloat(fontNum + currentStep);

            el.style.fontSize = `${newCss}px`;
        });
    };

/** Disminuir tamaño */
    const downFontSize = (el, currentStep) => {
        let element = document.querySelectorAll(el);

        element.forEach((el) => {
            let style = getComputedStyle(el);
            let fontNum = parseFloat(style.fontSize.replace("px", ""));

            let newCss = parseFloat(fontNum - currentStep);

            el.style.fontSize = `${newCss}px`;
        });
    };

    // Función de incremento
    const increaseFontSize = () => {
        if (sizeStep < 7) {
            sizeStep++;
            upFontSize(domElements, 3);
        }
    };

    // Función de decremento
    const decreaseFontSize = () => {
        if (sizeStep > 1) {
            sizeStep--;
            downFontSize(domElements, 3);
        }
    };

    // Función para restablecer el tamaño de fuente original
    // Función para obtener el tamaño de fuente original
    const getOriginalFontSize = () => {
        let sampleElement = document.querySelector(domElements);
        if (sampleElement) {
            originalFontSize = parseFloat(getComputedStyle(sampleElement).fontSize);
        } else {
            console.error("No se pudo encontrar un elemento de muestra para obtener el tamaño de fuente original.");
        }
    };


    const resetFontSize = () => {
        if (originalFontSize !== 0) {
            let elements = document.querySelectorAll(domElements);

            elements.forEach((el) => {
                el.style.fontSize = originalFontSize + 'px';
            });
        } else {
            console.error("El tamaño de fuente original no se ha inicializado correctamente.");
        }
    };
    /**
     * FIN Cambiar tamaño de texto
     */

    /**
     * Destacar Elementos
     */
    const highlightObjects = (el) => {
        let element = document.querySelectorAll(el);

        element.forEach((el) => {
            el.classList.toggle("hl-objects");
        });
    };

    const increaseBtn = document.querySelector("#agrandar");
    const decreaseBtn = document.querySelector("#disminuir");
    const contrastBtn = document.querySelector("#contraste");
    const lineaBtn = document.querySelector("#lectura");
    const resaltarBtn = document.querySelector("#resaltar");
    const cursorBtn = document.querySelector("#cursor");
    const audioBtn = document.querySelector("#audio-lectura");
    increaseBtn.addEventListener("click", (e) => {
        e.preventDefault();
        increaseFontSize();
    });
    decreaseBtn.addEventListener("click", (e) => {
        e.preventDefault();
        decreaseFontSize();
    });
    contrastBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("body").classList.toggle("high-contrast-for-all");
        document.querySelector("header").classList.toggle("high-contrast");
        document.querySelector("footer").classList.toggle("high-contrast");
        document
            .querySelector("#assistArea")
            .classList.toggle("high-contrast");
        document
            .querySelector(".menu-responsive")
            .classList.toggle("high-contrast");
        contrastBtn.classList.toggle("active-btn");
    });
    lineaBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".cursor").classList.toggle("activo");
        lineaBtn.classList.toggle("active-btn");
    });
    resaltarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        highlightObjects(domElements);
        resaltarBtn.classList.toggle("active-btn");
    });
    cursorBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.toggle("new-cursor");
        cursorBtn.classList.toggle("active-btn");
    });
    const cursorHL = document.querySelector(".hl");

    document.addEventListener("mousemove", (e) => {
        cursorHL.setAttribute("style", `top: ${e.clientY}px;`);
    });
   
   
    const restoreDefaults = () => {
       
        // Restaurar los cambios de alto contraste
        document.querySelector("header").classList.remove("high-contrast");
        document.querySelector("footer").classList.remove("high-contrast");
        document.querySelector("body").classList.remove("high-contrast-for-all");
        // document.querySelector("#assist-area").classList.remove("high-contrast");
        // document.querySelector(".menu-responsive").classList.remove("high-contrast");
        contrastBtn.classList.remove("active-btn");
   
        // Restaurar la línea de lectura y el resaltado
        document.querySelector(".cursor").classList.remove("activo");
        lineaBtn.classList.remove("active-btn");
       
        const elementsWithHighlight = document.querySelectorAll('.hl-objects');
        elementsWithHighlight.forEach((el) => {
            el.classList.remove('hl-objects');
        });

        resaltarBtn.classList.remove("active-btn");
   
        // Restaurar el cursor personalizado
        document.body.classList.remove("new-cursor");
        cursorBtn.classList.remove("active-btn");

    }
    const restoreContrast = () => {
        // Restaurar los cambios de alto contraste
        document.querySelector("header").classList.remove("high-contrast");
        document.querySelector("footer").classList.remove("high-contrast");
        document.querySelector("body").classList.remove("high-contrast-for-all");
    }



    const resetBtn = document.querySelector("#restablecer");
    resetBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        restoreDefaults();
        resetFontSize();
        console.log('original:' + originalFontSize)
        console.log('reestablecer')
    });
    const resetContrast = document.querySelector("#contraste2");
    resetContrast.addEventListener("click", (e) => {
        restoreContrast();
        console.log('contraste off')
    });

    // audioBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.querySelector('#__ba_floatingLaunch > button').click();
    // })

})();
