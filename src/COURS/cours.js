// Construire un composant dans react :     
    /*Étape 1 : Exporter le composant : Il permet de marquer la fonction principale dans 
    un fichier afin de pouvoir l'importer ultérieurement à partir d'autres fichiers. */

    /*Étape 2 : Définir la fonction : on définissez une fonction js  mais leur nom
    doivent commencer une lettre majuscule pour fonctionner*/

     export default function Nom_comp(){
        //Étape 3 : ajouter un balisage
        // Sans parenthèses, tout code sur les lignes suivantes return sera ignoré !
        return (
                <h1>Hello World !</h1>
        )
    }
    //Utilisation d'un composant : 
    <Nom_comp />

    /*R.Q : Les composants peuvent restituer d’autre
     composants, mais vous ne devez jamais imbriquer leurs définitions
      ,c a d je déclare un compo a l'interieur d'un com est très lent et provoque des bugs. 
      Au lieu de cela, définissez chaque composant au niveau supérieur :*/

//Exportation et l'importation  : 
    /* export default function   ....(){}    =>    import ... from 'chemin '*/
    /* export  function   ....(){}    =>    import {...} from 'chemin '*/

    /*R.Q : Les composants sans nom, comme export default () => {},
     sont déconseillés car ils rendent le débogage plus difficile*/
    

/*JSX est une extension de syntaxe pour JavaScript qui vous permet d'écrire
 un balisage de type HTML dans un fichier JavaScript. Bien qu'il existe d'autres 
 façons d'écrire des composants, la  plupart des développeurs React préfèrent la 
 concision de JSX, et la plupart des bases de code l'utilisent. */


/*exemple => Passer des props */

/*export default function Avatar(props) {
    return (
      <img src={props.p.src} alt={props.p.alt} className={props.p.className} />
    );
  }
    //App.js : 
        function App(){
            const profileProps = {src: 'https://example.com/avatar.jpg',alt: 'Avatar image',className: 'avatar'};
            return (
                <div className="card">
                    <Avatar p={{...profileProps}}/>
                </div>
        );
        }

  
*/

/* 
    IMBRIQUER DEUX COMPOSANT +>  PROPIETE CHILDREN  : 
        import Avatar from './Avatar.js';

        function Card({ children }) {
            return (
                    <div className="card">
                    {children}
                    </div>
            ;
        }

        export default function App() {
            return (
                <Card>
                    <Avatar
                        size={100}
                        person={{ 
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                        }}
                    />
                </Card>
            );
        }
Résumer:
        Pour transmettre des accessoires, ajoutez-les au JSX, comme vous le feriez avec des attributs HTML.
    Pour lire les accessoires, utilisez la function Avatar({ person, size })syntaxe de déstructuration.
    Vous pouvez spécifier une valeur par défaut comme size = 100, qui est utilisée pour les éléments manquants et undefinedles accessoires.
    Vous pouvez transmettre tous les accessoires avec <Avatar {...props} />la syntaxe de propagation JSX, mais n'en abusez pas !
    Le JSX imbriqué <Card><Avatar /></Card>apparaîtra comme un accessoire Carddu composant children.
    Les accessoires sont des instantanés en lecture seule dans le temps : chaque rendu reçoit une nouvelle version des accessoires.
    Vous ne pouvez pas modifier les accessoires. Lorsque vous avez besoin d'interactivité, vous devez définir l'état.
*/
