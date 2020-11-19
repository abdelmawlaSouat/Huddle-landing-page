/*
 * Navbar.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/19 12:00:51
 *
 * Copyright (c) 2020 Shuriken
 */

import './Navbar.css'
import logo from '../images/logo.svg'
import { Grid, Button } from '@material-ui/core'

function Navbar (props) {
	return (
			<Grid container justify="space-between">
				<img src={logo}  alt='Huddle Logo' />
				<a href="#">
					<Button
						variant="outlined"
						className="btn white-btn rounded"
					>
						Try it free
					</Button>
				</a>
			</Grid>
	)
}

export default Navbar
