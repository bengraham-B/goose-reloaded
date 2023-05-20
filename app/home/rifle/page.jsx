"use client"
import React from 'react'
import Link from 'next/link'

//^ Handgun Page

export default function Handgun() {
	return (
		<div id="Handgun">
			
			<div className="title-container">
				<h1>Rifle Page</h1>
			</div>

			<div className="link-container">
				<Link href="/home/rifle/addrifle">
					<h2>Add Reload</h2>
				</Link>
			</div>
		</div>
	)
}
