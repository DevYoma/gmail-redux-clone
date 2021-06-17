import React from 'react'
import '../Styles/EmailRow.css';
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';


const EmailRow = ({ title, subject, description, time, id }) => {
    const history = useHistory()

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

            <div onClick={() => history.push('/mail')}  className="emailRow__title">
                {title}
            </div>

            <div onClick={() => history.push('/mail')}  className="emailRow__message">
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