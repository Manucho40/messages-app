import axios from "axios";
import { useEffect, useState } from "react";
import { Message } from "../types";


const DisplayMessage= () => {
    const [message, setMessage] = useState<Message>({
        id: 0,
        attributes: {
          auteur: "",
          texte: "",
        }
      });
    useEffect(() => {
        const API: string | undefined = process.env.REACT_APP_REMOTE_API_URL;
          if(API){
              axios.get(API).then(
              (res) => setMessage(res.data)
              
            );
          }else{
            console.log("Le composant n'est pas encore monté!")
          }
          console.log("fgghdghjh")

      }, [])
    return ( 
        <>
            <h1 className="titre text-center m-6 text-4xl">TEXT DU JOUR</h1>
            <div className=" h-3/6 flex items-center justify-center">
                <div className="flex justify-center items-center">
                    <p className="message text-center text-8xl">{message.attributes.texte}</p>
                </div>
            </div>
        </>
     );
}
 
export default DisplayMessage;