// Instanciamos el objeto principal
var oConcesionario = new Concesionario();

// Cargar datos desde XML
oConcesionario.cargarDatosXML();

// Mostrar mensaje
function mostrarMensaje(mensaje, tipo){
	if(tipo === undefined) {
		tipo = "info";
	}
	document.getElementById("contenedor_mensaje").innerHTML = "<div class='alert alert-"+ tipo +"'>"+ mensaje +"</div>";
	document.getElementById("contenedor_mensaje").style.display = "block";
}

/* Funciones Mostrar / ocultar el menu*/
function mostrarMenu(){
	document.getElementById("principal").style.display = "block";
	document.getElementById("portada").style.display = "block";
}

function ocultarMenu(){
	document.getElementById("principal").style.display = "none";
	document.getElementById("portada").style.display = "none";
}

/* FUNCION OCULTAR FORMULARIOS*/
function ocultarFormularios(){
	document.getElementById("frmGestionarEmpleados").style.display = "none";
	document.getElementById("frmGestionarProveedores").style.display = "none";
	document.getElementById("frmGestionarClientes").style.display = "none";
	document.getElementById("frmGestionarVehiculos").style.display = "none";
	document.getElementById("frmGestionarCompraVenta").style.display = "none";
	document.getElementById("frmAltaCompra").style.display = "none";
	document.getElementById("frmAltaVenta").style.display = "none";
	document.getElementById("contenedor_mensaje").style.display = "none";
}

