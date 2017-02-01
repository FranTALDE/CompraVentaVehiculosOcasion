// ###############################  Objeto Empleado  ############################### \\

function Empleado(idEmpleado, sTipoEmpleado){
    this.idEmpleado = idEmpleado;
    this.tipoEmpleado = sTipoEmpleado;
}

// ###############################  Objeto Proveedor  ############################### \\

function Proveedor(idProveedor, sNombre, sApellido, iMovil, sNomEmpresa){
    this.idProveedor = idProveedor;
    this.nombre = sNombre;
    this.apellido = sApellido;
    this.movil = iMovil;
    this.nomEmpresa = sNomEmpresa;
}

// ###############################  Objeto Cliente  ################################# \\

function Cliente(idCliente, sNombre, sApellido, iMovil){
    this.idCliente = idCliente;
    this.nombre = sNombre;
    this.apellido = sApellido;
    this.movil = iMovil;
}

// ############################### Objeto Vehiculo  ################################# \\

function Vehiculo(sMatricula, fPrecio, categoria, extras){
    this.matricula = sMatricula;
    this.precio = fPrecio;
    this.categoria = categoria;
    this.extras = extras;
}

// ############################### Objeto Categoria  ################################ \\

function Categoria(idCategoria, sNombre, sDescripcion){
    this.idCategoria = idCategoria;
    this.nombre = sNombre;
    this.descripcion = sDescripcion;
}

// ###############################  Objeto Extra  ################################### \\

function Extra(idExtra, sNombre, sDescripcion){
    this.idExtra = idExtra;
    this.nombre = sNombre;
    this.descripcion = sDescripcion;
}

// ###############################  Objeto Compra  ################################## \\

function Compra(oProveedor, oVehiculo, idCompra, iImporte, dtFechaCompra, oEmpleado){
    this.proveedor = oProveedor;
    this.vehiculo = oVehiculo;
    this.idCompra = idCompra;
    this.importe = iImporte;
    this.fechaCompra = dtFechaCompra;
    this.empleado = oEmpleado;
}

// ###############################  Objeto Venta  ################################### \\

function Venta(oCliente, oVehiculo, idVenta, iImporte, dtFechaVenta, oEmpleado){
    this.cliente = oCliente;
    this.vehiculo = oVehiculo;
    this.idVenta = idVenta;
    this.importe = iImporte;
    this.fechaVenta = dtFechaVenta;
    this.empleado = oEmpleado;
}

// ###############################  Objeto Concesionario  ########################### \\

function Concesionario(){
    this.empleados = [ ]; // Array vacio
    this.proveedores = [ ];
    this.clientes = [ ];
    this.vehiculos = [ ];
    this.categorias = [ ];
    this.extras = [ ];
    this.compras = [ ];
    this.ventas = [ ];
}

Array.prototype.remove = function(v){
    if(this.indexOf(v) != -1){
        this.splice(this.indexOf(v), 1);
        return true;
    }
    return false;
};

Array.prototype.contains = function(needle){
    for(var i in this){
        if(this[i] == needle)
            return true;
    }
    return false;
};

// ###############################  Métodos  ######################################## \\

Concesionario.prototype.altaEmpleado = function(oEmpleado){
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por idEmpleado
    while(i < this.empleados.length && bEncontrado == false){
        if(this.empleados[i].idEmpleado == oEmpleado.idEmpleado && this.empleados[i] instanceof Empleado){
            bEncontrado = true;
            sMensaje = "<strong>Empleado</strong> registrado previamente";
        }
        i++;
    }

    if(!bEncontrado){
        this.empleados.push(oEmpleado);
        sMensaje = "<strong>Empleado</strong> dado de alta";
    }

    return sMensaje;
};

Concesionario.prototype.altaProveedor = function(oProveedor){
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por idProveedor
    while(i < this.proveedores.length && bEncontrado == false){
        if(this.proveedores[i].idProveedor == oProveedor.idProveedor && this.proveedores[i] instanceof Proveedor){
            bEncontrado = true;
            sMensaje = "<strong>Proveedor</strong> registrado previamente";
        }
        i++;
    }

    if(!bEncontrado){
        this.proveedores.push(oProveedor);
        sMensaje = "<strong>Proveedor</strong> dado de alta";
    }

    return sMensaje;
};

