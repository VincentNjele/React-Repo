

function Header () {

    return(

        <nav>
        <div className="foodbag">
            <p>Food<span>Bag</span> </p>
        </div>
        <ul>
            <li>
                <a id="cart" href="#">
                 Cart
                </a>
                <a id="login" href="#">
                 Login
                </a>
                <a id="logout" href="#">
                 Sign Up
                </a>
            </li>
        </ul>
    </nav>
    
    );
}

export default Header;