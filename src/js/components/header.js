

class Header{
    constructor(popup=null,color=""){
        this._color = color;
        this._popup = popup
    }
    render(props){
        const {isLoggedIn, userName} = props;
        const header = document.querySelector('.header');
        if (this._color){
            header.classList.add(this._color);
        }
        if (isLoggedIn){
            header.querySelector('.header__auth-name').innerHTML = userName;
        }
        else{
            header.querySelector('.header__auth-name').innerHTML = "Авторизоваться";
            header.querySelector('.header__logout-icon').style.display = "none";
            
            header.querySelector('.header__auth').addEventListener('click',()=>{
                this._popup.open();
            })
        }
    }
}
export default Header;