Concesionario.prototype.altaCliente = function(oCliente){
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por idCliente
    while(i < this.clientes.length && bEncontrado == false){
        if(this.clientes[i].idCliente == oCliente.idCliente && this.clientes[i] instanceof Cliente){
            bEncontrado = true;
            sMensaje = "<strong>Cliente</strong> registrado previamente";
        }
        i++;
    }

    if(!bEncontrado){
        this.clientes.push(oCliente);
        sMensaje = "<strong>Cliente</strong> dado de alta";
    }

    return sMensaje;
};

Concesionario.prototype.altaVehiculo = function(oVehiculo){
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por matricula
    while(i < this.vehiculos.length && bEncontrado == false){
        if(this.vehiculos[i].matricula == oVehiculo.matricula && this.vehiculos[i] instanceof Vehiculo){
            bEncontrado = true;
            sMensaje = "<strong>Vehículo</strong> registrado previamente";
        }
        i++;
    }

    if(!bEncontrado){
        this.vehiculos.push(oVehiculo);
        sMensaje = "<strong>Vehículo</strong> dado de alta";
    }

    return sMensaje;
};

Concesionario.prototype.altaCompra = function(oCompra){
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por idCompra
    while(i < this.compras.length && bEncontrado == false){
        if(this.compras[i].idCompra == oCompra.idCompra && this.compras[i] instanceof Compra){
            bEncontrado = true;
            sMensaje = "<strong>Compra</strong> registrada previamente";
        }
        i++;
    }

    if(!bEncontrado){
        this.compras.push(oCompra);
        sMensaje = "<strong>Compra</strong> dada de alta";
    }

    return sMensaje;
};

Concesionario.prototype.altaVenta = function(oVenta){
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";

    // Busco por idVenta
    while(i < this.ventas.length && bEncontrado == false){
        if(this.ventas[i].idVenta == oVenta.idVenta && this.ventas[i] instanceof Venta){
            bEncontrado = true;
            sMensaje = "<strong>Venta</strong> registrada previamente";
        }
        i++;
    }

    if(!bEncontrado){
        this.ventas.push(oVenta);
        sMensaje = "<strong>Venta</strong> dada de alta";
    }

    return sMensaje;
};

Concesionario.prototype.getEmpleado = function(idEmpleado){
    var empleados = this.empleados.filter(function(x){
        return x.idEmpleado == idEmpleado;
    });

    if(!empleados.length)
        return null;
    else
        return empleados[0];
};

Concesionario.prototype.getProveedor = function(idProveedor){
    var proveedores = this.proveedores.filter(function(x){
        return x.idProveedor == idProveedor;
    });

    if(!proveedores.length)
        return null;
    else
        return proveedores[0];
};

Concesionario.prototype.getCliente = function(idCliente){
    var clientes = this.clientes.filter(function(x){
        return x.idCliente == idCliente;
    });

    if(!clientes.length)
        return null;
    else
        return clientes[0];
};

Concesionario.prototype.getVehiculo = function(matricula){
    var vehiculos = this.vehiculos.filter(function(x){
        return x.matricula == matricula;
    });

    if(!vehiculos.length)
        return null;
    else
        return vehiculos[0];
};

Concesionario.prototype.getCategoria = function(idCategoria){
    var categorias = this.categorias.filter(function(x){
        return x.idCategoria == idCategoria;
    });

    if(!categorias.length)
        return null;
    else
        return categorias[0];
};

Concesionario.prototype.getExtra = function(idExtra){
    var extras = this.extras.filter(function(x){
        return x.idExtra == idExtra;
    });

    if(!extras.length)
        return null;
    else
        return extras[0];
};

Concesionario.prototype.bajaEmpleado = function(idEmpleado){
    var i = 0;
    var bEncontrado = false;
    var empleadoEncontrado = null;
    var sMensaje = "";

    // Busco por idEmpleado
    while(i < this.empleados.length && bEncontrado == false){
        if(this.empleados[i].idEmpleado == idEmpleado && this.empleados[i] instanceof Empleado){
            bEncontrado = true;
            empleadoEncontrado = this.empleados[i];
        }
        i++;
    }

    if(bEncontrado==true){
        sMensaje = "<strong>Empleado<strong> dado de baja";
        this.empleados.remove(empleadoEncontrado);
    }else{
        sMensaje = "<strong>Empleado</strong> no registrado";
    }

    return sMensaje;
};

