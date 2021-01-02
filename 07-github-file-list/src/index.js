import React from 'react';
import ReactDOM from 'react-dom';
import { testFiles } from './static-data';
import FileListItem from './FileListItem';
import PropTypes from 'prop-types';

const FileList = ({ItemsList}) => {
    return(    
    <table>
        <tbody>
            {
                ItemsList.map( (itemsFile) => (
                     <FileListItem file={itemsFile} key={itemsFile.id} />
                ))
            }
        </tbody>
    </table>
    );
}

FileList.propTypes={
    ItemsList:PropTypes.array.isRequired
}

ReactDOM.render(
    <FileList ItemsList={testFiles} />,
    document.getElementById("root")
);