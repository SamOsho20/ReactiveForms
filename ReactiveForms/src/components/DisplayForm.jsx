const DisplayForm =({peopleRegistered})=>{
    return(
        <>

        {/* MAPPING OVER OUR GETTER FOR PEOPLE  */}
        {peopleRegistered.map(({
            first_name,last_name,email}, index) =>(
                // PULLING OUT THESE SPECIFIC ATTRIBUTES FOR PEOPLE REGISTERED 
                <div key = {index}>
                    {/* WHEN DISPLAYING FROM GETTER WE ALWASY NEED A KEY VALUE  */}
                    <h2>Users</h2>
                    <p>First Name : {first_name}</p>
                    <p>Last Name : {last_name}</p>
                    <p>Email : {email}</p>   
                </div>
                )
                )}
        </>
    )
    }

export default DisplayForm