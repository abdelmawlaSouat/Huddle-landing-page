/*
 * Footer.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/19 19:35:08
 *
 * Copyright (c) 2020 Shuriken
 */


import './Footer.css'
import logo from '../images/logo.svg'
import { Button, Grid, Typography } from '@material-ui/core'

import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

function Footer () {
	return (
		<footer>
			<Grid
				container
				className="footer-container"
				justify="space-around"
				spacing={10}
			>
				<Grid item md={3}>
					<Grid container direction="column" spacing={2} >
						<Grid item>
							<img className="logo-footer" src={logo} alt="Logo" />
						</Grid>
						<Grid item>
							<Typography variant="body2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Mauris nulla quam, hendrerit lacinia vestibulum a,
								ultrices quis sem.
							</Typography>
						</Grid>
						<Grid item>
							<Grid container alignItems="center">
								<PhoneInTalkIcon className="icon" />
								<Typography variant="caption" >
									Phone: +1-543-123-4567
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container alignItems="center">
								<EmailIcon className="icon" />
								<Typography variant="caption" >
									example@huddle.com
								</Typography>
							</Grid>
						</Grid>

						<Grid item md={12} className="social-medias">
							<Grid container spacing={1}>
								<Grid item>
									<a href="#">
										<FacebookIcon />
									</a>
								</Grid>
								<Grid item>
									<a href="#">
										<InstagramIcon />
									</a>
								</Grid>
								<Grid item>
									<a href="#">
										<TwitterIcon />
									</a>
								</Grid>
							</Grid>
						</Grid>

					</Grid>
				</Grid>

				<Grid item  md={3}>
					<Grid container spacing={2}>
						
						<Grid item>
							<Typography variant="h5">Newsletter</Typography>
						</Grid>

						<Grid item>
							<Typography variant="body2">
								To recieve tips on how to grow your community, sign up to our 
								weekly newsletter. We’ll never send you spam or pass on 
								your email address
							</Typography>
						</Grid>
						<Grid item>
							<input className="input-footer" />
							<Button
								className="purple-btn rounded"
								variant="contained"
							>
								Subscribe
							</Button>
						</Grid>
					</Grid>
					
				</Grid>

			</Grid>
		</footer>
	)
}

export default Footer