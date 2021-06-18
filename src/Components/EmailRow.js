import React from 'react'
import '../Styles/EmailRow.css';
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';


const EmailRow = ({ title, subject, description, time, id }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const openMail = () => {
        // this action i'm dispatching takes a payload... 
        // the payload passed is the props from the EmailList component...
        dispatch(selectMail({
            title, subject, description, time, id
        }))
        // the code above makes the payload data available in the SELECTOR created using the useSelector hook that allows us to pull data from the slice

        history.push('/mail')
    }

    return ( 
        <div className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>

            </div>

            <div onClick={openMail}  className="emailRow__title">
                {title}
            </div>

            <div onClick={openMail}  className="emailRow__message">
                <h4>
                    {subject} -
                    <span className="emailRow__description">
                        &nbsp; {description}
                    </span>
                </h4>
            </div>

            <div className="emailRow__time">
                {time}
            </div>
        </div>
     );
}
 
export default EmailRow;