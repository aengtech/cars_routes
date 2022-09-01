import express from 'express';

import { getItems, getItem, createItem} from '../controllers/item.js';

const router = express.Router();

router.get('/', getItems);

router.get('/:id', getItem);
router.post('/ceate/post', createItem); 

export default router;