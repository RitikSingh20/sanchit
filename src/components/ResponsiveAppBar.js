import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Avatar } from '@mui/material';
import { NavLink } from 'react-bootstrap';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
 
function BrandExample() {
  return (
    <>
       
      
      <Navbar bg="light" variant="transparent">
        <Container>
          
          <Navbar.Brand href="#home">
         <h5 style={{color:"black"}}> Coral App</h5> 

         </Navbar.Brand>
          <Navbar.Brand style={{display:"flex",flexDirection:"row"}}>
       
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h6 style={{color:"black",margin:"auto",marginLeft:"7px"}}>My Account</h6> 
          <Dropdown style={{margin:"auto"}}> 
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        
      </Dropdown.Toggle>

     
    </Dropdown>
          
          </Navbar.Brand>
         
 
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;