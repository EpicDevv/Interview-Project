import {data} from '../../../data/availableHotels';
export default function handler(req, res) {
res.status(200).json(data);

}