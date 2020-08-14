import { resetplan, submitForm } from './js/submitForm'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

//Click eventListener
document.querySelector(".submit-plan").addEventListener("click", submitForm);

//click event to handel reset fun
document.querySelector(".resetPlan").addEventListener('click',function(e){
    e.preventDefault();
    resetplan();
 });

export { resetplan, submitForm }