import colors from 'colors'
import readline from 'readline'

export const mostrarMenu=async()=>{
    console.clear()
    return new Promise((resolve,reject)=>{
        console.log('========================================'.green)
        console.log('========================================'.green)
        console.log('        Seleccione una opcion           ')
        console.log('========================================'.green)
        console.log('========================================\n'.green)

        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar Tareas`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar una tarea`)
        console.log(`${'0.'.green} Salir`)

        const rl=readline.createInterface({
            input:process.stdin,
            output:process.stdout
        })
        rl.question('Seleccione una opcion:',(opt)=>{
            rl.close()
            resolve(opt)
            
        })
    })
    

}
export const pausa=()=>{
    return new Promise(resolve=>{
        const rl=readline.createInterface({
            input:process.stdin,
            output:process.stdout
        })
        rl.question(`\nPresione ${'Enter'.green} para continuar\n`,()=>{
            rl.close()
            resolve()
        })
    })
}



