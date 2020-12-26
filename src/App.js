import React from "react";
import contacts from "./contacts";
import Card from "./components/Card";

const App = () => {

    return (

        <div>
           <h1>My Contacts</h1> 
           { contacts.map((contact) => {
               return ( 
                    <Card 
                        name={contact.name}
                        img={contact.imgURL}
                        phone={contact.phone}
                        email={contact.email}
                    />

               );
           })  }
        </div>
    );


    
}

export default App;