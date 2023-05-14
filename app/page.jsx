import React from 'react'
import Link from 'next/link'

//^ The first Page the User sees

export default function Home() {
	return (
		<div id="Home-Page">
		
			<div className="test-container">
				<h1>Welcone to GOOSE_RELEADED</h1>
			</div>

			<Link href="/auth/Login/">
				Login
			</Link>

			<Link href="/auth/Signup/">
				Sign Up
			</Link>

		</div>
	)
}
