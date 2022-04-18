import react from 'react'
import styles from './pay.module.css'
import { useState } from 'react'

const Pay = () => {
        const a = 30
        const b =10
        const text = "Crear "
        const com = "'"
        const illa = "'"

        const [val, setVal] = useState("Comienza a escribir para cargar los contactos");
        const [tr, setTr] = useState(false);

        function desp() {
            if(tr) {
                setTr(false)
                setVal("Comienza a escribir para cargar los contactos")
            }else {
                setTr(true)
            }
        }


   

    return(
        <div className={styles.container}>
            <div className={styles.containerP}>
                <span className={styles.tituloa}>Necesitamos un monto, algunos destinatarios, fechas de vencimiento y un mensaje...</span>
                <label className={styles.pago}>$<input type="number" min="0.00" max="9.99" step="0.01" defaultValue="0.00" className={styles.inpago}/></label>
                <span className={styles.contact}>Seleccionar o crear contacto</span>
                <input type="text" name=""  onClick={() => desp()} onChange={(event) => setVal(text + com + event.target.value + illa)} id="contact" autoComplete='off' placeholder="Comienza a escribir para seleccionar o crear un contacto..." className={styles.input}/>
                 {tr && <div className={styles.valcontainer}>
                    <p className={styles.valp}>{val}</p>
                </div>}
                <label htmlFor="checki" className={styles.check}>
                    <input type="checkbox" disabled id="checki" className={styles.checki}/>
                    <p className={styles.email}>Enviar email</p>
                </label>
                <button className={styles.enviar}>Activar ahora 12</button>
            </div>
            <div className={styles.containerV}>
                <h6 className={styles.titulo}>Configurar vencimientos y cargos</h6>

                <span className={styles.venci}>Primer Vencimiento</span>
                <input type="date" name="" id="" value="2022-03-30" className={styles.fecha}/>
                <label className={styles.inputu}><input type="number" min="0 %" max="100" step="0.01" defaultValue="0.00" className={styles.inu}/>%</label>

                <span className={styles.vencio}>Segundo Vencimiento</span>
                <input type="date" name="" id="" value="2022-03-30" className={styles.fechao}/>
                <label className={styles.inputo}><input type="number" min="0 %" max="100" step="0.01" defaultValue="0.00" className={styles.in}/>%</label>


                <textarea name="" placeholder="Escriba un mensaje personalizado..." id="" cols={a} rows={b} className={styles.text}></textarea>

                <button className={styles.button} disabled>Enviar cobro express</button>
            </div>

        </div>

    )

}

export default Pay