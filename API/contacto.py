class Contacto:
    def __init__(self,conexion,cursor):
        self.conexion=conexion
        self.cursor=cursor

    def recuperar(self):
        contactos=[]
        select=("SELECT * FROM Contactos")
        self.cursor.execute(select,)
        for i in self.cursor.fetchall():
            inv={
                'cont_id':i[0],
                'nombre':i[1],
                'telefono':i[2],
                'correo':i[3],
                'fb':i[4],
                'tw':i[5],
                'ig':i[6],
                'notas':i[7]
            }
            contactos.append(inv)

        return contactos

    def agregar(self,nombre,telefono,correo,fb,tw,ig,notas):
        insertar=("INSERT INTO Contactos(nombre,telefono,correo,fb,tw,ig,notas) VALUES(%s,%s,%s,%s,%s,%s,%s)")
        self.cursor.execute(insertar,(nombre,telefono,correo,fb,tw,ig,notas))
        self.conexion.commit()

        return 'ok'
