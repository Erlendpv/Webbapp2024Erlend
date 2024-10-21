import { endpoints } from '@/Configs/urls';
import {ofetch} from 'ofetch';

const fetch = ofetch(endpoints.projects);

export default {fetch};