/*
 * SectionOne.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/19 13:38:04
 *
 * Copyright (c) 2020 Shuriken
 */

import './SectionOne.css'
import mockupsImage from '../images/screen-mockups.svg'
import communitiesIcon from '../images/icon-communities.svg'
import messagesIcon from '../images/icon-messages.svg'

import { Container, Grid, Button, Typography } from '@material-ui/core'

function SectionOne () {
	return (
		<section className="section-one">
			<Container>
				<Grid
					container
					align="center"
					justify="center"
					spacing={3}
				>
					<Grid item>
						<Typography variant="h3">
							Build The Community Your Fans Will Love
						</Typography>
					</Grid>

					<Grid item md={5}>
						<Typography variant="body1">
							Huddle re-imagines the way we build communities.
							You have a voice, but so does your audience.
							Create connections with your users as you engage
							in genuine discussion. 
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<a href="#">
							<Button 
								className="purple-btn rounded"
								variant="contained"
								size="large"
							>
								Get Started For Free
							</Button>
						</a>
					</Grid>

					<Grid item className="mockup-grid">
						<img src={mockupsImage} alt="Mockup" />
					</Grid>

					<Grid item xs={12}>
						<Grid
							container
							justify="space-around"
							align="start"
						>	
							<Grid item>
								<img
									src={communitiesIcon} 
									alt="Communities icon"
									width="30"
								/>
								<div className="stats-container">
									<Typography variant="h2">1.4k+</Typography>
									<Typography
										variant="subtitle2"
										className="grey-text"
									>
										Communities Formed
									</Typography>
								</div>
							</Grid>

							<Grid item>
								<img
									src={messagesIcon}
									alt="Messages icon"
									width="30"
								/>
								<div className="stats-container">
									<Typography variant="h2">2.7m+</Typography>
									<Typography
										variant="subtitle2"
										className="grey-text"
									>
										Messages Sent
									</Typography>
								</div>
							</Grid>

						</Grid>
					</Grid>

				</Grid>
			</Container>
		</section>		
	)
}

export default SectionOne