Concesionario.prototype.bajaProveedor = function(idProveedor){
    var i = 0;
    var bEncontrado = false;
    var proveedorEncontrado = null;
    var sMensaje = "";

    // Busco por idProveedor
    while(i < this.proveedores.length && bEncontrado == false){
        if(this.proveedores[i].idProveedor == idProveedor && this.proveedores[i] instanceof Proveedor){
            bEncontrado = true;
            proveedorEncontrado = this.proveedores[i];
        }
        i++;
    }

    if(bEncontrado==true){
        sMensaje = "<strong>Proveedor<strong> dado de baja";
        this.proveedores.remove(proveedorEncontrado);
    }else{
        sMensaje = "<strong>Proveedor</strong> no registrado";
    }

    return sMensaje;
};

Concesionario.prototype.bajaCliente = function(idCliente){
    var i = 0;
    var bEncontrado = false;
    var clienteEncontrado = null;
    var sMensaje = "";

    // Busco por idCliente
    while(i < this.clientes.length && bEncontrado == false){
        if(this.clientes[i].idCliente == idCliente && this.clientes[i] instanceof Cliente){
            bEncontrado = true;
            clienteEncontrado = this.clientes[i];
        }
        i++;
    }

    if(bEncontrado==true){
        sMensaje = "<strong>Cliente<strong> dado de baja";
        this.clientes.remove(clienteEncontrado);
    }else{
        sMensaje = "<strong>Cliente</strong> no registrado";
    }

    return sMensaje;
};

Concesionario.prototype.bajaVehiculo = function(matricula){
    var i = 0;
    var bEncontrado = false;
    var vehiculoEncontrado = null;
    var sMensaje = "";

    // Busco por matricula
    while(i < this.vehiculos.length && bEncontrado == false){
        if(this.vehiculos[i].matricula == matricula && this.vehiculos[i] instanceof Vehiculo){
            bEncontrado = true;
            vehiculoEncontrado = this.vehiculos[i];
        }
        i++;
    }

    if(bEncontrado==true){
        sMensaje = "<strong>Vehículo<strong> dado de baja";
        this.vehiculos.remove(vehiculoEncontrado);
    }else{
        sMensaje = "<strong>Vehículo</strong> no registrado";
    }

    return sMensaje;
};

