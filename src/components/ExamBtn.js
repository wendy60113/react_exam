import { NavLink } from 'react-router-dom';
import './ExamBtn.css'
function ExamBtn(props) {
    return (
        <NavLink to={props.link} style={{ textDecoration: 'none' }}>
            <div className='ExamBtnBg' style={props.opstyle}>         
                    <span className='CategoryName'>{props.CategoryName}</span><br/>
                    <span className='ExamName'>{props.ExamName}</span>

            </div>
        </NavLink>
    );
  }
  
  export default ExamBtn;
  