import React from 'react';

import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import PostJobForm from './PostJobFom';

const PostJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();

    return (
        <div>
            {/* <PostJobForm company={company}></PostJobForm>
             */}
             <PostJobForm company={company}/>
        </div>
    );
};

export default PostJobPage;