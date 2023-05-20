"use client"
import React from 'react'
import Link from 'next/link'
//^  --- Home Page  ---

//^ Components 




export default function page() {
  return (
    <div id="HomePage">
		<div className="header">Home</div>

		<dvi className="comp-container">
			<div className="wrapper">

				<div className="container">
					<h3>Total Reloads</h3>
					<p>{15} Reloads</p>
				</div>

				<div className="container">
					<h3>Handgun</h3>
					<button>
						<Link href="/home/handgun">Add Reload</Link>
					</button>
				</div>

				<div className="container">
					<h3>Rifle</h3>
					<button>
						<Link href="/home/handgun">Add Reload</Link>
					</button>
				</div>

				<div className="container">
					<h3>Shotgun</h3>
					<button>
						<Link href="/home/handgun">Add Reload</Link>
					</button>
				</div>

			</div>
		</dvi>
    </div>
  )
}
