"use client"
import React, { useState } from 'react'

//^ Add Handgun Reload Page

export default function page() {
	const pageTitle = "Handgun"

	const [userTitle, setUserTitle] = useState("test")

	const [bulletHeadMake, setBulletHeadMake] = useState("test")
	const [bulletHeadType, setBulletHeadType] = useState("test")
	const [bulletWeight, setBulletHeadWeight] = useState("test")

	const [powderMake, setPowderMake] = useState("test")
	const [powderType, setPowderType] = useState("test")
	const [powderWeight, setPowderWeight] = useState("test")

	const [casingMake, setCasingMake] = useState("test")
	const [primerMake, setPrimerMake] = useState("test")

	//^ This is the function when clicked will send all the data stored in the state variables to the server
	const handleHandgunSubmit = async () => {
		console.log("Pre post")
		const response = await fetch('http://192.168.101.48:8001/api/reload', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_title: userTitle,

				bullet_head_make: bulletHeadMake,
				bullet_head_type: bulletHeadType,
				bullet_weight: bulletWeight,

				powder_make: powderMake,
				powder_type: powderType,
				powder_weight: powderWeight,

				casing_make: casingMake,

				primer_make: primerMake,
			})
		})

		const data = await response.json()
		console.log(data)
		console.log("Post POST")
	}

	




	return (
		<div id="Add-Handgun">
			<div className="title-container">
				<h1>Add Handgun Reload</h1>
			</div>

			<div className="form-container">
				<div className="form-wrapper">
					<div className="title-wrapper">
						<h2>{pageTitle} Details</h2>
					</div>

					<div className="item-wrapper">
						<h2>User Title</h2>
						<input type="text" className="input" onChange={(e) => setUserTitle(e.target.value)} />
					</div>

					<div className="item-wrapper">
						<h2>Bullet Head Make</h2>
						<input type="text" className="input" onChange={(e) => setBulletHeadMake(e.target.value)} />

						<h2>Bullet Head Type</h2>
						<input type="text" className="input" onChange={(e) => setBulletHeadType(e.target.value)} />

						<h2>Bullet Head weight</h2>
						<input type="text" className="input"onChange={(e) => setBulletHeadWeight(e.target.value)} />
					</div>

					<div className="item-wrapper">
						<h2>Powder Make</h2>
						<input type="text" className="input" onChange={(e) => setPowderMake(e.target.value)} />

						<h2>Powder Type</h2>
						<input type="text" className="input" onChange={(e) => setPowderType(e.target.value)} />

						<h2>Powder Weight</h2>
						<input type="text" className="input" onChange={(e) => setPowderWeight(e.target.value)} />
					</div>
					
					<div className="item-wrapper">
						<h2>Casing Make</h2>
						<input type="text" className="input" onChange={(e) => setCasingMake(e.target.value)} />
					</div>
					
					<div className="item-wrapper">
						<h2>Primer Make</h2>
						<input type="text" className="input" onChange={(e) => setPrimerMake(e.target.value)} />
					</div>

					<div className="button-wrapper">
						<button onClick={handleHandgunSubmit}>Add Reload</button>
					</div>



				</div>
			</div>
		
		</div>
	)
}