/*FUNCIONES  HABILITAR / DESABILITAR CAMPOS EN LOS FORMULARIOS*/
/* Gestion de Empleados*/
function desabilitarGestionEmpleados(){
	document.getElementById("radiosTipoEmpleado").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de empleados
function gestionEmpleadosAlta(){
	document.getElementById("radiosTipoEmpleado").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de empleados
function gestionEmpleadosBaja(){
	document.getElementById("radiosTipoEmpleado").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los empleados
function gestionEmpleadosModificar(){
	document.getElementById("radiosTipoEmpleado").style.display = "block";
}

/*Gestion de Proveedores*/
function desabilitarGestionProveedores(){
	document.getElementById("filaNombreProveedor").style.display = "none";
	document.getElementById("filaApellidoProveedor").style.display = "none";
	document.getElementById("filaTelefonoProveedor").style.display = "none";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de Proveedores
function gestionProveedoresAlta(){
	document.getElementById("filaNombreProveedor").style.display = "block";
	document.getElementById("filaApellidoProveedor").style.display = "block";
	document.getElementById("filaTelefonoProveedor").style.display = "block";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de Proveedores
function gestionProveedoresBaja(){
	document.getElementById("filaNombreProveedor").style.display = "none";
	document.getElementById("filaApellidoProveedor").style.display = "none";
	document.getElementById("filaTelefonoProveedor").style.display = "none";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los Proveedores
function gestionProveedoresModificar(){
	document.getElementById("filaNombreProveedor").style.display = "block";
	document.getElementById("filaApellidoProveedor").style.display = "block";
	document.getElementById("filaTelefonoProveedor").style.display = "block";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "block";
}

/*Gestion de Clientes*/
function desabilitarGestionClientes(){
	document.getElementById("filaNombreCliente").style.display = "none";
	document.getElementById("filaApellidoCliente").style.display = "none";
	document.getElementById("filaTelefonoCliente").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de Clientes
function gestionClientesAlta(){
	document.getElementById("filaNombreCliente").style.display = "block";
	document.getElementById("filaApellidoCliente").style.display = "block";
	document.getElementById("filaTelefonoCliente").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de Clientes
function gestionClientesBaja(){
	document.getElementById("filaNombreCliente").style.display = "none";
	document.getElementById("filaApellidoCliente").style.display = "none";
	document.getElementById("filaTelefonoCliente").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los Clientes
function gestionClientesModificar(){
	document.getElementById("filaNombreCliente").style.display = "block";
	document.getElementById("filaApellidoCliente").style.display = "block";
	document.getElementById("filaTelefonoCliente").style.display = "block";
}

/*Gestion de Vehículos*/
function desabilitarGestionVehiculos(){
	document.getElementById("filaPrecioVehiculo").style.display = "none";
	document.getElementById("filaCategoriaVehiculo").style.display = "none";
	document.getElementById("filaExtrasVehiculo").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de Vehículos
function gestionVehiculosAlta(){
	document.getElementById("filaListaMatriculaVehiculo").style.display = "none";
	document.getElementById("filaMatriculaVehiculo").style.display = "block";
	document.getElementById("filaPrecioVehiculo").style.display = "block";
	document.getElementById("filaCategoriaVehiculo").style.display = "block";
	document.getElementById("filaExtrasVehiculo").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de Vehículos
function gestionVehiculosBaja(){
	document.getElementById("filaListaMatriculaVehiculo").style.display = "block";
	document.getElementById("filaMatriculaVehiculo").style.display = "none";
	document.getElementById("filaPrecioVehiculo").style.display = "none";
	document.getElementById("filaCategoriaVehiculo").style.display = "none";
	document.getElementById("filaExtrasVehiculo").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los Vehículos
function gestionVehiculosModificar(){
	document.getElementById("filaListaMatriculaVehiculo").style.display = "block";
	document.getElementById("filaMatriculaVehiculo").style.display = "none";
	document.getElementById("filaPrecioVehiculo").style.display = "block";
	document.getElementById("filaCategoriaVehiculo").style.display = "block";
	document.getElementById("filaExtrasVehiculo").style.display = "block";
}

/*#############################################################################################################################*/
/*VALIDACIONES DE LOS FORMULARIOS*/
/*VALIDACIONES EMPLEADOS*/
function reiniciarValidacionesEmpleados(){
	document.getElementById("textIdEmpleado").style.background = "none";
	document.getElementById("spanIdEmpleado").style.display = "none";
}

function validarAltaEmpleados(){
	var idEmpleado = document.getElementById("textIdEmpleado").value.trim();
	var tipoEmpleado = "";

	var sMensaje = "";

	var expReg = /^\d{8}\w$/; //Campo obligatorio. Admite 8 dígitos y 1 letra

	var fallos = false;

	//Miramos que tipo de empleado es
	if(document.getElementById("tipoEmpleado0").checked)
		tipoEmpleado = "Director Compras";
	else
		tipoEmpleado = "Comercial Ventas";
		
	if(expReg.test(idEmpleado) == false){
		document.getElementById("spanIdEmpleado").style.display = "block";
		document.getElementById("textIdEmpleado").style.background = "yellow";
		fallos=true;
	}
	else{
		document.getElementById("textIdEmpleado").style.background = "none";
		document.getElementById("spanIdEmpleado").style.display = "none";
	}
	//Si no hay fallos miramos que opcion esta marcada (alta,baja,modificar)
	if(fallos==false){
		//Hacemos el alta
		if(document.getElementById("altaGestionEmpleados").checked){
			var oEmpleado = new Empleado(idEmpleado,tipoEmpleado);
			sMensaje = oConcesionario.altaEmpleado(oEmpleado);
		}
		//Hacemos la baja
		if(document.getElementById("bajaGestionEmpleados").checked){
			sMensaje = oConcesionario.bajaEmpleado(idEmpleado);
		}
		//Hacemos la modificación
		if(document.getElementById("modificarGestionEmpleados").checked){
			oEmpleado = oConcesionario.getEmpleado(idEmpleado);
			oEmpleado.tipoEmpleado = tipoEmpleado;
			sMensaje = "<strong>Empleado</strong> modificado correctamente";
		}
		mostrarMensaje(sMensaje);

		recargarFormularios();
	}
}

/*VALIDACIONES PROVEEDORES*/
function reiniciarValidacionesProveedores(){
	document.getElementById("txtIdProveedor").style.background = "none";
	document.getElementById("txtNombreProveedor").style.background = "none";
	document.getElementById("txtApellidoProveedor").style.background = "none";
	document.getElementById("textTelefonoProveedor").style.background = "none";
	document.getElementById("txtNombreEmpresa").style.background = "none";
	
	document.getElementById("spanIdProveedor").style.display = "none";
	document.getElementById("spanNombreProveedor").style.display = "none";
	document.getElementById("spanApellidoProveedor").style.display = "none";
	document.getElementById("spanTelefonoProveedor").style.display = "none";
	document.getElementById("spanNombreEmpresaProveedor").style.display = "none";
}

function validarAltaProveedores(){
	var idProveedor = document.getElementById("txtIdProveedor").value.trim();
	var nombreProveedor = document.getElementById("txtNombreProveedor").value.trim();
	var apellidoProveedor = document.getElementById("txtApellidoProveedor").value.trim();
	var telefonoProveedor = document.getElementById("textTelefonoProveedor").value.trim();
	var nombreEmpresa = document.getElementById("txtNombreEmpresa").value.trim();

	var sMensaje = "";

	var expRegNombreProveedor = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;//Campo obligatorio, debe contener 3 o más letras y empezar por mayúscula
	var expRegIdProveedor = /^\d{8}\w+$/;//Campo obligatorio, admite 1 o más dígitos
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;//Campo obligatorio de 9 digitos y que deben empezar por 9 o por 7 o por 6
	var expNombreEmpresa = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+((S.L|S.A)?)+$/; //Campo obligatorio, el nombre debe empezar por mayúscula y puede acabar con las siglas S.L o S.A

	var fallos = false;

	//Si está pulsado alta
	if(document.getElementById("altaGestionProveedores").checked){
		if(expRegIdProveedor.test(idProveedor) == false){
			document.getElementById("txtIdProveedor").style.background = "yellow";
			document.getElementById("spanIdProveedor").style.display = "block";
			fallos = true;
		}
		else{
			document.getElementById("txtIdProveedor").style.background = "none";
			document.getElementById("spanIdProveedor").style.display = "none";
		}
		
		if(expRegNombreProveedor.test(nombreProveedor) == false){
			document.getElementById("txtNombreProveedor").style.background = "yellow";
			document.getElementById("spanNombreProveedor").style.display = "block";
			fallos=true;
		}
		else{
			document.getElementById("txtNombreProveedor").style.background = "none";
			document.getElementById("spanNombreProveedor").style.display = "none";
		}
		
		if(expRegNombreProveedor.test(apellidoProveedor) == false){
			document.getElementById("spanApellidoProveedor").style.display = "block";
			document.getElementById("txtApellidoProveedor").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtApellidoProveedor").style.background = "none";
			document.getElementById("spanApellidoProveedor").style.display = "none";
		}
		
		if(expRegTelefono.test(telefonoProveedor) == false){
			document.getElementById("spanTelefonoProveedor").style.display = "block";
			document.getElementById("textTelefonoProveedor").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("spanTelefonoProveedor").style.display = "none";
			document.getElementById("textTelefonoProveedor").style.background = "none";
		}
		
		if(expNombreEmpresa.test(nombreEmpresa) == false){
			document.getElementById("spanNombreEmpresaProveedor").style.display = "block";
			document.getElementById("txtNombreEmpresa").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtNombreEmpresa").style.background = "none";
			document.getElementById("spanNombreEmpresaProveedor").style.display = "none";
		}
		//si no hay fallos en las validaciones hacemos el alta empleado	
		if(fallos==false){
			var oProveedor = new Proveedor(idProveedor,nombreProveedor,apellidoProveedor,telefonoProveedor,nombreEmpresa);
			sMensaje = oConcesionario.altaProveedor(oProveedor);
		}
	}
	else{
		//Si está pulsado baja
		if(document.getElementById("bajaGestionProveedores").checked){
			if(expRegIdProveedor.test(idProveedor) == false){
				document.getElementById("spanIdProveedor").style.display = "block";
				document.getElementById("txtIdProveedor").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtIdProveedor").style.background = "none";
				document.getElementById("spanIdProveedor").style.display = "none";
			}
			//si no hay fallos hacemos la baja del proveedor
			if(fallos==false){
				sMensaje = oConcesionario.bajaProveedor(idProveedor);
			}
		}
		else{
			//Si está pulsado modificar
			if(expRegIdProveedor.test(idProveedor) == false){
				document.getElementById("txtIdProveedor").style.background = "yellow";
				document.getElementById("spanIdProveedor").style.display = "block";
				fallos=true;
			}
			else{
				document.getElementById("txtIdProveedor").style.background = "none";
				document.getElementById("spanIdProveedor").style.display = "none";
			}
		
			if(expRegNombreProveedor.test(nombreProveedor) == false){
				document.getElementById("txtNombreProveedor").style.background = "yellow";
				document.getElementById("spanNombreProveedor").style.display = "block";
				fallos=true;
			}
			else{
				document.getElementById("txtNombreProveedor").style.background = "none";
				document.getElementById("spanNombreProveedor").style.display = "none";
			}
				
			if(expRegNombreProveedor.test(apellidoProveedor) == false){
				document.getElementById("spanApellidoProveedor").style.display = "block";
				document.getElementById("txtApellidoProveedor").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtApellidoProveedor").style.background = "none";
				document.getElementById("spanApellidoProveedor").style.display = "none";
			}
				
			if(expRegTelefono.test(telefonoProveedor) == false){
				document.getElementById("spanTelefonoProveedor").style.display = "block";
				document.getElementById("textTelefonoProveedor").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("spanTelefonoProveedor").style.display = "none";
				document.getElementById("textTelefonoProveedor").style.background = "none";
			}
				
			if(expRegNombreProveedor.test(nombreEmpresa) == false){
				document.getElementById("spanNombreEmpresaProveedor").style.display = "block";
				document.getElementById("txtNombreEmpresa").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtNombreEmpresa").style.background = "none";
				document.getElementById("spanNombreEmpresaProveedor").style.display = "none";
			}
			//Si no hay fallos modificamos al proveedor
			if(fallos==false){
				oProveedor = oConcesionario.getProveedor(idProveedor);
				oProveedor.nombre = nombreProveedor;
				oProveedor.apellido = apellidoProveedor;
				oProveedor.movil = telefonoProveedor;
				oProveedor.nomEmpresa = nombreEmpresa;
				sMensaje = "<strong>Proveedor</strong> modificado correctamente";
			}
		}
	}
	if(sMensaje!="")
		mostrarMensaje(sMensaje);

	recargarFormularios();
}

/*VALIDACIONES CLIENTES*/
function reiniciarValidacionesClientes(){
	document.getElementById("txtIdCliente").style.background = "none";
	document.getElementById("txtNombre").style.background = "none";
	document.getElementById("txtApellido").style.background = "none";
	document.getElementById("textTelefono").style.background = "none";
	
	document.getElementById("spanIdCliente").style.display = "none";
	document.getElementById("spanNombreCliente").style.display = "none";
	document.getElementById("spanApellidoCliente").style.display = "none";
	document.getElementById("spanTelefonoCliente").style.display = "none";
}

function validarAltaClientes(){
	var idCliente = document.getElementById("txtIdCliente").value.trim();
	var nombreCliente = document.getElementById("txtNombre").value.trim();
	var apellidoCliente = document.getElementById("txtApellido").value.trim();
	var telefonoCliente = document.getElementById("textTelefono").value.trim();

	var sMensaje = "";

	var expRegNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;//Campo obligatorio, debe contener 3 o más letras y empezar por mayúscula
	var expRegId = /^\d{8}\w$/;//Campo obligatorio, admite 1 o más dígitos
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;//Campo obligatorio de 9 digitos y que deben empezar por 9 o por 7 o por 6

	var fallos = false;

	//Si está pulsado alta
	if(document.getElementById("altaGestionClientes").checked){
		if(expRegId.test(idCliente) == false){
			document.getElementById("spanIdCliente").style.display = "block";
			document.getElementById("txtIdCliente").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtIdCliente").style.background = "none";
			document.getElementById("spanIdCliente").style.display = "none";
		}
		
		if(expRegNombre.test(nombreCliente) == false){
			document.getElementById("spanNombreCliente").style.display = "block";
			document.getElementById("txtNombre").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtNombre").style.background = "none";
			document.getElementById("spanNombreCliente").style.display = "none";
		}
		
		if(expRegNombre.test(apellidoCliente) == false){
			document.getElementById("spanApellidoCliente").style.display = "block";
			document.getElementById("txtApellido").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtApellido").style.background = "none";
			document.getElementById("spanApellidoCliente").style.display = "none";
		}
		
		if(expRegTelefono.test(telefonoCliente) == false){
			document.getElementById("spanTelefonoCliente").style.display = "block";
			document.getElementById("textTelefono").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("textTelefono").style.background = "none";
			document.getElementById("spanTelefonoCliente").style.display = "none";
		}
		//Si no hay fallos hacemos la alta del cliente
		if(fallos==false){
			var oCliente = new Cliente(idCliente,nombreCliente,apellidoCliente,telefonoCliente);
			sMensaje = oConcesionario.altaCliente(oCliente);
		}
	}
	else{
		//Si está pulsado baja
		if(document.getElementById("bajaGestionClientes").checked){
			if (expRegId.test(idCliente) == false){
				document.getElementById("spanIdCliente").style.display = "block";
				document.getElementById("txtIdCliente").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtIdCliente").style.background = "none";
				document.getElementById("spanIdCliente").style.display = "none";
			}
			//Si no hay fallos hacemos la baja del cliente
			if(fallos==false){
				sMensaje = oConcesionario.bajaCliente(idCliente);
			}
		}
		else{
			//Si está pulsado modificar
			if(expRegId.test(idCliente) == false){
				document.getElementById("spanIdCliente").style.display = "block";
				document.getElementById("txtIdCliente").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtIdCliente").style.background = "none";
				document.getElementById("spanIdCliente").style.display = "none";
			}
			
			if(expRegNombre.test(nombreCliente) == false){
				document.getElementById("spanNombreCliente").style.display = "block";
				document.getElementById("txtNombre").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtNombre").style.background = "none";
				document.getElementById("spanNombreCliente").style.display = "none";
			}
			
			if(expRegNombre.test(apellidoCliente) == false){
				document.getElementById("spanApellidoCliente").style.display = "block";
				document.getElementById("txtApellido").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtApellido").style.background = "none";
				document.getElementById("spanApellidoCliente").style.display = "none";
			}
			
			if(expRegTelefono.test(telefonoCliente) == false){
				document.getElementById("spanTelefonoCliente").style.display = "block";
				document.getElementById("textTelefono").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("textTelefono").style.background = "none";
				document.getElementById("spanTelefonoCliente").style.display = "none";
			}
			//Si no hay fallos hacemos la modificación del cliente
			if(fallos==false){
				oCliente = oConcesionario.getCliente(idCliente);
				oCliente.nombre = nombreCliente;
				oCliente.apellido = apellidoCliente;
				oCliente.movil = telefonoCliente;
				sMensaje = "<strong>Cliente</strong> modificado correctamente";
			}
		}
	}
	if(sMensaje!="")
		mostrarMensaje(sMensaje);

	recargarFormularios();	
}

/*VALIDACIONES VEHICULO*/
function reiniciarValidacionesVehiculos(){
	document.getElementById("txtMatricula").style.background = "none";
	document.getElementById("txtPrecio").style.background = "none";
	
	document.getElementById("spanMatriculaVehiculo").style.display = "none";
	document.getElementById("spanPrecioVehiculo").style.display = "none";
}

function validarAltaVehiculo(){
	var matricula = document.getElementById("txtMatricula").value.trim();
	var lstMatricula = document.getElementById("lstVehiculos").value;
	var precio = document.getElementById("txtPrecio").value.trim();
	var lstCategoria = document.getElementById("lstCategoria").value;

	var sMensaje = "";

	var extras = [];

	for(var i = 0; i < oConcesionario.extras.length; i++){
		if(document.getElementById("checkExtras-" + i).checked){
			var extra = oConcesionario.getExtra(document.getElementById("checkExtras-"+i).value);
			extras.push(extra);
		}
	}

	var expRegMatricula = /^(\d{4}\s{1})+([A-Z]{1,3})$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}[€]$/;

	var errores = false;

	if(expRegMatricula.test(matricula) == false){
		document.getElementById("spanMatriculaVehiculo").style.display = "block";
		document.getElementById("txtMatricula").style.background = "yellow";
		errores = true;
	}
	else{
		document.getElementById("txtMatricula").style.background = "none";
		document.getElementById("spanMatriculaVehiculo").style.display = "none";
		errores = false;
	}
	
	if(expRegPrecio.test(precio) == false){
		document.getElementById("spanPrecioVehiculo").style.display = "block";
		document.getElementById("txtPrecio").style.background = "yellow";
		errores = true;
	}
	else{
		document.getElementById("txtPrecio").style.background = "none";
		document.getElementById("spanPrecioVehiculo").style.display = "none";
		errores = false;
	}

	//Hacemos la baja
	if(document.getElementById("bajaGestionVehiculos").checked){
		sMensaje = oConcesionario.bajaVehiculo(lstMatricula);
		recargarFormularios();
	}

	if(!errores){
		//Hacemos el alta
		if(document.getElementById("altaGestionVehiculos").checked){
			var oVehiculo = new Vehiculo(matricula, precio, oConcesionario.getCategoria(lstCategoria), extras);
			sMensaje = oConcesionario.altaVehiculo(oVehiculo);
		}
		//Hacemos la modificación
		if(document.getElementById("modificarGestionVehiculos").checked){
			oVehiculo = oConcesionario.getVehiculo(lstMatricula);
			oVehiculo.precio = precio;
			oVehiculo.categoria = oConcesionario.getCategoria(lstCategoria);
			oVehiculo.extras = extras;
			sMensaje = "<strong>Vehiculo</strong> modificado correctamente";
		}
		recargarFormularios();
	}

	if(sMensaje!="")
		mostrarMensaje(sMensaje);
}
/*VALIDACIONES COMPRA*/
function reiniciarValidacionesCompra(){
	document.getElementById("txtIdCompra").style.background = "none";
	document.getElementById("fechaCompra").style.background = "none";

	document.getElementById("spanIdCompra").style.display = "none";
	document.getElementById("spanFechaCompra").style.display = "none";
}

function validarAltaCompra(){
	var oProveedor = oConcesionario.getProveedor(document.getElementById("lstProveedores").value);
	var oVehiculo = oConcesionario.getVehiculo(document.getElementById("lstVehiculosC").value);
	var idCompra = document.getElementById("txtIdCompra").value.trim();
	var importe = document.getElementById("txtImporteCompra").value.trim();
	var fecha = document.getElementById("fechaCompra").value.trim();
	var oEmpleado = oConcesionario.getEmpleado(document.getElementById("lstEmpleadosC").value);

	var sMensaje = "";

	var expRegIdCompra = /^\d{1,5}$/;
	var expRegFecha = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

	var fallos = false;

	if(expRegIdCompra.test(idCompra) == false){
		document.getElementById("txtIdCompra").style.background = "yellow";
		document.getElementById("spanIdCompra").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("txtIdCompra").style.background = "none";
		document.getElementById("spanIdCompra").style.display = "none";
	}
	if(expRegFecha.test(fecha) == false){
		document.getElementById("fechaCompra").style.background = "yellow";
		document.getElementById("spanFechaCompra").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("fechaCompra").style.background = "none";
		document.getElementById("spanFechaCompra").style.display = "none";
	}
	if(fallos==false){
		var oCompra = new Compra(oProveedor,oVehiculo,idCompra,importe,fecha,oEmpleado);
		sMensaje = oConcesionario.altaCompra(oCompra);
		mostrarMensaje(sMensaje);
	}		
}

/*VALIDACIONES VENTA*/
function reiniciarValidacionesVenta(){
	document.getElementById("txtIdVenta").style.background = "none";
	document.getElementById("fechaVenta").style.background = "none";

	document.getElementById("spanIdVenta").style.display = "none";
	document.getElementById("spanFechaVenta").style.display = "none";
}

function validarAltaVenta(){
	var oCliente = oConcesionario.getCliente(document.getElementById("lstClientes").value);
	var oVehiculo = oConcesionario.getVehiculo(document.getElementById("lstVehiculosV").value);
	var idVenta = document.getElementById("txtIdVenta").value.trim();
	var importe = document.getElementById("txtImporteVenta").value.trim();
	var fecha = document.getElementById("fechaVenta").value.trim();
	var oEmpleado = oConcesionario.getEmpleado(document.getElementById("lstEmpleadosV").value);

	var sMensaje = "";
	
	var expRegIdVenta = /^\d{1,5}$/;
	var expRegFecha = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

	var fallos = false;

	if(expRegIdVenta.test(idVenta) == false){
		document.getElementById("txtIdVenta").style.background = "yellow";
		document.getElementById("spanIdVenta").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("txtIdVenta").style.background = "none";
		document.getElementById("spanIdVenta").style.display = "none";
	}
	if(expRegFecha.test(fecha) == false){
		document.getElementById("fechaVenta").style.background = "yellow";
		document.getElementById("spanFechaVenta").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("fechaVenta").style.background = "none";
		document.getElementById("spanFechaVenta").style.display = "none";
	}
	if(fallos==false){
		var oVenta = new Venta(oCliente,oVehiculo,idVenta,importe,fecha,oEmpleado);
		sMensaje = oConcesionario.altaVenta(oVenta);
		mostrarMensaje(sMensaje);
	}
}
/*#############################################################################################################################*/

/* EVENTOS QUE SE PRODUCEN AL PULSAR EN LOS DIVERSOS BOTONES DE LOS FORMULARIOS*/
//Eventos según el botón o el radio en los formularios
function mostrarCompraVenta(oEvento){
	var oE = oEvento || window.event;
	
	// <> de undefined
	if(oE.target.id){
		opcion = oE.target.id;
		
		switch(opcion){
			//caso volver todos los formularios
			case 'volver':
				ocultarFormularios();
				mostrarMenu();
			break;
			
			// Formulario gestion Empleados
			case 'altaGestionEmpleados':
				desabilitarGestionEmpleados();
				reiniciarValidacionesEmpleados();
				gestionEmpleadosAlta();				
			break;
			
			case 'bajaGestionEmpleados':
				desabilitarGestionEmpleados();
				reiniciarValidacionesEmpleados();
				gestionEmpleadosBaja();
			break;
			
			case 'modificarGestionEmpleados':
				desabilitarGestionEmpleados();
				reiniciarValidacionesEmpleados();
				gestionEmpleadosModificar();
			break;
			
			case 'aceptarEmpleados':
				validarAltaEmpleados();
			break;
			
			// Formulario gestion Proveedores
			case 'altaGestionProveedores':
				desabilitarGestionProveedores();
				reiniciarValidacionesProveedores();
				gestionProveedoresAlta();
			break;
			
			case 'bajaGestionProveedores':
				desabilitarGestionProveedores();
				reiniciarValidacionesProveedores();
				gestionProveedoresBaja();
			break;
			
			case 'modificarGestionProveedores':
				desabilitarGestionProveedores();
				reiniciarValidacionesProveedores();
				gestionProveedoresModificar();
			break;
			
			case 'aceptarProveedores' :
				validarAltaProveedores();
			break;
			
			//Formulario gestion Clientes
			case 'altaGestionClientes':
				desabilitarGestionClientes();
				reiniciarValidacionesClientes();
				gestionClientesAlta();
			break;
			
			case 'bajaGestionClientes':
				desabilitarGestionClientes();
				reiniciarValidacionesClientes();
				gestionClientesBaja();
			break;
			
			case 'modificarGestionClientes':
				desabilitarGestionClientes();
				reiniciarValidacionesClientes();
				gestionClientesModificar();
			break;

			case 'aceptarClientes' :
				validarAltaClientes();
			break;
			
			//Formulario Gestion Vehículos
			case 'altaGestionVehiculos':
				desabilitarGestionVehiculos();
				reiniciarValidacionesVehiculos();
				document.getElementById("frmGestionarVehiculos").reset();
				gestionVehiculosAlta();				
			break;

			case 'bajaGestionVehiculos':
				desabilitarGestionVehiculos();
				gestionVehiculosBaja();
				reiniciarValidacionesVehiculos();
			break;

			case 'modificarGestionVehiculos':
				desabilitarGestionVehiculos();
				gestionVehiculosModificar();
				reiniciarValidacionesVehiculos();
			break;

			case 'aceptarGestionVehiculo':
				validarAltaVehiculo();
			break;
			
			//formularios compra/venta 
			case 'compra':
				document.getElementById("frmAltaCompra").style.display = "block";
				document.getElementById("frmAltaVenta").style.display = "none";
			break;
			
			case 'venta':
				document.getElementById("frmAltaVenta").style.display = "block";
				document.getElementById("frmAltaCompra").style.display = "none";
			break;
			
			case 'aceptarAltaCompra' :
				validarAltaCompra();
			break;
			
			case 'aceptarAltaVenta' :
				validarAltaVenta();
			break;
		}
	}
}

/* EVENTOS QUE SE PRODUCEN AL PULSAR LOS BOTONES DEL MENU*/
function mostrarFormularios(oEvento){
	var oE = oEvento || window.event;
	
	// <> de undefined
	if(oE.target.value){
		boton = oE.target.value;
		
		switch(boton){
			case 'Gestionar Empleados':
				ocultarFormularios();
				ocultarMenu();
				reiniciarValidacionesEmpleados();
				document.getElementById("frmGestionarEmpleados").reset();
				document.getElementById("frmGestionarEmpleados").style.display = "block";
				gestionEmpleadosAlta();
			break;
			
			case 'Gestionar Proveedores':
				ocultarFormularios();
				ocultarMenu();
				reiniciarValidacionesProveedores();
				document.getElementById("frmGestionarProveedores").reset();
				document.getElementById("frmGestionarProveedores").style.display = "block";
				gestionProveedoresAlta();
			break;
			
			case 'Gestionar Clientes':
				ocultarFormularios();
				ocultarMenu();
				reiniciarValidacionesClientes();
				document.getElementById("frmGestionarClientes").reset();
				document.getElementById("frmGestionarClientes").style.display = "block";
				gestionClientesAlta();
			break;
			
			case 'Gestionar Vehículos':
				ocultarFormularios();
				ocultarMenu();
				reiniciarValidacionesVehiculos();
				document.getElementById("frmGestionarVehiculos").reset();
				document.getElementById("frmGestionarVehiculos").style.display = "block";
				gestionVehiculosAlta();
			break;
			
			case 'Gestionar Compra / Venta':
				ocultarFormularios();
				ocultarMenu();
				reiniciarValidacionesVenta();
				reiniciarValidacionesCompra();
				document.getElementById("frmGestionarCompraVenta").reset();
				document.getElementById("frmAltaVenta").reset();
				document.getElementById("frmAltaCompra").reset();
				document.getElementById("frmGestionarCompraVenta").style.display = "block";
			break;
			
			case 'Listados':
				window.open("listados.html");
			break;
		}
	}
}