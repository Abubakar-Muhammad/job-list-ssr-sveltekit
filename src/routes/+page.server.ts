import type { PageServerLoad } from './$types';
import jobs from '../data/job-listing.json' assert {type: 'json'}
import type { JobsList } from '../models'

const job_list: JobsList = jobs;

export const load = (async () => {
    return { job_list };
}) satisfies PageServerLoad;






