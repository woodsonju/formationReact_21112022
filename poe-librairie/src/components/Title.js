
const Title = ({name}) => {
    return (
        <div>
            <header>
                {
                    (name) ? 
                    <h1>Librairie de {name}</h1>
                    :
                    <h1>Ma Librairie</h1>
                }
            </header>
        </div>
    );
};

export default Title;