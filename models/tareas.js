import { Tarea } from "./tarea.js";
import colors from 'colors'
export class Tareas{
    _listado={};
    constructor(){
        this._listado={}
    }
    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }
    get listadoArr(){
        const listado=[];
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }
    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea=>(
            this._listado[tarea.id]=tarea
        ))
    }
    crearTarea(desc=''){
        const tarea=new Tarea(desc)
        this._listado[tarea.id]=tarea
    }
    listadoCompleto(tareas){
        
        
        tareas.forEach((tarea,index) => {
            console.log(`${index}.- `.green  + `${tarea.desc} ` + '::' +  ` ${!!tarea.compleadoEn ? `${tarea.compleadoEn}`.green : 'Pendiente'.red } `)
        });
    }
    listarPendientesCompletadas(completadas='true'){
        if(completadas){
            const tareasFiltro=this.listadoArr.filter(tarea=>tarea.compleadoEn!==null)
            return this.listadoCompleto(tareasFiltro)
        }
        const tareasFiltro=this.listadoArr.filter(tarea=>tarea.compleadoEn===null)
        return this.listadoCompleto(tareasFiltro)
       
    }
    toggleCompletadas(ids=[]){
        ids.forEach(id=>{
            const tarea=this._listado[id]
            if(!tarea.compleadoEn){
                tarea.compleadoEn=new Date().toISOString()
            }
        })
        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].compleadoEn=null
                
            }
        })
    }
}