

import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
	return (
		<nav>
			<Link to ='/'>
				LISTE
			</Link>

			<Link to ='/StateAnim'>
				STATE
			</Link>

			<Link to ='/Scroll'>
				SCROLL
			</Link>
		</nav>
	)
}