function loadXMLDoc(filename){
    var xhttp;

    if (window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }
    else{
        // code for IE5 and IE6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);

    xhttp.send();

    return xhttp.responseXML;
}

Concesionario.prototype.cargarDatosXML = function(){
    var oXml = loadXMLDoc("datos.xml");

    var empXml = oXml.getElementsByTagName("Empleados");
    var provXml = oXml.getElementsByTagName("Proveedores");
    var cliXml = oXml.getElementsByTagName("Clientes");
    var catXml = oXml.getElementsByTagName("categoria");
    var extraXml = oXml.getElementsByTagName("extra");
    var vehXml = oXml.getElementsByTagName("Vehiculos");
    var compXml = oXml.getElementsByTagName("compra");
    var ventXml = oXml.getElementsByTagName("venta");

    var emp = empXml[0];
    for(var i = 0; i < emp.getElementsByTagName("empleado").length; i++){
        var idEmpleado = emp.getElementsByTagName("empleado")[i].getElementsByTagName("idEmpleado")[0].textContent;
        var tipoEmpleado = emp.getElementsByTagName("empleado")[i].getElementsByTagName("tipo")[0].textContent;

        this.empleados.push(new Empleado(
            idEmpleado,
            tipoEmpleado
            )
        );
    }

    var prov = provXml[0];
    for(i = 0; i < prov.getElementsByTagName("proveedor").length; i++){
        var idProveedor = prov.getElementsByTagName("proveedor")[i].getElementsByTagName("idProveedor")[0].textContent;
        var nombre = prov.getElementsByTagName("proveedor")[i].getElementsByTagName("nombre")[0].textContent;
        var apellido = prov.getElementsByTagName("proveedor")[i].getElementsByTagName("apellido")[0].textContent;
        var movil = prov.getElementsByTagName("proveedor")[i].getElementsByTagName("movil")[0].textContent;
        var nombreEmpresa = prov.getElementsByTagName("proveedor")[i].getElementsByTagName("nomEmpresa")[0].textContent;

        this.proveedores.push(new Proveedor(
            idProveedor,
            nombre,
            apellido,
            movil,
            nombreEmpresa
            )
        );
    }

    var cli = cliXml[0];
    for(i = 0; i < cli.getElementsByTagName("cliente").length; i++){
        var idCliente = cli.getElementsByTagName("cliente")[i].getElementsByTagName("idCliente")[0].textContent;
        nombre = cli.getElementsByTagName("cliente")[i].getElementsByTagName("nombre")[0].textContent;
        apellido = cli.getElementsByTagName("cliente")[i].getElementsByTagName("apellido")[0].textContent;
        movil = cli.getElementsByTagName("cliente")[i].getElementsByTagName("movil")[0].textContent;

        this.clientes.push(new Cliente(
            idCliente,
            nombre,
            apellido,
            movil
            )
        );
    }

    for(i = 0; i < catXml.length; i++){
        var cat = catXml[i];

        var idCat = cat.getElementsByTagName("idCategoria")[0].textContent;
        nombre = cat.getElementsByTagName("nombre")[0].textContent;
        var desc = cat.getElementsByTagName("descripcion")[0].textContent;

        this.categorias.push(new Categoria(
            idCat,
            nombre,
            desc
            )
        );
    }

    for(i = 0; i < extraXml.length; i++){
        var ext = extraXml[i];

        var idExt = ext.getElementsByTagName("idExtra")[0].textContent;
        nombre = ext.getElementsByTagName("nombre")[0].textContent;
        desc = ext.getElementsByTagName("descripcion")[0].textContent;

        this.extras.push(new Extra(
            idExt,
            nombre,
            desc
            )
        );
    }

    var veh = vehXml[0];

    for(i = 0; i < veh.getElementsByTagName("vehiculo").length; i++){
        var matricula = veh.getElementsByTagName("vehiculo")[i].getElementsByTagName("matricula")[0].textContent;
        var precio = veh.getElementsByTagName("vehiculo")[i].getElementsByTagName("precio")[0].textContent;
        var categoria = oConcesionario.getCategoria(veh.getElementsByTagName("vehiculo")[i].getElementsByTagName("idCategoria")[0].textContent);

        var extrasXml = veh.getElementsByTagName("vehiculo")[i].getElementsByTagName("idExtra");

        var extras = [];

        for(var y = 0; y < extrasXml.length; y++){
            extras.push(oConcesionario.getExtra(extrasXml[y].textContent));
        }

        this.vehiculos.push(new Vehiculo(
            matricula,
            precio,
            categoria,
            extras
            )
        );
    }

    for(i = 0; i < compXml.length; i++){
        var comp = compXml[i];

        var oProveedor = new Proveedor(
            comp.getElementsByTagName("proveedor")[0].getElementsByTagName("idProveedor")[0].textContent,
            comp.getElementsByTagName("proveedor")[0].getElementsByTagName("nombre")[0].textContent,
            comp.getElementsByTagName("proveedor")[0].getElementsByTagName("apellido")[0].textContent,
            comp.getElementsByTagName("proveedor")[0].getElementsByTagName("movil")[0].textContent,
            comp.getElementsByTagName("proveedor")[0].getElementsByTagName("nomEmpresa")[0].textContent
            );

        extras = [];

        for(y = 0; y < extrasXml.length; y++){
            extras.push(oConcesionario.getExtra(comp.getElementsByTagName("vehiculo")[0].getElementsByTagName("extras")[0].getElementsByTagName("idExtra")[y].textContent));
        }

        var oVehiculo = new Vehiculo(
            comp.getElementsByTagName("vehiculo")[0].getElementsByTagName("matricula")[0].textContent,
            comp.getElementsByTagName("vehiculo")[0].getElementsByTagName("precio")[0].textContent,
            comp.getElementsByTagName("vehiculo")[0].getElementsByTagName("idCategoria")[0].textContent,
            extras
            );
        var idCompra = comp.getElementsByTagName("idCompra")[0].textContent;
        var importe = comp.getElementsByTagName("importe")[0].textContent;
        var fecha = comp.getElementsByTagName("fecha")[0].textContent;
        var oEmpleado = new Empleado(
            comp.getElementsByTagName("empleado")[0].getElementsByTagName("idEmpleado")[0].textContent,
            comp.getElementsByTagName("empleado")[0].getElementsByTagName("tipo")[0].textContent
        );

        this.compras.push(new Compra(
            oProveedor,
            oVehiculo,
            idCompra,
            importe,
            fecha,
            oEmpleado
            )
        );
    }

    for(i = 0; i < ventXml.length; i++){
        var vent = ventXml[i];

        var oCliente = new Cliente(
            vent.getElementsByTagName("cliente")[0].getElementsByTagName("idCliente")[0].textContent,
            vent.getElementsByTagName("cliente")[0].getElementsByTagName("nombre")[0].textContent,
            vent.getElementsByTagName("cliente")[0].getElementsByTagName("apellido")[0].textContent,
            vent.getElementsByTagName("cliente")[0].getElementsByTagName("movil")[0].textContent
        );

        extras = [];

        for(y = 0; y < extrasXml.length; y++){
            extras.push(oConcesionario.getExtra(vent.getElementsByTagName("vehiculo")[0].getElementsByTagName("extras")[0].getElementsByTagName("idExtra")[y].textContent));
        }

        oVehiculo = new Vehiculo(
            vent.getElementsByTagName("vehiculo")[0].getElementsByTagName("matricula")[0].textContent,
            vent.getElementsByTagName("vehiculo")[0].getElementsByTagName("precio")[0].textContent,
            vent.getElementsByTagName("vehiculo")[0].getElementsByTagName("idCategoria")[0].textContent,
            extras
        );
        var idVenta = vent.getElementsByTagName("idVenta")[0].textContent;
        importe = vent.getElementsByTagName("importe")[0].textContent;
        fecha = vent.getElementsByTagName("fecha")[0].textContent;
        oEmpleado = new Empleado(
            vent.getElementsByTagName("empleado")[0].getElementsByTagName("idEmpleado")[0].textContent,
            vent.getElementsByTagName("empleado")[0].getElementsByTagName("tipo")[0].textContent
        );

        this.ventas.push(new Venta(
            oCliente,
            oVehiculo,
            idVenta,
            importe,
            fecha,
            oEmpleado
            )
        );
    }
};

// ###############################  Listados  ######################################## \\

Concesionario.prototype.tablaEmpleados = function(){
	var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table");
	//oTabla.setAttribute("border", "1");
    var oTBody = document.createElement("tbody");
	
	var oTHead = oTabla.createTHead();                                                 // Creamos la cabecera
	var oFila = oTHead.insertRow(-1);                                                  // Fila cabecera
	var oCelda = document.createElement("th");
	oCelda.setAttribute("class","col-xs-3");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("ID Empleado"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Tipo Empleado"));

    //recorremos el array de empleados
    for(var i = 0; i < this.empleados.length; i++){
        var fila = oTBody.insertRow(-1);                                              // Crea las filas de la tabla

        oCelda = fila.insertCell(-1);						        				  //aqui creamos la celda
        oCelda.appendChild(document.createTextNode(this.empleados[i].idEmpleado));	  //y la añadimos
        fila.appendChild(oCelda);													  //a la fila

        oCelda = fila.insertCell(-1);										          //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.empleados[i].tipoEmpleado));  //celda y la añadimos
        fila.appendChild(oCelda);													  //a la fila

        oTBody.appendChild(fila);
    }

    oTabla.appendChild(oTBody);
    return oTabla;
};

Concesionario.prototype.tablaProveedores = function(){
	var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table");
	//oTabla.setAttribute("border", "1");
    var oTBody = document.createElement("tbody");
	
	var oTHead = oTabla.createTHead();// Creamos la cabecera
	var oFila = oTHead.insertRow(-1);// Fila cabecera
	var oCelda = document.createElement("th");
    //oCelda.setAttribute("class","col-xs-offset-1 col-xs-2");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("ID Proveedor"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Apellidos"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Teléfono"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre Empresa"));

    //recorremos el array de proveedores
    for(var i = 0; i < this.proveedores.length; i++){
        var fila = oTBody.insertRow(-1);

        oCelda = fila.insertCell(-1);									        	    //aqui creamos la celda
        oCelda.appendChild(document.createTextNode(this.proveedores[i].idProveedor));	//y la añadimos
        fila.appendChild(oCelda);													    //a la fila

        oCelda = fila.insertCell(-1);										            //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.proveedores[i].nombre));        //celda y la añadimos
        fila.appendChild(oCelda);													    //a la fila

        oCelda = fila.insertCell(-1);								        		    //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.proveedores[i].apellido));      //celda y la añadimos
        fila.appendChild(oCelda);													    //a la fila

        oCelda = fila.insertCell(-1);								        		    //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.proveedores[i].movil));         //celda y la añadimos
        fila.appendChild(oCelda);													    //a la fila

        oCelda = fila.insertCell(-1);									        	    //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.proveedores[i].nomEmpresa));    //celda y la añadimos
        fila.appendChild(oCelda);													    //a la fila

        oTBody.appendChild(fila);
    }

    oTabla.appendChild(oTBody);
    return oTabla;
};

Concesionario.prototype.tablaClientes = function(){
	var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table");
	//oTabla.setAttribute("border", "1");
    var oTBody = document.createElement("tbody");
	
	var oTHead = oTabla.createTHead(); //Creamos la cabecera
	var oFila = oTHead.insertRow(-1); //Fila cabecera
	var oCelda = document.createElement("th");
	oCelda.setAttribute("class","col-xs-3");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("ID Cliente"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Apellido"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Movil"));

    //recorremos el array de clientes
    for(var i = 0; i < this.clientes.length; i++){
        var fila = oTBody.insertRow(-1);

        oCelda = fila.insertCell(-1);								        		//aqui creamos la celda
        oCelda.appendChild(document.createTextNode(this.clientes[i].idCliente));	//y la añadimos
        fila.appendChild(oCelda);													//a la fila

        oCelda = fila.insertCell(-1);									        	//aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.clientes[i].nombre));		//celda y la añadimos
        fila.appendChild(oCelda);													//a la fila

        oCelda = fila.insertCell(-1);			        							//aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.clientes[i].apellido));		//celda y la añadimos
        fila.appendChild(oCelda);													//a la fila

        oCelda = fila.insertCell(-1);						        				//aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.clientes[i].movil));		//celda y la añadimos
        fila.appendChild(oCelda);													//a la fila

        oTBody.appendChild(fila);
    }

    oTabla.appendChild(oTBody);
    return oTabla;
};

Concesionario.prototype.tablaVehiculos = function(){
    var oTabla = document.createElement("table");
    oTabla.setAttribute("class", "table");
    //oTabla.setAttribute("border", "1");
    var oTBody = document.createElement("tbody");

    var oTHead = oTabla.createTHead(); //Creamos la cabecera
    var oFila = oTHead.insertRow(-1); //Fila cabecera
    var oCelda = document.createElement("th");
    oCelda.setAttribute("class","col-xs-3");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Matrícula"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Precio"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Categoría"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Extras"));

    //recorremos el array de vehiculos
    for(var i = 0; i < this.vehiculos.length; i++){
        var fila = oTBody.insertRow(-1);

        oCelda = fila.insertCell(-1);							                            //aqui creamos la celda;
        oCelda.appendChild(document.createTextNode(this.vehiculos[i].matricula));			//y la añadimos
        fila.appendChild(oCelda);															//a la fila

        oCelda = fila.insertCell(-1);											            //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.vehiculos[i].precio));				//celda y la añadimos
        fila.appendChild(oCelda);															//a la fila

        oCelda = fila.insertCell(-1);												        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.vehiculos[i].categoria.nombre));	//celda y la añadimos
        fila.appendChild(oCelda);															//a la fila

        oCelda = fila.insertCell(-1);
            var texto = "";
            for(var j = 0 ; j<this.vehiculos[i].extras.length; j++){
                texto += this.vehiculos[i].extras[j].nombre+", ";
            }
            texto = texto.substr(0,texto.length-2);
        var nodoTexto = document.createTextNode(texto);
        oCelda.appendChild(nodoTexto);
        fila.appendChild(oCelda);

        oTBody.appendChild(fila);
    }
    oTabla.appendChild(oTBody);
    return oTabla;
};

