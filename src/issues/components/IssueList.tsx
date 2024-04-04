import { Issue } from '../../interfaces';
import { IssueItem } from './IssueItem';
import { FC } from 'react';

interface Props {
    issues: Issue[];
}

export const IssueList: FC<Props> = ({ issues }) => {
    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className="nav-link active">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Open</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Closed</a>
                    </li>
                </ul>
            </div>
            <div className="card-body text-dark">
                {
                    issues.map( issue => (
<<<<<<< HEAD
                        <IssueItem key={issue.id}
                        issue={issue}
=======
                        <IssueItem key={issue.id} 
>>>>>>> ede180ef9b486233107387c64e3e22aa2b3411aa
                        
                        />
                    ))
                
                }                
            </div>
        </div>
    )
}
