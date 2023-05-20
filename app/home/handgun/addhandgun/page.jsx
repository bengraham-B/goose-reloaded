"use client"
import React, { useState } from 'react'

//^ Add Handgun Reload Page

export default function page() {
	const pageTitle = "Handgun"

	const [userTitle, setUserTitle] = useState()

	const [bulletHeadMake, setBulletHeadMake] = useState()
	const [bulletHeadType, setBulletHeadType] = useState()
	const [bulletWeight, setBulletHeadWeight] = useState()

	const [powderMake, setPowderMake] = useState()
	const [powderType, setPowderType] = useState()
	const [powderWeight, setPowderWeight] = useState()

	const [casingMake, setCasingMake] = useState()
	const [primerMake, setPrimerMake] = useState()

	//^ This is the function when clicked will send all the data stored in the state variables to the server
	const handleHandgunSubmit = async () => {
		const response = fetch('http://localhost:8001/api/reload', {
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

		const data = response.json()
		console.log(data)
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
						<input type="text" className="input" onChange={() => setUserTitle(e.target.value)} />
					</div>

					<div className="item-wrapper">
						<h2>Bullet Head Make</h2>
						<input type="text" className="input" onChange={() => setBulletHeadMake(e.target.value)} />

						<h2>Bullet Head Type</h2>
						<input type="text" className="input" onChange={() => setBulletHeadType(e.target.value)} />

						<h2>Bullet Head weight</h2>
						<input type="text" className="input"onChange={() => setBulletHeadWeight(e.target.value)} />
					</div>

					<div className="item-wrapper">
						<h2>Powder Make</h2>
						<input type="text" className="input" onChange={() => setPowderMake(e.target.value)} />

						<h2>Powder Type</h2>
						<input type="text" className="input" onChange={() => setPowderType(e.target.value)} />

						<h2>Powder Weight</h2>
						<input type="text" className="input" onChange={() => setPowderWeight(e.target.value)} />
					</div>
					
					<div className="item-wrapper">
						<h2>Casing Make</h2>
						<input type="text" className="input" onChange={() => setCasingMake(e.target.value)} />
					</div>
					
					<div className="item-wrapper">
						<h2>Primer Make</h2>
						<input type="text" className="input" onChange={() => setPrimerMake(e.target.value)} />
					</div>

					<div className="button-wrapper">
						<button onClick={handleHandgunSubmit}>Add Reload</button>
					</div>



				</div>
			</div>
		
		</div>
	)
}
