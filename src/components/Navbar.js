const NavBar = (props) => {
    return(
        <div className = 'navbar'>
            <img src = {props.logo} alt = 'TaskStack Logo' className = 'taskstack-logo' />
			<button className = 'taskstack-login'>log in | sign up</button>
        </div>
    );
}


export default NavBar;