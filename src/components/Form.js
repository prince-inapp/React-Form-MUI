import {useState} from 'react'
import {Button,TextField, Container } from '@mui/material';
import AlertDialog from './MUI/AlertDialog'

function Form(props){

    const [name ,setName ] = useState('');
    const [email, setEMail] = useState('');
    const [phone, setPhone] = useState('');

    function addToEmail(event){
        setEMail(event.target.value);
    }
    function addToName(event){
        setName(event.target.value);
    }
    function addToPhone(event){
        setPhone(event.target.value);
    }

    const [alertdialog, setAlertDialog] = useState(false);
    function onClickBtnHandler(event){
        event.preventDefault();
        if (name.trim().length === 0 || email.trim().length === 0 || phone.trim().length === 0){
            console.log("Empty fields");
            setAlertDialog(true);
            return
        }

        let data = {
            'name' : name,
            'email' : email,
            'phone' : phone
        }
        console.log("Passing data");
        props.addToData(data);
        setName('');
        setEMail('');
        setPhone('');
        
    }
    const onClosehandler = () => {
        setAlertDialog(false);
    }
    return (
<Container maxWidth='xs'>
        {alertdialog &&  <AlertDialog close={onClosehandler} alertDialogTitle="Empty Fileds" alertDialogDescription="Please Enter all the information" />}
        <form onSubmit={onClickBtnHandler}>
            
            <TextField  margin="dense" label='Full Name' varient='outlined'  type="text" onChange={addToName} value={name}/>
            <br/>
        
            <TextField  margin="dense" label="E-Mail" variant='outlined' type="email" onChange={addToEmail} value={email}/>
            <br/>
            
            <TextField margin="dense" label='Phone Number' varient='outlined' type="number" onChange={addToPhone} value={phone}/>
            <br/>

            <Button size="small" margin="dense" variant="contained" type="submit">
                Submit
            </Button>
            <br/>
        </form>
        </Container>
    );
}

export default Form;