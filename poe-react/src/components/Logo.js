import "../styles/Logo.css"

function Logo() {

    //JSX
    return(
        <header>
            {/* 
                Les images affichées dans le JSX doivent se trouver dans le repertoire public
             */}
             <img id="spin" alt="" src="images/logo192.png"/>
             <h1>Formation React</h1>
        </header>
    )
}
export default Logo;