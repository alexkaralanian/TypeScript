import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const map = new CustomMap('map');

const user = new User();
map.addMarker(user);

const company = new Company();
map.addMarker(company);
