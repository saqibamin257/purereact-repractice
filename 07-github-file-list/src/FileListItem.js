import React from 'react';
import FileIcon from './FileIcon';
import FileName from './FileName';
import Message from './Message';
import Time from './Time';
import PropTypes from 'prop-types';

const FileListItem = ( {file} ) =>{
    return(
        <tr>
            <td><FileIcon type={file.type}/></td>
            <td><FileName name={file.name}/></td>
            <td><Message text={file.latestCommit.message}/></td>
            <td><Time time={file.updated_at}/></td>
        </tr>
    );
}

FileListItem.propTypes={
    file:PropTypes.object.isRequired
}


export default FileListItem;