import {data} from '../../../data/venetian';
export default function handler(req, res) {
res.status(200).json(data);

}