import React from 'react'
import Link from 'next/link'

export default function SideBar() {
	return (
		<div id="SideBar">

			<div className="body">

				<div className="title">
					<h1>SideBar</h1>
				</div>

				<div className="options-container">

					<div className="option-wrapper">
						<Link href="/home">Home</Link>
					</div>

					<div className="option-wrapper">
						<Link href="/reload">Handgun</Link>
					</div>

					<div className="option-wrapper">
						<Link href="/shoots">Rilfe</Link>
					</div>
					
					<div className="option-wrapper">
						<Link href="/shoots">Shotgun</Link>
					</div>
					
					<div className="option-wrapper">
						<Link href="/shoots">Shoots</Link>
					</div>

				</div>


			</div>
		</div>
	)
}
