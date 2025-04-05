import React from "react";
import chanel from "../img/chanel.jpeg";
import makeup from "../img/makeup.jpeg";
import uñas from "../img/uñas.jpeg";
import zapas from "../img/zapas.jpeg";


function TarjetasProductos(){


      const items = [
        { image: chanel, title: "chanel"},
        { image: makeup, title: "makeup"},
        { image: uñas, title: "Uñas"},
        { image: zapas, title: "zapatillas"},
      ];

    return(
        <div className="container-tar-Products">
            <div className="container-products">
                <div className="container-img">
                    <img src={items.image} alt={items.title}/>
                    <span className="discount">-13%</span>
                    <div className="button-group">
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TarjetasProductos;
