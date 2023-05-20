"use client"
import React from 'react'
import Link from 'next/link'

//^ Handgun Page

export default function Handgun() {
	return (
		<div id="Handgun">
			
			<div className="title-container">
				<h1>Handgun Page</h1>
			</div>

			<div className="link-container">
				<Link href="/home/handgun/addhandgun">
					<h2>Add Reload</h2>
				</Link>
			</div>
		</div>
	)
}
