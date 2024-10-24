import { endpoints } from '@/configs/urls';
import {ofetch} from 'ofetch';

const fetchProject = ofetch(endpoints.projects);

export default {fetchProject};