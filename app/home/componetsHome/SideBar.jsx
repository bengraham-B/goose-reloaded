import React from 'react'
import Link from 'next/link'

export default function SideBar() {
	return (
		<div id="SideBar">

			<div className="body">

				<div className="title">
					<h2>GOOSE_RELOADED</h2>
				</div>

				<div className="options-container">

					<div className="option-wrapper">
						<Link href="/home">
							<div className='box-wrapper'>
								<h3>Home</h3>
							</div>
						</Link>
					</div>

					<div className="option-wrapper">
						<Link href="/home/handgun">
							<div className='box-wrapper'>
								<h3>Handgun</h3>
							</div>
						</Link>
					</div>

					<div className="option-wrapper">
						<Link href="/home/rifle">
							<div className='box-wrapper'>
								<h3>Rifle</h3>
							</div>
						</Link>
					</div>
					
					<div className="option-wrapper">
						<Link href="/home/shotgun">
							<div className='box-wrapper'>
								<h3>Shotgun</h3>
							</div>
						</Link>
					</div>
					
					<div className="option-wrapper">
						<Link href="/home/rifle">
							<div className='box-wrapper'>
								<h3>Shoots</h3>
							</div>
						</Link>
					</div>

				</div>


			</div>
		</div>
	)
}