Concesionario.prototype.tablaCompras = function(){
	var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table");
	//oTabla.setAttribute("border", "1");
    var oTBody = document.createElement("tbody");
	
	var oTHead = oTabla.createTHead();// Creamos la cabecera
	var oFila = oTHead.insertRow(-1);// Fila cabecera
	var oCelda = document.createElement("th");
	oCelda.setAttribute("class","col-xs-3");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Proveedor"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Vehículo"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("ID Compra"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Importe"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Fecha Compra"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Empleado"));

    //recorremos el array de compras
    for(var i = 0; i < this.compras.length; i++){
        var fila = oTBody.insertRow(-1);

        oCelda = fila.insertCell(-1);										                    //aqui creamos la celda
        oCelda.appendChild(document.createTextNode(this.compras[i].proveedor.idProveedor));	    //y la añadimos
        fila.appendChild(oCelda);													            //a la fila

        oCelda = fila.insertCell(-1);									                        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.compras[i].vehiculo.matricula));		//celda y la añadimos
        fila.appendChild(oCelda);													            //a la fila

        oCelda = fila.insertCell(-1);									                        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.compras[i].idCompra));		            //celda y la añadimos
        fila.appendChild(oCelda);													            //a la fila

        oCelda = fila.insertCell(-1);									                        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.compras[i].importe));		            //celda y la añadimos
        fila.appendChild(oCelda);													            //a la fila

        oCelda = fila.insertCell(-1);       										            //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.compras[i].fechaCompra));	            //celda y la añadimos
        fila.appendChild(oCelda);													            //a la fila

        oCelda = fila.insertCell(-1);		            							            //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.compras[i].empleado.idEmpleado));		//celda y la añadimos
        fila.appendChild(oCelda);													            //a la fila

        oTBody.appendChild(fila);
    }

    oTabla.appendChild(oTBody);
    return oTabla;
};

