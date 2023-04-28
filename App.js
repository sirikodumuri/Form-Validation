import logo from './logo.svg';
import {useFormik} from "formik"

function App() {
 const myformik = useFormik({
       initialValues: {
        myusername:"",
        myemail:"",
        mypassword:""
       },
       validate: function(info) {
        let errors= {}

        if(!info.myusername)
        {
          errors.error1 = "Username Required"
        }
        if(!info.myemail)
        {
          errors.error2 = "Email Required"
        }
        if(!info.mypassword)
        {
          errors.error3 = "Password Required"
        }
        if(info.mypassword.length < 5 || info.mypassword.length > 20)
        {
          errors.error4 = "Password should be min 5 and max 20"
        }
          return errors
       }
})

  return (
    <div> 
      <form>
      Enter UserName:<input type="text" name="myusername" value={myformik.values.myusername} onChange={myformik.handleChange} /><br/><br/>
      {myformik.errors.error1 ? myformik.errors.error1 : null}<br/><br/>

      Enter Email:<input type="text" name="myemail" value={myformik.values.myemail} onChange={myformik.handleChange} /><br/><br/>
      {myformik.errors.error2 ? myformik.errors.error2 : null}<br/><br/>

      Enter Password:<input type="text" name="mypassword" value={myformik.values.mypassword} onChange={myformik.handleChange}/><br/><br/>
      {myformik.errors.error3 ? myformik.errors.error3 : null}<br/><br/>
      {myformik.errors.error4 ? myformik.errors.error4 : null}

      <input type="submit" value="Submit"/>

      </form>
    </div>
  );
}

export default App;
