class Form{
    constructor(formSelector){
        this._form = document.querySelector(formSelector);
        this._inputs = this._form.querySelectorAll('input');
    }

    _validateInputElement(input){
        const text = input.value;
        switch (input.type){
            case "email":{
                let re = /\S+@\S+\.\S+/;
                return re.test(text);
            }
            case "password":{
                return (text.length < 8)
                
            }
            case "text":{
                return (text.length>1 && text.length<30)
            }
            default:{
                return false
            }
        }
    }
    _validateForm(){
        let isFormValid = true;
        this._inputs.forEach((input)=>{
            isFormValid = isFormValid && this._validateInputElement(input);
        });
        this._form.querySelector('.form__button').disabled = isFormValid;
    }
    _clear(){
        this._inputs.forEach((input)=>{
            input.value='';
        });
    }
    _getInfo(){
        const info = {};
        this._inputs.forEach((input)=>{
            info[input.name] = input.value;
        });
        return info;
    }
}

export default Form;