import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default  function ListeMateriel(props){
        return (
            <>
                <h2>Récapitulatif des informations : </h2>
                <ul>
                    {props.liste.map(
                        (item)=>(

                            <div>
                                <li>{item.code}</li>
                                <li>{item.m}</li>
                                <li>{item.date}</li>
                                <li>{item.catego}</li>
                            </div>
                        )
                    )}
                </ul>
            </>
        )
}