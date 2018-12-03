from flask import Flask,request,make_response,jsonify
import mysql.connector
from contacto import Contacto

conexion=mysql.connector.connect(user="alejandro",password="12345",database="LibretaContactos")
cursor=conexion.cursor()

app = Flask(__name__)

@app.route("/home/")
def hello():
    #return "Hello World!"
    respuesta=make_response("hello world")
    respuesta.headers.add('Access-Control-Allow-Origin','*')
    return respuesta

@app.route("/contactos/",methods=['GET'])
def contacto():
    cto=Contacto(conexion,cursor)
    resultado=cto.recuperar()
    print(resultado)

    return jsonify(resultado)

@app.route("/agregar/",methods=['GET'])
def agregar():
    nombre=request.args.get('nombre')
    telefono=request.args.get('telefono')
    correo=request.args.get('correo')
    fb=request.args.get('fb')
    tw=request.args.get('tw')
    ig=request.args.get('ig')
    notas=request.args.get('notas')

    add=Contacto(conexion,cursor)
    respuesta=add.agregar(nombre,telefono,correo,fb,tw,ig,notas)

    return respuesta

app.run(debug=True)
