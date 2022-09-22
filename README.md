# BackEnd proyecto test de Terapify

El proyecto fue realizado con Mongoose, Express y Node.js
Para inicializar el proyecto es necesario hacer un 'npm install' debido a las dependencias instaladas.

El proyecto tiene dos variables de entorno:

urlDB= string de conexión a la base de datos,

PORT = puerto en que el cliente quiera realizar la conexión.


## Ejemplo de Rutas y Respuestas:
### 1.- RUTA DE PSY:
* CREATE ONE PSY:
```
Method POST
http://localhost:3000/psy
```

```
Respuesta servidor:
{
    "name": "Psy Uno",
    "email": "psy1@email.com",
    "hours": [],
    "_id": "632c79f2196d6c337780086a",
    "__v": 0
}
```

* GET ALL PSY:
```
Method GET
http://localhost:3000/psy
```

```
Respuesta Servidor:
[
    {
        "_id": "632c79f2196d6c337780086a",
        "name": "Psy Uno",
        "email": "psy1@email.com",
        "hours": [],
        "__v": 0
    },
    {
        "_id": "632c7a45196d6c337780086c",
        "name": "Psy Dos",
        "email": "psy2@email.com",
        "hours": [],
        "__v": 0
    }
]

```
* GET PSY BY ID
```
Method GET
http://localhost:3000/psy/:id
```


```
Respuesta Servidor:
{
    "name": "Psy Uno",
    "email": "psy1@email.com",
    "availableHours": [
        {
            "day": "Lunes",
            "hoursAvailable": [
                "8:00-9:00",
                "9:00-10:00",
                "10:00-11:00",
                "11:00-12:00",
                "12:00-13:00",
                "13:00-14:00",
                "15:00-16:00"
            ]
        },
        {
            "day": "Martes",
            "hoursAvailable": [...
            ]
        }
    ]
}
```
### 2.- RUTA DE CLIENT:
* CREATE A CLIENT
```
Method POST
http://localhost:3000/client
```

```
Respuesta de Servidor:
{
    "name": "Client Uno",
    "email": "client1@email.com",
    "appointment": [],
    "_id": "632c83c5196d6c337780087d",
    "__v": 0
}

```
* GET ALL CLIENTS
```
Method GET
http://localhost:3000/client
```

```
Respuesta de Servidor:
[
    {
        "_id": "632c83c5196d6c337780087d",
        "name": "Client Uno",
        "email": "client1@email.com",
        "appointment": [],
        "__v": 0
    },
    {
        "_id": "632c8401196d6c337780087f",
        "name": "Client Dos",
        "email": "client2@email.com",
        "appointment": [],
        "__v": 0
    }
]

```
* GET CLIENT BY ID

```
Method GET
http://localhost:3000/client/:id
```

```
Respuesta del Servidor:
{
    "_id": "632c83c5196d6c337780087d",
    "name": "Client Uno",
    "email": "client1@email.com",
    "appointment": [
        {
            "date": "Lunes",
            "hour": "9:00-10:00"
        }
    ],
    "__v": 1
}

```
3.- OTRAS RUTAS DE INTERES
* POST AN APPOINTMENT

```
Method POST
http://localhost:3000/appointment
```

```
Respuesta de Servidor:
{
    "date": "Lunes",
    "hour": "9:00-10:00",
    "_id": "632c8551d6f22aee8b827da5",
    "__v": 0
}
```
* Comportamiento Horario Psy antes /después de una cita
```
Before appointment:

{
    "name": "Psy Uno",
    "email": "psy1@email.com",
    "availableHours": [
        {
            "day": "Lunes",
            "hoursAvailable": [
                "8:00-9:00",
                "9:00-10:00",
                "10:00-11:00",
                "11:00-12:00",
                "12:00-13:00",
                "13:00-14:00",
                "15:00-16:00"
            ]
        }
    ]
}

After Appointment:

{
    "name": "Psy Uno",
    "email": "psy1@email.com",
    "availableHours": [
        {
            "day": "Lunes",
            "hoursAvailable": [
                "8:00-9:00",
                "10:00-11:00",
                "11:00-12:00",
                "12:00-13:00",
                "13:00-14:00",
                "15:00-16:00"
            ]
        }
    ]
}
```
