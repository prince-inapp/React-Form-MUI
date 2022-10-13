import {ListItemButton, ListItemText, List, Container} from '@mui/material'

function Users(props){
    return (
        <ul>
            {props.userList.map((user) => {
                    return (
                        <Container maxWidth='xs'>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItemButton component="" >
                                <ListItemText primary= { `Name:${user.name} Email:${user.email} Phone:${user.phone}` } />
                            </ListItemButton>
                        </List>
                        </Container>
                )
            })}
        </ul>
    )
}

export default Users;