import styles from "./web.module.css"

console.log(styles, "Css-Style")
const WebDevelopment=()=>{
   return (
    <div className={styles.container}><h1 className={styles.title}>
            This is web development page.
        </h1>
    </div>
   )
}
export default WebDevelopment
