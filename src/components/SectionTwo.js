/*
 * SectionTwo.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/19 16:48:43
 *
 * Copyright (c) 2020 Shuriken
 */

import './SectionTwo.css'
import imgOne from '../images/illustration-grow-together.svg'
import imgTwo from '../images/illustration-flowing-conversation.svg'
import imgThree from '../images/illustration-your-users.svg'

import { Button, Grid, Typography } from '@material-ui/core'


function SectionTwo () {

	const illustrations = [
		{
			title: 'Grow Together',
			direction: 'row',
			p: `
				Generate meaningful discussions with your audience and
				build a strong, loyal community. Think of the insightful 
				conversations you miss out on with a feedback form.
			`,
			img: {
				src: imgOne,
				alt: 'Illustration Grow Together'
			}
	
		},
		{
			title: 'Flowing Conversations',
			direction: 'row-reverse',
			p: `
				You wouldn't paginate a conversation in real life,
				so why do it online? Our threads have just-in-time
				loading for a more natural flow. 
			`,
			img: {
				src: imgTwo,
				alt: 'Illustration Flowing Conversation'
			}
	
		},
		{
			title: 'Your Users',
			direction: 'row',
			p: `
				It takes no time at all to integrate Huddle with your
				app's authentication solution. This means, once signed
				in to your app, your users can start chatting immediately.
			`,
			img: {
				src: imgThree,
				alt: 'Illustration Your Users'
			}
	
		}
	]

	return (
		<section className="section-two">
			<Grid
				container
				align="center"
				justify="center"
			>

				{illustrations.map((item, idx) => (
						<Grid
							className="illustration-container"
							key={idx} 
							item 
							xs={10} md={12} 
						>
							<Grid
								container
								justify="space-around"
								alignItems="center"
								direction={item.direction}
								className="illustration mb-10"
							>
								<Grid item md={4}>
									<Typography variant="h4">
										{item.title}
									</Typography>
									<Typography variant="body1">
										{item.p}
									</Typography>
								</Grid>
								<Grid item md={4}>
									<img
										className="img-item"
										src={item.img.src}
										alt={item.img.alt}
									/>
								</Grid>
							</Grid>
						</Grid>				
				))}

				<Grid item className="mb-10">
					<Typography variant="h4">
						Ready To Build Your Community?
					</Typography>

					<a href="#">
							<Button 
								className="purple-btn rounded my-1"
								variant="contained"
								size="large"
							>
								Get Started For Free
							</Button>
					</a>
					
				</Grid>

			</Grid>
		</section>
	)
}

export default SectionTwo


