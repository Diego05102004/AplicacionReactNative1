import React, { useState } from 'react';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [cedula, setCedula] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [vcontrasenia, setVContrasenia] = useState('');


  const validarNombreyApellido = (valor) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor);
  const validarCedula = (valor) => /^[0-9]{7,8}$/.test(valor);
  const validarCorreo = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

  const validarPassword = (contrasenia, vcontrasenia) => {
    if (contrasenia !== vcontrasenia) {
      return { 
        valido: false, 
        mensaje: `Las contraseñas no coinciden.` };
    }

    const requisitos = {
      longitud: /.{8,}/, 
      mayuscula: /[A-Z]/, 
      minuscula: /[a-z]/,
      numero: /\d/,
      especial: /[!@#$%^&*(),.?":{}|<>]/,
    };

    if (!requisitos.longitud.test(contrasenia)) {
      return { 
      valido: false,
      mensaje: `La contraseña debe tener al menos 8 caracteres.` };
    }

    if (!requisitos.mayuscula.test(contrasenia)) {
      return { 
      valido: false,
      mensaje: `La contraseña debe incluir al menos una letra mayúscula.` };
    }
    if (!requisitos.minuscula.test(contrasenia)) {
      return {
      valido: false,
      mensaje: `La contraseña debe incluir al menos una letra minúscula.` };
    }

    if (!requisitos.numero.test(contrasenia)) {
      return { 
      valido: false, 
      mensaje: `La contraseña debe incluir al menos un número.` };
    }

    if (!requisitos.especial.test(contrasenia)) {
      return { 
      valido: false, 
      mensaje: `La contraseña debe incluir al menos un carácter especial.` };
    }

    return { valido: true };
  };

  const Registro = () => {
    if (!nombre || !apellido || !correo || !cedula || !contrasenia || !vcontrasenia) {
      window.alert(`Error\nPor favor, completa todos los campos.`);
      return;
    }

    if (!validarNombreyApellido(nombre)) {
      window.alert(`Error\nEl nombre no puede contener números ni caracteres especiales.`);
      return;
    }

    if (!validarNombreyApellido(apellido)) {
      window.alert(`Error\nEl apellido no puede contener números ni caracteres especiales.`);
      return;
    }

    if (!validarCedula(cedula)) {
      window.alert(`Error\nLa cédula debe contener entre 7 y 8 dígitos numéricos.`);
      return;
    }

    if (!validarCorreo(correo)) {
      window.alert(`Error\nEl correo no tiene un formato válido.`);
      return;
    }

    const resultadoValidacion = validarPassword(contrasenia, vcontrasenia);
    if (!resultadoValidacion.valido) {
      window.alert(`Error\n${resultadoValidacion.mensaje}`);
      return;
    }

window.alert(
 `¡Registro exitoso!\n
 Nombre: ${nombre}\n
 Apellido: ${apellido}\n
 Cédula: ${cedula}\n
 Correo: ${correo}`
    );

    setNombre('');
    setApellido('');
    setCedula('');
    setCorreo('');
    setContrasenia('');
    setVContrasenia('');
  };

  return {
    nombre,
    setNombre,
    apellido,
    setApellido,
    correo,
    setCorreo,
    cedula,
    setCedula,
    contrasenia,
    setContrasenia,
    vcontrasenia,
    setVContrasenia,
    Registro,
  };
};
