import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const TopBar = () => {
  return (
		<Navbar bg="dark" variant="dark">
			<Container fluid className="justify-content-center">
				<Navbar.Brand href="#home">
					<img
					className='me-3'
						src="https://media-exp1.licdn.com/dms/image/C560BAQGCdnMOyFlTlw/company-logo_200_200/0/1571159813484?e=2147483647&v=beta&t=MI0q0nN7IYVlVz7sjfxcNVBphOpDGtCK4LEz0sMsBjI"
						alt="logo"
						width={30}
					/>
					Alternova Shop
				</Navbar.Brand>
			</Container>
		</Navbar>
  );
}

export default TopBar