import styles from './pay.module.css'
import { useState } from 'react'
import { isConstructorDeclaration } from 'typescript'

const Pay = () => {
const a = 30
const b =10

    const Inpval = (valu) => {
        const valor = valu
        console.log(valu)
        return <div></div>

    }





    return(
        <div className={styles.container}>
            <div className={styles.containerP}>
                <span className={styles.tituloa}>Necesitamos un monto, algunos destinatarios, fechas de vencimiento y un mensaje...</span>
                <label className={styles.pago}>$<input type="number" min="0.00" max="9.99" step="0.01" defaultValue="0.00" className={styles.inpago}/></label>
                <span className={styles.contact}>Seleccionar o crear contacto</span>
                <input type="text" name="" onChange={(event) => Inpval(event.target.value) } id="contact" placeholder="Comienza a escribir para seleccionar o crear un contacto..." className={styles.input}/>
                <label htmlFor="checki" className={styles.check}>
                    <input type="checkbox" name="" id="checki" className={styles.checki}/>
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

    //<span className={styles.pero}>%</span>
    //

}

export default Pay
