import { confirmar, inquirerMenu, listadoTareasBorrar, mostrarListadoCheckList } from './helpers/inquirer.js'
import colors from 'colors'
import { pausa,leerInput } from './helpers/inquirer.js'
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js'
import { guardarDB, leerDB } from './helpers/guardarArchivo.js'


console.clear()

const main=async()=>{
    let opt=""
    const tareas=new Tareas()
    const tareasDB=leerDB()
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }
    do {
        opt=await inquirerMenu()
        switch (opt) {
            case '1':
                const leerDescripcion=await leerInput('Inserte la descripcion de la tarea')
                tareas.crearTarea(leerDescripcion)
                break;
            case '2':
                const tareasArreglo=tareas.listadoArr
                tareas.listadoCompleto(tareasArreglo)
                break;  
            case '3':
                tareas.listarPendientesCompletadas()  
                break
            case '4':
                tareas.listarPendientesCompletadas(false)  
                break
            case '5':
                const ids=await mostrarListadoCheckList(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                break;

            case '6':
                const id=await listadoTareasBorrar(tareas.listadoArr)
                if(id==='0'){
                    continue
                }
                const ok=await confirmar('¿Esta seguro?')
                if(ok){
                    tareas.borrarTarea(id)
                    console.log('Tarea borrada')
                }
                break;
            
        }
        guardarDB(tareas.listadoArr)
        await pausa()
        
    } while (opt!=='0');


}

main()

