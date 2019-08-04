import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<header className="navbar navbar-dark bg-dark box-shadow fixed-top">
				<div className="container d-flex justify-content-between">
					<a href="/" className="navbar-brand d-flex align-items-center">
						<strong>Sample App</strong>
					</a>
				</div>
			</header>
		)
	}
}
