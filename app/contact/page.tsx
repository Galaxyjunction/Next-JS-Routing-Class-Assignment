import cssStyle from "./contact.module.css"

console.log(cssStyle,"CSS-Style")
function ContactPage(){
    return (
        <div className={cssStyle.container}>
        <h1 className={(cssStyle.title)}>This is contact page</h1>
        </div>
    )
}
export default ContactPage;



    

            
        
