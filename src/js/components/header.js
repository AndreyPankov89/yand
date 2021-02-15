import Popup from './popup'

class Header{
    constructor(color=""){
        this._color = color;
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
            const popupBlock = document.querySelector('.popup')
            const popup = new Popup(popupBlock);
            header.querySelector('.header__auth').addEventListener('click',()=>{
                popup.open();
            })
        }
    }
}
export default Header;