Concesionario.prototype.tablaVentas = function(){
	var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table");
	//oTabla.setAttribute("border", "1");
    var oTBody = document.createElement("tbody");
	
	var oTHead = oTabla.createTHead(); //Creamos la cabecera
	var oFila = oTHead.insertRow(-1); //Fila cabecera
	var oCelda = document.createElement("th");
	oCelda.setAttribute("class","col-xs-3");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Cliente"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Vehículo"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("ID Venta"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Importe"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Fecha Venta"));

    oCelda = document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Empleado"));

    //recorremos el array de ventas
    for(var i = 0; i < this.ventas.length; i++){
        var fila = oTBody.insertRow(-1);

        oCelda = fila.insertCell(-1);							        			        //aqui creamos la celda
        oCelda.appendChild(document.createTextNode(this.ventas[i].cliente.idCliente));	    //y la añadimos
        fila.appendChild(oCelda);													        //a la fila

        oCelda = fila.insertCell(-1);								        		        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.ventas[i].vehiculo.matricula));		//celda y la añadimos
        fila.appendChild(oCelda);													        //a la fila

        oCelda = fila.insertCell(-1);								        		        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.ventas[i].idVenta));		        //celda y la añadimos
        fila.appendChild(oCelda);													        //a la fila

        oCelda = fila.insertCell(-1);								        		        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.ventas[i].importe));		        //celda y la añadimos
        fila.appendChild(oCelda);													        //a la fila

        oCelda = fila.insertCell(-1);								        		        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.ventas[i].fechaVenta));		        //celda y la añadimos
        fila.appendChild(oCelda);													        //a la fila

        oCelda = fila.insertCell(-1);									        	        //aqui creamos otra
        oCelda.appendChild(document.createTextNode(this.ventas[i].empleado.idEmpleado));	//celda y la añadimos
        fila.appendChild(oCelda);													        //a la fila

        oTBody.appendChild(fila);
    }

    oTabla.appendChild(oTBody);
    return oTabla;
};