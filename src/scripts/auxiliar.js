import React, { useState } from 'react';

export function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  export function aumentarCantidad(cantidad) {
    return cantidad + 1;
  }
  
  export function disminuirCantidad(cantidad) {
    return cantidad > 1 ? cantidad - 1 : 1;
  }
  
  export function validarCantidad(nuevaCantidad) {
    return nuevaCantidad >= 1 ? nuevaCantidad : 1;
  }

