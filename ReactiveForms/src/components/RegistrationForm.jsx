import { useState } from "react"

const RegistrationForm = (setpeopleRegistred) =>{

    // GETTER AND SETTER FOR PERSON
    const[person, Setperson] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confrim_password: ''

    })


    // GETTER AND SETTER FOR ERRORS
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confrim_password: ''
    })

    // UPDATE PERSON FUNCTION 
    const updatePerson = e =>{
        // TAKES IN E WHICH IS AN OBJECT CONTAINING ALL OF THE USERS INPUT 
        const {name, value } = e.target
        // WE DESTRUCTURE E CALLING THE NAME WHATEVER WE HAVE ASSIGNED AS NAME FOR THE TEXT BOX 
        // AND VALUE SET TO WHATEVER THE USER INPUTS 
        Setperson(prev =>({...prev,[name]: value}))
        // WHENEVER WE ARE ADDING TO A SETTER WE ALWAYS WANT TO MAKE A COPY SO WE DONT OVERRIDE IT
        // WE CALL SET PERSONS OG VALUE prev WE THEN PASS IT AND MAKE A COPY OF IT ..prev
        // WE THEN SAY WHATEVER IS ENTERED AS NAME WILL TAKE WHATEVER IS ENTERED AS VALUE AND ADD IT TO THE LIST OF PERSON

        validatePersonAttribute[name, value]
    }


    // CHECKS TO SEE IF WE HAVE ANY ERRORS 
    const validatePersonAttribute = (name, value )=>{
        const validations= {
        first_name : value => value.length >= 2 ? '': 'input must be more than 2 characters',
        last_name : value => value.length >= 2 ? '': 'input must be more than 2 characters',
        email : value => value.length >= 2 ? '': 'input must be more than 2 characters',
        password : value => value.length >= 2 ? '': 'input must be more than 2 characters',
        confrim_password : value => value.length >= 2 ? '': 'input must be more than 2 characters'
        }
        setErrors(prev =>({...prev, [name]: validations [name](value)}))
    }


    
    const submitHandler = (e) =>{
        // e represents an object of all teh users input 
        e.preventDefault()
        // WE CALL THSI EVERYTIME WE PASS e INTO A FUNCTION 
        return


    }


    return(
            <form onSubmit={submitHandler}>
                {/* WHEN WE SUBMIT THIS FORM WE INTIATE THE SUBMIT HANDLER FUNCTION  */}
                <p>{person.confirm_password}</p>
                {/* LABEL FOR FIRST NAME */}
                <label>First Name:
                    <input type='text' value = {person.first_name}
                    // WHAT IS INPUTED INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR FIRST NAME
                    onChange={updatePerson}
                    // ON CHANGING THE INPUT WE CALL OUR updatePerson function 

                    
                    /> 
                    {errors.first_Name && <p>{errors.first_name}</p>}
                </label><br></br>

                {/* LABEL FOR LAST NAME */}
                <label>Last Name:
                    <input type='text' value = {person.last_name}
                     // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR LAST NAME
                    onChange={updatePerson}
                    />
                    
                </label><br></br>

                {/* LABEL FOR EMAIL */}
                <label>Email:
                    <input type='Email' value  = {person.email}
                     // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR EMAIL
                    onChange={updatePerson}/>
                </label><br></br>

                {/* LABEL FOR PASSWORD  */}
                <label>Password:
                    <input type='password' value = {person.password}
                    // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR PASSWORD 
                    onChange={updatePerson}/>
                </label><br></br>

                {/* LABEL FOR CONFIRM PASSWORD  */}
                <label>Confirm Password:
                    <input type='password' value = {person.confirm_password}
                    // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR  CONFIRM PASSWORD 
                    onChange={updatePerson}/>
                </label><br></br>
            
                <button>Submit</button>
    
    
    
            </form>

    )
}

export default RegistrationForm