import { useState } from "react"

const RegistrationForm = ({setPeopleRegistered}) =>{

    // GETTER AND SETTER FOR PERSON
    const[person, setPerson] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''

    })


    // GETTER AND SETTER FOR ERRORS
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })


    // GETTERS AND SETTERS TO TELL US IF A FORM HAS BEEN SUBMITTED 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    // UPDATE PERSON FUNCTION 
    const updatePerson = e =>{
        // TAKES IN E WHICH IS AN OBJECT CONTAINING ALL OF THE USERS INPUT 
        const {name, value } = e.target
        // WE DESTRUCTURE E CALLING THE NAME WHATEVER WE HAVE ASSIGNED AS NAME FOR THE TEXT BOX 
        // AND VALUE SET TO WHATEVER THE USER INPUTS 
        setPerson(prev =>({...prev,[name]: value}))
        // WHENEVER WE ARE ADDING TO A SETTER WE ALWAYS WANT TO MAKE A COPY SO WE DONT OVERRIDE IT
        // WE CALL SET PERSONS OG VALUE prev WE THEN PASS IT AND MAKE A COPY OF IT ..prev
        // WE THEN SAY WHATEVER IS ENTERED AS NAME WILL TAKE WHATEVER IS ENTERED AS VALUE AND ADD IT TO THE LIST OF PERSON

        validatePersonAttribute(name, value)
        // WE CALL validatePersonAttribute AND PASS IT TWO VARIABLES WE ALREADY HAVE IN HERE 
    }


    // CHECKS TO SEE IF WE HAVE ANY ERRORS 
    const validatePersonAttribute = (name, value )=>{
        // WHEN WE CALL THE validatePersonAttribute FUNCTION IT WILL ALWAYS TAKE 2 VALUES
        //  THAT DETERMINES HOW OUR TERNARY OPERATOR REACTS 
        const validations= {
        first_name : value => value.length >= 2 ? true : 'input must be more than 2 characters',
        // IN THE TERNARY OPERATORS ABOVE WE PASS VALUE CHECK IF THE  VALUE LENGTH IS MORE THAN 2
        // IF THIS IS FALSE WE RETURN THE STATEMENT IF TRUE WE DO NOTHING 
        // IF IT IS TRUE TEH ATTRIBUTE FOR THIS IS SET TO TRUE 
        last_name : value => value.length >= 2 ? true : 'input must be more than 2 characters',
        email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)? true : "please enter a valid email ",
        // /^[^\s@]+@[^\s@]+\.[^\s@]+$/ IS REGEX SYNTAX TO CHECK IF AN EMAIL IS VALID 
        // SO WE TAKE THAT SYNTAX AND TEST IF VALUE FOLLOWS THAT  FORMAT 
        password : value => value.length >= 8 ? true : 'input must be more than 8 characters',
        confirm_password : value => {
            // CONFIRM PASSWORD HAS A VALUE THAT WE PASS TO USE IN OUR TERNARY OPERATOR 
            if (name == 'confirm_password'){return person.password === value? true: "passwords don't match"}
            // IF WE ENTER A CONFIRM PASSWORD AND THE VALUE FOR PASSWORD IS NOT EQUAL TO THE CONFIRM PASSWORD CURRENT VALUE 
            // RETURN FALSE AND DISPLAY THE MESSAGE "passwords don't match" OR ELSE RETURN TRUE 
            if(name == 'password') {return person.confirm_password === value ? true : "passwords don't match"}
        }
        }
        if (name == 'password'){setErrors(prev => ({...prev, ['confirm_password'] : validations ['confirm_password'] (value)}))}
        // IF THE NAME FOR THE INPUT IS PASSWORD WE CALL OUR SETTER FOR ERRORS 
        // GRAB ITS PREVIOUS CONTENT MAKE A COPY OF THAT SET ITS NAME TO confirm_password AND FIND  THE VALIDATIONS 
        // FOR confirm_password AND RETURN ITS VALUE 
        // SINCE THE NAME IS PASSWORD THIS WILL ADD ON OUR 2ND VALIDATION FOR PASSWORD AND RETURN ITS VALUE 
        // WE CALL ON confirm_password bc THAT IS WHERE passwords 2nd validation is
        setErrors(prev =>({...prev, [name]: validations [name](value)}))
        // WE CALL OUR SETTERS TO TAKE IN THE FOLLOWING 
        // WE MAKE CALL ALL THE PREVIOUS ERRORS 
        // WE MAKE A COPY OF THE PREVIOUS  ERRORS SET ITS NAME EQUAL TO THE NAME OF THE ATTRIBUTE BEING CALLED 
        // WE TELL IT TO GO INTO VALIDATIONS BY THE [NAME] AND WHEN IT FINDS IT GIVE USE THE VALUE OF IT 
        // WHETHER THAT IS AN EMPTY STRING OR A STATEMENT SAYING E ENTERED TEH WRONG INPUT 
        // WE PUT() OVER VALUE BC IT IS A FUNCTION HENCE THE => AFTER IT ABOVE
    }



    // HERE WE VALIDATE THAT THE FORM IS READY TO SUBMIT 
    const readyToSubmit = () =>{

        for (let key in errors){
        // WE MAKE A LOOP THAT TAKES ALL TEH KEYS OUT OF TEH ERRORS SUCH AS first_name, last_name and etc.
        
            if (errors[key] !==true ){
                // IF ANY VALUE IN KEY HAS AN IS EQUAL TO NOT TRUE 
                return false 
                // RETURN FALSE 
            }
        }
            return true 
    }
    


    
    const submitFunction = (e) =>{
        // e represents an object of all the users input 
        e.preventDefault()
        // WE CALL THIS EVERYTIME WE PASS e INTO A FUNCTION 

        if (!readyToSubmit() ){
            // IF READY TO SUBMIT RETURNS FALSE 
            // ALERT TEH FOLLOWING BELOW 
            alert('please fill out the form correctly')
            return
        }
        setPeopleRegistered(prev =>[...prev,person])
        // HERE WE TAKE OUR OG CONTENT THAT HAS ALL THE PEOPLE REGISTERED IN IT
        // WE MAKE A COPY OF IT AND THEN AND THE NEW PERSON 
        
        // HERE WE RESET THE INPUT BOXES TO BLANK AFTER A PERSON
        setPerson({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        })
        setHasBeenSubmitted(true)


    }

    // DISPLAYS FORM MESSAGE DEPENDING ON IF A FORM HAS BEEN SUBMITTED OR NOT 
    const formMessage = () =>{
        if (hasBeenSubmitted){
            return "Thank you for submitting a form"
        }else{
            return "Welcome, please submit a form"
        }
    }


    return(
            <form onSubmit={submitFunction}>
                {/* WHEN WE SUBMIT THIS FORM WE INTIATE THE SUBMIT HANDLER FUNCTION  */}
                {/* DISPLAYS FORM MESSAGE  */}
                <h1>{formMessage()}</h1>
                <p>{person.first_name}</p>
                {/* LABEL FOR FIRST NAME */}
                <label>First Name:
                    <input type='text' name = 'first_name' value = {person.first_name}
                    // WHAT IS INPUTED INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR FIRST NAME
                    onChange={updatePerson} /> 
                    {/* // ON CHANGING THE INPUT WE CALL OUR updatePerson function  */}
                    {errors.first_name && <p>{errors.first_name}</p>}
                    {/* IF errors.first_name has errors then display teh following  rrors.first_name*/}
                </label><br></br>

                {/* LABEL FOR LAST NAME */}
                <label>Last Name:
                    <input type='text' 
                    name = 'last_name' 
                    value = {person.last_name}
                     // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR LAST NAME
                    onChange={updatePerson}
                    />
                    {errors.last_name && <p>{errors.last_name}</p>}
                    
                </label><br></br>

                {/* LABEL FOR EMAIL */}
                <label>Email:
                    <input type='email' 
                    name='email' 
                    value={person.email}
                     // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR EMAIL
                    onChange={updatePerson}/>
                    {errors.email && <p>{errors.email}</p>}
                </label><br></br>

                {/* LABEL FOR PASSWORD  */}
                <label>Password:
                    <input type='password' 
                    name = 'password' 
                    value = {person.password}
                    // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR PASSWORD 
                    onChange={updatePerson}/>
                    {errors.email && <p>{errors.email}</p>}
                </label><br></br>

                {/* LABEL FOR CONFIRM PASSWORD  */}
                <label>Confirm Password:
                    <input type='password' 
                    name = 'confirm_password' 
                    value ={person.confirm_password}
                    // WHAT IS INPUTED  INTO THIS TEXT BOX WILL BE SAVED AS A VALUE FOR  CONFIRM PASSWORD 
                    onChange={updatePerson}/>
                    {errors.confirm_password && <p>{errors.confirm_password}</p>}
                </label><br></br>
            
                <input type="submit" value="createUser"/>
    
    
    
            </form>

    )
}

export default RegistrationForm