import cssStyle from "./service.module.css"

console.log(cssStyle,"CSS-Style")
function ServicePage(){
    return (
        <div className={cssStyle.container}>
        <h1 className={(cssStyle.title)}>This is service page</h1>
        </div>
    )
}
export default ServicePage;
