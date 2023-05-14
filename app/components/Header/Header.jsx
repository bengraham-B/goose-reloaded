import React from 'react'
import Link from 'next/link'

export default function Header() {
  	return (
		<div id="Header">
			<div className="title-contaier container">
				<h1>GOOSE_RELOADED</h1>
			</div>

			<div className="nav-container container">

				<Link href="/">
					<h3>Home</h3>
				</Link>
				<h3>Reloading</h3>
				<h3>Shoots</h3>


			</div>
		</div>
  	)
}
