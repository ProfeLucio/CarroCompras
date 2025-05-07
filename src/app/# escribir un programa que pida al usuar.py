# escribir un programa que pida al usuario que pida al usuario que pida al usuario un numero entero positivo y muestre la cuenta regresiva desde ese numero hasta el cero separados por coma y muestrela suma total
nume = int(input("Ingresa un número entero positivo: "))
suma = 0
cadena = ""
contador = nume
for i in range(nume+ 1):
    cadena += str(contador)
    if i < nume:
     cadena += "," 
    suma += contador
    contador += nume

print("Cuenta regresiva:", cadena)
print("Suma total:" , suma)
