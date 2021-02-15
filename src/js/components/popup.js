class Popup{
    
    constructor (popup_block){
        this._popup_block = popup_block;
        this._popup_block.querySelector('.popup__close').addEventListener('click',()=>{
            this.close()
        })
    }
    
    open(){
        this._popup_block.classList.add('popup_is-opened');
    }

    close(){
        this._popup_block.classList.remove('popup_is-opened');
    }

    print(){
        console.log(this._popup_block);
        
    }
}
export default Popup