import React from 'react'

//^ Add Handgun Reload Page

export default function page() {
	return (
		<div id="Add-Handgun">
			<div className="title-container">
				<h1>Add Rifle Reload</h1>
			</div>

			<div className="form-container">
				<div className="form-wrapper">
					<div className="title-wrapper">
						<h2>Rifle Details</h2>
					</div>

					<div className="item-wrapper">
						<h2>User Title</h2>
						<input type="text" className="input" />
					</div>

					<div className="item-wrapper">
						<h2>Bullet Head Make</h2>
						<input type="text" className="input" />

						<h2>Bullet Head Type</h2>
						<input type="text" className="input" />

						<h2>Bullet Head weight</h2>
						<input type="text" className="input" />
					</div>

					<div className="item-wrapper">
						<h2>Powder Make</h2>
						<input type="text" className="input" />

						<h2>Powder Type</h2>
						<input type="text" className="input" />

						<h2>Powder Weight</h2>
						<input type="text" className="input" />
					</div>
					
					<div className="item-wrapper">
						<h2>Casing Make</h2>
						<input type="text" className="input" />
					</div>
					
					<div className="item-wrapper">
						<h2>Primer Make</h2>
						<input type="text" className="input" />
					</div>

					<div className="button-wrapper">
						<button>Add Reload</button>
					</div>



				</div>
			</div>
		
		</div>
	)
}
