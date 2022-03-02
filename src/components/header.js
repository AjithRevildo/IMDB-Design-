import React from 'react';

const Header = (props) =>{
	return (

		<section>
			
			 <section>
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="/list">
                            <img src=" https://www.google.com/search?q=imdb+logo+png&sxsrf=APq-WBsOPLSy4M_bK_7TSUYqnsGibH1Wrw:1646220406510&tbm=isch&source=iu&ictx=1&vet=1&fir=-GU6afWT_MbKWM%252CAHEQR-OIaRWbqM%252C_%253BspYusdUF8CK4AM%252C3ISViD0kLnxbVM%252C_%253Bz4HS5GG9WEElmM%252C3ISViD0kLnxbVM%252C_%253B9OqHo-LLhCIUoM%252CWrVd8YeIoT4g8M%252C_%253BUpy9INqnbaZZvM%252C3ISViD0kLnxbVM%252C_%253BRPmKrAB3qW5mTM%252CNjGGYldooe5H1M%252C_%253BZk4IsB4AnlbvqM%252C3ISViD0kLnxbVM%252C_%253BYeWwWvrX8L3a1M%252C3ISViD0kLnxbVM%252C_%253BoOjEQzm_DPFQ5M%252CDpaoQzreS07WRM%252C_%253BQMVTAKzoSRj3NM%252C3ISViD0kLnxbVM%252C_%253BUGoNrFfprQymIM%252CTP2-Ch7s_-kS8M%252C_%253B_MH5SW62-gGQPM%252Co4iJ96pkAYqAkM%252C_%253BKc_JZpIXF8VkeM%252C3ISViD0kLnxbVM%252C_%253BFpL8-KJi406qRM%252C6zJYQml_NlLtXM%252C_&usg=AI4_-kQlExGpfHympFUs-3xGsmjGlm4lOQ&sa=X&ved=2ahUKEwiS77T0qKf2AhXqUGwGHW9eDggQ9QF6BAgdEAE#imgrc=RPmKrAB3qW5mTM" width="50" height="37">
</img>

							</a>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							
							<ul className="nav navbar-nav navbar-right">
								<li><span className="loggedInUser">{props.user.email}</span></li>
								<li><a onClick={props.isLogout}>Logout</a></li>
							</ul>
						</div>
					</div>
				</nav> 
			</section>
		</section>
	);
}
export default Header;
