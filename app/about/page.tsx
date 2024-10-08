import styles from "./about.module.css"

console.log(styles,"CSS-Style")
    
function AboutPage (){
return(
<div className ={styles.container}><h1 className={styles.title}>This is about page</h1>
</div>  )  }
        
export default AboutPage;