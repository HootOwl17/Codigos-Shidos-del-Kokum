//Programa para calcular Velocidad, espacio y tiempo

var espacio, tiempo, Velocidad, txt1, txt2, txt3, txt4;

  function fisica(n,n1,n2){
    if (n == 1) {
      if (n2 !=0) {
        return n1/n2;
      }
      else {
        return 0;
      }
    }
    else if (n == 2) {
      return n1*n2;
    } else {
      if (n1 !=0) {
        return n2/n1;
      }
      else {
        return 0;
      }
    }
  }

console.log("\n\n\tMenú\n\n\t1.Velocidad\n\n\t2.Espacio\n\n\t3.Tiempo")
txt1 = parseInt(prompt("Favor ingresar opcion: "));

while (txt1 != 4) {
  switch (txt1) {
    case 1:
      txt2 = parseInt(prompt("Favor Ingresar Espacio: "));
      txt3 = parseInt(prompt("Favor Ingresar Tiempo: "))
      console.log( fisica(1, txt2, txt3));
      break;
    case 2:
      txt2 = parseInt(prompt("Favor Ingresar Velocidad: "));
      txt3 = parseInt(prompt("Favor Ingresar Tiempo: "));
      console.log( fisica(2, txt2, txt3));
      break;
    case 3:
      txt2 = parseInt(prompt("Favor Ingresar Velocidad: "));
      txt3 = parseInt(prompt("Favor Ingresar Espacio: "));
      console.log( fisica(3, txt2, txt3));
      break;
    default:
      console.log("Favor ingresar Una Opción Valida de Menú");
  }
  txt1 = parseInt(prompt("Favor Ingresar Una Opción: "));
}
